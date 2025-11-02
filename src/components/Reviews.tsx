import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Star, Quote, MapPin, Calendar } from 'lucide-react';

const Reviews = () => {
  const reviews = [
    {
      name: 'राम शर्मा',
      country: 'United States',
      rating: 5,
      date: 'December 2024',
      review: 'निकै असाधारण अनुभव! कर्मचारीहरू अत्यन्त स्वागतयोग्य थिए र कोठाहरू विलासी थिए। थमेलको स्थान काठमाडौं अन्वेषण गर्नको लागि उत्तम छ।',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'प्रिया थापा',
      country: 'India',
      rating: 5,
      date: 'October 2024',
      review: 'परम्परागत नेपाली आतिथ्य र आधुनिक सुविधाको उत्तम मिश्रण। हाम्रो सम्मेलनको लागि इभेन्ट हल राम्रोसँग सुसज्जित थियो र टोली अत्यन्त पेशेवर थियो।',
      avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'James Mitchell',
      country: 'United Kingdom',
      rating: 5,
      date: 'November 2024',
      review: 'Outstanding service and beautiful facilities. The restaurant serves amazing local cuisine. Will definitely return on my next visit to Nepal.',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'David Chen',
      country: 'Australia',
      rating: 5,
      date: 'September 2024',
      review: 'Exceeded all expectations! The attention to detail and personalized service made our honeymoon unforgettable. Highly recommend to anyone visiting Kathmandu.',
      avatar: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'Maria Rodriguez',
      country: 'Spain',
      rating: 5,
      date: 'August 2024',
      review: 'Fantastic location and superb amenities. The spa services were incredibly relaxing after long days of sightseeing. Staff goes above and beyond.',
      avatar: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'Robert Kim',
      country: 'South Korea',
      rating: 5,
      date: 'July 2024',
      review: 'Business traveler here - excellent conference facilities and reliable wifi. The business center and meeting rooms are top-notch. Great for corporate stays.',
      avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    }
  ];

  const controls = useAnimation();
  const displayTime = 4000; // 4 seconds per review
  const transitionTime = 800; // 0.8 seconds for transition

  useEffect(() => {
    let isMounted = true;

    const animateSlides = async () => {
      // Start at index 0
      await controls.start({
        x: '0%',
        transition: { duration: 0 }
      });

      while (isMounted) {
        for (let i = 0; i < reviews.length; i++) {
          if (!isMounted) break;

          // Animate to current review
          await controls.start({
            x: `-${i * 100}%`,
            transition: { duration: transitionTime / 1000, ease: 'easeInOut' }
          });

          // Wait for display time
          await new Promise(resolve => setTimeout(resolve, displayTime));
        }

        // Seamless loop: instantly reset to first slide after last
        if (isMounted) {
          await controls.start({
            x: '0%',
            transition: { duration: 0 }
          });
        }
      }
    };

    animateSlides();

    // Cleanup to prevent memory leaks
    return () => {
      isMounted = false;
    };
  }, [controls, reviews.length]);

  return (
    <section className="py-12 md:py-16 bg-gradient-to-br from-slate-50 via-white to-slate-50">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <motion.div
          className="text-center mb-8 md:mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl font-serif font-extrabold text-slate-800 mb-3 sm:mb-5 leading-snug tracking-tight"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true }}
          >
            What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-maroon-700 via-maroon-800 to-red-800">Guests Say</span>
          </motion.h2>
        </motion.div>

        {/* Reviews Slider */}
        <div className="overflow-hidden">
          <motion.div
            className="flex"
            animate={controls}
            style={{ width: `${reviews.length * 100}%` }}
          >
            {reviews.map((review, index) => (
              <motion.div
                key={`${review.name}-${index}`}
                className="bg-white rounded-2xl p-5 sm:p-6 shadow-lg border border-slate-100 bg-[linear-gradient(135deg,_rgba(255,255,255,0.95)_0%,_rgba(240,240,240,0.85)_100%)] flex items-center space-x-4 sm:space-x-6"
                style={{ width: `${100 / reviews.length}%`, flexShrink: 0 }}
              >
                {/* Avatar */}
                <div className="flex-shrink-0">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover border-2 border-yellow-200 shadow-sm"
                  />
                </div>

                {/* Review Content */}
                <div className="flex-1">
                  {/* Quote and Rating */}
                  <div className="flex justify-between items-start mb-3">
                    <Quote className="w-6 h-6 sm:w-7 sm:h-7 text-maroon-600/20 rotate-6" />
                    <div className="flex space-x-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>

                  {/* Review Text */}
                  <p className="text-sm sm:text-base text-slate-700 mb-4 leading-relaxed">
                    "{review.review}"
                  </p>

                  {/* Reviewer Info */}
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-base sm:text-lg font-semibold text-slate-800">{review.name}</h4>
                      <div className="flex items-center space-x-2 text-xs sm:text-sm text-slate-500">
                        <MapPin className="w-4 h-4" />
                        <span>{review.country}</span>
                        <Calendar className="w-4 h-4 ml-2" />
                        <span>{review.date}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-8 sm:mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true }}
        >
          <motion.button
            className="relative bg-gradient-to-r from-maroon-700 to-red-800 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden text-sm sm:text-base"
            whileHover={{ scale: 1.05, y: -3, boxShadow: '0 12px 24px rgba(120, 0, 0, 0.25)' }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-maroon-600 to-maroon-700 opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
            <span className="relative z-10">Share Your Experience</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Reviews;