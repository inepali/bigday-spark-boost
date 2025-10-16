import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ServicesSection } from "@/components/ServicesSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { ContactSection } from "@/components/ContactSection";

const Index = () => {
  return (
    <main className="min-h-screen">
      {/* Schema.org Structured Data for Wedding Photography Business */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": "https://bigdaystory.com",
            "name": "Big Day Story",
            "description": "Premier wedding photographers and videographers in Charlotte, NC. Capturing timeless moments with elegance & emotion.",
            "url": "https://bigdaystory.com",
            "telephone": "+1-704-750-5858",
            "email": "info@bigdaystory.com",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Charlotte",
              "addressRegion": "NC",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "35.2271",
              "longitude": "-80.8431"
            },
            "areaServed": [
              {
                "@type": "City",
                "name": "Charlotte",
                "containedInPlace": {
                  "@type": "State",
                  "name": "North Carolina"
                }
              },
              {
                "@type": "State", 
                "name": "North Carolina"
              },
              {
                "@type": "State",
                "name": "South Carolina"
              }
            ],
            "serviceType": [
              "Wedding Photography",
              "Wedding Videography", 
              "Engagement Photography",
              "Bridal Photography",
              "Drone Videography"
            ],
            "priceRange": "$1600-$5000",
            "openingHours": "Mo-Su 09:00-21:00",
            "sameAs": [
              "https://www.facebook.com/bigdaystorycarolinas",
              "https://www.instagram.com/bigdaystorycarolinas",
              "https://www.youtube.com/@bigdaystorycarolinas",
              "https://www.zola.com/wedding-vendors/wedding-photographers/big-day-story-carolinas--2"
            ],
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5",
              "reviewCount": "100",
              "bestRating": "5"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Wedding Photography & Videography Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Ultimate Platinum Special - Photo & Video Bundle",
                    "description": "8 hours of photographer & videographer, engagement session, bridal session, 600-800 edited HD files, highlight video"
                  },
                  "price": "1600",
                  "priceCurrency": "USD"
                }
              ]
            }
          })
        }}
      />

      {/* Page Sections */}
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TestimonialsSection />
      <ContactSection />
      
      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4">
            <div className="text-2xl font-bold">Big Day Story</div>
            <p className="text-primary-foreground/80">
              Crafting your perfect wedding experience together.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-sm">
              <span>© 2025 Big Day Story. All rights reserved.</span>
              <span className="hidden sm:inline">•</span>
              <a 
                href="tel:7047505858" 
                className="hover:text-gold transition-smooth"
              >
                (704) 750-5858
              </a>
              <span className="hidden sm:inline">•</span>
              <a 
                href="mailto:info@bigdaystory.com"
                className="hover:text-gold transition-smooth"
              >
                info@bigdaystory.com
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Index;