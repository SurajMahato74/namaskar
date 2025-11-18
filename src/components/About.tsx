import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Shield, Award, Heart, Coffee, Calendar } from 'lucide-react';
import carousel1 from '/assets/images/bedroom.avif';
import carousel2 from '/assets/images/restro.avif';
import carousel3 from '/assets/images/hall.avif';
import carousel4 from '/assets/images/singlebed.avif';

const About = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const carouselImages = [
    {
      src: carousel1,
      alt: 'Luxury Bedroom',
      title: 'Premium Suite'
    },
    {
      src: carousel2,
      alt: 'Restaurant Dining',
      title: 'Fine Dining'
    },
    {
      src: carousel3,
      alt: 'Event Hall',
      title: 'Grand Hall'
    },
    {
      src: carousel4,
      alt: 'Single Room',
      title: 'Comfort Room'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);
    return () => clearInterval(interval);
  }, [carouselImages.length]);

  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-slate-50 to-white/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-2xl sm:text-3xl md:text-4xl font-serif font-extrabold text-slate-800 mb-4 sm:mb-6 leading-tight tracking-tight sm:text-left text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Discover Luxury at
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-maroon-600 to-maroon-700 block">
                Namaskar Regency
              </span>
            </motion.h2>

            <motion.p
              className="text-sm sm:text-base md:text-lg text-slate-600 mb-6 sm:mb-8 leading-relaxed max-w-xl sm:text-left text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Nestled in the vibrant heart of Biratnagar, Namaskar Regency blends traditional Nepalese hospitality with modern elegance, ensuring every guest enjoys an unforgettable stay.
            </motion.p>

            <motion.button
              className="relative bg-gradient-to-r from-maroon-600 to-maroon-700 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl font-medium shadow-md hover:shadow-lg transition-all duration-300 group overflow-hidden sm:self-start self-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-maroon-500 to-maroon-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative">Learn More</span>
            </motion.button>
          </motion.div>

          {/* Right Content - Image Carousel */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <div className="relative rounded-2xl shadow-lg">
              <div className="relative h-64 sm:h-80 md:h-96">
                {carouselImages.map((image, index) => (
                  <motion.div
                    key={index}
                    className="absolute inset-0"
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{
                      opacity: currentImageIndex === index ? 1 : 0,
                      scale: currentImageIndex === index ? 1 : 1.05,
                    }}
                    transition={{ duration: 1.2, ease: 'easeInOut' }}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                ))}

                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

                <motion.div
                  key={currentImageIndex}
                  className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg px-3 sm:px-4 py-1.5 sm:py-2 shadow-md"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h4 className="text-slate-800 font-semibold text-sm sm:text-base">
                    {carouselImages[currentImageIndex].title}
                  </h4>
                </motion.div>
              </div>

              <div className="absolute bottom-4 right-4 flex space-x-2">
                {carouselImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                      currentImageIndex === index
                        ? 'bg-yellow-400 w-6 sm:w-8'
                        : 'bg-white/70 hover:bg-white/90'
                    }`}
                  />
                ))}
              </div>

              <motion.div
                className="absolute -top-4 sm:-top-6 -left-4 sm:-left-6 bg-white rounded-xl p-3 sm:p-4 shadow-lg border border-slate-100/50"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
                style={{ zIndex: 10 }}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center">
                    <Award className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800 text-sm sm:text-base">4.9/5</h3>
                    <p className="text-slate-600 text-xs sm:text-sm">Excellent</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Plan Your Perfect Event Section */}
        <motion.div
          className="text-center bg-gradient-to-r from-maroon-50 to-yellow-50 rounded-2xl p-8 mt-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-serif font-bold text-slate-800 mb-4 sm:text-left text-center">
            Plan Your Perfect Event
          </h3>
          <p className="text-base text-slate-600 mb-6 max-w-2xl mx-auto sm:text-left text-center">
            Our experienced team will help you create an unforgettable event with attention to every detail.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center sm:items-start items-center">
            <motion.button
              className="bg-gradient-to-r from-maroon-600 to-maroon-700 text-white px-6 py-3 rounded-lg font-medium hover:from-maroon-700 hover:to-maroon-800 transition-all flex items-center justify-center space-x-2"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Calendar className="w-4 h-4" />
              <span>Book Event</span>
            </motion.button>
            <motion.button
              className="border-2 border-slate-300 text-slate-700 px-6 py-3 rounded-lg font-medium hover:border-maroon-500 hover:text-maroon-600 transition-all"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Request Quote
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
