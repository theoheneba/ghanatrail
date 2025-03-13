import React from 'react';
import { Search, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <div className="relative h-[90vh] w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://am.afdb.org/sites/default/files/accra-sky_view.jpg")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative h-full flex flex-col items-center justify-center px-4"
      >
        <h1 className="text-5xl md:text-7xl font-bold text-white text-center mb-6">
          Discover the Heart of <span className="text-yellow-500">Ghana</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 text-center mb-12 max-w-2xl">
          Embark on an unforgettable journey through rich culture, stunning
          landscapes, and warm hospitality
        </p>

        <div className="w-full max-w-3xl bg-white/10 backdrop-blur-md p-6 rounded-2xl">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Where would you like to go?"
                className="w-full pl-12 pr-4 py-4 rounded-xl bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-colors">
              <Search className="w-5 h-5" />
              Explore Now
            </button>
          </div>

          <div className="mt-6 flex flex-wrap gap-3 justify-center">
            <span className="px-4 py-2 rounded-full bg-white/20 text-white hover:bg-white/30 cursor-pointer transition-colors">
              Cape Coast Castle
            </span>
            <span className="px-4 py-2 rounded-full bg-white/20 text-white hover:bg-white/30 cursor-pointer transition-colors">
              Kakum National Park
            </span>
            <span className="px-4 py-2 rounded-full bg-white/20 text-white hover:bg-white/30 cursor-pointer transition-colors">
              Labadi Beach
            </span>
            <span className="px-4 py-2 rounded-full bg-white/20 text-white hover:bg-white/30 cursor-pointer transition-colors">
              Aburi Gardens
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
