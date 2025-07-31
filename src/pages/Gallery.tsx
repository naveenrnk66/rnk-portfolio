import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface HomeProps {
  darkMode: boolean;
}

interface GalleryItem {
  src: string;
  description: string;
}

const galleryItems: GalleryItem[] = [
  {
    src: 'https://i.imghippo.com/files/yMQe9262kz.jpg',
    description: 'Completed Social Internship during my first summer under Agriculture domain',
  },
  {
    src: 'https://i.imghippo.com/files/SXbQ7739RVg.jpg',
    description: 'Organized My first event "AWARE ANDHRA CAMPAIGN".',
  },
  {
    src: 'https://i.imghippo.com/files/lpx2502OOM.jpg',
    description: 'YOGA Session',
  },
  {
    src: 'https://i.imghippo.com/files/VLMa7622Bew.jpg',
    description: 'Team VYUHA',
  },
  {
    src: 'https://i.imghippo.com/files/Np3088Gc.jpg',
    description: 'Completed podcast with PEMMASANI CHANDRA SEKHAR Garu',
  },
  {
    src:'https://i.imghippo.com/files/konh1772kFE.jpg',
    description:'Session'
  },
  {
    src:'https://i.imghippo.com/files/dgY7940In.jpg',
    description:'Collaborated with "JCI" and conducted a event on "EXPLORING FUTURE OPPORTUNITIES"'
  }
];

const Gallery: React.FC<HomeProps> = ({ darkMode }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}  // Start from bottom
      animate={{ opacity: 1, y: 0 }}    // Animate to the top
      transition={{ duration: 0.8 }}     // Set transition duration
    >
      <div className={`min-h-screen p-20 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'}`}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold inline-block relative">
              Gallery
              <span className="block w-20 h-1 bg-purple-500 mx-auto mt-2"></span>
            </h1>
          </div>

          <div className="relative border-l-4 border-purple-500 pl-12 space-y-24">
            {galleryItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}  // Delay each item for animation effect
                className="flex flex-col md:flex-row items-center gap-8 relative"
              >
                {/* Roadmap dot */}
                <div className="absolute -left-[30px] top-[50%] transform -translate-y-1/2 w-5 h-5 bg-purple-600 rounded-full z-10" />

                {/* Image on left */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className={`w-full md:w-1/2 max-w-xl rounded-xl overflow-hidden shadow-lg cursor-pointer ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
                  onClick={() => setSelectedImage(item.src)}
                >
                  <img
                    src={item.src}
                    alt={`Project ${index + 1}`}
                    className="w-full h-80 object-cover"
                  />
                </motion.div>

                {/* Connector line */}
                <div className="hidden md:block w-8 h-1 bg-purple-500" />

                {/* Floating description box on hover */}
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                  className={`w-full md:w-1/2 p-6 rounded-xl shadow-md ${darkMode ? 'bg-gray-800 text-gray-300' : 'bg-white text-gray-800'}`}
                >
                  <p className="text-lg">{item.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Full view modal */}
          {selectedImage && (
            <div
              className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
              onClick={() => setSelectedImage(null)}
            >
              <img src={selectedImage} alt="Full View" className="max-w-full max-h-full" />
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Gallery;
