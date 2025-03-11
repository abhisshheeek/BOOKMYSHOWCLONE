import React, { useState } from 'react';
import { 
  Menu, 
  X, 
  Home,
  Film,
  Calendar,
  MapPin,
  Tag,
  Clock,
  Heart
} from 'lucide-react';

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { icon: Home, label: 'Home', href: '#' },
    { icon: Film, label: 'Now Showing', href: '#' },
    { icon: Calendar, label: 'Coming Soon', href: '#' },
    { icon: MapPin, label: 'Theaters', href: '#' },
    { icon: Tag, label: 'Offers', href: '#' },
    { icon: Clock, label: 'Quick Book', href: '#' },
    { icon: Heart, label: 'Favorites', href: '#' },
  ];

  return (
    <>
      {/* Hamburger Menu Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="p-2 text-white hover:bg-gray-800 rounded-lg"
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed top-0 right-0 h-full bg-gray-900 text-white z-50 
        transform transition-transform duration-300 ease-in-out
        w-64 shadow-lg
        ${isOpen ? 'translate-x-0' : 'translate-x-full'}
      `}>
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 left-4 p-2 hover:bg-gray-800 rounded-lg"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Logo */}
        <div className="flex items-center gap-2 p-6 border-b border-gray-800">
          <Film className="w-8 h-8 text-red-600" />
          <span className="text-xl font-bold">Menu</span>
        </div>

        {/* Navigation Items */}
        <nav className="p-4">
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-colors"
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}