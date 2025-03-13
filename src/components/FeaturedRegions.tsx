import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { regions } from '../data/regions';

export default function FeaturedRegions() {
  return (
    <section className="py-16 px-4 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Featured Regions</h2>
          <Link
            to="/regions"
            className="text-yellow-600 dark:text-yellow-400 hover:text-yellow-700 dark:hover:text-yellow-300 flex items-center"
          >
            View all regions
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {regions.slice(0, 4).map((region) => (
            <Link
              key={region.id}
              to={`/regions/${region.id}`}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={region.imageUrl}
                  alt={region.name}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-0 p-4 text-white">
                <h3 className="text-xl font-semibold mb-2">{region.name}</h3>
                <p className="text-sm text-gray-200 mb-4 line-clamp-2">
                  {region.description}
                </p>
                <button className="flex items-center text-yellow-400 hover:text-yellow-300 transition-colors">
                  Explore Region
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}