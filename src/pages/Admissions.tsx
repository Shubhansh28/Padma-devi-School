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

import {
  admissionProcess,
  requiredDocuments,
  feeFeatures,
  feeData,
  importantDates
} from '../data/admissionsData';
import { contactInfo } from '../data/homeData';

const Admissions = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

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
                <div className="glass-card p-8 rounded-2xl hover-lift transition-all duration-300 group border-2 border-white/40 hover:border-primary-300">
                  <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-3 -left-3 w-8 h-8 bg-primary-500 text-gray-900 rounded-full flex items-center justify-center font-bold text-sm">
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
      <section id="fees" className="relative py-24 bg-gradient-to-br from-[oklch(96.2%_0.059_95.617)] to-[oklch(76.5%_0.177_163.223)] overflow-hidden">
        {/* Dynamic Glowing Background Orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/40 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-1/4 w-[30rem] h-[30rem] bg-white/30 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-white/20 rounded-full blur-3xl"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-black font-display text-slate-900 mb-6 tracking-tight">
              Fee{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-indigo-600">
                Structure
              </span>
            </h2>
            <p className="text-xl text-slate-700 max-w-3xl mx-auto font-medium">
              Affordable quality education with transparent and flexible payment options
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {feeFeatures.map((feature, index) => (
              <div
                key={index}
                className="glass-card rounded-3xl p-8 hover-lift group border-white/50"
              >
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-black/10 group-hover:scale-110 transition-transform duration-500`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                {/* Content */}
                <h3 className="text-2xl font-bold font-display text-gray-900 mb-4 group-hover:text-accent-300 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-700 leading-relaxed font-light">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Fee Structure Preview */}
          <div className="glass-card rounded-3xl p-6 md:p-8 mb-12 relative overflow-hidden border-white/50">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-500 via-indigo-500 to-purple-500"></div>

            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold font-display text-slate-900 mb-2">Annual Fee Breakdown</h3>
              <p className="text-slate-600 text-sm font-medium">Indicative fees for the current academic year</p>
            </div>

            <div className="space-y-4">
              {feeData.map((item) => (
                <div key={item.id} className="bg-black/5 border border-black/5 rounded-xl p-4 hover:bg-black/10 transition-all duration-300 hover:shadow-xl hover:border-black/10 group">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500 shrink-0`}>
                        <span className="text-white font-black font-display text-xl">{item.id}</span>
                      </div>
                      <div>
                        <h4 className="font-bold font-display text-slate-900 text-lg mb-0.5">{item.class}</h4>
                        {!item.subStreams && (
                          <p className={`text-sm font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent opacity-90`}>
                            {item.fee}
                          </p>
                        )}
                      </div>
                    </div>

                    {!item.subStreams && (
                      <div className="md:text-right bg-white/50 rounded-lg px-4 py-2 border border-black/5">
                        <div className="text-[10px] text-slate-500 font-bold tracking-wide uppercase mb-0.5">Annual Fee</div>
                        <div className={`text-lg font-black font-display bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                          {item.fee}
                        </div>
                      </div>
                    )}
                  </div>

                  {item.subStreams && (
                    <div className="mt-4 pt-4 border-t border-black/5">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {item.subStreams.map((stream, index) => (
                          <div key={index} className="bg-white/50 rounded-xl p-4 border border-black/5 hover:border-black/10 transition-colors">
                            <h5 className="font-semibold text-sm text-slate-700 mb-1">{stream.name}</h5>
                            <p className={`text-lg font-black font-display bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
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

            <div className="mt-8 p-6 bg-teal-50/50 rounded-2xl border border-teal-200/50 backdrop-blur-md">
              <div className="flex flex-col gap-2">
                <p className="text-sm text-slate-700 flex items-start gap-3">
                  <span className="text-teal-600 mt-1">✦</span>
                  Fees are subject to change. Additional charges may apply for activities, transport, and other services.
                </p>
                <p className="text-sm text-slate-700 flex items-start gap-3">
                  <span className="text-teal-600 mt-1">✦</span>
                  Please note that fees vary depending on the specific branch.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center relative mt-20">
            <div className="absolute inset-0 bg-[oklch(70.7%_0.165_254.624)] blur-2xl opacity-40 rounded-[3rem]"></div>
            <div className="relative flex flex-col items-center gap-8 bg-[oklch(70.7%_0.165_254.624)] border border-white/30 rounded-[3rem] p-12 overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full blur-3xl mix-blend-overlay"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/20 rounded-full blur-3xl mix-blend-overlay"></div>
              <div className="relative z-10">
                <h3 className="text-3xl md:text-5xl font-black font-display text-white mb-4">Ready to Join Our Family?</h3>
                <p className="text-white/90 text-lg md:text-xl font-medium">Take the first step towards academic excellence.</p>
              </div>
              <button
                onClick={() => scrollToSection('contact')}
                className="relative z-10 group bg-white text-[oklch(70.7%_0.165_254.624)] px-10 py-5 rounded-full font-bold text-lg hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] transition-all duration-300 hover:scale-105 flex items-center gap-3"
              >
                Contact Admission Office
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Required Documents & Important Dates */}
      <section className="py-20 relative z-10">
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
                    className={`p-6 rounded-xl border-2 transition-all duration-300 ${date.status === 'completed'
                      ? 'bg-green-50 border-green-200'
                      : 'glass-card border-white/40 hover:border-primary-300'
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
                      <div className={`px-3 py-1 rounded-full text-xs font-medium ${date.status === 'completed'
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
      <section id="contact" className="py-20 bg-gradient-to-b from-[#023859] via-[#011C40] to-[#071822] text-white relative overflow-hidden">
        {/* Background Elements using Luna Color Palette */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-64 h-64 bg-[#A7EBF2]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#54ACBF]/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-[#26658C]/15 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-serif">
              Need Help with <span className="text-[#A7EBF2]">Admissions?</span>
            </h2>
            <p className="text-xl max-w-3xl mx-auto text-[#54ACBF] font-medium">
              Our admission team is here to assist you throughout the process
            </p>
          </div>

          {/* Contact Cards - Styled with Luna Color Palette */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-9">
            {contactInfo.map((contact, index) => (
              <div
                key={index}
                className="group bg-[#023859]/30 backdrop-blur-lg rounded-3xl p-8 border border-[#26658C]/30 hover:border-[#54ACBF]/50 transition-all duration-500 hover:-translate-y-2 shadow-2xl"
              >
                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#26658C] to-[#54ACBF] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md">
                    <contact.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[white]">
                    {contact.title}
                  </h3>
                </div>

                {/* Details */}
                <div className="space-y-4">
                  {contact.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex items-start gap-3">
                      <detail.icon className="w-5 h-5 text-[#54ACBF] mt-0.5 flex-shrink-0" />
                      <span className="text-slate-100 leading-relaxed text-sm sm:text-base">{detail.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Quick Actions (empty in layout placeholder) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"></div>

          {/* Bottom CTA - Styled with Luna Color Palette */}
          <div className="text-center mt-16">
            <div className="inline-flex items-center gap-6 bg-[#023859]/50 backdrop-blur-lg rounded-full px-8 py-4 border border-[#26658C]/40 shadow-xl">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 bg-gradient-to-r from-[#54ACBF] to-[#A7EBF2] rounded-full border-2 border-[#011C40] flex items-center justify-center text-[#011C40] font-bold text-sm shadow-md"
                  >
                    {i === 1 ? '📞' : i === 2 ? '✉️' : '💬'}
                  </div>
                ))}
              </div>
              <div className="text-left">
                <p className="font-semibold text-white">Multiple Ways to Reach Us</p>
                <p className="text-sm text-slate-200">Choose your preferred communication method</p>
              </div>
            </div>
          </div>
        </div> {/* This closing div tag for max-w-7xl is AFTER the contact cards and quick actions */}

        {/* Bottom smooth blend overlay to match footer start color exactly */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#071822] via-[#071822]/60 to-transparent pointer-events-none z-10" />
      </section>
    </motion.div>
  );
};

export default Admissions;