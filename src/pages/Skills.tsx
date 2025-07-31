import React from 'react';
import { motion } from 'framer-motion';

interface SkillsProps {
  darkMode: boolean;
}

interface Skill {
  name: string;
  category: string;
}

const Skills: React.FC<SkillsProps> = ({ darkMode }) => {
  const skills: Skill[] = [
    { name: 'C', category: 'Languages' },
    { name: 'Python', category: 'Languages' },
    { name: 'Java', category: 'Languages' },
    { name: 'HTML', category: 'Languages' },
    { name: 'CSS', category: 'Languages' },
    { name: 'JavaScript', category: 'Languages' },  

    { name: 'React', category: 'Frameworks' },
    { name: 'Django', category: 'Frameworks' },
    // { name: 'TensorFlow', category: 'Frameworks' },
    { name: 'Pandas', category: 'Frameworks' },

    { name: 'Git', category: 'Tools' },
    { name: 'Tableau', category: 'Tools' },
    { name: 'Power BI', category: 'Tools' },
    { name: 'AWS', category: 'Tools' },
    { name: 'MATLAB', category: 'Tools' },

    { name: 'Problem Solving', category: 'Soft Skills' },
    { name: 'Team Leadership', category: 'Soft Skills' },
    { name: 'Communication', category: 'Soft Skills' },
    { name: 'Time Management', category: 'Soft Skills' },
  ];

  const categories = Array.from(new Set(skills.map(skill => skill.category)));

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Skills</h1>
            <div className="w-20 h-1 bg-purple-600 mx-auto mb-8"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {categories.map((category, categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: categoryIndex * 0.2 }}
                className={`p-6 rounded-2xl shadow-lg ${
                  darkMode ? 'bg-gray-800 text-white' : 'bg-white'
                }`}
              >
                <h2 className="text-xl font-semibold mb-4">{category}</h2>
                <div className="flex flex-wrap gap-3">
                  {skills
                    .filter(skill => skill.category === category)
                    .map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        className={`px-4 py-2 rounded-full text-sm font-medium ${
                          darkMode ? 'bg-gray-700 text-white' : 'bg-purple-100 text-purple-800'
                        }`}
                      >
                        {skill.name}
                      </motion.div>
                    ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
