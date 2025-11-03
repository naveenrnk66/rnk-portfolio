import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Instagram, Send } from 'lucide-react';

// It's best practice to declare the emailjs type if you are using it globally from a CDN
// This declaration tells TypeScript that 'emailjs' can exist on the window object.
declare global {
  interface Window {
    emailjs?: {
      sendForm: (serviceID: string, templateID: string, form: HTMLFormElement, publicKey: string) => Promise<any>;
    };
  }
}

interface ContactProps {
  darkMode: boolean;
}

const Contact: React.FC<ContactProps> = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submissionMessage, setSubmissionMessage] = useState<string | null>(null);
  const [isError, setIsError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmissionMessage(null);
    setIsError(false);

    // Using your actual EmailJS keys
    const serviceID = 'service_wvl07fi';
    const templateID = 'template_ubmvrs8';
    const publicKey = 'OWd63xfuJFRqKYKr8'; // This is your Public Key

    if (!window.emailjs) {
      console.error('EmailJS script not loaded. Make sure to include it in your index.html');
      setSubmissionMessage('Email service is not available. Please try again later.');
      setIsError(true);
      setIsLoading(false);
      return;
    }

    try {
      await window.emailjs.sendForm(serviceID, templateID, e.currentTarget, publicKey);
      setSubmissionMessage('Message sent successfully!');
      setIsError(false);
      setFormData({ name: '', email: '', subject: '', message: '' }); // Reset form
    } catch (error: any) {
      console.error('Error sending message:', error);
      setSubmissionMessage('Failed to send message. Please try again later.');
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: 'Email',
      value: '2200032503cseh@gmail.com',
      link: 'mailto:2200032503cseh@gmail.com'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: 'Phone',
      value: '+91 8639673141',
      link: 'tel:+918639673141'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: 'Location',
      value: 'KL University, Vijayawada, India'
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      label: 'GitHub',
      link: 'https://github.com/naveenrnk66'
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: 'LinkedIn',
      link: 'https://www.linkedin.com/in/2200032503-naveen/'
    },
    {
      icon: <Instagram className="w-6 h-6" />,
      label: 'Instagram',
      link: 'https://www.instagram.com/naveen_ramayanapu/'
    }
  ];

  return (
    <div className={`min-h-screen py-16 px-4 sm:px-6 lg:px-8 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-800'}`}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Contact Me</h1>
            <div className="w-24 h-1 bg-purple-600 mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-lg p-6`}
            >
              <h2 className="text-2xl font-semibold mb-6">Send a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input type="text" name="name" value={formData.name} onChange={handleChange} required className={`w-full px-4 py-2 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-100 border-gray-300'} focus:outline-none focus:ring-2 focus:ring-purple-500`} placeholder="Your Name" />
                <input type="email" name="email" value={formData.email} onChange={handleChange} required className={`w-full px-4 py-2 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-100 border-gray-300'} focus:outline-none focus:ring-2 focus:ring-purple-500`} placeholder="Your Email" />
                <input type="text" name="subject" value={formData.subject} onChange={handleChange} required className={`w-full px-4 py-2 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-100 border-gray-300'} focus:outline-none focus:ring-2 focus:ring-purple-500`} placeholder="Subject" />
                <textarea name="message" value={formData.message} onChange={handleChange} required rows={4} className={`w-full px-4 py-2 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-100 border-gray-300'} focus:outline-none focus:ring-2 focus:ring-purple-500`} placeholder="Your Message"></textarea>
                
                <button type="submit" className="w-full flex items-center justify-center px-6 py-3 rounded-lg bg-purple-600 text-white font-semibold hover:bg-purple-700 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed" disabled={isLoading}>
                  {isLoading ? (
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  ) : (
                    <Send className="w-5 h-5 mr-2" />
                  )}
                  {isLoading ? 'Sending...' : 'Send Message'}
                </button>

                {submissionMessage && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className={`mt-4 p-3 rounded-lg text-center font-medium ${isError ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'}`}>
                    {submissionMessage}
                  </motion.div>
                )}
              </form>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }} className="space-y-8">
              <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-lg p-6`}>
                <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start">
                      <div className="text-purple-600 mt-1">{info.icon}</div>
                      <div className="ml-4">
                        <p className="font-semibold">{info.label}</p>
                        {info.link ? (
                          <a href={info.link} className="text-purple-500 hover:text-purple-400 break-all">{info.value}</a>
                        ) : (
                          <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} break-all`}>{info.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-lg p-6`}>
                <h2 className="text-2xl font-semibold mb-6">Social Links</h2>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a key={index} href={social.link} target="_blank" rel="noopener noreferrer" className={`p-3 rounded-full ${darkMode ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-purple-100 text-purple-600 hover:bg-purple-200'} transition-colors duration-200`} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
    