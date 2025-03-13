import React, { useState } from 'react';
import { Menu, X, Sun, Moon, Search } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import Logo from './Logo';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg fixed w-full z-50 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <Logo />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search destinations..."
                className="pl-10 pr-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all duration-200"
              />
              <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            </div>
            <a href="/regions" className="text-gray-700 dark:text-gray-200 hover:text-yellow-600 dark:hover:text-yellow-500 transition-colors">Regions</a>
            <a href="/attractions" className="text-gray-700 dark:text-gray-200 hover:text-yellow-600 dark:hover:text-yellow-500 transition-colors">Attractions</a>
            <a href="/stays" className="text-gray-700 dark:text-gray-200 hover:text-yellow-600 dark:hover:text-yellow-500 transition-colors">Places to Stay</a>
            <a href="/blog" className="text-gray-700 dark:text-gray-200 hover:text-yellow-600 dark:hover:text-yellow-500 transition-colors">Blog</a>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-gray-200" />
              ) : (
                <Moon className="w-5 h-5 text-gray-700" />
              )}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-gray-200" />
              ) : (
                <Moon className="w-5 h-5 text-gray-700" />
              )}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-700 dark:text-gray-200 hover:text-yellow-600 dark:hover:text-yellow-500 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute left-0 right-0 bg-white dark:bg-gray-900 shadow-lg">
            <div className="px-4 pt-2 pb-3 space-y-1">
              <div className="relative mb-4">
                <input
                  type="text"
                  placeholder="Search destinations..."
                  className="w-full pl-10 pr-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all duration-200"
                />
                <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              </div>
              <a
                href="/regions"
                className="block px-3 py-2 rounded-md text-gray-700 dark:text-gray-200 hover:text-yellow-600 dark:hover:text-yellow-500 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                Regions
              </a>
              <a
                href="/attractions"
                className="block px-3 py-2 rounded-md text-gray-700 dark:text-gray-200 hover:text-yellow-600 dark:hover:text-yellow-500 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                Attractions
              </a>
              <a
                href="/stays"
                className="block px-3 py-2 rounded-md text-gray-700 dark:text-gray-200 hover:text-yellow-600 dark:hover:text-yellow-500 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                Places to Stay
              </a>
              <a
                href="/blog"
                className="block px-3 py-2 rounded-md text-gray-700 dark:text-gray-200 hover:text-yellow-600 dark:hover:text-yellow-500 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                Blog
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}