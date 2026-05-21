import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  User,
  MessageSquare,
  Building,
  ExternalLink
} from 'lucide-react';

import { baseBranches, contactInfo } from '../data/contactData';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { name, phone, email, subject, message } = formData;

    const whatsappMessage = `Hello Padma Devi Public School,%0A%0A*Name:* ${name}%0A*Phone:* ${phone}%0A*Email:* ${email}%0A*Subject:* ${subject}%0A*Message:* ${message}`;
    const whatsappUrl = `https://wa.me/917805992001?text=${whatsappMessage}`;

    window.open(whatsappUrl, '_blank');
  };

  const [activeMap, setActiveMap] = useState(0);

  // Dynamically generate map URLs from the addresses so we don't hardcode messy URLs
  // Using address search queries ensures the Google Maps place card appears from the start
  const branches = baseBranches.map(branch => {
    // If a specific override is provided (like coordinates), use that instead of the address string
    const queryText = branch.mapQueryOverride || `Padma Devi Public School ${branch.address}`;
    const searchQuery = encodeURIComponent(queryText);
    
    // Use zoom level 16 for better visibility, especially when using coordinates
    return {
      ...branch,
      mapEmbed: `https://maps.google.com/maps?q=${searchQuery}&t=&z=16&ie=UTF8&iwloc=&output=embed`,
      mapLink: `https://www.google.com/maps/search/${searchQuery}`
    };
  });

  return (
    <motion.div
      initial={{ opacity: 0, filter: 'blur(10px)', y: 20 }}
      animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
      exit={{ opacity: 0, filter: 'blur(10px)', y: -20 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="pt-20"
    >
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold font-serif mb-6">
              Get in <span className="text-secondary-300">Touch</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
              We're here to help you with any questions about admissions, 
              academics, or our school programs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Contact <span className="text-primary-600">Information</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Multiple ways to reach us for your convenience
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-blue-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${info.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <info.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{info.title}</h3>
                <div className="space-y-2">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600">{detail}</p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Send us a <span className="text-primary-600">Message</span>
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                        placeholder="Enter your full name"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                      placeholder="Enter your email address"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Select a subject</option>
                    <option value="admission">Admission Inquiry</option>
                    <option value="academic">Academic Information</option>
                    <option value="fees">Fee Structure</option>
                    <option value="transport">Transportation</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="Enter your message here..."
                    ></textarea>
                  </div>
                </div>

                <motion.button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary-500 to-primary-700 text-white py-4 px-6 rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </motion.button>
              </form>
            </motion.div>

            {/* Map & Branch Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-3xl font-bold text-gray-900">
                Our <span className="text-primary-600">Locations</span>
              </h2>

              {/* Interactive Map */}
              <div className="glass-card rounded-2xl overflow-hidden">
                {/* Branch Tabs */}
                <div className="flex border-b border-gray-200">
                  {branches.map((branch, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveMap(i)}
                      className={`flex-1 px-4 py-3 text-sm font-semibold transition-all duration-300 ${
                        activeMap === i
                          ? 'bg-primary-600 text-white'
                          : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      <MapPin className="w-4 h-4 inline-block mr-1 -mt-0.5" />
                      {branch.name}
                    </button>
                  ))}
                </div>

                {/* Map Embed */}
                <div className="relative h-72">
                  <iframe
                    key={activeMap}
                    src={branches[activeMap].mapEmbed}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`Map - ${branches[activeMap].name}`}
                    className="absolute inset-0 z-0"
                  />
                  
                  {/* Custom 'Open in Maps' Overlay (fixes missing place card for coordinates) */}
                  <a
                    href={branches[activeMap].mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-2.5 left-2.5 z-50 glass-card px-3 py-2 rounded shadow-md text-[#1a73e8] font-medium text-[13px] flex items-center gap-1.5 hover:bg-gray-50 transition-colors cursor-pointer"
                  >
                    Open in Maps
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

                {/* Open in Google Maps link */}
                <a
                  href={branches[activeMap].mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-3 bg-gray-50 text-primary-600 font-medium text-sm hover:bg-primary-50 transition-colors duration-300"
                >
                  <MapPin className="w-4 h-4" />
                  Open in Google Maps
                </a>
              </div>

              {/* Branch Information */}
              <div className="space-y-6">
                {branches.map((branch, index) => (
                  <motion.div
                    key={index}
                    className="glass-card p-6 rounded-xl hover-lift transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary-100 p-3 rounded-lg">
                        <Building className="w-6 h-6 text-primary-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{branch.name}</h3>
                        <div className="space-y-2 text-gray-600">
                          <div className="flex items-start space-x-2">
                            <MapPin className="w-4 h-4 mt-1 text-primary-500 flex-shrink-0" />
                            <p className="text-sm">{branch.address}</p>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Phone className="w-4 h-4 text-primary-500" />
                            <p className="text-sm">{branch.phone}</p>
                          </div>
                          {/* <div className="flex items-center space-x-2">
                            <Mail className="w-4 h-4 text-primary-500" />
                            <p className="text-sm">{branch.email}</p>
                          </div> */}
                          <div className="flex items-center space-x-2">
                            <Clock className="w-4 h-4 text-primary-500" />
                            <p className="text-sm">{branch.timings}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Contact;
