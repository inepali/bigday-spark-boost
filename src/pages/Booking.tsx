import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Calendar, MapPin, Phone, Mail, Heart, Camera, Video } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Helmet } from "react-helmet-async";
import { supabase } from "@/integrations/supabase/client";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

export default function Booking() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [formData, setFormData] = useState({
    coupleNames: "",
    email: "",
    phone: "",
    weddingDate: "",
    venue: "",
    packageType: "",
    addOns: [] as string[],
    guestCount: "",
    message: "",
    hearAboutUs: ""
  });

  const packages = [
    { value: "diamond", label: "DIAMOND Special - $1,500 (Bundle) / $1,000 (Photo or Video Only)" },
    { value: "gold", label: "GOLD Special - $2,300 (Bundle) / $1,400 (Photo or Video Only)" },
    { value: "platinum", label: "PLATINUM Special - $2,900 (Bundle) / $1,700 (Photo or Video Only)" },
    { value: "custom", label: "Custom Package - Let's discuss your needs" }
  ];

  const addOns = [
    { id: "engagement", label: "Engagement Session ($350)", value: "engagement" },
    { id: "bridal", label: "Bridal Session ($300)", value: "bridal" },
    { id: "drone", label: "Drone Coverage ($200)", value: "drone" },
    { id: "4k", label: "4K Video ($200)", value: "4k" },
    { id: "extraHour", label: "Extra Hour ($125)", value: "extraHour" },
    { id: "additionalPhotographer", label: "Additional Photographer (from $500)", value: "additionalPhotographer" },
    { id: "photoBook", label: "Wedding Photo Book ($100)", value: "photoBook" },
    { id: "djSound", label: "DJ & Sound ($100/hour)", value: "djSound" }
  ];

  const handleAddOnChange = (addOnValue: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      addOns: checked 
        ? [...prev.addOns, addOnValue]
        : prev.addOns.filter(item => item !== addOnValue)
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const packageLabel = packages.find(p => p.value === formData.packageType)?.label || formData.packageType;
      const addOnLabels = formData.addOns.map(addon => addOns.find(a => a.value === addon)?.label || addon);

      const { data, error } = await supabase.functions.invoke('send-booking-email', {
        body: {
          coupleNames: formData.coupleNames,
          email: formData.email,
          phone: formData.phone,
          weddingDate: formData.weddingDate,
          venue: formData.venue,
          packageType: formData.packageType,
          packageLabel: packageLabel,
          addOns: addOnLabels,
          guestCount: formData.guestCount,
          message: formData.message,
          hearAboutUs: formData.hearAboutUs,
        }
      });

      if (error) throw error;

      // Show thank you dialog
      setShowThankYou(true);
      
      // Reset form
      setFormData({
        coupleNames: "",
        email: "",
        phone: "",
        weddingDate: "",
        venue: "",
        packageType: "",
        addOns: [],
        guestCount: "",
        message: "",
        hearAboutUs: ""
      });

    } catch (error: any) {
      console.error("Error sending booking request:", error);
      toast({
        title: "Error",
        description: "Failed to send booking request. Please try again or contact us directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Book Wedding Photographer Charlotte NC | Big Day Story Carolinas</title>
        <meta name="description" content="Book your wedding photographer in Charlotte, NC. Easy online booking for professional wedding photography and videography services. Packages from $1,000 - $2,900." />
        <meta name="keywords" content="book wedding photographer Charlotte NC, wedding photography booking, Charlotte wedding videographer booking, wedding photographer consultation" />
        <link rel="canonical" href="/booking" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Book Wedding Photographer Charlotte NC | Big Day Story Carolinas" />
        <meta property="og:description" content="Book your wedding photographer in Charlotte, NC. Easy online booking for professional wedding photography and videography services. Packages from $1,000 - $2,900." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="/booking" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Book Wedding Photographer Charlotte NC | Big Day Story Carolinas" />
        <meta name="twitter:description" content="Book your wedding photographer in Charlotte, NC. Easy online booking for professional wedding photography and videography services. Packages from $1,000 - $2,900." />
        
        {/* Schema.org structured data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Book Wedding Photographer",
            "description": "Book professional wedding photography and videography services in Charlotte, NC",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Big Day Story Carolinas",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Charlotte",
                "addressRegion": "NC"
              },
              "telephone": "(704) 750-5858"
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gradient-elegant py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4">
              Book Your
              <span className="block text-primary">Wedding Photography</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              Let's capture your love story! Fill out the form below and we'll get back to you within 24 hours with a personalized quote and consultation.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="shadow-elegant border-2 border-primary/20 bg-card/95 backdrop-blur-sm">
              <CardHeader className="text-center">
                <div className="flex justify-center items-center gap-4 mb-4">
                  <div className="p-3 rounded-full bg-primary-soft">
                    <Heart className="w-8 h-8 text-primary" />
                  </div>
                  <div className="p-3 rounded-full bg-primary-soft">
                    <Camera className="w-8 h-8 text-primary" />
                  </div>
                  <div className="p-3 rounded-full bg-primary-soft">
                    <Video className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <CardTitle className="text-2xl sm:text-3xl font-bold text-primary">
                  Wedding Booking Form
                </CardTitle>
                <CardDescription className="text-lg">
                  Tell us about your special day and we'll create the perfect package for you
                </CardDescription>
              </CardHeader>

              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Basic Information */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="coupleNames">Couple Names *</Label>
                      <Input
                        id="coupleNames"
                        value={formData.coupleNames}
                        onChange={(e) => setFormData(prev => ({ ...prev, coupleNames: e.target.value }))}
                        placeholder="John & Jane Smith"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        placeholder="your@email.com"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                        placeholder="(704) 555-0123"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="weddingDate">Wedding Date *</Label>
                      <Input
                        id="weddingDate"
                        type="date"
                        value={formData.weddingDate}
                        onChange={(e) => setFormData(prev => ({ ...prev, weddingDate: e.target.value }))}
                        required
                      />
                    </div>
                  </div>

                  {/* Wedding Details */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="venue">Wedding Venue or Wedding Location</Label>
                      <Input
                        id="venue"
                        value={formData.venue}
                        onChange={(e) => setFormData(prev => ({ ...prev, venue: e.target.value }))}
                        placeholder="Venue name and location"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="guestCount">Approximate Guest Count</Label>
                      <Input
                        id="guestCount"
                        value={formData.guestCount}
                        onChange={(e) => setFormData(prev => ({ ...prev, guestCount: e.target.value }))}
                        placeholder="e.g., 100-150"
                      />
                    </div>
                  </div>

                  {/* Package Selection */}
                  <div className="space-y-2">
                    <Label htmlFor="packageType">Select Package *</Label>
                    <Select value={formData.packageType} onValueChange={(value) => setFormData(prev => ({ ...prev, packageType: value }))}>
                      <SelectTrigger>
                        <SelectValue placeholder="Choose your wedding package" />
                      </SelectTrigger>
                      <SelectContent>
                        {packages.map((pkg) => (
                          <SelectItem key={pkg.value} value={pkg.value}>
                            {pkg.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Add-ons */}
                  <div className="space-y-4">
                    <Label>Package Add-ons (Optional)</Label>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {addOns.map((addon) => (
                        <div key={addon.id} className="flex items-center space-x-2">
                          <Checkbox
                            id={addon.id}
                            checked={formData.addOns.includes(addon.value)}
                            onCheckedChange={(checked) => handleAddOnChange(addon.value, checked as boolean)}
                          />
                          <Label htmlFor={addon.id} className="text-sm">
                            {addon.label}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Additional Information */}
                  <div className="space-y-2">
                    <Label htmlFor="hearAboutUs">How did you hear about us?</Label>
                    <Select value={formData.hearAboutUs} onValueChange={(value) => setFormData(prev => ({ ...prev, hearAboutUs: value }))}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select how you found us" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="google">Google Search</SelectItem>
                        <SelectItem value="social">Social Media</SelectItem>
                        <SelectItem value="referral">Friend/Family Referral</SelectItem>
                        <SelectItem value="venue">Wedding Venue Recommendation</SelectItem>
                        <SelectItem value="zola">Zola</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Tell us about your wedding vision</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                      placeholder="Share any special details, requests, or questions about your wedding day..."
                      rows={4}
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-6 border-t border-border">
                    <Button 
                      type="submit" 
                      className="w-full" 
                      variant="wedding" 
                      size="lg"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Booking Request"}
                    </Button>
                    <p className="text-sm text-muted-foreground text-center mt-4">
                      We'll respond within 24-48 hours with a personalized quote and consultation scheduling
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="mt-12 grid md:grid-cols-3 gap-6 text-center">
              <Card className="shadow-soft bg-card/80 backdrop-blur-sm">
                <CardContent className="pt-6">
                  <Phone className="w-8 h-8 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Call Us</h3>
                  <p className="text-sm text-muted-foreground">
                    <a href="tel:7047505858" className="hover:text-primary transition-colors">
                      (704) 750-5858
                    </a>
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-soft bg-card/80 backdrop-blur-sm">
                <CardContent className="pt-6">
                  <Mail className="w-8 h-8 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Email Us</h3>
                  <p className="text-sm text-muted-foreground">
                    <a href="mailto:info@bigdaystorycarolinas.com" className="hover:text-primary transition-colors">
                      info@bigdaystorycarolinas.com
                    </a>
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-soft bg-card/80 backdrop-blur-sm">
                <CardContent className="pt-6">
                  <MapPin className="w-8 h-8 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Service Area</h3>
                  <p className="text-sm text-muted-foreground">
                    Charlotte, NC & The Carolinas
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Thank You Dialog */}
      <AlertDialog open={showThankYou} onOpenChange={setShowThankYou}>
        <AlertDialogContent className="max-w-md">
          <AlertDialogHeader>
            <div className="flex justify-center mb-4">
              <div className="p-4 rounded-full bg-primary-soft">
                <Heart className="w-12 h-12 text-primary" />
              </div>
            </div>
            <AlertDialogTitle className="text-center text-2xl">
              Thank You!
            </AlertDialogTitle>
            <AlertDialogDescription className="text-center text-base space-y-3">
              <p className="font-semibold text-foreground">
                Your booking request has been sent successfully!
              </p>
              <p>
                We will get back to you within 24-48 hours with a personalized quote and to schedule your consultation.
              </p>
              <p className="text-sm pt-2">
                If you have any urgent questions, feel free to call us at{" "}
                <a href="tel:7047505858" className="text-primary hover:underline font-medium">
                  (704) 750-5858
                </a>
              </p>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <div className="flex justify-center pt-4">
            <Button onClick={() => setShowThankYou(false)} variant="wedding">
              Close
            </Button>
          </div>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}