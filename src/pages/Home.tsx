import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Download, Github as GitHub, Linkedin, Twitter ,Instagram} from 'lucide-react';

interface HomeProps {
  darkMode: boolean;
}

const Home: React.FC<HomeProps> = ({ darkMode }) => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl w-full space-y-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div className="relative mx-auto w-48 h-48 rounded-full overflow-hidden shadow-xl">
  <a
    href="https://i.imghippo.com/files/jzp3672bcQ.jpg"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img
      src="https://i.imghippo.com/files/jzp3672bcQ.jpg"
      alt="Profile"
      className="w-full h-full object-cover"
    />
  </a>
</div>


          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            NAVEEN RAMAYANAPU
            </span>
          </h1>

          <div className="text-xl sm:text-2xl md:text-3xl">
            <TypeAnimation
              sequence={[
                'BTech Student',
                2000,
                'Data Science Enthusiast',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className={`${darkMode ? 'text-purple-400' : 'text-purple-600'}`}
            />
          </div>

          <p className="text-lg max-w-2xl mx-auto">
            Passionate about transforming data into meaningful insights and building innovative solutions
          </p>

          <div className="flex justify-center space-x-4">
            <motion.a
              href="https://drive.google.com/file/d/1p2RqepORIjdrsDWxuHQGJ1uvCQ2WAbFg/view?usp=sharing"
              download
              className="inline-flex items-center px-6 py-3 rounded-full bg-purple-600 text-white hover:bg-purple-700 transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download className="w-5 h-5 mr-2" />
              View Resume
            </motion.a>
          </div>

          <div className="flex justify-center space-x-6 mt-8">
            <motion.a
              href="https://github.com/naveenrnk66"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}
            >
              <GitHub className="w-8 h-8" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/2200032503-naveen/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}
            >
              <Linkedin className="w-8 h-8" />
            </motion.a>
            <motion.a
              href="https://www.instagram.com/naveen_ramayanapu/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}
            >
              <Instagram className="w-8 h-8" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;