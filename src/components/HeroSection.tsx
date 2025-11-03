import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-wedding.jpg";
import { useLocation } from "@/hooks/useLocation";

export const HeroSection = () => {
  const location = useLocation();
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt={`Elegant wedding couple in romantic moment - Big Day Story Wedding Photography in ${location.fullName}`}
          className="w-full h-full object-cover"
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 gradient-hero"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
          Wedding Photographers in {location.city}, NC
          <span className="block text-gold text-3xl sm:text-4xl lg:text-5xl font-medium mt-2">
            Premier Photography & Videography Services
          </span>
        </h1>
        
        <p className="text-lg sm:text-xl lg:text-2xl mb-8 leading-relaxed max-w-3xl mx-auto font-light">
          Capturing <strong>timeless moments</strong> with elegance & emotion. 
          Every wedding is a unique narrative waiting to be told through stunning visuals 
          that resonate with authenticity and grace.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            variant="hero" 
            size="xl"
            onClick={() => window.location.href = '/booking'}
            className="min-w-[200px]"
          >
            Book Your Wedding
          </Button>
          <Button 
            variant="elegant" 
            size="xl"
            onClick={() => window.location.href = '/packages'}
            className="min-w-[200px]"
          >
            View Packages
          </Button>
        </div>
        
        {/* Trust Indicators */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm">
          <div className="flex items-center gap-2">
            <span className="text-gold">✨</span>
            <span>Over 100 weddings captured</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gold">⭐</span>
            <span>Featured on Zola</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gold">📍</span>
            <span>{location.areaDescription}</span>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};