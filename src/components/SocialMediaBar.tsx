import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Youtube, Twitter, Linkedin, MessageCircle } from 'lucide-react';

// Main App Component to display the SocialMediaBar
export default function App() {
  return (<SocialMediaBar />)
}

// The fixed and improved SocialMediaBar component
const SocialMediaBar = () => {
  const socialLinks = [
    {
      name: 'Facebook',
      icon: Facebook,
      url: 'https://facebook.com/padmadevischool',
      color: 'bg-blue-600',
      hoverColor: 'hover:bg-blue-700',
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://www.instagram.com/pdps_32/',
      color: 'bg-pink-600',
      hoverColor: 'hover:bg-pink-700',
    },
    {
      name: 'YouTube',
      icon: Youtube,
      url: 'https://www.youtube.com/@padmadevipublicschool801',
      color: 'bg-red-600',
      hoverColor: 'hover:bg-red-700',
    },
    {
      name: 'Twitter',
      icon: Twitter,
      url: 'https://twitter.com/padmadevischool',
      color: 'bg-sky-500',
      hoverColor: 'hover:bg-sky-600',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://linkedin.com/company/padmadevischool',
      color: 'bg-blue-700',
      hoverColor: 'hover:bg-blue-800',
    },
    {
      name: 'WhatsApp',
      icon: MessageCircle,
      url: 'https://wa.me/917805992001',
      color: 'bg-green-500',
      hoverColor: 'hover:bg-green-600',
    }
  ];

  return (
    // Container is now fixed to the right side on all screen sizes.
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50">
      {/* Flex container is now always a vertical column. */}
      <div className="flex flex-col space-y-1">
        {socialLinks.map((social) => (
          <div
            key={social.name}
            className="group relative"
          >
            <a
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`
                flex items-center justify-center w-14 h-14 text-white
                transition-all duration-300 ease-in-out
                ${social.color} ${social.hoverColor}
                shadow-md
                rounded-l-2xl rounded-r-none
                hover:-translate-x-2 hover:shadow-lg
              `}
              title={`Follow us on ${social.name}`}
              // Adding will-change hints to the browser for smoother animations
              style={{ willChange: 'transform' }}
            >
              <social.icon className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
            </a>

            {/* Hover Label for Desktop (hidden on mobile as hover is not a standard mobile interaction) */}
            <div 
              className="hidden lg:block absolute right-full mr-4 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0 whitespace-nowrap pointer-events-none"
              // Adding will-change hints to the browser for smoother animations
              style={{ willChange: 'opacity, transform' }}
            >
              <span className="font-medium">{social.name}</span>
              {/* Arrow pointing to the icon */}
              <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-gray-900"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
