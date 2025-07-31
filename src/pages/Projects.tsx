import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

interface ProjectsProps {
  darkMode: boolean;
}

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demo?: string;
  github: string;
}

const Projects: React.FC<ProjectsProps> = ({ darkMode }) => {
  const projects: Project[] = [
    {
      title: 'Student Feedback and Evaluation System',
      description: '-Developed a scalable Student Feedback System using React and Spring Boot with role-based dashboards for students, faculty, and administrators, achieving 25% higher feedback submissions through optimized MySQL database design and UI/UX improvements. -Implemented secure authentication, asynchronous processing, and API optimizations to handle high traffic while maintaining 20% faster data retrieval efficiency.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      technologies: ['React.js', 'HTML', 'CSS', 'Spring Boot', 'MySQL'],
      
      demo: 'https://vamshikumar32501.github.io/student-feedback-frontend/',
      github: 'https://github.com/naveenrnk66/student-feedback-backend',
    },
    {
      title: 'Big Data Analytics Dashboard',
      description: 'A comprehensive dashboard for visualizing and analyzing large datasets. Features include real-time data processing and interactive visualizations.',
      image: 'https://i.imghippo.com/files/Jsmi2558uk.png',
      technologies: ['Excel', 'Apache Spark', 'D3.js', 'Node.js', 'PostgreSQL'],
      github: '',
      demo:'https://kluniversityin-my.sharepoint.com/:x:/g/personal/2200032503_kluniversity_in/EYqJpF1Y6xtHk2UcIfXP00sB2QlWl5Gy83L_v1igS16qTQ?e=Qk1PeB'
    },
    {
      title: 'VLEARN.TECH',
      description: '--Developed EdTech platform to deliver project-based innovation courses.--Implemented core features including course modules and task tracking to guide student progress. --Developed a curriculum focused on transforming academic projects into viable startup concepts.--Led the project from concept to a successful launch, creating a scalable tool for 200+ students.',
      image: 'https://i.imghippo.com/files/CglS6508R.png',
      technologies: [ 'HTML','CSS','TypeScript', 'SQL'],
      github: '',
      demo: 'https://vlearn.tech/'
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
            <h1 className="text-4xl font-bold mb-4">Projects</h1>
            <div className="w-24 h-1 bg-purple-600 mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className={`rounded-lg overflow-hidden shadow-lg ${
                  darkMode ? 'bg-gray-800' : 'bg-white'
                }`}
              >
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black opacity-20"></div>
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs font-medium bg-purple-100 text-purple-600 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4 pt-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-sm font-medium text-purple-600 hover:text-purple-500"
                    >
                      <Github className="w-4 h-4 mr-1" />
                      GitHub
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-sm font-medium text-purple-600 hover:text-purple-500"
                      >
                        <ExternalLink className="w-4 h-4 mr-1" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;