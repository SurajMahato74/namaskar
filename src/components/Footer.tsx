import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Crown } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    'About Us', 'Rooms', 'Restaurant', 'Events', 'Gallery', 'Reviews'
  ];

  const services = [
    'Room Service'
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' }
  ];

  const facilities = [
    'Free WiFi',  'Conference Halls', 'Restaurant & Bar', 'Parking'
  ];

  return (
    <footer className="bg-maroon-800 text-white relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {/* Company Info */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-xl flex items-center justify-center shadow-lg">
                <Crown className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-serif font-bold">Namaskar Regency</h3>
                <div className="flex items-center space-x-1">
                  <p className="text-yellow-200 text-xs">Luxury & Comfort</p>
                </div>
              </div>
            </div>
            
            <p className="text-slate-200 mb-4 leading-relaxed text-sm">
              Experience the finest hospitality in the heart of Biratnagar. Where traditional Nepalese warmth meets modern luxury for an unforgettable stay.
            </p>
            
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-white/10 hover:bg-yellow-500 rounded-full flex items-center justify-center transition-all duration-300 group"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 group-hover:text-white transition-colors" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-base md:text-lg font-semibold mb-4 text-yellow-200">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <motion.li 
                  key={link}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 + index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <a
                    href={`#${link.toLowerCase().replace(' ', '')}`}
                    className="text-slate-200 hover:text-yellow-300 transition-colors text-sm flex items-center group"
                  >
                    <span className="w-1 h-1 bg-yellow-400 rounded-full mr-3 group-hover:w-2 transition-all"></span>
                    {link}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-base md:text-lg font-semibold mb-4 text-yellow-200">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <motion.li 
                  key={service}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <a
                    href="#"
                    className="text-slate-200 hover:text-yellow-300 transition-colors text-sm flex items-center group"
                  >
                    <span className="w-1 h-1 bg-yellow-400 rounded-full mr-3 group-hover:w-2 transition-all"></span>
                    {service}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-base md:text-lg font-semibold mb-4 text-yellow-200">Contact Info</h4>
            <div className="space-y-3">
              <motion.div 
                className="flex items-start space-x-3 group"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center mt-0.5 group-hover:bg-yellow-500 transition-colors">
                  <MapPin className="w-4 h-4 text-yellow-400 group-hover:text-white" />
                </div>
                <div>
                  <p className="text-slate-200 text-sm font-medium">Biratnagar</p>
                  <p className="text-slate-300 text-xs">Nepal - 56613</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-center space-x-3 group"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-yellow-500 transition-colors">
                  <Phone className="w-4 h-4 text-yellow-400 group-hover:text-white" />
                </div>
                <div>
                  <p className="text-slate-200 text-sm">+977 1-4417123</p>
                  <p className="text-slate-300 text-xs">+977 98765 43210</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-center space एस-x-3 group"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-yellow-500 transition-colors">
                  <Mail className="w-4 h-4 text-yellow-400 group-hover:text-white" />
                </div>
                <div>
                  <p className="text-slate-200 text-sm">info@namaskarregency.com</p>
                  <p className="text-slate-300 text-xs">booking@namaskarregency.com</p>
                </div>
              </motion.div>
            </div>

            {/* Facilities List */}
            <div className="mt-6">
              <h5 className="text-sm font-semibold mb-3 text-yellow-200">Facilities</h5>
              <div className="grid grid-cols-2 gap-1">
                {facilities.map((facility, index) => (
                  <div key={facility} className="flex items-center space-x-2">
                    <div className="w-1 h-1 bg-yellow-400 rounded-full"></div>
                    <span className="text-slate-300 text-xs">{facility}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Newsletter Signup */}
        <motion.div
          className="mt-8 lg:mt-12 pt-6 lg:pt-8 border-t border-white/10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="text-center">
            <h4 className="text-lg font-semibold mb-2 text-yellow-200">Stay Updated</h4>
            <p className="text Slate-300 text-sm mb-4 max-w-md mx-auto">
              Subscribe to our newsletter for exclusive offers and updates
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-sm"
              />
              <motion.button
                className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-yellow-600 hover:to-yellow-700 transition-all text-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-white/10 mt-6 lg:mt-8 pt-6 flex flex-col lg:flex-row justify-between items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-slate-300 text-xs mb-4 lg:mb-0 text-center lg:text-left">
            © 2025 Namaskar Regency. All rights reserved. | Crafted with heart for exceptional hospitality
          </p>
          <div className="flex flex-wrap justify-center lg:justify-end space-x-4 text-xs">
            <a href="#" className="text-slate-300 hover:text-yellow-300 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-slate-300 hover:text-yellow-300 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-slate-300 hover:text-yellow-300 transition-colors">
              Cookie Policy
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;