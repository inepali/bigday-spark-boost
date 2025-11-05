import { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Location } from '@/lib/locations';

interface ServiceAreaMapProps {
  location: Location;
}

const MAPBOX_TOKEN = 'pk.eyJ1IjoiYmlnZGF5c3RvcnkiLCJhIjoiY21obGF2OXpiMGM3azJpb2djYThsaWludyJ9.C5UycLjAkRJ4bsml2cMSug';

export const ServiceAreaMap = ({ location }: ServiceAreaMapProps) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const marker = useRef<mapboxgl.Marker | null>(null);

  useEffect(() => {
    if (!mapContainer.current || map.current) return;

    mapboxgl.accessToken = MAPBOX_TOKEN;

    // Initialize map
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [parseFloat(location.longitude), parseFloat(location.latitude)],
      zoom: 9,
      attributionControl: false,
    });

    // Add navigation controls
    map.current.addControl(
      new mapboxgl.NavigationControl({
        visualizePitch: false,
      }),
      'top-right'
    );

    // Create custom marker element
    const el = document.createElement('div');
    el.className = 'custom-marker';
    el.style.width = '32px';
    el.style.height = '32px';
    el.style.backgroundImage = 'url(https://docs.mapbox.com/mapbox-gl-js/assets/custom_marker.png)';
    el.style.backgroundSize = 'contain';
    el.style.cursor = 'pointer';

    // Add marker with popup
    marker.current = new mapboxgl.Marker(el)
      .setLngLat([parseFloat(location.longitude), parseFloat(location.latitude)])
      .setPopup(
        new mapboxgl.Popup({ offset: 25 })
          .setHTML(`<div class="text-center p-2"><strong>${location.city}, ${location.state}</strong><br/><span class="text-sm text-muted-foreground">${location.areaDescription}</span></div>`)
      )
      .addTo(map.current);

    // Add service area circle (50 mile radius)
    map.current.on('load', () => {
      if (!map.current) return;

      // Add a circle layer for the service area
      map.current.addSource('service-area', {
        type: 'geojson',
        data: {
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: [parseFloat(location.longitude), parseFloat(location.latitude)]
          },
          properties: {}
        }
      });

      map.current.addLayer({
        id: 'service-area-circle',
        type: 'circle',
        source: 'service-area',
        paint: {
          'circle-radius': {
            stops: [
              [0, 0],
              [20, 80000]
            ],
            base: 2
          },
          'circle-color': 'hsl(var(--primary))',
          'circle-opacity': 0.1,
          'circle-stroke-width': 2,
          'circle-stroke-color': 'hsl(var(--primary))',
          'circle-stroke-opacity': 0.3,
        }
      });
    });

    // Cleanup
    return () => {
      marker.current?.remove();
      map.current?.remove();
      map.current = null;
    };
  }, [location]);

  return (
    <Card className="shadow-soft border-0 bg-card/80 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-xl font-bold">Service Area</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div 
          ref={mapContainer} 
          className="w-full h-[300px] rounded-lg overflow-hidden"
          role="img"
          aria-label={`Map showing service area in ${location.city}, ${location.state}`}
        />
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
};
