import { Phone, Mail, Clock } from 'lucide-react';

export const baseBranches = [
  {
    name: 'Branch 1 (Main Campus)',
    address: 'Mini Talkies Road, Satyam Vihar Colony, Changurabhata, Raipur, Chhattisgarh 492013',
    phone: '7805992001 , 7805992004',
    timings: 'Mon - Sat: 8:00 AM - 4:00 PM',
    mapQueryOverride: '21.224551,81.599518' // Use exact coordinates until business is registered
  },
  {
    name: 'Branch 2',
    address: 'Shanti Chowk, Purani Basti, Raipur, Chhattisgarh 492001',
    phone: '7805992001 , 7805992003',
    timings: 'Mon - Sat: 8:00 AM - 4:00 PM',
  }
];

export const contactInfo = [
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
