import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedRegions from './components/FeaturedRegions';
import FeaturedAttractions from './components/FeaturedAttractions';
import FeaturedStays from './components/FeaturedStays';
import { Toaster } from 'sonner';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <Navbar />
      <main>
        <Hero />
        <FeaturedRegions />
        <FeaturedAttractions />
        <FeaturedStays />
      </main>
      <Toaster position="top-right" />
    </div>
  );
}

export default App;