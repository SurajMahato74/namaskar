import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      details: ['Mahendra Chowck , Biratnagar', 'Nepal - 44600']
    },
    {
      icon: Phone,
      title: 'Phone',
      details: ['+977 1-4417123', '+977 98765 43210']
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@namaskarregency.com', 'booking@namaskarregency.com']
    },
    {
      icon: Clock,
      title: 'Reception',
      details: ['24/7 Available', 'Round the clock service']
    }
  ];

  return (
    <section id="contact" className="py-16 bg-gray-100">
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
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-500">Touch</span>
          </h2>
          <p className="text-base text-slate-600 max-w-2xl mx-auto">
            Ready to experience luxury at Namaskar Regency? Contact us today.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-10 items-stretch">
          {/* Contact Information */}
          <motion.div
                className="flex flex-col h-full justify-between items-center text-center"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >

            <div className="space-y-4 flex-1 flex flex-col justify-between">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  className="bg-white rounded-xl p-4 border border-slate-200 flex-1"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-maroon-600 to-maroon-700 rounded-full flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-base font-semibold text-slate-800 mb-1">{info.title}</h3>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-slate-600 text-sm">{detail}</p>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="lg:col-span-2 flex flex-col h-full"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl h-full flex flex-col">
              <h3 className="text-xl font-serif font-bold text-slate-800 mb-6">
                Send us a Message
              </h3>
              
              <form className="space-y-4 flex-1 flex flex-col">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-700 font-medium mb-1 text-sm">First Name</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-maroon-500 focus:border-maroon-500 transition-all text-sm"
                      placeholder="Suraj"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-700 font-medium mb-1 text-sm">Last Name</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-maroon-500 focus:border-maroon-500 transition-all text-sm"
                      placeholder="Mahato"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-700 font-medium mb-1 text-sm">Email</label>
                    <input
                      type="email"
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-maroon-500 focus:border-maroon-500 transition-all text-sm"
                      placeholder="suraj@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-700 font-medium mb-1 text-sm">Phone</label>
                    <input
                      type="tel"
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-maroon-500 focus:border-maroon-500 transition-all text-sm"
                      placeholder="+977 98XXXXXXXX"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-700 font-medium mb-1 text-sm">Subject</label>
                  <select className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-maroon-500 focus:border-maroon-500 transition-all text-sm">
                    <option>Room Booking Inquiry</option>
                    <option>Event Booking</option>
                    <option>Restaurant Reservation</option>
                    <option>General Inquiry</option>
                  </select>
                </div>

                <div className="flex-1">
                  <label className="block text-slate-700 font-medium mb-1 text-sm">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-maroon-500 focus:border-maroon-500 transition-all resize-none text-sm h-full min-h-24"
                    placeholder="Tell us about your requirements..."
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  className="w-full bg-gradient-to-r from-maroon-600 to-maroon-700 text-white py-3 rounded-lg font-medium hover:from-maroon-700 hover:to-maroon-800 transition-all flex items-center justify-center space-x-2 mt-auto"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;