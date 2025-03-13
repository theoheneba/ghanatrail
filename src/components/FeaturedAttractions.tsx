import React from 'react';
import { MapPin, Star } from 'lucide-react';

const attractions = [
  {
    id: '1',
    name: 'Cape Coast Castle',
    type: 'historic',
    description: 'Historic castle with rich cultural heritage',
    imageUrl: 'https://images.unsplash.com/photo-1580746738294-ea4f33d1a0f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2940&q=80',
    rating: 4.8,
    location: 'Central Region'
  },
  {
    id: '2',
    name: 'Kakum National Park',
    type: 'nature',
    description: 'Tropical rainforest with canopy walkway',
    imageUrl: 'https://images.unsplash.com/photo-1590144662036-33bf0ebd2c7f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2940&q=80',
    rating: 4.9,
    location: 'Central Region'
  },
  {
    id: '3',
    name: 'Labadi Beach',
    type: 'beach',
    description: 'Popular beach with vibrant atmosphere',
    imageUrl: 'https://images.unsplash.com/photo-1580746738099-6c290b628ea6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2940&q=80',
    rating: 4.5,
    location: 'Greater Accra'
  },
  {
    id: '4',
    name: 'Manhyia Palace',
    type: 'historic',
    description: 'Official residence of Asantehene',
    imageUrl: 'https://images.unsplash.com/photo-1580746738721-9c2c6d31d14b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2940&q=80',
    rating: 4.7,
    location: 'Ashanti Region'
  }
];

export default function FeaturedAttractions() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Featured Attractions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {attractions.map((attraction) => (
            <div 
              key={attraction.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative">
                <img
                  src={attraction.imageUrl}
                  alt={attraction.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 bg-yellow-500 text-white px-2 py-1 rounded-full text-sm font-semibold">
                  {attraction.type}
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{attraction.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{attraction.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-gray-500">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span className="text-sm">{attraction.location}</span>
                  </div>
                  <div className="flex items-center text-yellow-500">
                    <Star className="w-4 h-4 mr-1 fill-current" />
                    <span className="font-semibold">{attraction.rating}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}