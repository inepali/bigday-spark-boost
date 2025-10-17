import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ServicesSection } from "@/components/ServicesSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { ContactSection } from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { useLocation } from "@/hooks/useLocation";
import { Helmet } from "react-helmet-async";

const Index = () => {
  const location = useLocation();
  
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `https://${location.code}.bigdaystory.com`,
    "name": `Big Day Story - ${location.city}`,
    "description": location.metaDescription,
    "url": `https://${location.code}.bigdaystory.com`,
    "telephone": "+1-704-750-5858",
    "email": "info@bigdaystory.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": location.city,
      "addressRegion": location.state,
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": location.latitude,
      "longitude": location.longitude
    },
    "areaServed": [
      {
        "@type": "City",
        "name": location.city,
        "containedInPlace": {
          "@type": "State",
          "name": "North Carolina"
        }
      },
      {
        "@type": "State", 
        "name": "North Carolina"
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
  };
  
  return (
    <main className="min-h-screen">
      <Helmet>
        <title>Big Day Story - Wedding Photography in {location.fullName}</title>
        <meta name="description" content={location.metaDescription} />
        <meta property="og:title" content={`Big Day Story - Wedding Photography in ${location.fullName}`} />
        <meta property="og:description" content={location.metaDescription} />
        <link rel="canonical" href={`https://${location.code}.bigdaystory.com`} />
      </Helmet>

      {/* Schema.org Structured Data for Wedding Photography Business */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />

      {/* Page Sections */}
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TestimonialsSection />
      <ContactSection />
    </main>
  );
};

export default Index;