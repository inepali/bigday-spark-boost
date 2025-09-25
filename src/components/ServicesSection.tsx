import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Heart, Camera, Video, Star } from "lucide-react";

export const ServicesSection = () => {
  const packageFeatures = [
    "8 hours of photographer & videographer working together",
    "Pre-ceremony, ceremony, and reception coverage",
    "Family, wedding party, and newlywed portraits",
    "Engagement session included",
    "Bridal session included", 
    "60s social media video",
    "10-12 minute cinematic highlight video",
    "600-800 edited, high-definition files",
    "15-20 sneak peeks within 48 hours",
    "Full timeline discussion and planning session",
    "Bride and groom sunset portraits",
    "All printing rights - no watermarked images",
    "30-day turnaround on full digital album",
    "Custom song selection for videos",
    "Professional audio coverage",
    "All raw video footage included"
  ];

  const services = [
    {
      icon: <Camera className="w-8 h-8 text-primary" />,
      title: "Wedding Photography",
      description: "From candid moments to grand celebrations, we specialize in capturing heartfelt emotions and intricate details of your wedding day.",
    },
    {
      icon: <Video className="w-8 h-8 text-primary" />,
      title: "Wedding Videography", 
      description: "Our cinematic approach ensures every laugh, tear, and dance is immortalized in a beautifully crafted wedding film.",
    },
    {
      icon: <Heart className="w-8 h-8 text-primary" />,
      title: "Engagement & Bridal Sessions",
      description: "Celebrate your journey with personalized sessions that reflect your unique love story.",
    },
    {
      icon: <Star className="w-8 h-8 text-primary" />,
      title: "Drone Videography",
      description: "Elevate your wedding memories with breathtaking aerial shots that showcase your venue's grandeur.",
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-elegant">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our Wedding Photography
            <span className="block text-primary">& Videography Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Professional wedding photography and videography services in Charlotte, NC. 
            We create beautiful, timeless wedding albums and cinematic films.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="text-center shadow-soft hover:shadow-elegant transition-smooth border-0 bg-card/80 backdrop-blur-sm">
              <CardHeader>
                <div className="mx-auto mb-4 p-3 rounded-full bg-primary-soft">
                  {service.icon}
                </div>
                <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Package */}
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-elegant border-2 border-primary/20 bg-card/95 backdrop-blur-sm">
            <CardHeader className="text-center pb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-full mb-4 mx-auto">
                <Heart className="w-8 h-8 text-primary-foreground" />
              </div>
              <CardTitle className="text-2xl sm:text-3xl font-bold text-primary mb-2">
                Ultimate Platinum Special
              </CardTitle>
              <CardDescription className="text-lg">
                Our comprehensive photo & video bundle - everything you need for your perfect wedding day
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Features Grid */}
              <div className="grid sm:grid-cols-2 gap-3">
                {packageFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="text-center pt-6 border-t border-border">
                <div className="mb-4">
                  <p className="text-sm text-muted-foreground mb-2">
                    Starting at <span className="line-through">$2,000</span>
                  </p>
                  <p className="text-2xl font-bold text-primary">
                    Packages from $1,600
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button 
                    variant="wedding" 
                    size="lg"
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Get Your Quote
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    onClick={() => window.open('https://bigdaystorycarolinas.hbportal.co/schedule/6724cbd3d0d6fe002ba5fc2e', '_blank')}
                  >
                    Schedule Consultation
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};