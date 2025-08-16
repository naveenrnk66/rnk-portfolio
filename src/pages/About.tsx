import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Film, Trophy, Gamepad2 } from 'lucide-react';

interface AboutProps {
  darkMode: boolean;
}

const About: React.FC<AboutProps> = ({ darkMode }) => {
  const interests = [
    { icon: <Code2 className="w-7 h-7" />, label: 'Coding' },
    { icon: <Film className="w-7 h-7" />, label: 'Video Editing' },
    { icon: <Trophy className="w-7 h-7" />, label: 'Cricket' },
    { icon: <Gamepad2 className="w-7 h-7" />, label: 'Video Gaming' },
  ];

  return (
    <div
      className={`min-h-screen py-16 px-4 sm:px-6 lg:px-8 ${
        darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">About Me</h1>
            <div className="w-24 h-1 bg-purple-600 mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="relative"
            >
              <img
                src="https://i.imghippo.com/files/jzp3672bcQ.jpg"
                alt="Profile"
                className="rounded-lg shadow-xl w-full h-auto"
              />
              <div className="absolute inset-0 bg-purple-600 opacity-10 rounded-lg"></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="space-y-6"
            >
              <div>
                <h2 className="text-2xl font-semibold mb-2 text-purple-500">Who am I?</h2>
                <p
                  className={`text-lg ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}
                >
                  I'm RAMAYANAPU NAVEEN, a passionate BTech student specializing
                  in Computer Science with a focus on Data Science & Big Data
                  Analytics. Currently in my final year at KL University, I'm
                  driven by the endless possibilities that technology offers to
                  solve real-world problems.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-2 text-purple-500">
                  Career Goals
                </h2>
                <p
                  className={`text-lg ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}
                >
                  Aspiring to become a Data Scientist, I aim to leverage my
                  skills in machine learning and big data analytics to drive
                  data-driven decision-making in organizations. I'm particularly
                  interested in developing AI solutions that can make a positive
                  impact on society.
                </p>
              </div>
            </motion.div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-center">
              Interests & Hobbies
            </h2>
            <div className="flex flex-wrap justify-center gap-6 pt-8">
              {interests.map((interest, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className={`p-6 rounded-lg text-center ${
                    darkMode ? 'bg-gray-800' : 'bg-white'
                  } shadow-lg flex flex-col items-center justify-center space-y-3 w-40 h-40 transition-all duration-200 border-2 border-transparent hover:border-purple-500`}
                >
                  <div className="text-purple-500">{interest.icon}</div>
                  <p className="font-medium text-base">{interest.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
