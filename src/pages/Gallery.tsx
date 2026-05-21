import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Play,
  Pause,
  Volume2,
  VolumeX,
  Download,
  Share2
} from 'lucide-react';

import { getGalleryImages } from '../data/galleryData';

const Gallery = () => {
  const { category } = useParams<{ category: string }>();
  const [mediaFiles, setMediaFiles] = useState<any[]>([]);
  const [selectedMedia, setSelectedMedia] = useState<any>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  // Category configurations
  const categoryConfig: Record<string, { title: string; description: string; color: string }> = {
    campus: {
      title: 'Beautiful Campus',
      description: 'Explore our modern and well-maintained campus facilities',
      color: 'from-blue-500 to-blue-700'
    },
    events: {
      title: 'Cultural Programs',
      description: 'Vibrant cultural events and celebrations throughout the year',
      color: 'from-purple-500 to-purple-700'
    },
    sports: {
      title: 'Sports & Games',
      description: 'Comprehensive sports facilities and athletic programs',
      color: 'from-green-500 to-green-700'
    },
    labs: {
      title: 'Science Labs',
      description: 'State-of-the-art laboratories for hands-on learning',
      color: 'from-red-500 to-red-700'
    },
    library: {
      title: 'Library & Reading',
      description: 'Extensive collection of books and digital resources',
      color: 'from-yellow-500 to-orange-600'
    },
    classrooms: {
      title: 'Smart Classrooms',
      description: 'Technology-enabled learning environments',
      color: 'from-indigo-500 to-indigo-700'
    }
  };


  useEffect(() => {
    if (category) {
      setMediaFiles(getGalleryImages(category));
    }
  }, [category]);

  const currentCategory = category ? categoryConfig[category] : null;

  const openLightbox = (media: any, index: number) => {
    setSelectedMedia(media);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setSelectedMedia(null);
    setIsPlaying(false);
  };

  const navigateMedia = (direction: 'prev' | 'next') => {
    const newIndex = direction === 'prev' 
      ? (currentIndex - 1 + mediaFiles.length) % mediaFiles.length
      : (currentIndex + 1) % mediaFiles.length;
    
    setCurrentIndex(newIndex);
    setSelectedMedia(mediaFiles[newIndex]);
    setIsPlaying(false);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  if (!currentCategory) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Category not found</h1>
          <Link to="/" className="text-primary-600 hover:text-primary-700">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, filter: 'blur(10px)', y: 20 }}
      animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
      exit={{ opacity: 0, filter: 'blur(10px)', y: -20 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="pt-20"
    >
      {/* Header */}
      <section className={`relative py-20 bg-gradient-to-br ${currentCategory.color} text-white overflow-hidden`}>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Link 
              to="/" 
              className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors duration-300"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Home
            </Link>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold font-serif mb-4">
              {currentCategory.title}
            </h1>
            <p className="text-base sm:text-xl md:text-2xl max-w-3xl leading-relaxed opacity-90">
              {currentCategory.description}
            </p>
            <div className="mt-6 text-gray-900/80">
              <span className="text-lg font-medium">{mediaFiles.length} items in this gallery</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {mediaFiles.length === 0 ? (
            <motion.div
              className="text-center py-20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-gray-100 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
                <div className="text-gray-400 text-2xl">📁</div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">No media files found</h3>
              <p className="text-gray-600 mb-8 max-w-md mx-auto">
                Add images or videos to the <code className="bg-gray-100 px-2 py-1 rounded">/public/media/{category}/</code> folder 
                to see them appear here automatically.
              </p>
              <Link 
                to="/" 
                className="inline-flex items-center bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors duration-300"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back to Home
              </Link>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {mediaFiles.map((media, index) => (
                <motion.div
                  key={media.id}
                  className="group cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '100px' }}
                  transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.3) }}
                  onClick={() => openLightbox(media, index)}
                >
                  <div className="relative overflow-hidden rounded-xl hover-lift transition-all duration-500 glass-card p-2">
                    <div className="aspect-w-4 aspect-h-3 relative">
                      <img
                        src={media.thumbnail}
                        alt={media.title}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      {media.type === 'video' && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="bg-black/50 backdrop-blur-sm rounded-full p-4 group-hover:scale-110 transition-transform duration-300">
                            <Play className="w-8 h-8 text-white" />
                          </div>
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-gray-900 mb-1 group-hover:text-primary-600 transition-colors duration-300">
                        {media.title}
                      </h3>
                      <p className="text-gray-600 text-sm">{media.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedMedia && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <motion.div
              className="relative max-w-6xl max-h-full w-full"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-10 bg-black/50 backdrop-blur-sm text-white p-2 rounded-full hover:bg-black/70 transition-colors duration-300"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Navigation Buttons */}
              {mediaFiles.length > 1 && (
                <>
                  <button
                    onClick={() => navigateMedia('prev')}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 backdrop-blur-sm text-white p-3 rounded-full hover:bg-black/70 transition-colors duration-300"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={() => navigateMedia('next')}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 backdrop-blur-sm text-white p-3 rounded-full hover:bg-black/70 transition-colors duration-300"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}

              {/* Media Content */}
              <div className="relative">
                {selectedMedia.type === 'image' ? (
                  <img
                    src={selectedMedia.src}
                    alt={selectedMedia.title}
                    className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
                  />
                ) : (
                  <div className="relative">
                    <video
                      src={selectedMedia.src}
                      className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
                      controls={false}
                      autoPlay={isPlaying}
                      muted={isMuted}
                      loop
                    />
                    {/* Video Controls */}
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <button
                          onClick={togglePlayPause}
                          className="bg-black/50 backdrop-blur-sm text-white p-2 rounded-full hover:bg-black/70 transition-colors duration-300"
                        >
                          {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                        </button>
                        <button
                          onClick={toggleMute}
                          className="bg-black/50 backdrop-blur-sm text-white p-2 rounded-full hover:bg-black/70 transition-colors duration-300"
                        >
                          {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                        </button>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button className="bg-black/50 backdrop-blur-sm text-white p-2 rounded-full hover:bg-black/70 transition-colors duration-300">
                          <Download className="w-5 h-5" />
                        </button>
                        <button className="bg-black/50 backdrop-blur-sm text-white p-2 rounded-full hover:bg-black/70 transition-colors duration-300">
                          <Share2 className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Media Info */}
              <div className="absolute bottom-4 left-4 right-4 bg-black/50 backdrop-blur-sm text-gray-900 p-4 rounded-lg">
                <h3 className="text-xl font-bold mb-1">{selectedMedia.title}</h3>
                <p className="text-gray-900/80">{selectedMedia.description}</p>
                <div className="mt-2 text-sm text-gray-900/60">
                  {currentIndex + 1} of {mediaFiles.length}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Gallery;