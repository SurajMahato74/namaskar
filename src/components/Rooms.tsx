import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Bed } from 'lucide-react';

interface RoomType {
  title: string;
  price: string;
  description: string;
  image: string;
  amenities: string[];
}

interface RoomTypes {
  deluxe: RoomType;
  suite: RoomType;
  presidential: RoomType;
}

const Rooms = () => {
  const [activeTab, setActiveTab] = useState<keyof RoomTypes>('deluxe');

  const roomTypes: RoomTypes = {
    deluxe: {
      title: 'Deluxe Rooms',
      price: 'NPR 6,500',
      description: 'Elegantly furnished rooms with modern amenities.',
      image:
        'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      amenities: ['Free WiFi', 'Air Conditioning', 'Mini Bar', 'LED TV', 'Room Service']
    },
    suite: {
      title: 'Executive Suites',
      price: 'NPR 12,500',
      description: 'Spacious suites with separate living area.',
      image:
        'https://images.pexels.com/photos/1743373/pexels-photo-1743373.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      amenities: ['Free WiFi', 'Living Area', 'Premium Mini Bar', 'Smart TV', '24/7 Service']
    },
    presidential: {
      title: 'Presidential Suite',
      price: 'NPR 20,500',
      description: 'Ultimate luxury with panoramic views.',
      image:
        'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      amenities: ['Free WiFi', 'Jacuzzi', 'Premium Bar', 'Smart TV', 'Butler Service']
    }
  };

  return (
    <section id="rooms" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-800 mb-3">
            Luxury <span className="text-transparent bg-clip-text bg-gradient-to-r from-maroon-600 to-maroon-700">Accommodations</span>
          </h2>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {Object.entries(roomTypes).map(([key, room]) => (
            <motion.button
              key={key}
              onClick={() => setActiveTab(key as keyof RoomTypes)}
              className={`px-6 py-2 rounded-lg text-sm font-medium transition-all ${
                activeTab === key
                  ? 'bg-gradient-to-r from-maroon-600 to-maroon-700 text-white shadow-md'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {room.title}
            </motion.button>
          ))}
        </motion.div>

        <motion.div
          key={activeTab}
          className="grid lg:grid-cols-2 gap-10 items-center mb-16 justify-items-center text-center lg:text-left"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="relative rounded-xl overflow-hidden shadow-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={roomTypes[activeTab].image}
              alt={roomTypes[activeTab].title}
              className="w-full h-80 object-cover"
            />
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
              <Star className="w-4 h-4 text-yellow-500 fill-current" />
              <span className="font-medium text-slate-800 text-sm">4.9</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-serif font-bold text-slate-800 mb-3">
              {roomTypes[activeTab].title}
            </h3>
            <p className="text-base text-slate-600 mb-5 leading-relaxed">
              {roomTypes[activeTab].description}
            </p>

            {/* ✅ Pricing + Book Now section – UNTOUCHED */}
            <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-lg p-4 mb-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-600 text-sm mb-1">Starting from</p>
                  <p className="text-2xl font-bold text-slate-800">{roomTypes[activeTab].price}</p>
                  <p className="text-slate-600 text-sm">per night</p>
                </div>
                <motion.button
                  className="bg-gradient-to-r from-maroon-600 to-maroon-700 text-white px-5 py-2 rounded-lg font-medium hover:from-maroon-700 hover:to-maroon-800 transition-all flex items-center space-x-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Bed className="w-4 h-4" />
                  <span>Book Now</span>
                </motion.button>
              </div>
            </div>

            {/* ✅ Amenities – hidden on mobile */}
            <div className="hidden sm:block">
              <h4 className="text-lg font-semibold text-slate-800 mb-3">Amenities</h4>
              <div className="grid grid-cols-2 gap-2">
                {roomTypes[activeTab].amenities.map((amenity: string, index: number) => (
                  <motion.div
                    key={amenity}
                    className="flex items-center space-x-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                  >
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <span className="text-slate-700 text-sm">{amenity}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Rooms;
