import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: faGithub, url: 'https://github.com/johndoe' },
    { icon: faLinkedin, url: 'https://linkedin.com/in/johndoe' },
    { icon: faTwitter, url: 'https://twitter.com/johndoe' },
    { icon: faEnvelope, url: 'mailto:john@example.com' },
  ];

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full md:w-1/3 mb-4 md:mb-0"
          >
            <h3 className="text-2xl font-bold mb-2">John Doe</h3>
            <p className="text-gray-400">Passionate Web Developer</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full md:w-1/3 mb-4 md:mb-0"
          >
            <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/about" className="hover:text-blue-400 transition-colors">About</a></li>
              <li><a href="/portfolio" className="hover:text-blue-400 transition-colors">Portfolio</a></li>
              <li><a href="/contact" className="hover:text-blue-400 transition-colors">Contact</a></li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="w-full md:w-1/3"
          >
            <h4 className="text-lg font-semibold mb-2">Connect with Me</h4>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, color: '#60A5FA' }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FontAwesomeIcon icon={link.icon} size="lg" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-8 pt-4 border-t border-gray-800 text-center"
        >
          <p className="text-gray-400">
            &copy; {currentYear} John Doe. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

