import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import logo from '/assets/images/logo.png';
import carousel4 from '/assets/images/hall.avif';
import carousel1 from '/assets/images/bed.avif';
import carousel3 from '/assets/images/restroooposite.avif';
import carousel2 from '/assets/images/tables.avif';
import { ChevronDown, Calendar, Bed, Crown, ChevronLeft, ChevronRight } from 'lucide-react';

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeBookingType, setActiveBookingType] = useState('room');

  const carouselImages = [carousel1, carousel2, carousel3, carousel4];


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [carouselImages.length]);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? carouselImages.length - 1 : prevIndex - 1
    );
  };

  const handleBookingTypeChange = (type: string) => {
    setActiveBookingType(type);
  };

  return (
    <section id="home" className="relative min-h-[calc(100vh-10px)] flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0">
        {carouselImages.map((image, index) => (
          <motion.div
            key={index}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url("${image}")` }}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{
              opacity: currentImageIndex === index ? 1 : 0,
              scale: currentImageIndex === index ? 1 : 1.05,
            }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-maroon-900/60 to-maroon-500/70 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer opacity-20 z-10"></div>
      </div>

      <motion.button
        onClick={prevImage}
        className="absolute left-3 sm:left-6 md:left-10 top-1/2 transform -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center text-white transition-all duration-300"
        whileHover={{ scale: 1.1, x: -3 }}
        whileTap={{ scale: 0.95 }}
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
      </motion.button>

      <motion.button
        onClick={nextImage}
        className="absolute right-3 sm:right-6 md:right-10 top-1/2 transform -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center text-white transition-all duration-300"
        whileHover={{ scale: 1.1, x: 3 }}
        whileTap={{ scale: 0.95 }}
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
      </motion.button>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {carouselImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
              currentImageIndex === index 
                ? 'bg-yellow-400 w-6 sm:w-8' 
                : 'bg-white/50 hover:bg-white/70'
            }`}
          />
        ))}
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 text-center text-white w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-5xl mx-auto"
        >

            <motion.div 
            className="mb-4 sm:mb-6 w-[180px] h-auto mx-auto" // Increased logo size
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <img 
              src={logo} 
              alt="Namaskar Regency" 
              className="w-full h-auto drop-shadow-lg brightness-110" // Added drop shadow and brightness
            />
          </motion.div>

          <motion.h1 
            className="text-2xl sm:text-4xl md:text-5xl lg:text-4xl font-serif font-extrabold mb-3 sm:mb-4 leading-tight tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Welcome to
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500">
              Namaskar Regency
            </span>
          </motion.h1>
          
        
          <motion.div 
  className="flex flex-row gap-4 sm:gap-6 justify-center mb-4 sm:mb-6" // Changed to flex-row
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.8 }}
>
  <motion.div
    className="flex flex-col items-center"
    whileHover={{ scale: 1.05, y: -4 }}
    whileTap={{ scale: 0.98 }}
  >
    <motion.button
      onClick={() => handleBookingTypeChange('room')}
      className={`group relative w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center overflow-hidden shadow-md transition-all duration-300 ${
        activeBookingType === 'room' 
          ? 'bg-gradient-to-br from-yellow-400 to-yellow-500' 
          : 'bg-gradient-to-br from-yellow-400/60 to-yellow-500/60'
      }`}
      whileHover={{ 
        scale: 1.1,
        boxShadow: '0 8px 20px -2px rgba(245, 158, 11, 0.6), 0 0 20px rgba(245, 158, 11, 0.3)'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-300 to-yellow-400 opacity-0 group-hover:opacity-70 transition-opacity duration-300 z-0"></div>
      <Bed className="w-5 h-5 sm:w-6 sm:h-6 text-white z-10" />
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-500 z-0"></div>
    </motion.button>
    <span className="mt-2 text-xs sm:text-sm font-semibold text-white">Room</span>
  </motion.div>

  <motion.div
    className="flex flex-col items-center"
    whileHover={{ scale: 1.05, y: -4 }}
    whileTap={{ scale: 0.98 }}
  >
    <motion.button
      onClick={() => handleBookingTypeChange('event')}
      className={`group relative w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center overflow-hidden shadow-md transition-all duration-300 ${
        activeBookingType === 'event' 
          ? 'bg-gradient-to-br from-maroon-700 to-red-800' 
          : 'bg-gradient-to-br from-maroon-700/60 to-red-800/60'
      }`}
      whileHover={{ 
        scale: 1.1,
        boxShadow: '0 8px 20px -2px rgba(179, 0, 0, 0.6), 0 0 20px rgba(179, 0, 0, 0.3)'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-maroon-600 to-red-700 opacity-0 group-hover:opacity-70 transition-opacity duration-300 z-0"></div>
      <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-white z-10" />
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-500 z-0"></div>
    </motion.button>
    <span className="mt-2 text-xs sm:text-sm font-semibold text-white">Events</span>
  </motion.div>
</motion.div>

          <motion.div
            className="bg-white/15 backdrop-blur-xl rounded-xl p-3 sm:p-4 max-w-4xl sm:max-w-5xl mx-auto border border-white/20 shadow-lg relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }} // Faster form appearance
            key={activeBookingType}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-xl"></div>
            
            <div className="relative z-10">
              {activeBookingType === 'room' && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }} // Faster transition
                >
                  <div className="flex items-center justify-center space-x-2 mb-2 sm:mb-3"> {/* Reduced spacing */}
                    <Bed className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" />
                    <h3 className="text-sm sm:text-base font-semibold text-white">Room Reservation</h3>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3">
                    <div>
                      <label className="block text-xs sm:text-sm font-medium mb-1 text-white/90">Check-in</label>
                      <input
                        type="date"
                        className="w-full px-2 sm:px-3 py-1.5 sm:py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all text-xs sm:text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs sm:text-sm font-medium mb-1 text-white/90">Check-out</label>
                      <input
                        type="date"
                        className="w-full px-2 sm:px-3 py-1.5 sm:py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all text-xs sm:text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs sm:text-sm font-medium mb-1 text-white/90">Guests</label>
                      <select className="w-full px-2 sm:px-3 py-1.5 sm:py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all text-xs sm:text-sm">
                        <option className="bg-slate-800 text-white" value="1">1 Guest</option>
                        <option className="bg-slate-800 text-white" value="2">2 Guests</option>
                        <option className="bg-slate-800 text-white" value="3">3 Guests</option>
                        <option className="bg-slate-800 text-white" value="4">4+ Guests</option>
                      </select>
                    </div>
                    <div className="flex items-end">
                      <motion.button
                        className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-white py-1.5 sm:py-2 px-2 sm:px-3 rounded-lg font-medium shadow-md relative overflow-hidden group text-xs sm:text-sm"
                        whileHover={{ 
                          scale: 1.02,
                          boxShadow: '0 10px 20px -5px rgba(245, 158, 11, 0.3)'
                        }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <span className="relative">Check Availability</span>
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeBookingType === 'event' && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }} // Faster transition
                >
                  <div className="flex items-center justify-center space-x-2 mb-2 sm:mb-3"> {/* Reduced spacing */}
                    <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" />
                    <h3 className="text-sm sm:text-base font-semibold text-white">Event Reservation</h3>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3">
                    <div>
                      <label className="block text-xs sm:text-sm font-medium mb-1 text-white/90">Event Date</label>
                      <input
                        type="date"
                        className="w-full px-2 sm:px-3 py-1.5 sm:py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all text-xs sm:text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs sm:text-sm font-medium mb-1 text-white/90">Event Type</label>
                      <select className="w-full px-2 sm:px-3 py-1.5 sm:py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all text-xs sm:text-sm">
                        <option className="bg-slate-800 text-white" value="wedding">Wedding</option>
                        <option className="bg-slate-800 text-white" value="corporate">Corporate Event</option>
                        <option className="bg-slate-800 text-white" value="conference">Conference</option>
                        <option className="bg-slate-800 text-white" value="party">Social Party</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs sm:text-sm font-medium mb-1 text-white/90">Expected Guests</label>
                      <select className="w-full px-2 sm:px-3 py-1.5 sm:py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all text-xs sm:text-sm">
                        <option className="bg-slate-800 text-white" value="50">Up to 50</option>
                        <option className="bg-slate-800 text-white" value="100">Up to 100</option>
                        <option className="bg-slate-800 text-white" value="200">Up to 200</option>
                        <option className="bg-slate-800 text-white" value="300">300+ Guests</option>
                      </select>
                    </div>
                    <div className="flex items-end">
                      <motion.button
                        className="w-full bg-gradient-to-r from-maroon-700 to-red-800 text-white py-1.5 sm:py-2 px-2 sm:px-3 rounded-lg font-medium shadow-md relative overflow-hidden group text-xs sm:text-sm"
                        whileHover={{ 
                          scale: 1.02,
                          boxShadow: '0 10px 20px -5px rgba(179, 0, 0, 0.3)'
                        }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-maroon-600 to-red-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <span className="relative">Check Availability</span>
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;