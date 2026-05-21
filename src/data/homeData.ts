import {
  Building2, Users, Trophy, Microscope, BookOpen, Monitor,
  Star, Award, Heart, Target, MapPin, Phone, Clock, MessageCircle, Mail, Globe, Palette
} from 'lucide-react';

export const galleryCards = [
  {
    title: 'Beautiful Campus',
    description: 'Explore our modern and well-maintained campus facilities',
    icon: Building2,
    category: 'campus',
    image: 'https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=800',
    color: 'from-blue-500 to-blue-700'
  },
  {
    title: 'Cultural Programs',
    description: 'Vibrant cultural events and celebrations throughout the year',
    icon: Users,
    category: 'events',
    image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=800',
    color: 'from-purple-500 to-purple-700'
  },
  {
    title: 'Sports & Games',
    description: 'Comprehensive sports facilities and athletic programs',
    icon: Trophy,
    category: 'sports',
    image: 'https://images.pexels.com/photos/163444/sport-treadmill-tor-route-163444.jpeg?auto=compress&cs=tinysrgb&w=800',
    color: 'from-green-500 to-green-700'
  },
  {
    title: 'Science Labs',
    description: 'State-of-the-art laboratories for hands-on learning',
    icon: Microscope,
    category: 'labs',
    image: 'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=800',
    color: 'from-red-500 to-red-700'
  },
  {
    title: 'Library & Reading',
    description: 'Extensive collection of books and digital resources',
    icon: BookOpen,
    category: 'library',
    image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=800',
    color: 'from-yellow-500 to-orange-600'
  },
  {
    title: 'Smart Classrooms',
    description: 'Technology-enabled learning environments',
    icon: Monitor,
    category: 'classrooms',
    image: 'https://promark.co.in/wp-content/uploads/2024/01/smart-classroom-2000x1125.jpg',
    color: 'from-indigo-500 to-indigo-700'
  }
];

export const features = [
  {
    icon: Star,
    title: 'Excellence in Education',
    description: 'CBSE affiliated curriculum with focus on holistic development'
  },
  {
    icon: Award,
    title: 'Experienced Faculty',
    description: 'Qualified and dedicated teachers committed to student success'
  },
  {
    icon: Heart,
    title: 'Nurturing Environment',
    description: 'Safe and supportive atmosphere for learning and growth'
  },
  {
    icon: Target,
    title: 'Individual Attention',
    description: 'Small class sizes ensuring personalized learning experience'
  }
];

export const stats = [
  { number: '25+', label: 'Years of Excellence' },
  { number: '2000+', label: 'Happy Students' },
  { number: '100+', label: 'Qualified Teachers' },
  { number: '95%', label: 'Success Rate' }
];

export const contactInfo = [
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

const slideshowModules = import.meta.glob<string>(
  '../assets/slideshow/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}',
  { eager: true, import: 'default' }
);

const slideshowImages = Object.entries(slideshowModules)
  .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
  .map(([, url]) => url as string);

const slideMetadata = [
  { icon: BookOpen, headline: 'Nurturing Young Minds for a Bright Future', subheadline: 'Excellence in Education Since 1998' },
  { icon: Users, headline: 'A Community of Passionate Learners', subheadline: 'Where every student is known and valued.' },
  { icon: Microscope, headline: 'Discover, Innovate, and Create', subheadline: 'Hands-on learning that sparks curiosity.' },
  { icon: Palette, headline: 'Unleashing Creativity and Talent', subheadline: 'Fostering artistic expression in every child.' },
  { icon: Globe, headline: 'Preparing Global Citizens of Tomorrow', subheadline: 'Building a foundation for lifelong success.' },
];

export const slides = slideshowImages.map((img, i) => ({
  img,
  ...slideMetadata[i % slideMetadata.length],
}));
