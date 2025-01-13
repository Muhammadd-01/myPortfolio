import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Link } from 'react-router-dom';
import AnimatedBackground from './AnimatedBackground';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faPaintBrush, faMobileAlt, faRocket } from '@fortawesome/free-solid-svg-icons';

const TypedText = ({ text }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, text]);

  return <span>{displayedText}</span>;
};

const Home = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start(i => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.3 }
    }));
  }, [controls]);

  const services = [
    { icon: faCode, title: 'Web Development' },
    { icon: faPaintBrush, title: 'UI/UX Design' },
    { icon: faMobileAlt, title: 'Mobile Apps' },
    { icon: faRocket, title: 'SEO Optimization' },
  ];

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <AnimatedBackground />
      <div className="z-10 text-center px-4 w-full max-w-4xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <img 
            src="/placeholder.svg?height=200&width=200" 
            alt="Muhammad Affan" 
            className="rounded-full w-48 h-48 mx-auto border-4 border-fuchsia-500 shadow-lg hover:shadow-2xl transition-shadow duration-300"
          />
        </motion.div>
        <motion.h1 
          custom={0}
          initial={{ opacity: 0, y: -50 }}
          animate={controls}
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white text-shadow-lg"
        >
          Muhammad Affan
        </motion.h1>
        <motion.p 
          custom={1}
          initial={{ opacity: 0, y: -50 }}
          animate={controls}
          className="text-xl md:text-2xl mb-4 text-fuchsia-300 font-semibold"
        >
          <TypedText text="Web Developer | Designer | Creative Thinker" />
        </motion.p>
        <motion.p
          custom={2}
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          className="text-base md:text-lg mb-8 text-cyan-300 max-w-2xl mx-auto leading-relaxed"
        >
          Passionate about creating beautiful, functional, and user-centered digital experiences. With 5+ years of experience in the field. Let's build something amazing together!
        </motion.p>
        <motion.div 
          custom={3}
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          className="space-x-4 mb-12"
        >
          <Link 
            to="/portfolio" 
            className="bg-fuchsia-500 hover:bg-fuchsia-600 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg inline-block"
          >
            View My Work
          </Link>
          <Link 
            to="/contact" 
            className="bg-transparent hover:bg-cyan-500 text-cyan-300 hover:text-white font-bold py-3 px-8 rounded-full border-2 border-cyan-500 hover:border-transparent transition-all duration-300 transform hover:scale-105 hover:shadow-lg inline-block"
          >
            Get In Touch
          </Link>
        </motion.div>
        <motion.div
          custom={4}
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="bg-gray-800 bg-opacity-50 p-6 rounded-lg text-center backdrop-filter backdrop-blur-sm hover:backdrop-blur-md transition-all duration-300"
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
                backgroundColor: "rgba(255, 0, 255, 0.1)" 
              }}
            >
              <FontAwesomeIcon icon={service.icon} size="2x" className="text-fuchsia-400 mb-4" />
              <h3 className="text-white text-lg font-semibold">{service.title}</h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Home;

