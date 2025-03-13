import React from 'react';
import { Users, Bed, Star } from 'lucide-react';

const stays = [
  {
    id: '1',
    title: 'Luxury Beachfront Villa',
    description: 'Modern villa with ocean views and private pool',
    imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=2940&q=80',
    pricePerNight: 250,
    rating: 4.9,
    capacity: 6,
    bedrooms: 3,
    location: 'Accra'
  },
  {
    id: '2',
    title: 'Traditional Ashanti Home',
    description: 'Experience authentic Ghanaian hospitality',
    imageUrl: 'https://images.unsplash.com/photo-1574739782594-db4ead022697?ixlib=rb-4.0.3&auto=format&fit=crop&w=2940&q=80',
    pricePerNight: 120,
    rating: 4.8,
    capacity: 4,
    bedrooms: 2,
    location: 'Kumasi'
  },
  {
    id: '3',
    title: 'Coastal Retreat',
    description: 'Serene apartment near Cape Coast Castle',
    imageUrl: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&auto=format&fit=crop&w=2940&q=80',
    pricePerNight: 180,
    rating: 4.7,
    capacity: 3,
    bedrooms: 1,
    location: 'Cape Coast'
  },
  {
    id: '4',
    title: 'Mountain View Lodge',
    description: 'Peaceful retreat in the Volta Region',
    imageUrl: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2940&q=80',
    pricePerNight: 150,
    rating: 4.8,
    capacity: 4,
    bedrooms: 2,
    location: 'Volta Region'
  }
];

export default function FeaturedStays() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Featured Places to Stay</h2>
          <p className="text-sm text-gray-500">*Bookings handled through Airbnb</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stays.map((stay) => (
            <div 
              key={stay.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
            >
              <div className="relative">
                <img
                  src={stay.imageUrl}
                  alt={stay.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 bg-white text-yellow-600 px-3 py-1 rounded-full text-sm font-bold shadow-md">
                  ${stay.pricePerNight}/night
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{stay.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{stay.description}</p>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center text-gray-500">
                    <Users className="w-4 h-4 mr-1" />
                    <span className="text-sm">{stay.capacity} guests</span>
                  </div>
                  <div className="flex items-center text-gray-500">
                    <Bed className="w-4 h-4 mr-1" />
                    <span className="text-sm">{stay.bedrooms} bedrooms</span>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-4 border-t">
                  <span className="text-sm text-gray-500">{stay.location}</span>
                  <div className="flex items-center text-yellow-500">
                    <Star className="w-4 h-4 mr-1 fill-current" />
                    <span className="font-semibold">{stay.rating}</span>
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