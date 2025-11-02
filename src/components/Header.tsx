import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('#home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#rooms', label: 'Rooms' },
    { href: '#restaurant', label: 'Restaurant' },
    { href: '#events', label: 'Events' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <>
      {/* Fixed Top Contact Bar - Hidden on Mobile */}
      <div className="hidden lg:block fixed top-0 w-full bg-maroon-700 text-white py-2 px-4 text-xs z-50">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1 group hover:text-yellow-300 transition-colors duration-300">
              <Phone size={12} className="group-hover:scale-110 transition-transform" />
              <span>+977 1-4417123</span>
            </div>
            <div className="flex items-center space-x-1 group hover:text-yellow-300 transition-colors duration-300">
              <Mail size={12} className="group-hover:scale-110 transition-transform" />
              <span>info@namaskarregency.com</span>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-2 text-xs">
            <span>Mahendra Chock, Biratnagar</span>
          </div>
        </div>
      </div>

      {/* Main Navigation - Hidden on Mobile, Visible on Desktop */}
      <nav className={`hidden lg:block fixed top-[32px] w-full z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-lg py-2' 
          : 'bg-white/95 backdrop-blur-sm py-3'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex-shrink-0">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-maroon-700 to-maroon-800 rounded-xl flex items-center justify-center shadow-md hover:shadow-lg transition-shadow duration-300">
                  <span className="text-white font-bold text-lg">N</span>
                </div>
                <div>
                  <h1 className="text-xl font-serif font-bold text-maroon-700">
                    Namaskar <span className="text-yellow-600">Regency</span>
                  </h1>
                  <p className="text-xs text-slate-500">Luxury & Comfort</p>
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:block">
              <div className="ml-10 flex items-center space-x-6">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className={`relative text-slate-700 px-3 py-2 text-sm font-medium transition-colors duration-300 group ${
                      activeLink === link.href ? 'text-maroon-700' : 'hover:text-maroon-700'
                    }`}
                    onClick={() => setActiveLink(link.href)}
                  >
                    {link.label}
                    <span className={`absolute -bottom-1 left-0 h-0.5 bg-yellow-600 transition-all duration-300 ${
                      activeLink === link.href ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}></span>
                  </a>
                ))}
              </div>
            </div>

            {/* Premium CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-3">
              <button className="group relative bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-5 py-2.5 rounded-xl text-sm font-semibold overflow-hidden shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative">Book Room</span>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>
              </button>
              
              <button className="group relative bg-gradient-to-r from-maroon-700 to-red-800 text-white px-5 py-2.5 rounded-xl text-sm font-semibold overflow-hidden shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-r from-maroon-600 to-red-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative">Book Event</span>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Toggle Button - Always Visible, Circular, Maroon Background */}
      <div className="lg:hidden fixed top-4 right-4 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-maroon-700 text-white p-3 rounded-full shadow-lg hover:bg-maroon-800 transition-colors duration-300"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Navigation - Full Height, Left Aligned, Top Aligned */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t shadow-lg h-screen flex flex-col z-40">
          <div className="px-4 pt-6 pb-8 space-y-3 w-full max-w-md">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`relative block text-slate-700 text-sm font-medium px-4 py-2.5 transition-colors duration-300 group ${
                  activeLink === link.href ? 'text-maroon-700' : 'hover:text-maroon-700'
                }`}
                onClick={() => {
                  setActiveLink(link.href);
                  setIsOpen(false);
                }}
              >
                {link.label}
                <span className={`absolute -bottom-0.5 left-0 h-0.5 bg-yellow-600 transition-all duration-300 ${
                  activeLink === link.href ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </a>
            ))}
            <div className="flex flex-col space-y-3 mt-8">
              <button className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-4 py-2.5 rounded-xl text-sm font-medium shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
                Book Room
              </button>
              <button className="bg-gradient-to-r from-maroon-700 to-red-800 text-white px-4 py-2.5 rounded-xl text-sm font-medium shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
                Book Event
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;