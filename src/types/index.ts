export interface Region {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  attractions: Attraction[];
}

export interface Attraction {
  id: string;
  name: string;
  type: 'beach' | 'restaurant' | 'historic' | 'nature' | 'hotel';
  description: string;
  imageUrl: string;
  regionId: string;
  rating: number;
  location: {
    latitude: number;
    longitude: number;
  };
}

export interface AirbnbListing {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  pricePerNight: number;
  rating: number;
  location: {
    latitude: number;
    longitude: number;
  };
  amenities: string[];
  capacity: number;
  bedrooms: number;
}