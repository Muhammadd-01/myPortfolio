import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedBackground from './AnimatedBackground';

const BlogPost = ({ post }) => {
  return (
    <motion.div 
      layout
      className="bg-gray-800 rounded-lg overflow-hidden shadow-lg mb-8"
      whileHover={{ scale: 1.03 }}
    >
      <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-white">{post.title}</h3>
        <p className="text-gray-300 mb-4">{post.date}</p>
        <p className="mb-4">{post.excerpt}</p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Read More
        </button>
      </div>
    </motion.div>
  );
};

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const posts = [
    {
      id: 1,
      title: 'Getting Started with React',
      date: 'June 1, 2023',
      excerpt: 'Learn the basics of React and start building your first component.',
      image: '/placeholder.svg?height=200&width=400'
    },
    {
      id: 2,
      title: 'Advanced CSS Techniques',
      date: 'May 15, 2023',
      excerpt: 'Discover powerful CSS techniques to create stunning layouts.',
      image: '/placeholder.svg?height=200&width=400'
    },
    {
      id: 3,
      title: 'The Future of JavaScript',
      date: 'April 30, 2023',
      excerpt: 'Explore upcoming features and trends in JavaScript development.',
      image: '/placeholder.svg?height=200&width=400'
    },
  ];

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto py-12 px-4 relative min-h-screen bg-gradient-to-b from-gray-900 to-blue-900">
      <AnimatedBackground />
      <motion.h1 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold mb-8 text-center text-white"
      >
        Blog
      </motion.h1>
      <div className="mb-8">
        <input
          type="text"
          placeholder="Search posts..."
          className="w-full p-2 rounded bg-gray-700 text-white"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <AnimatePresence>
        {filteredPosts.map(post => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <BlogPost post={post} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default Blog;

