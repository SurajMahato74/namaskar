import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Camera, Image as ImageIcon } from 'lucide-react';

// Define interface for gallery image
interface GalleryImage {
  id: number;
  src: string;
  category: string;
  title: string;
  description: string;
}

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const categories = [
    { id: 'all', label: 'All Photos' },
    { id: 'rooms', label: 'Rooms & Suites' },
    { id: 'restaurant', label: 'Restaurant' },
    { id: 'events', label: 'Events' },
    { id: 'facilities', label: 'Facilities' }
  ];

  const galleryImages: GalleryImage[] = [
    {
      id: 1,
      src: '/assets/images/bed.avif',
      category: 'rooms',
      title: 'Deluxe Room Interior',
      description: 'Elegantly furnished deluxe room with modern amenities'
    },
    {
      id: 2,
      src: '/assets/images/hall.avif',
      category: 'events',
      title: 'Grand Event Hall',
      description: 'Spacious hall perfect for weddings and corporate events'
    },
    {
      id: 3,
      src: '/assets/images/restro.avif',
      category: 'restaurant',
      title: 'Fine Dining Restaurant',
      description: 'Elegant dining experience with authentic cuisine'
    },
    {
      id: 4,
      src: '/assets/images/tables.avif',
      category: 'restaurant',
      title: 'Restaurant Seating',
      description: 'Comfortable dining tables with premium ambiance'
    },
    {
      id: 5,
      src: '/assets/images/restroooposite.avif',
      category: 'restaurant',
      title: 'Restaurant View',
      description: 'Beautiful restaurant interior with modern design'
    },
    {
      id: 6,
      src: '/assets/images/bedroom.avif',
      category: 'rooms',
      title: 'Executive Suite',
      description: 'Luxurious bedroom with premium furnishing'
    },
    {
      id: 7,
      src: '/assets/images/roomdoublebed.avif',
      category: 'rooms',
      title: 'Double Bed Room',
      description: 'Comfortable double bed room for couples'
    },
    {
      id: 8,
      src: '/assets/images/singlebed.avif',
      category: 'rooms',
      title: 'Single Bed Room',
      description: 'Cozy single room perfect for solo travelers'
    },
    {
      id: 9,
      src: '/assets/images/seminar.jpeg',
      category: 'events',
      title: 'Seminar Hall',
      description: 'Professional seminar and conference facilities'
    },
    {
      id: 10,
      src: '/assets/images/weeding.jpeg',
      category: 'events',
      title: 'Wedding Celebration',
      description: 'Beautiful wedding setup with elegant decorations'
    }
  ];

  const filteredImages = activeCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  // Type image parameter as GalleryImage
  const openLightbox = (image: GalleryImage) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const nextImage = () => {
    if (!selectedImage) return;
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % filteredImages.length;
    setSelectedImage(filteredImages[nextIndex]);
  };

  const prevImage = () => {
    if (!selectedImage) return;
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    const prevIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    setSelectedImage(filteredImages[prevIndex]);
  };

  // Reset slider when category changes
  React.useEffect(() => {
    setCurrentSlide(0);
  }, [activeCategory]);

  return (
    <>
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            className="text-center mb-8 md:mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-slate-800 mb-2 md:mb-3">
              Hotel <span className="text-transparent bg-clip-text bg-gradient-to-r from-maroon-700 to-red-800">Gallery</span>
            </h2>
            <p className="text-sm md:text-base text-slate-600 max-w-2xl mx-auto mb-6 md:mb-8">
              Explore our beautiful spaces and experience 
            </p>

            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-2 md:gap-3">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-3 md:px-4 py-2 rounded-lg text-xs md:text-sm font-medium transition-all ${
                    activeCategory === category.id
                      ? 'bg-gradient-to-r from-maroon-700 to-red-800 text-white shadow-md'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category.label}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Mobile Slider */}
          <div className="block sm:hidden">
            <div className="relative overflow-hidden rounded-xl">
              <div 
                ref={sliderRef}
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {filteredImages.map((image, index) => (
                  <div key={image.id} className="w-full flex-shrink-0">
                    <div 
                      className="group relative overflow-hidden cursor-pointer"
                      onClick={() => openLightbox(image)}
                    >
                      <div className="aspect-[4/3] overflow-hidden">
                        <img
                          src={image.src}
                          alt={image.title}
                          loading="lazy"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent">
                        <div className="absolute bottom-0 left-0 right-0 p-4">
                          <h3 className="text-white font-semibold text-sm mb-1">{image.title}</h3>
                          <p className="text-white/80 text-xs">{image.description}</p>
                        </div>
                        <div className="absolute top-3 right-3 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                          <Camera className="w-4 h-4 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Navigation Arrows */}
              {filteredImages.length > 1 && (
                <>
                  <button
                    onClick={() => setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : filteredImages.length - 1)}
                    className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setCurrentSlide(currentSlide < filteredImages.length - 1 ? currentSlide + 1 : 0)}
                    className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </>
              )}
              
              {/* Dots Indicator */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                {filteredImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      currentSlide === index ? 'bg-white w-6' : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Desktop Grid */}
          <motion.div 
            className="hidden sm:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-4"
            layout
          >
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -5, scale: 1.02 }}
                onClick={() => openLightbox(image)}
                layout
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4">
                    <h3 className="text-white font-semibold text-xs md:text-sm mb-1">{image.title}</h3>
                    <p className="text-white/80 text-xs leading-relaxed">{image.description}</p>
                  </div>
                  
                  <div className="absolute top-3 right-3 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <Camera className="w-4 h-4 text-white" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Stats */}
          {/* <motion.div
            className="text-center mt-8 md:mt-12 p-4 md:p-6 bg-gradient-to-r from-slate-50 to-slate-100 rounded-xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center space-x-6 md:space-x-8">
              <div className="text-center">
                <div className="flex items-center justify-center space-x-2 mb-1">
                  <ImageIcon className="w-4 h-4 md:w-5 md:h-5 text-maroon-700" />
                  <span className="text-lg md:text-xl font-bold text-slate-800">{galleryImages.length}+</span>
                </div>
                <p className="text-xs md:text-sm text-slate-600">Photos</p>
              </div>
              
              <div className="text-center">
                <div className="flex items-center justify-center space-x-2 mb-1">
                  <Camera className="w-4 h-4 md:w-5 md:h-5 text-maroon-700" />
                  <span className="text-lg md:text-xl font-bold text-slate-800">5</span>
                </div>
                <p className="text-xs md:text-sm text-slate-600">Categories</p>
              </div>
            </div>
          </motion.div> */}
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <motion.div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors z-60"
            onClick={closeLightbox}
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation Buttons */}
          <button
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors z-60"
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors z-60"
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Image */}
          <motion.div
            className="max-w-5xl max-h-[85vh] mx-auto"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
            />
            
            {/* Image Info */}
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 mt-4 text-center">
              <h3 className="text-white font-semibold text-lg mb-2">{selectedImage.title}</h3>
              <p className="text-white/80 text-sm">{selectedImage.description}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default Gallery;