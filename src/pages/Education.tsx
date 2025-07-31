import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar } from 'lucide-react';

interface EducationProps {
  darkMode: boolean;
}

interface Education {
  degree: string;
  institution: string;
  duration: string;
  location: string;
  description: string[];
}

interface Certification {
  name: string;
  provider: string;
  date: string;
  credential: string;
  skills: string[];
}

const Education: React.FC<EducationProps> = ({ darkMode }) => {
  const educationDetails: Education[] = [
    {
      degree: 'Bachelor of Technology in Computer Science',
      institution: 'KL University',
      duration: '2022 - 2026',
      location: 'Vijayawada, India',
      description: [
        'Specialization in Data Science & Big Data Analytics',
        'Current CGPA: 9.29/10.0'
      ]
    }, {
      degree: 'INTERMEDIATE MPC',
      institution: 'Sri Venkateshwara Jr College',
      duration: '2020 - 2022',
      location: 'Porumamilla,kadapa(Dt), India',
      description: [
        'Percentage: 88.2%'
      ]
    }, {
      degree: 'Schooling',
      institution: 'Holy Rosary EM High School',
      duration: '2020',
      location: 'Porumamilla,kadapa(Dt), India',
      description: [
        'Percentage: 96.5%'
      ]
    }
  ];

  const certifications: Certification[] = [
    {
      name: 'Aws Cloud Practitioner CLF-C02(2024)',
      provider: 'AWS',
      date: ' July 1, 2024',
      credential: 'Credential ID: 690e1177c2e94d4ea84ba332b6e1cf2c',
      skills: ['Core AWS Services', 'AWS Pricing Models', 'AWS Cloud']
    },
    {
      name: 'Red Hat Certified Enterprise Application Developer (Ex-183)-(2024)',
      provider: ' Red Hat',
      date: 'December 27, 2024',
      credential: 'Verify: https://www.credly.com/go/WJvKbY1r',
      skills: ['RESTful API ', 'Maven', 'Hibernate', 'SQL']
    },
  ];

  return (
    <div className={`min-h-screen py-16 px-4 sm:px-6 lg:px-8 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-16"
        >
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Education & Certifications</h1>
            <div className="w-24 h-1 bg-purple-600 mx-auto mb-8"></div>
          </div>
          
          {/* Formal Education Section */}
          <div className="space-y-8">
            <h2 className="text-3xl font-semibold flex items-center">
              <GraduationCap className="w-8 h-8 mr-3 text-purple-500" />
              Education
            </h2>
            <div className="relative border-l-4 border-purple-500/30 ml-6 pl-10 md:pl-16">
              <div className="space-y-12">
                {educationDetails.map((edu, index) => (
                  <motion.div
                    key={index}
                    className="relative"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2, duration: 0.5 }}
                  >
                    <div className={`absolute -left-[50px] md:-left-[74px] top-1 w-8 h-8 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} rounded-full flex items-center justify-center`}>
                      <div className="w-4 h-4 bg-purple-600 rounded-full"></div>
                    </div>
                    <motion.div
                      whileHover={{ y: -8, scale: 1.02, boxShadow: `0 10px 20px ${darkMode ? 'rgba(0,0,0,0.2)' : 'rgba(0,0,0,0.1)'}` }}
                      transition={{ type: 'spring', stiffness: 200 }}
                      className={`transition-all duration-100 ${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-lg p-6`}
                    >
                      <div className="border-l-4 border-purple-600 pl-4">
                        <h3 className="text-xl font-semibold text-purple-500">{edu.degree}</h3>
                        <p className="text-lg font-medium mt-1">{edu.institution}</p>
                        <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 mt-2 text-sm text-gray-500">
                          <span className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {edu.duration}
                          </span>
                          <span>{edu.location}</span>
                        </div>
                        <ul className="mt-4 space-y-2">
                          {edu.description.map((item, i) => (
                            <li key={i} className="flex items-start">
                              <span className="w-2 h-2 mt-2 mr-3 bg-purple-600 rounded-full flex-shrink-0"></span>
                              <span className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Certifications Section */}
          <div className="space-y-8">
            <h2 className="text-3xl font-semibold flex items-center">
              <Award className="w-8 h-8 mr-3 text-purple-500" />
              Certifications
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ delay: index * 0.2, type: 'spring', stiffness: 200 }}
                  className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-lg shadow-lg p-6 border-2 flex flex-col`}
                >
                  <div className="flex-grow">
                    <h3 className="text-lg font-semibold text-purple-500">{cert.name}</h3>
                    <p className="text-sm font-medium mt-1">{cert.provider}</p>
                    <p className="text-sm text-gray-500 mt-1">{cert.date}</p>
                    <p className="text-xs text-gray-500 mt-1 break-all">{cert.credential}</p>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {cert.skills.map((skill, i) => (
                      <span key={i} className={`px-2 py-1 text-xs font-medium ${darkMode ? 'bg-purple-900/50 text-purple-300' : 'bg-purple-100 text-purple-600'} rounded-full`}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </motion.div>
      </div>
    </div>
  );
};

export default Education;
