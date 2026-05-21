import React from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Instagram, 
  Youtube, 
  Twitter,
  Heart
} from 'lucide-react';

const Footer = () => {
  const branches = [
    {
      name: 'Branch 1',
      address: 'Mini Talkies Road, Satyam Vihar Colony, Changurabhata, Raipur, Chhattisgarh 492013'
    },
    {
      name: 'Branch 2', 
      address: 'Shanti Chowk, Purani Basti, Raipur, Chhattisgarh 492001'
    }
  ];

  const quickLinks = [
    'About Us',
    'Admissions',
    'Academic Calendar',
    'Fee Structure',
    'Gallery',
    'Contact Us'
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', color: 'hover:text-blue-600' },
    { icon: Instagram, href: '#', color: 'hover:text-pink-600' },
    { icon: Youtube, href: '#', color: 'hover:text-red-600' },
    { icon: Twitter, href: '#', color: 'hover:text-[#1a73e8]' },
  ];

  return (
    <footer className="bg-gradient-to-br from-primary-950 via-primary-900 to-primary-950 border-t border-primary-800 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* School Info */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-br from-primary-500 to-primary-700 p-3 rounded-xl">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Padma Devi Public School</h3>
                <p className="text-gray-300 text-sm">Excellence in Education</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Nurturing young minds with quality education, modern facilities, and holistic development 
              for over 25 years in Raipur, Chhattisgarh.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className={`p-2 bg-gray-700 rounded-lg transition-all duration-300 ${social.color}`}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-white">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-primary-500 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-white">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-primary-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">7805992001</p>
                  <p className="text-gray-300">7805992003</p>
                  <p className="text-gray-300">7805992004</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-primary-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300">pdps.school@gmail.com</p>
              </div>
            </div>
          </motion.div>

          {/* Branches */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-white">Our Branches</h3>
            <div className="space-y-4">
              {branches.map((branch, index) => (
                <div key={index} className="space-y-2">
                  <h4 className="font-semibold text-primary-400">{branch.name}</h4>
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-4 h-4 text-primary-400 mt-1 flex-shrink-0" />
                    <p className="text-gray-300 text-sm leading-relaxed">{branch.address}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © 2024 Padma Devi Public School. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm flex items-center">
              Made with <Heart className="w-4 h-4 text-red-500 mx-1" /> for education
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;