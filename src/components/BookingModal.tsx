import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Bed, Calendar, Users, Phone, Mail, Crown, CheckCircle } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialType?: 'room' | 'event';
}

interface RoomType {
  id: string;
  name: string;
  description: string;
  price: string;
  capacity: string;
  amenities: string[];
  image: string;
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, initialType = 'room' }) => {
  const [bookingType, setBookingType] = useState<'room' | 'event'>(initialType);
  const [formData, setFormData] = useState({
    checkIn: '',
    checkOut: '',
    guests: '1',
    eventDate: '',
    eventType: 'wedding',
    expectedGuests: '50',
    roomType: 'standard',
    contactName: '',
    contactPhone: '',
    contactEmail: '',
    specialRequests: '',
    callbackRequested: false
  });
  const [showAvailability, setShowAvailability] = useState(false);
  const [availableRooms] = useState<RoomType[]>([
    {
      id: 'standard',
      name: 'Standard Room',
      description: 'Comfortable room with modern amenities',
      price: 'Rs. 8,000',
      capacity: '1-2 Guests',
      amenities: ['Air Conditioning', 'WiFi', 'TV', 'Private Bathroom'],
      image: '/assets/images/singlebed.avif'
    },
    {
      id: 'deluxe',
      name: 'Deluxe Room',
      description: 'Spacious room with city view and premium amenities',
      price: 'Rs. 12,000',
      capacity: '2-3 Guests',
      amenities: ['Air Conditioning', 'WiFi', 'TV', 'City View', 'Mini Bar', 'Work Desk'],
      image: '/assets/images/roomdoublebed.avif'
    },
    {
      id: 'suite',
      name: 'Executive Suite',
      description: 'Luxury suite with separate living area',
      price: 'Rs. 18,000',
      capacity: '2-4 Guests',
      amenities: ['Air Conditioning', 'WiFi', 'TV', 'City View', 'Living Area', 'Mini Bar', 'Jacuzzi'],
      image: '/assets/images/bedroom.avif'
    }
  ]);

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleCheckAvailability = () => {
    setShowAvailability(true);
  };

  const handleRoomSelect = (roomType: string) => {
    setFormData(prev => ({ ...prev, roomType }));
  };

  const handleRequestCallback = () => {
    setFormData(prev => ({ ...prev, callbackRequested: true }));
    alert('Thank you! We will call you back within 30 minutes.');
    onClose();
  };

  const handleSubmitBooking = () => {
    // Here you would typically send the booking request to your backend
    alert('Booking request submitted successfully! We will contact you shortly to confirm.');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto"
          >
            {/* Header */}
            <div className="sticky top-0 bg-gradient-to-r from-maroon-700 to-maroon-800 text-white p-6 rounded-t-2xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                    <Crown className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold">Namaskar Regency</h2>
                    <p className="text-sm text-white/80">Luxury & Comfort Booking</p>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="w-8 h-8 bg-white/20 hover:bg-white/30 rounded-lg flex items-center justify-center transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="p-6 space-y-6">
              {/* Booking Type Toggle */}
              <div className="flex bg-gray-100 rounded-xl p-1">
                <button
                  onClick={() => setBookingType('room')}
                  className={`flex-1 flex items-center justify-center space-x-2 py-3 px-4 rounded-lg font-medium transition-all ${
                    bookingType === 'room'
                      ? 'bg-yellow-500 text-white shadow-md'
                      : 'text-gray-600 hover:text-gray-800'
                  }`}
                >
                  <Bed className="w-4 h-4" />
                  <span>Room Booking</span>
                </button>
                <button
                  onClick={() => setBookingType('event')}
                  className={`flex-1 flex items-center justify-center space-x-2 py-3 px-4 rounded-lg font-medium transition-all ${
                    bookingType === 'event'
                      ? 'bg-maroon-700 text-white shadow-md'
                      : 'text-gray-600 hover:text-gray-800'
                  }`}
                >
                  <Calendar className="w-4 h-4" />
                  <span>Event Booking</span>
                </button>
              </div>

              {/* Booking Form */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Left Column - Form Fields */}
                <div className="space-y-4">
                  {bookingType === 'room' ? (
                    <>
                      {/* Room Type Selection */}
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Room Type
                        </label>
                        <select
                          value={formData.roomType}
                          onChange={(e) => handleInputChange('roomType', e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                        >
                          <option value="standard">Standard Room - Rs. 8,000/night</option>
                          <option value="deluxe">Deluxe Room - Rs. 12,000/night</option>
                          <option value="suite">Executive Suite - Rs. 18,000/night</option>
                        </select>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Check-in Date
                          </label>
                          <input
                            type="date"
                            value={formData.checkIn}
                            onChange={(e) => handleInputChange('checkIn', e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Check-out Date
                          </label>
                          <input
                            type="date"
                            value={formData.checkOut}
                            onChange={(e) => handleInputChange('checkOut', e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Number of Guests
                        </label>
                        <select
                          value={formData.guests}
                          onChange={(e) => handleInputChange('guests', e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                        >
                          <option value="1">1 Guest</option>
                          <option value="2">2 Guests</option>
                          <option value="3">3 Guests</option>
                          <option value="4">4+ Guests</option>
                        </select>
                      </div>
                    </>
                  ) : (
                    <>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Event Date
                        </label>
                        <input
                          type="date"
                          value={formData.eventDate}
                          onChange={(e) => handleInputChange('eventDate', e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-maroon-500 focus:border-transparent"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Event Type
                        </label>
                        <select
                          value={formData.eventType}
                          onChange={(e) => handleInputChange('eventType', e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-maroon-500 focus:border-transparent"
                        >
                          <option value="wedding">Wedding</option>
                          <option value="corporate">Corporate Event</option>
                          <option value="conference">Conference</option>
                          <option value="party">Social Party</option>
                          <option value="birthday">Birthday Party</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Expected Guests
                        </label>
                        <select
                          value={formData.expectedGuests}
                          onChange={(e) => handleInputChange('expectedGuests', e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-maroon-500 focus:border-transparent"
                        >
                          <option value="50">Up to 50 guests</option>
                          <option value="100">Up to 100 guests</option>
                          <option value="200">Up to 200 guests</option>
                          <option value="300">300+ guests</option>
                        </select>
                      </div>
                    </>
                  )}

                  {/* Contact Information */}
                  <div className="border-t pt-4">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">Contact Information</h3>
                    
                    <div className="grid grid-cols-1 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Full Name
                        </label>
                        <input
                          type="text"
                          value={formData.contactName}
                          onChange={(e) => handleInputChange('contactName', e.target.value)}
                          placeholder="Enter your full name"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            value={formData.contactPhone}
                            onChange={(e) => handleInputChange('contactPhone', e.target.value)}
                            placeholder="+977 98XXXXXXXX"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Email Address
                          </label>
                          <input
                            type="email"
                            value={formData.contactEmail}
                            onChange={(e) => handleInputChange('contactEmail', e.target.value)}
                            placeholder="your@email.com"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Special Requests */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Special Requests (Optional)
                    </label>
                    <textarea
                      value={formData.specialRequests}
                      onChange={(e) => handleInputChange('specialRequests', e.target.value)}
                      placeholder="Any special requirements or requests..."
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Right Column - Available Rooms */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-800">Available Rooms</h3>
                    <button
                      onClick={handleCheckAvailability}
                      className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                    >
                      Check Availability
                    </button>
                  </div>

                  {showAvailability && (
                    <div className="space-y-3">
                      {availableRooms.map((room) => (
                        <motion.div
                          key={room.id}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
                            formData.roomType === room.id
                              ? 'border-yellow-500 bg-yellow-50'
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                          onClick={() => handleRoomSelect(room.id)}
                        >
                          <div className="flex items-start space-x-3">
                            <img
                              src={room.image}
                              alt={room.name}
                              className="w-16 h-16 object-cover rounded-lg"
                            />
                            <div className="flex-1">
                              <div className="flex items-center justify-between mb-1">
                                <h4 className="font-semibold text-gray-800">{room.name}</h4>
                                {formData.roomType === room.id && (
                                  <CheckCircle className="w-5 h-5 text-yellow-500" />
                                )}
                              </div>
                              <p className="text-sm text-gray-600 mb-2">{room.description}</p>
                              <div className="flex items-center justify-between">
                                <span className="text-sm font-medium text-green-600">{room.price}</span>
                                <span className="text-xs text-gray-500">{room.capacity}</span>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  )}

                  {/* Callback Request Section */}
                  <div className="border-t pt-4">
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <div className="flex items-start space-x-3">
                        <Phone className="w-5 h-5 text-blue-600 mt-0.5" />
                        <div className="flex-1">
                          <h4 className="font-semibold text-blue-800 mb-1">Request a Callback</h4>
                          <p className="text-sm text-blue-700 mb-3">
                            Prefer to speak with our booking team? We'll call you back within 30 minutes.
                          </p>
                          <button
                            onClick={handleRequestCallback}
                            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                          >
                            Request Callback
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-between border-t pt-6">
                <div className="text-sm text-gray-600">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Phone className="w-4 h-4" />
                      <span>+977 1-4417123</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Mail className="w-4 h-4" />
                      <span>info@namaskarregency.com</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex space-x-3">
                  <button
                    onClick={onClose}
                    className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleSubmitBooking}
                    className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                      bookingType === 'room'
                        ? 'bg-yellow-500 hover:bg-yellow-600 text-white'
                        : 'bg-maroon-700 hover:bg-maroon-800 text-white'
                    }`}
                  >
                    Submit Booking Request
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
};

export default BookingModal;