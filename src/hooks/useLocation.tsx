import { useMemo } from 'react';
import { getLocationFromHostname, type Location } from '@/lib/locations';

export const useLocation = (): Location => {
  const location = useMemo(() => {
    return getLocationFromHostname(window.location.hostname);
  }, []);

  return location;
};
