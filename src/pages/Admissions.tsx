import React from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  FileText, 
  Users, 
  CreditCard, 
  CheckCircle, 
  Clock,
  Download,
  Phone,
  Mail,
  MapPin,
  AlertCircle,
  MessageCircle,
  Globe, DollarSign, Gift, ArrowRight
} from 'lucide-react';

const Admissions = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  
  const admissionProcess = [
    {
      step: 1,
      title: 'Application Form',
      description: 'Fill out the online application form or collect from school office',
      icon: FileText,
      color: 'from-blue-500 to-blue-700'
    },
    {
      step: 2,
      title: 'Document Submission',
      description: 'Submit required documents along with the application',
      icon: Users,
      color: 'from-green-500 to-green-700'
    },
    {
      step: 3,
      title: 'Interaction/Assessment',
      description: 'Student interaction and assessment (for applicable classes)',
      icon: Clock,
      color: 'from-purple-500 to-purple-700'
    },
    {
      step: 4,
      title: 'Fee Payment',
      description: 'Complete the admission by paying the required fees',
      icon: CreditCard,
      color: 'from-orange-500 to-orange-700'
    }
  ];

  const requiredDocuments = [
    'Birth Certificate (Original + 2 copies)',
    'Previous School Transfer Certificate',
    // 'Previous School Report Card/Mark Sheet',
    'Aadhar Card (Student + Parents)',
    'Passport Size Photographs (6 copies)',
    // 'Caste Certificate (if applicable)',
    // 'Income Certificate (if applicable)',
    // 'Medical Certificate'
  ];

 const feeFeatures = [
    {
      icon: DollarSign,
      title: 'Transparent Pricing',
      description: 'No hidden charges. All fees are clearly mentioned with detailed breakdown available.',
      color: 'from-emerald-500 to-teal-500'
    },
    {
      icon: Calendar,
      title: 'Flexible Payment',
      description: 'Multiple payment options including quarterly, half-yearly, and annual payment plans.',
      color: 'from-blue-500 to-indigo-500'
    },
    {
      icon: Gift,
      title: 'Scholarships Available',
      description: 'Merit-based scholarships and financial assistance for deserving students.',
      color: 'from-purple-500 to-violet-500'
    }
  ];

  const feeData = [
    { 
      id: 1, 
      class: 'Pre-Primary', 
      fee: '₹10,500 - ₹13,300', 
      color: 'from-pink-500 to-rose-500',
      bgColor: 'bg-pink-50',
      borderColor: 'border-pink-200'
    },
    { 
      id: 2, 
      class: 'Primary (I-V)', 
      fee: '₹12,100 - ₹16,200', 
      color: 'from-blue-500 to-indigo-500',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200'
    },
    { 
      id: 3, 
      class: 'Middle (VI-VIII)', 
      fee: '₹14,000 - ₹19,400', 
      color: 'from-emerald-500 to-teal-500',
      bgColor: 'bg-emerald-50',
      borderColor: 'border-emerald-200'
    },
    { 
      id: 4, 
      class: 'Secondary (IX-X)', 
      fee: '₹15,500 - ₹20,000', 
      color: 'from-purple-500 to-violet-500',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200'
    },
    { 
      id: 5, 
      class: 'Senior Secondary (XI-XII)', 
      subStreams: [
        { name: 'Mathematics Stream', fee: '₹21,900 - ₹23,000' },
        { name: 'Biology Stream', fee: '₹21,900 - ₹23,000' },
        { name: 'Commerce Stream', fee: '₹21,500 - ₹23000' }
      ],
      color: 'from-indigo-500 to-purple-500',
      bgColor: 'bg-indigo-50',
      borderColor: 'border-indigo-200'
    }
  ];

  const importantDates = [
    {
      event: 'Admission Open',
      date: 'march 15, 2025',
      status: 'completed'
    },
    {
      event: 'Last Date for Admission',
      date: 'March 31, 2024',
      status: 'upcoming'
    },
    {
      event: 'New Academic Session Begins',
      date: 'April 1-15, 2024',
      status: 'upcoming'
    },
    // {
    //   event: 'Result Declaration',
    //   date: 'April 20, 2024',
    //   status: 'upcoming'
    // },
    // {
    //   event: 'Admission Confirmation',
    //   date: 'April 25, 2024',
    //   status: 'upcoming'
    // }
  ];

  const contactInfo = [
    {
      title: 'Branch 1 - Main Campus',
      icon: MapPin,
      details: [
        { icon: MapPin, text: 'Mini Talkies Road, Satyam Vihar Colony, Changurabhata, Raipur, Chhattisgarh 492013' },
        { icon: Phone, text: '7805992001 | 7805992004' },
        { icon: Clock, text: 'Mon-Sat: 8:00 AM - 4:00 PM' }
      ],
      color: 'from-blue-500 to-indigo-500'
    },
    {
      title: 'Branch 2 - City Campus',
      icon: MapPin,
      details: [
        { icon: MapPin, text: 'Shanti Chowk, Purani Basti, Raipur, Chhattisgarh 492001' },
        { icon: Phone, text: '7805992001 | 7805992003' },
        { icon: Clock, text: 'Mon-Sat: 8:00 AM - 4:00 PM' }
      ],
      color: 'from-emerald-500 to-teal-500'
    },
    {
      title: 'Quick Contact',
      icon: MessageCircle,
      details: [
        { icon: Mail, text: 'pdps.school@gmail.com' },
        { icon: Globe, text: 'www.padmadevischool.edu.in' },
        { icon: MessageCircle, text: 'WhatsApp: 7805992001' }
      ],
      color: 'from-purple-500 to-violet-500'
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
              <span className="text-secondary-300">Admissions</span> Open
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed mb-8">
              Join our school family and embark on a journey of academic excellence, 
              character development, and lifelong learning.
            </p>
            <motion.button
              className="bg-gradient-to-r from-secondary-500 to-secondary-600 text-primary-900 px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Enquiry Now
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Admission Process */}
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
              Admission <span className="text-primary-600">Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Follow these simple steps to secure your child's admission at Padma Devi Public School
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {admissionProcess.map((step, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group border-2 border-gray-100 hover:border-primary-200">
                  <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-3 -left-3 w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
                {index < admissionProcess.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gray-300"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Fee Structure */}
      <section id="fees" className="py-20 bg-gradient-to-br from-indigo-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Fee{' '}
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Structure
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Affordable quality education with flexible payment options
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {feeFeatures.map((feature, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 relative overflow-hidden"
            >
              {/* Background Decoration */}
              <div className="absolute top-0 right-0 w-24 h-24 opacity-10">
                <div className={`w-full h-full bg-gradient-to-br ${feature.color} rounded-full blur-xl`}></div>
              </div>

              {/* Icon */}
              <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-indigo-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Fee Structure Preview By Shubh */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 mb-12">
      <div className="text-center mb-12">
        <h3 className="text-3xl font-bold text-gray-900 mb-4">Fee Structure</h3>
        <p className="text-gray-600 text-lg">Indicative fees for different classes (Annual)</p>
      </div>
      
      <div className="space-y-6">
        {feeData.map((item) => (
          <div key={item.id} className={`${item.bgColor} ${item.borderColor} border-2 rounded-2xl p-6 hover:shadow-lg transition-all duration-300`}>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className={`w-14 h-14 bg-gradient-to-r ${item.color} rounded-xl flex items-center justify-center shadow-lg`}>
                  <span className="text-white font-bold text-xl">{item.id}</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-xl mb-1">{item.class}</h4>
                  {!item.subStreams && (
                    <p className={`text-2xl font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                      {item.fee}
                    </p>
                  )}
                </div>
              </div>
              
              {!item.subStreams && (
                <div className="text-right">
                  <div className="text-sm text-gray-500 mb-1">Annual Fee</div>
                  <div className={`text-3xl font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                    {item.fee}
                  </div>
                </div>
              )}
            </div>
            
            {item.subStreams && (
              <div className="mt-6 pl-18">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {item.subStreams.map((stream, index) => (
                    <div key={index} className="bg-white rounded-xl p-4 border border-gray-200 hover:shadow-md transition-shadow">
                      <h5 className="font-semibold text-gray-800 mb-2">{stream.name}</h5>
                      <p className={`text-xl font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                        {stream.fee}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      
      <div className="mt-8 p-4 bg-gray-50 rounded-xl">
        <p className="text-sm text-gray-600 text-center">
          * Fees are subject to change. Additional charges may apply for activities, transport, and other services.
        </p>
        <p className="text-sm text-gray-600 text-center">
          * Please note that fees vary depending on the specific branch..
        </p>
      </div>
    </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="inline-flex flex-col items-center gap-6 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-3xl p-8 text-white">
            <div>
              <h3 className="text-2xl font-bold mb-2">Ready to Join Our School Family?</h3>
              <p className="text-blue-100 mb-6">Get detailed fee structure and payment options</p>
            </div>
            <button
              onClick={() => scrollToSection('contact')}
              className="group bg-white text-indigo-600 hover:bg-gray-50 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 flex items-center gap-2"
            >
              Contact Admission Office
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
    </section>

      {/* Required Documents & Important Dates */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Required Documents */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Required <span className="text-primary-600">Documents</span>
              </h2>
              <div className="bg-gradient-to-br from-primary-50 to-blue-50 p-8 rounded-2xl">
                <div className="space-y-4">
                  {requiredDocuments.map((document, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center space-x-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <CheckCircle className="w-5 h-5 text-accent-500 flex-shrink-0" />
                      <span className="text-gray-700">{document}</span>
                    </motion.div>
                  ))}
                </div>
                <motion.button
                  className="mt-8 bg-gradient-to-r from-primary-500 to-primary-700 text-white px-6 py-3 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 flex items-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download Document Checklist
                </motion.button>
              </div>
            </motion.div>

            {/* Important Dates */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Important <span className="text-primary-600">Dates</span>
              </h2>
              <div className="space-y-4">
                {importantDates.map((date, index) => (
                  <motion.div
                    key={index}
                    className={`p-6 rounded-xl border-2 transition-all duration-300 ${
                      date.status === 'completed' 
                        ? 'bg-green-50 border-green-200' 
                        : 'bg-white border-gray-200 hover:border-primary-300'
                    }`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-bold text-gray-900 mb-1">{date.event}</h3>
                        <p className="text-gray-600 flex items-center">
                          <Calendar className="w-4 h-4 mr-2" />
                          {date.date}
                        </p>
                      </div>
                      <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                        date.status === 'completed' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-orange-100 text-orange-800'
                      }`}>
                        {date.status === 'completed' ? 'Completed' : 'Upcoming'}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Added by shubh */}
     <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 via-indigo-900 to-blue-900 text-white relative overflow-hidden">
    {/* Background Elements */}
    <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-indigo-500/10 rounded-full blur-3xl"></div>
    </div>

    <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Need Help with <span className="text-secondary-300">Admissions?</span>
            </h2>
            <p className="text-xl max-w-3xl mx-auto opacity-90">
                Our admission team is here to assist you throughout the process
            </p>
        </div>

        {/* Contact Cards - THIS IS THE SECTION THAT NEEDS TO BE INSIDE THE max-w-7xl div */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-9">
            {contactInfo.map((contact, index) => (
                <div
                    key={index}
                    className="group bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-500 hover:-translate-y-2"
                >
                    {/* Header */}
                    <div className="flex items-center gap-4 mb-6">
                        <div className={`w-12 h-12 bg-gradient-to-r ${contact.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                            <contact.icon className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-yellow-400">
                            {contact.title}
                        </h3>
                    </div>

                    {/* Details */}
                    <div className="space-y-4">
                        {contact.details.map((detail, detailIndex) => (
                            <div key={detailIndex} className="flex items-start gap-3">
                                <detail.icon className="w-5 h-5 text-blue-300 mt-0.5 flex-shrink-0" />
                                <span className="text-blue-100 leading-relaxed">{detail.text}</span>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
        
        {/* Quick Actions (this div was empty in your provided code, likely placeholder) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"></div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
            <div className="inline-flex items-center gap-6 bg-white/10 backdrop-blur-lg rounded-full px-8 py-4 border border-white/20">
                <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                        <div
                            key={i}
                            className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full border-2 border-white flex items-center justify-center text-white font-bold"
                        >
                            {i === 1 ? '📞' : i === 2 ? '✉️' : '💬'}
                        </div>
                    ))}
                </div>
                <div className="text-left">
                    <p className="font-semibold text-yellow-400">Multiple Ways to Reach Us</p>
                    <p className="text-sm text-blue-100">Choose your preferred communication method</p>
                </div>
            </div>
        </div>
    </div> {/* This closing div tag for max-w-7xl should be AFTER the contact cards and quick actions */}
</section>
    </motion.div>
  );
};

export default Admissions;