import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin, Calendar, Facebook, Instagram, Youtube } from "lucide-react";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { useLocation } from "@/hooks/useLocation";
import { LazyServiceAreaMap } from "@/components/LazyServiceAreaMap";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Please enter a valid email address").max(255, "Email must be less than 255 characters"),
  phone: z.string().trim().min(10, "Please enter a valid phone number").max(20, "Phone number is too long"),
  weddingDate: z.string().optional(),
  venue: z.string().trim().max(200, "Venue name is too long").optional(),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(1000, "Message must be less than 1000 characters"),
});

type ContactForm = z.infer<typeof contactSchema>;

export const ContactSection = () => {
  const { toast } = useToast();
  const location = useLocation();
  const [formData, setFormData] = useState<ContactForm>({
    name: "",
    email: "",
    phone: "",
    weddingDate: "",
    venue: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof ContactForm, string>>>({});
  const [showThankYou, setShowThankYou] = useState(false);

  const handleInputChange = (field: keyof ContactForm, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    try {
      contactSchema.parse(formData);
      setErrors({});
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Partial<Record<keyof ContactForm, string>> = {};
        error.issues.forEach((issue) => {
          if (issue.path[0]) {
            newErrors[issue.path[0] as keyof ContactForm] = issue.message;
          }
        });
        setErrors(newErrors);
      }
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast({
        title: "Please fix the errors",
        description: "Check your form for any validation errors.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke('send-quote-email', {
        body: {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          weddingDate: formData.weddingDate,
          venue: formData.venue,
          message: formData.message,
        },
      });

      if (error) throw error;

      setShowThankYou(true);
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        weddingDate: "",
        venue: "",
        message: "",
      });
    } catch (error) {
      console.error('Error submitting quote:', error);
      toast({
        title: "Something went wrong",
        description: "Please try contacting us directly via phone or email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "(704) 750-5858",
      href: "tel:7047505858"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email", 
      value: "info@bigdaystory.com",
      href: "mailto:info@bigdaystory.com"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Service Area",
      value: `${location.city}, ${location.state}`,
      href: null
    },
    {
      icon: <Calendar className="w-5 h-5" />,
      label: "Response Time",
      value: "Within 24 hours",
      href: null
    }
  ];

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: "https://www.facebook.com/bigdaystorycarolinas", label: "Facebook" },
    { icon: <Instagram className="w-5 h-5" />, href: "https://www.instagram.com/bigdaystorycarolinas", label: "Instagram" },
    { icon: <Youtube className="w-5 h-5" />, href: "https://www.youtube.com/@bigdaystorycarolinas", label: "YouTube" }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Let's Capture Your
            <span className="block text-primary">Perfect Wedding Day</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Ready to book your {location.city} wedding photographer? Contact us today for a free consultation 
            and let's discuss how we can tell your unique love story.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="shadow-elegant border-0 bg-gradient-elegant">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-center">Get Your Free Quote</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      placeholder="John & Jane Doe"
                      className={errors.name ? "border-destructive" : ""}
                      required
                    />
                    {errors.name && <p className="text-destructive text-sm mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      placeholder="(704) 555-0123"
                      className={errors.phone ? "border-destructive" : ""}
                      required
                    />
                    {errors.phone && <p className="text-destructive text-sm mt-1">{errors.phone}</p>}
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="your.email@example.com"
                    className={errors.email ? "border-destructive" : ""}
                    required
                  />
                  {errors.email && <p className="text-destructive text-sm mt-1">{errors.email}</p>}
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="weddingDate">Wedding Date</Label>
                    <Input
                      id="weddingDate"
                      type="date"
                      value={formData.weddingDate}
                      onChange={(e) => handleInputChange('weddingDate', e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="venue">Venue</Label>
                    <Input
                      id="venue"
                      type="text"
                      value={formData.venue}
                      onChange={(e) => handleInputChange('venue', e.target.value)}
                      placeholder="Wedding venue name"
                      className={errors.venue ? "border-destructive" : ""}
                    />
                    {errors.venue && <p className="text-destructive text-sm mt-1">{errors.venue}</p>}
                  </div>
                </div>

                <div>
                  <Label htmlFor="message">Tell us about your wedding *</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    placeholder="Tell us about your wedding vision, style preferences, and any specific requests..."
                    rows={4}
                    className={errors.message ? "border-destructive" : ""}
                    required
                  />
                  {errors.message && <p className="text-destructive text-sm mt-1">{errors.message}</p>}
                </div>

                <Button 
                  type="submit" 
                  variant="wedding" 
                  size="lg" 
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Get Your Free Quote"}
                </Button>
                
                <p className="text-xs text-muted-foreground text-center">
                  By submitting, you agree to be contacted via email or phone about your wedding photography needs.
                </p>
              </form>
            </CardContent>
          </Card>

          {/* Service Area Map */}
          <div className="space-y-8">
            <LazyServiceAreaMap location={location} />

            {/* Social Media */}
            <Card className="shadow-soft border-0 bg-card/80 backdrop-blur-sm">
              <CardContent className="pt-6">
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-primary-soft text-primary hover:bg-primary hover:text-primary-foreground transition-smooth"
                      aria-label={social.label}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  See our latest wedding photography and behind-the-scenes content on social media.
                </p>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <div className="space-y-4">
              <Button 
                variant="gold" 
                size="lg" 
                className="w-full"
                onClick={() => window.open('https://bigdaystorycarolinas.hbportal.co/schedule/6724cbd3d0d6fe002ba5fc2e', '_blank')}
              >
                <Calendar className="w-5 h-5 mr-2" />
                Schedule Free Consultation
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full"
                onClick={() => window.open('https://www.zola.com/wedding-vendors/wedding-photographers/big-day-story-carolinas--2', '_blank')}
              >
                View Our Zola Profile
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Thank You Dialog */}
      <AlertDialog open={showThankYou} onOpenChange={setShowThankYou}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Thank You for Your Interest! 🎉</AlertDialogTitle>
            <AlertDialogDescription>
              We've received your quote request and will get back to you within 24 hours. 
              We're excited to learn more about your wedding day and how we can capture your special moments!
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction>Close</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </section>
  );
};