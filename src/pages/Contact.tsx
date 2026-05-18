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
  Building
} from 'lucide-react';

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

  const branches = [
    {
      name: 'Branch 1 (Main Campus)',
      address: 'Mini Talkies Road, Satyam Vihar Colony, Changurabhata, Raipur, Chhattisgarh 492013',
      phone: '7805992001 , 7805992004',
      // email: 'branch1@padmadevischool.edu.in',
      timings: 'Mon - Sat: 8:00 AM - 4:00 PM'
    },
    {
      name: 'Branch 2',
      address: 'Shanti Chowk, Purani Basti, Raipur, Chhattisgarh 492001',
      phone: '7805992001 , 7805992003',
      // email: 'branch2@padmadevischool.edu.in',
      timings: 'Mon - Sat: 8:00 AM - 4:00 PM'
    }
  ];

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone Numbers',
      details: ['7805992001', '7805992003', '7805992004'],
      color: 'from-blue-500 to-blue-700'
    },
    {
      icon: Mail,
      title: 'Email Address',
      details: ['pdps.school@gmail.com', 'admissions@padmadevischool.edu.in'],
      color: 'from-green-500 to-green-700'
    },
    {
      icon: Clock,
      title: 'Office Hours',
      details: ['Monday - Friday: 8:00 AM - 4:00 PM', 'Saturday: 8:00 AM - 2:00 PM'],
      color: 'from-purple-500 to-purple-700'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
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
      <section className="py-20 bg-white">
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

              {/* Map Placeholder */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="h-64 bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-16 h-16 text-primary-600 mx-auto mb-4" />
                    <p className="text-primary-700 font-medium">Interactive Map</p>
                    <p className="text-primary-600 text-sm">Click to view on Google Maps</p>
                  </div>
                </div>
              </div>

              {/* Branch Information */}
              <div className="space-y-6">
                {branches.map((branch, index) => (
                  <motion.div
                    key={index}
                    className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
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
