import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';

interface ExperienceProps {
  darkMode: boolean;
}

interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
}

const Experience: React.FC<ExperienceProps> = ({ darkMode }) => {
  const experiences: Experience[] = [
    // {
    //   title: 'Data Science Intern',
    //   company: 'Krutanic Solutions',
    //   location: 'Remote',
    //   period: 'May 2023 - July 2023',
    //   description: [
    //     'Developed and implemented machine learning models for customer segmentation',
    //     'Analyzed large datasets using Python and Pandas to extract meaningful insights',
    //     'Created interactive dashboards using Power BI for data visualization'
    //     // 'Collaborated with cross-functional teams to improve data processing efficiency by 40%'
    //   ]
    // },
    
    {
      title: 'Lead',
      company: 'Vyuha Innovation Club',
      location: 'Remote',
      period: 'Nov 2023 - Present',
      description: [
        'Managing core team to implement club workflow',
        'Applied design thinking concepts to develop creative solutions for complex challenges faced by students',
        'Fostered leadership skills among members through active participation in club activities and mentoring programs',
        'Participated in daily stand-ups and sprint planning meetings'
      ]
    },
    {
      title: 'Data Analytics',
      company: 'KultureHire',
      location: 'Remote',
      period: 'Feb 2025 - April 2025',
      description: [
        'Data Analytics for understanding career aspirations',
        'Implemented neural networks using TensorFlow and PyTorch',
        'Created Dashboards using Power BI and Excel'
      ]
    },
    {
      title: 'Project Management Lead',
      company: 'Vidhura Innovation Club',
      location: 'Remote',
      period: 'Dec 2024 - Present',
      description: [
        'Built responsive web applications using React and Node.js',
        'Implemented RESTful APIs for data management',
        'Optimized application performance and reduced load time by 30%',
        'Participated in daily stand-ups and sprint planning meetings'
      ]
    }
  ];

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
            <h1 className="text-4xl font-bold mb-4">Experience</h1>
            <div className="w-24 h-1 bg-purple-600 mx-auto mb-8"></div>
          </div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                className={`relative ${
                  darkMode ? 'bg-gray-800' : 'bg-white'
                } rounded-lg shadow-lg p-6`}
              >
                <div className="absolute top-0 left-0 w-2 h-full bg-purple-600 rounded-l-lg"></div>
                <div className="ml-2">
                  <h3 className="text-2xl font-semibold text-purple-600">{exp.title}</h3>
                  <h4 className="text-xl font-medium mt-1">{exp.company}</h4>
                  
                  <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {exp.period}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {exp.location}
                    </div>
                  </div>

                  <ul className="mt-4 space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="w-2 h-2 mt-2 mr-2 bg-purple-600 rounded-full"></span>
                        <span className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;


