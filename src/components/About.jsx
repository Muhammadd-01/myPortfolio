import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedBackground from './AnimatedBackground';

const About = () => {
  const [activeTab, setActiveTab] = useState('skills');

  const skills = [
    { name: 'React', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'Node.js', level: 80 },
    { name: 'CSS/Tailwind', level: 85 },
    { name: 'Python', level: 75 },
  ];

  const experiences = [
    {
      title: 'Senior Web Developer',
      company: 'Tech Solutions Inc.',
      period: '2018 - Present',
      description: 'Led a team of developers in creating responsive web applications using React and Node.js.'
    },
    {
      title: 'Frontend Developer',
      company: 'Web Innovators LLC',
      period: '2015 - 2018',
      description: 'Developed and maintained client websites, focusing on user experience and performance optimization.'
    }
  ];

  const education = [
    {
      degree: 'Master of Computer Science',
      school: 'Tech University',
      period: '2013 - 2015',
      description: 'Specialized in Web Technologies and Software Engineering.'
    },
    {
      degree: 'Bachelor of Science in Computer Science',
      school: 'State University',
      period: '2009 - 2013',
      description: 'Graduated with honors. Participated in various coding competitions.'
    }
  ];

  const tabContent = {
    skills: (
      <div className="grid gap-4">
        {skills.map((skill, index) => (
          <div key={skill.name}>
            <div className="flex justify-between mb-1">
              <span>{skill.name}</span>
              <span>{skill.level}%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2.5">
              <motion.div 
                className="bg-fuchsia-600 h-2.5 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${skill.level}%` }}
                transition={{ duration: 1, delay: index * 0.1 }}
              />
            </div>
          </div>
        ))}
      </div>
    ),
    experience: (
      <div>
        {experiences.map((exp, index) => (
          <motion.div 
            key={exp.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="mb-4"
          >
            <h3 className="text-xl font-bold">{exp.title}</h3>
            <p className="text-cyan-400">{exp.company} | {exp.period}</p>
            <p>{exp.description}</p>
          </motion.div>
        ))}
      </div>
    ),
    education: (
      <div>
        {education.map((edu, index) => (
          <motion.div 
            key={edu.degree}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="mb-4"
          >
            <h3 className="text-xl font-bold">{edu.degree}</h3>
            <p className="text-cyan-400">{edu.school} | {edu.period}</p>
            <p>{edu.description}</p>
          </motion.div>
        ))}
      </div>
    )
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <AnimatedBackground />
      <div className="z-10 container mx-auto py-12 px-4">
        <motion.h1 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-center text-white"
        >
          About Me
        </motion.h1>
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <img src="/placeholder.svg?height=400&width=400" alt="Muhammad Affan" className="rounded-full w-64 h-64 mx-auto border-4 border-fuchsia-500 shadow-lg" />
            </motion.div>
            <p className="text-base md:text-lg mb-4 text-cyan-300">
              Hi, I'm Muhammad Affan. I'm a passionate web developer with a keen eye for design and a love for creating seamless user experiences. With over 5 years of experience in the field, I've had the opportunity to work on a wide range of projects, from small business websites to large-scale web applications.
            </p>
            <p className="text-base md:text-lg text-cyan-300">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or enjoying a good cup of coffee while brainstorming my next big idea. I believe in continuous learning and am always excited to take on new challenges in the ever-evolving world of web development.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="flex mb-4">
              {['skills', 'experience', 'education'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 py-2 px-4 ${activeTab === tab ? 'bg-fuchsia-500 text-white' : 'bg-gray-700 text-gray-300'} capitalize transition-colors duration-300`}
                >
                  {tab}
                </button>
              ))}
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {tabContent[activeTab]}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <a 
            href="/muhammad-affan-resume.pdf" 
            download 
            className="bg-fuchsia-500 hover:bg-fuchsia-600 text-white font-bold py-2 px-4 rounded inline-block transition-colors duration-300"
          >
            Download Resume
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default About;

