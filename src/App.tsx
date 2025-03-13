import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedRegions from './components/FeaturedRegions';
import FeaturedAttractions from './components/FeaturedAttractions';
import FeaturedStays from './components/FeaturedStays';
import RegionsPage from './pages/RegionsPage';
import RegionDetailPage from './pages/RegionDetailPage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import { Toaster } from 'sonner';

function HomePage() {
  return (
    <main>
      <Hero />
      <FeaturedRegions />
      <FeaturedAttractions />
      <FeaturedStays />
    </main>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/regions" element={<RegionsPage />} />
          <Route path="/regions/:id" element={<RegionDetailPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:id" element={<BlogPostPage />} />
        </Routes>
        <Toaster position="top-right" />
      </div>
    </Router>
  );
}

export default App;