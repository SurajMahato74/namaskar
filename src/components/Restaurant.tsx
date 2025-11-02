import React from 'react';
import { motion } from 'framer-motion';
import { ChefHat, Clock, Star, Utensils } from 'lucide-react';

const Restaurant = () => {
  const stats = [
    { icon: ChefHat, value: '3', label: 'Expert Chefs' },
    { icon: Star, value: '4.8', label: 'Food Rating' },
    { icon: Utensils, value: '150+', label: 'Menu Items' },
    { icon: Clock, value: '24/7', label: 'Room Service' }
  ];

  return (
    <section id="restaurant" className="py-16 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-800 mb-3">
            Culinary <span className="text-transparent bg-clip-text bg-gradient-to-r from-maroon-600 to-maroon-700">Excellence</span>
          </h2>
          <p className="text-base text-slate-600 max-w-2xl mx-auto">
            Authentic Nepali cuisine and international delicacies prepared by our expert chefs.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-stretch mb-16">
          {/* Restaurant Images */}
          <motion.div
            className="flex flex-col h-full"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-2 gap-3 h-full">
              <motion.div
                className="rounded-lg overflow-hidden shadow-md"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop"
                  alt="Restaurant Interior"
                  className="w-full h-36 object-cover"
                />
              </motion.div>
              <motion.div
                className="rounded-lg overflow-hidden shadow-md"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="https://images.pexels.com/photos/1410236/pexels-photo-1410236.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop"
                  alt="Fine Dining"
                  className="w-full h-36 object-cover"
                />
              </motion.div>
              <motion.div
                className="col-span-2 rounded-lg overflow-hidden shadow-lg flex-1"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="https://images.pexels.com/photos/1211887/pexels-photo-1211887.jpeg?auto=compress&cs=tinysrgb&w=600&h=250&fit=crop"
                  alt="Chef Preparing Food"
                  className="w-full h-full min-h-48 object-cover"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Restaurant Details */}
     <motion.div
  className="flex flex-col h-full justify-between items-center text-center md:items-start md:text-left"
  initial={{ opacity: 0, x: 50 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
>
        <div className="flex-1">
          <h3 className="text-2xl font-serif font-bold text-slate-800 mb-6">
            Gastronomic Journey
          </h3>
          <p className="text-base text-slate-600 mb-8 leading-relaxed">
            Experience authentic Nepali flavors and international cuisine. Each dish is crafted 
            using locally sourced ingredients and traditional recipes.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center p-4 bg-white rounded-lg shadow-sm"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <stat.icon className="w-7 h-7 mx-auto mb-3 text-maroon-600" />
              <h4 className="text-xl font-bold text-slate-800">{stat.value}</h4>
              <p className="text-slate-600 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Restaurant;