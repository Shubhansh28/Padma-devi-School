import React from 'react';
import { motion } from 'framer-motion';
import { 
  Target, 
  Eye, 
  Heart, 
  Users, 
  Award, 
  BookOpen,
  Star,
  CheckCircle,
  Lightbulb,
  Globe
} from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'Striving for the highest standards in education and character development'
    },
    {
      icon: Heart,
      title: 'Compassion',
      description: 'Fostering empathy, kindness, and understanding in all our interactions'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Embracing modern teaching methods and technology for effective learning'
    },
    {
      icon: Globe,
      title: 'Global Perspective',
      description: 'Preparing students to be responsible global citizens'
    }
  ];

  const achievements = [
    'CG Affiliation with Outstanding Performance',
    'State-level Sports Championships',
    'Cultural Excellence Awards',
    '97% Board Exam Pass Rate',
    'Digital Learning Pioneer School'
  ];

  const faculty = [
    {
      name: 'Mr. Shivam Kesharwani',
      position: 'Chair Person',
      qualification: 'Ph.D. in Education, M.Ed.',
      experience: '30+ years',
      image: 'https://res.cloudinary.com/dtwsktjgj/image/upload/c_fill,g_face,h_256,w_384/shivam_gupta_website_ur3a0s?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Mrs. Vinita Kesharwani',
      position: 'Director',
      qualification: 'M.Sc., B.Ed.',
      experience: '15+ years',
      image: 'https://res.cloudinary.com/dtwsktjgj/image/upload/e_improve/v1751728446/WhatsApp_Image_2025-07-05_at_20.38.49_cbe969b7_zm0dsj.jpg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Mrs. Ranjana Thakur',
      position: 'Principal',
      qualification: 'B.A., M.A., B.Ed.',
      experience: '15+ years',
      image: 'https://res.cloudinary.com/dtwsktjgj/image/upload/f_auto/ranjana_madam_website_img_o94xjt?_a=BAMAK+a60?auto=compress&cs=tinysrgb&w=400'
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
              About <span className="text-secondary-300">Padma Devi Public School</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
              A legacy of educational excellence spanning over 10 years, 
              committed to nurturing young minds and building future leaders.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-primary-50 to-blue-50 p-8 rounded-2xl">
                <div className="flex items-center mb-6">
                  <div className="bg-primary-500 p-3 rounded-xl mr-4">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  To provide quality education that empowers students with knowledge, skills, and values 
                  necessary for success in an ever-changing world. We are committed to fostering critical 
                  thinking, creativity, and character development in a nurturing environment.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-secondary-50 to-orange-50 p-8 rounded-2xl">
                <div className="flex items-center mb-6">
                  <div className="bg-secondary-500 p-3 rounded-xl mr-4">
                    <Eye className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  To be a leading educational institution that inspires lifelong learning, 
                  develops global citizens, and creates positive change in society. We envision 
                  our students as confident, compassionate, and capable individuals ready to face future challenges.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Core <span className="text-primary-600">Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do at Padma Devi Public School
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="bg-gradient-to-br from-primary-500 to-primary-700 w-16 h-16 rounded-xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* History & Achievements */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our <span className="text-primary-600">Journey</span>
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Established in 2015, Padma Devi Public School has been a beacon of educational 
                excellence in Raipur, Chhattisgarh. What started as a small institution with 
                a vision to provide quality education has grown into one of the most respected 
                schools in the region.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Over the years, we have consistently evolved our teaching methodologies, 
                infrastructure, and programs to meet the changing needs of education while 
                maintaining our core values of excellence, integrity, and compassion.
              </p>
              
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Achievements</h3>
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <CheckCircle className="w-5 h-5 text-accent-500 flex-shrink-0" />
                    <span className="text-gray-700">{achievement}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="School Building"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/50 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">10+ Years of Excellence</h3>
                  <p className="text-white/90">Building futures, one student at a time</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our <span className="text-primary-600">Leadership</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the dedicated professionals who guide our educational mission
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {faculty.map((member, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-primary-600 font-medium mb-2">{member.position}</p>
                  <p className="text-gray-600 text-sm mb-1">{member.qualification}</p>
                  <p className="text-gray-500 text-sm">{member.experience} in Education</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;