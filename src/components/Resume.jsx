import React from 'react';
import { motion } from 'framer-motion';
import AnimatedBackground from './AnimatedBackground';

const ResumeSection = ({ title, items }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-8"
    >
      <h2 className="text-2xl font-bold mb-4 text-white">{title}</h2>
      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="mb-4"
        >
          <h3 className="text-xl font-semibold text-white">{item.title}</h3>
          <p className="text-gray-300">{item.subtitle}</p>
          <p className="text-gray-300">{item.description}</p>
        </motion.div>
      ))}
    </motion.div>
  );
};

const Resume = () => {
  const experience = [
    {
      title: 'Senior Web Developer',
      subtitle: 'Tech Solutions Inc. | 2018 - Present',
      description: 'Led a team of developers in creating responsive web applications using React and Node.js.'
    },
    {
      title: 'Frontend Developer',
      subtitle: 'Web Innovators LLC | 2015 - 2018',
      description: 'Developed and maintained client websites, focusing on user experience and performance optimization.'
    }
  ];

  const education = [
    {
      title: 'Master of Computer Science',
      subtitle: 'Tech University | 2013 - 2015',
      description: 'Specialized in Web Technologies and Software Engineering.'
    },
    {
      title: 'Bachelor of Science in Computer Science',
      subtitle: 'State University | 2009 - 2013',
      description: 'Graduated with honors. Participated in various coding competitions.'
    }
  ];

  const skills = [
    'JavaScript (ES6+)', 'React', 'Node.js', 'Express', 'MongoDB',
    'HTML5', 'CSS3', 'Tailwind CSS', 'Git', 'Agile Methodologies'
  ];

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
        My Resume
      </motion.h1>
      <ResumeSection title="Experience" items={experience} />
      <ResumeSection title="Education" items={education} />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h2 className="text-2xl font-bold mb-4 text-white">Skills</h2>
        <div className="flex flex-wrap">
          {skills.map((skill, index) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm mr-2 mb-2"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </motion.div>
      </div>
    </div>
  );
};

export default Resume;

