import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedBackground from './AnimatedBackground';

const projects = [
  { id: 1, title: 'E-commerce Website', category: 'Web Development', image: '/placeholder.svg?height=300&width=400' },
  { id: 2, title: 'Mobile Banking App', category: 'Mobile Development', image: '/placeholder.svg?height=300&width=400' },
  { id: 3, title: 'Social Media Dashboard', category: 'UI/UX Design', image: '/placeholder.svg?height=300&width=400' },
  { id: 4, title: 'Task Management Tool', category: 'Web Development', image: '/placeholder.svg?height=300&width=400' },
  { id: 5, title: 'Fitness Tracking App', category: 'Mobile Development', image: '/placeholder.svg?height=300&width=400' },
  { id: 6, title: 'Restaurant Booking System', category: 'Web Development', image: '/placeholder.svg?height=300&width=400' },
];

const ProjectCard = ({ project }) => {
  return (
    <motion.div 
      layout
      className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
        <p className="text-gray-300">{project.category}</p>
      </div>
    </motion.div>
  );
};

const Portfolio = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Web Development', 'Mobile Development', 'UI/UX Design'];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <AnimatedBackground />
      <div className="z-10 container mx-auto py-12 px-4">
      <motion.h1 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold mb-8 text-center text-white"
      >
        My Portfolio
      </motion.h1>
      <div className="flex justify-center mb-8">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`mx-2 px-4 py-2 rounded ${
              filter === category ? 'bg-blue-500 text-white' : 'bg-gray-700 text-gray-300'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      <motion.div layout className="grid md:grid-cols-3 gap-8">
        <AnimatePresence>
          {filteredProjects.map(project => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
      </div>
    </div>
  );
};

export default Portfolio;

