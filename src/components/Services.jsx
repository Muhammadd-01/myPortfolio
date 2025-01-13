import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faPaintBrush, faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import AnimatedBackground from './AnimatedBackground';

const ServiceCard = ({ icon, title, description }) => {
  return (
    <motion.div 
      className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <FontAwesomeIcon icon={icon} size="3x" className="text-blue-500 mb-4" />
      <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </motion.div>
  );
};

const Services = () => {
  const services = [
    {
      icon: faCode,
      title: 'Web Development',
      description: 'Custom web applications built with modern technologies to meet your specific needs.'
    },
    {
      icon: faPaintBrush,
      title: 'UI/UX Design',
      description: 'Intuitive and visually appealing designs that enhance user experience and engagement.'
    },
    {
      icon: faMobileAlt,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android devices.'
    }
  ];

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <AnimatedBackground />
      <div className="z-10 container mx-auto py-12 px-4">
        <motion.h1 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-12 text-center text-white"
        >
          My Services
        </motion.h1>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;

