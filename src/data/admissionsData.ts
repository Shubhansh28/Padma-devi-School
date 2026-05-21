import { FileText, Users, Clock, CreditCard, DollarSign, Calendar, Gift } from 'lucide-react';

export const admissionProcess = [
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

export const requiredDocuments = [
  'Birth Certificate (Original + 2 copies)',
  'Previous School Transfer Certificate',
  'Aadhar Card (Student + Parents)',
  'Passport Size Photographs (6 copies)',
];

export const feeFeatures = [
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

export const feeData = [
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

export const importantDates = [
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
  }
];
