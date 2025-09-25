import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Camera, Video, Heart, Plane, Clock, Users, ImageIcon } from "lucide-react";
import { Helmet } from "react-helmet-async";

export default function Packages() {
  const packages = [
    {
      name: "DIAMOND Special",
      price: "$1,500",
      photoVideoOnly: "$1,000",
      duration: "4 hours",
      popular: false,
      features: [
        "Some Ceremony Photos",
        "Ceremony Coverage",
        "Family, Wedding Party, and Newlywed Portraits",
        "Reception Entrance, Special Dances, Speeches, Cake Cutting and Send off",
        "6-8 minutes highlight video",
        "300-500 Edited, High Resolution Files",
        "15-20 Sneak Peeks within 48 hours",
        "Full Timeline Discussion and Planning Session",
        "Bride and groom portraits (Sunset Pictures)",
        "All printing rights included",
        "No watermarked images",
        "30 Day Turnaround on Full Digital Album",
        "Custom song selection for videos",
        "Audio Coverage",
        "All Raw Video Footage"
      ]
    },
    {
      name: "GOLD Special",
      price: "$2,300",
      photoVideoOnly: "$1,400",
      duration: "6 hours",
      popular: true,
      features: [
        "Pre Ceremony Photos",
        "Full Ceremony Coverage",
        "Family, Wedding Party, and Newlywed Portraits",
        "Reception Entrance, Special Dances, Speeches, Cake Cutting and Send off",
        "8-10 minute highlight video",
        "500-700 Edited, High Resolution Files",
        "15-20 Sneak Peeks within 48 hours",
        "Full Timeline Discussion and Planning Session",
        "Bride and groom portraits (Sunset Pictures)",
        "All printing rights included",
        "No watermarked images",
        "30 Day Turnaround on Full Digital Album",
        "Custom song selection for videos",
        "Premium song on request with fee",
        "Audio Coverage",
        "All Raw Video Footage"
      ]
    },
    {
      name: "PLATINUM Special",
      price: "$2,900",
      photoVideoOnly: "$1,700",
      duration: "8 hours",
      popular: false,
      features: [
        "Pre Ceremony Photos",
        "Full Ceremony Coverage",
        "Family, Wedding Party, and Newlywed Portraits",
        "Reception Entrance, Special Dances, Speeches, Cake Cutting and Send off",
        "60s Social Media & 10-12 minute highlight video",
        "700-900 Edited, High Resolution Files",
        "15-20 Sneak Peeks within 48 hours",
        "Full Timeline Discussion and Planning Session",
        "Bride and groom portraits (Sunset Pictures)",
        "All printing rights included",
        "No watermarked images",
        "30 Day Turnaround on Full Digital Album",
        "Custom song selection for videos",
        "Premium song on request with fee",
        "Audio Coverage",
        "All Raw Video Footage"
      ]
    }
  ];

  const addOns = [
    {
      name: "Engagement Session",
      description: "1.5 hours of photographer to capture your engagement session with 75+ fully edited HD photos",
      price: "$350",
      icon: <Heart className="w-6 h-6" />
    },
    {
      name: "Bridal Session",
      description: "1 hour of photographer to capture your bridal session with 50+ fully edited HD photos",
      price: "$300",
      icon: <Camera className="w-6 h-6" />
    },
    {
      name: "Drone Coverage",
      description: "Add stunning aerial drone footage to your photo and video package",
      price: "$200",
      icon: <Plane className="w-6 h-6" />
    },
    {
      name: "4K Video",
      description: "4K Video recording & editing for premium quality footage",
      price: "$200",
      icon: <Video className="w-6 h-6" />
    },
    {
      name: "Extra Hour",
      description: "Any extra hours beyond what's specified in your package",
      price: "$125",
      icon: <Clock className="w-6 h-6" />
    },
    {
      name: "Additional Photographer",
      description: "Add second shooter for better coverage during ceremony and reception",
      price: "from $500",
      icon: <Users className="w-6 h-6" />
    },
    {
      name: "Wedding Photo Book",
      description: "20 pages 12x12 Forever Love Photo Book",
      price: "$100",
      icon: <ImageIcon className="w-6 h-6" />
    },
    {
      name: "DJ & Sound",
      description: "Professional DJ and sound system for your wedding day",
      price: "$100/hour",
      icon: <Star className="w-6 h-6" />
    }
  ];

  return (
    <>
      <Helmet>
        <title>Wedding Photography Packages Charlotte NC | Big Day Story Carolinas</title>
        <meta name="description" content="Professional wedding photography and videography packages in Charlotte, NC. From $1,000 - $2,900. Diamond, Gold & Platinum packages with engagement sessions included." />
        <meta name="keywords" content="wedding photography packages Charlotte NC, wedding videography pricing, Charlotte wedding photographer packages, affordable wedding photography" />
        <link rel="canonical" href="/packages" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Wedding Photography Packages Charlotte NC | Big Day Story Carolinas" />
        <meta property="og:description" content="Professional wedding photography and videography packages in Charlotte, NC. From $1,000 - $2,900. Diamond, Gold & Platinum packages with engagement sessions included." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="/packages" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Wedding Photography Packages Charlotte NC | Big Day Story Carolinas" />
        <meta name="twitter:description" content="Professional wedding photography and videography packages in Charlotte, NC. From $1,000 - $2,900. Diamond, Gold & Platinum packages with engagement sessions included." />
        
        {/* Schema.org structured data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Wedding Photography Packages",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Big Day Story Carolinas",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Charlotte",
                "addressRegion": "NC"
              }
            },
            "offers": packages.map(pkg => ({
              "@type": "Offer",
              "name": pkg.name,
              "price": pkg.price.replace('$', '').replace(',', ''),
              "priceCurrency": "USD",
              "description": `${pkg.duration} wedding photography and videography package`
            }))
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gradient-elegant">
        {/* Hero Section */}
        <section className="py-20 text-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Wedding Photography
              <span className="block text-primary">Packages</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              At Big Day Story Carolinas, we believe your wedding day deserves more than just documentation—it deserves to be told like the unforgettable story it is. Our affordable wedding photo and video packages are thoughtfully crafted to capture every cherished moment.
            </p>
          </div>
        </section>

        {/* Packages Grid */}
        <section className="pb-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              {packages.map((pkg, index) => (
                <Card key={index} className={`relative shadow-elegant hover:shadow-xl transition-smooth border-2 ${pkg.popular ? 'border-primary shadow-glow' : 'border-border'} bg-card/95 backdrop-blur-sm`}>
                  {pkg.popular && (
                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1">
                      Most Popular
                    </Badge>
                  )}
                  
                  <CardHeader className="text-center pb-6">
                    <CardTitle className="text-2xl font-bold text-primary mb-2">
                      {pkg.name}
                    </CardTitle>
                    <div className="mb-4">
                      <div className="text-3xl font-bold text-foreground">{pkg.price}</div>
                      <div className="text-sm text-muted-foreground">Photo & Video Bundle</div>
                      <div className="text-lg font-semibold text-primary mt-2">{pkg.photoVideoOnly}</div>
                      <div className="text-sm text-muted-foreground">Photo or Video Only</div>
                    </div>
                    <CardDescription className="text-lg font-medium">
                      {pkg.duration} of professional coverage
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    <div className="space-y-3">
                      {pkg.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="pt-6 border-t border-border space-y-3">
                      <Button 
                        className="w-full" 
                        variant={pkg.popular ? "wedding" : "outline"}
                        size="lg"
                        onClick={() => window.location.href = '/booking'}
                      >
                        Choose {pkg.name}
                      </Button>
                      <Button 
                        className="w-full" 
                        variant="ghost"
                        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                      >
                        Get Custom Quote
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Add-ons Section */}
            <div className="mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-center mb-12">
                Package Add-Ons
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {addOns.map((addon, index) => (
                  <Card key={index} className="text-center shadow-soft hover:shadow-elegant transition-smooth border-0 bg-card/80 backdrop-blur-sm">
                    <CardHeader>
                      <div className="mx-auto mb-4 p-3 rounded-full bg-primary-soft text-primary">
                        {addon.icon}
                      </div>
                      <CardTitle className="text-lg font-semibold">{addon.name}</CardTitle>
                      <div className="text-xl font-bold text-primary">{addon.price}</div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-sm leading-relaxed">
                        {addon.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center">
              <Card className="max-w-2xl mx-auto shadow-elegant border-2 border-primary/20 bg-card/95 backdrop-blur-sm">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl sm:text-3xl font-bold text-primary mb-4">
                    Ready to Book Your Wedding?
                  </CardTitle>
                  <CardDescription className="text-lg">
                    Let's create beautiful, timeless memories of your special day
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button 
                      variant="wedding" 
                      size="lg"
                      onClick={() => window.location.href = '/booking'}
                    >
                      Book Your Package
                    </Button>
                    <Button 
                      variant="outline" 
                      size="lg"
                      onClick={() => window.open('https://bigdaystorycarolinas.hbportal.co/schedule/6724cbd3d0d6fe002ba5fc2e', '_blank')}
                    >
                      Schedule Consultation
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}