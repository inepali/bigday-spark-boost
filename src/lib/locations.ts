export interface Location {
  code: string;
  city: string;
  state: string;
  fullName: string;
  latitude: string;
  longitude: string;
  areaDescription: string;
  metaDescription: string;
}

export const locations: Record<string, Location> = {
  clt: {
    code: "clt",
    city: "Charlotte",
    state: "NC",
    fullName: "Charlotte, NC",
    latitude: "35.2271",
    longitude: "-80.8431",
    areaDescription: "Charlotte, NC & surrounding areas",
    metaDescription:
      "Premier wedding photographers and videographers in Charlotte, NC. Capturing timeless moments with elegance & emotion.",
  },
  rdu: {
    code: "rdu",
    city: "Raleigh",
    state: "NC",
    fullName: "Raleigh, NC",
    latitude: "35.7796",
    longitude: "-78.6382",
    areaDescription: "Raleigh, NC & Triangle area",
    metaDescription:
      "Premier wedding photographers and videographers in Raleigh, NC. Capturing timeless moments with elegance & emotion.",
  },
  gso: {
    code: "gso",
    city: "Greensboro",
    state: "NC",
    fullName: "Greensboro, NC",
    latitude: "36.0726",
    longitude: "-79.7920",
    areaDescription: "Greensboro, NC & Piedmont Triad",
    metaDescription:
      "Premier wedding photographers and videographers in Greensboro, NC. Capturing timeless moments with elegance & emotion.",
  },
  avl: {
    code: "avl",
    city: "Asheville",
    state: "NC",
    fullName: "Asheville, NC",
    latitude: "35.5951",
    longitude: "-82.5515",
    areaDescription: "Asheville, NC & Western NC Mountains",
    metaDescription:
      "Premier wedding photographers and videographers in Asheville, NC. Capturing timeless moments with elegance & emotion.",
  },
  ilm: {
    code: "ilm",
    city: "Wilmington",
    state: "NC",
    fullName: "Wilmington, NC",
    latitude: "34.2257",
    longitude: "-77.9447",
    areaDescription: "Wilmington, NC & Coastal Carolina",
    metaDescription:
      "Premier wedding photographers and videographers in Wilmington, NC. Capturing timeless moments with elegance & emotion.",
  },
  fay: {
    code: "fay",
    city: "Fayetteville",
    state: "NC",
    fullName: "Fayetteville, NC",
    latitude: "35.0527",
    longitude: "-78.8784",
    areaDescription: "Fayetteville, NC & Sandhills region",
    metaDescription:
      "Premier wedding photographers and videographers in Fayetteville, NC. Capturing timeless moments with elegance & emotion.",
  },
  ewn: {
    code: "ewn",
    city: "Greenville",
    state: "NC",
    fullName: "Greenville, NC",
    latitude: "35.6127",
    longitude: "-77.3664",
    areaDescription: "Greenville, NC & Eastern NC",
    metaDescription:
      "Premier wedding photographers and videographers in Greenville, NC. Capturing timeless moments with elegance & emotion.",
  },
  chs: {
    code: "chs",
    city: "Charleston",
    state: "SC",
    fullName: "Charleston, SC",
    latitude: "32.776566",
    longitude: "-79.930923",
    areaDescription: "Charleston & Coastal area",
    metaDescription:
      "Premier wedding photographers and videographers in Charleston, SC. Capturing timeless moments with elegance & emotion.",
  },
  clm: {
    code: "clm",
    city: "Columbia",
    state: "SC",
    fullName: "Columbia, SC",
    latitude: "34.000751",
    longitude: "-81.035221",
    areaDescription: "Columbia & Central South Carolina",
    metaDescription:
      "Premier wedding photographers and videographers in Columbia, SC. Capturing timeless moments with elegance & emotion.",
  },
  mtl: {
    code: "mtl",
    city: "Myrtle Beach",
    state: "SC",
    fullName: "Myrtle Beach, SC",
    latitude: "33.689060",
    longitude: "-78.886696",
    areaDescription: "Myrtle Beach & Coastal area",
    metaDescription:
      "Premier wedding photographers and videographers in Myrtle Beach, SC. Capturing timeless moments with elegance & emotion.",
  },
  gnv: {
    code: "gnv",
    city: "Greenville",
    state: "SC",
    fullName: "Greenville, SC",
    latitude: "34.852619",
    longitude: "-82.394012",
    areaDescription: "Greenville-Spartanburg & Upstate area",
    metaDescription:
      "Premier wedding photographers and videographers in Greenville/Spartanburg, SC. Capturing timeless moments with elegance & emotion.",
  },
  hhd: {
    code: "hhd",
    city: "Hilton Head Island",
    state: "SC",
    fullName: "Hilton Head Island, SC",
    latitude: "32.178890",
    longitude: "-80.743057",
    areaDescription: "Hilton Head Island & Coastal area",
    metaDescription:
      "Premier wedding photographers and videographers in Hilton Head Island, SC. Capturing timeless moments with elegance & emotion.",
  },
};

// Default to Charlotte if no subdomain or unrecognized subdomain
export const defaultLocation: Location = locations.clt;

export const getLocationFromHostname = (hostname: string): Location => {
  // Extract subdomain from hostname
  const parts = hostname.split(".");

  // Check if it's a subdomain (e.g., clt.bigdaystory.com)
  if (parts.length >= 3) {
    const subdomain = parts[0].toLowerCase();
    return locations[subdomain] || defaultLocation;
  }

  // Default location for main domain or localhost
  return defaultLocation;
};
