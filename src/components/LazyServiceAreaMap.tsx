import { useEffect, useRef, useState, lazy, Suspense } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin } from "lucide-react";
import type { Location } from '@/lib/locations';

const ServiceAreaMap = lazy(() => 
  import('./ServiceAreaMap').then(module => ({ default: module.ServiceAreaMap }))
);

interface LazyServiceAreaMapProps {
  location: Location;
}

const MapSkeleton = ({ location }: { location: Location }) => (
  <Card className="shadow-soft border-0 bg-card/80 backdrop-blur-sm">
    <CardHeader>
      <CardTitle className="text-xl font-bold">Service Area</CardTitle>
    </CardHeader>
    <CardContent className="space-y-4">
      <div 
        className="w-full h-[300px] rounded-lg overflow-hidden bg-muted/30 flex items-center justify-center"
        role="img"
        aria-label={`Map showing service area in ${location.city}, ${location.state}`}
      >
        <div className="text-center space-y-2">
          <MapPin className="w-12 h-12 mx-auto text-primary/40 animate-pulse" />
          <p className="text-sm text-muted-foreground">Loading map...</p>
        </div>
      </div>
      <div className="text-sm text-muted-foreground">
        <p className="font-medium text-foreground mb-1">We serve:</p>
        <p>{location.areaDescription}</p>
        <p className="mt-2 text-xs">
          Proudly serving couples within a 50-mile radius. 
          Travel fees may apply for destinations beyond this area.
        </p>
      </div>
    </CardContent>
  </Card>
);

export const LazyServiceAreaMap = ({ location }: LazyServiceAreaMapProps) => {
  const [shouldLoad, setShouldLoad] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShouldLoad(true);
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: '100px', // Start loading 100px before the element is visible
        threshold: 0.01,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={containerRef}>
      {shouldLoad ? (
        <Suspense fallback={<MapSkeleton location={location} />}>
          <ServiceAreaMap location={location} />
        </Suspense>
      ) : (
        <MapSkeleton location={location} />
      )}
    </div>
  );
};
