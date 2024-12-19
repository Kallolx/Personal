import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Github, ArrowLeft, Calendar, Rocket, ArrowUpRight, Code2, Database, Server,  Smartphone, Brain, Star, Lightbulb, Package } from 'lucide-react';
import { projects } from '../data/projects';

// Tech stack icons mapping
const techIcons: { [key: string]: any } = {
  'React': Code2,
  'Node.js': Server,
  'MongoDB': Database,
  'Firebase': Database,
  'TensorFlow': Brain,
  'React Native': Smartphone,
  'Docker': Package,
  // Add more mappings as needed
};

// Add this animation variant
const featureVariants = {
  initial: { 
    opacity: 0, 
    x: -20,
    scale: 0.95
  },
  animate: { 
    opacity: 1, 
    x: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10
    }
  },
  hover: {
    scale: 1.02,
    x: 10,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10
    }
  }
};

// Add this animation variant for tabs
export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="min-h-screen bg-white dark:bg-gray-900 pt-20 px-4 flex items-center justify-center"
      >
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Project not found</h2>
          <Link to="/" className="text-gray-600 dark:text-gray-400 hover:underline">Return to Home</Link>
        </div>
      </motion.div>
    );
  }

  // Use project gallery images if available, otherwise use defaults
  const galleryImages = project.gallery || [
    project.image,
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015',
    'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070',
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: '100%' }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: '100%' }}
      transition={{ type: "spring", damping: 30, stiffness: 300 }}
      className="fixed inset-0 bg-white dark:bg-gray-900 z-50 overflow-y-auto"
    >
      {/* Back Navigation */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="fixed top-4 left-4 z-50 tablet:top-8 tablet:left-8"
      >
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 
                   rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-200 
                   dark:hover:bg-gray-700 transition-all group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back
        </Link>
      </motion.div>

      {/* Hero Section */}
      <div className="relative h-[50vh] tablet:h-[70vh] overflow-hidden">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/50 to-gray-900 dark:to-gray-900 z-10" />
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="absolute bottom-0 left-0 right-0 z-20 p-4 tablet:p-8 md:p-16"
        >
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col gap-4">
              <div className="flex flex-wrap items-center gap-2 tablet:gap-4 text-white/80">
                <span className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-sm">
                  {project.category}
                </span>
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {project.year}
                </span>
              </div>
              
              <h1 className="text-3xl tablet:text-4xl md:text-6xl font-bold text-white">{project.title}</h1>
              
              <p className="text-base tablet:text-lg text-white/80 max-w-2xl">
                {project.description}
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto px-4 tablet:px-8 py-8 tablet:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 tablet:gap-16">
          {/* Main Content */}
          <div className="md:col-span-2 space-y-6 tablet:space-y-8">
            {/* Image Gallery */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-1 tablet:grid-cols-2 gap-4"
            >
              {galleryImages.map((img, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative group overflow-hidden rounded-xl aspect-video"
                >
                  <img 
                    src={img} 
                    alt={`Project view ${index + 1}`}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 
                              transition-opacity duration-300 flex items-center justify-center">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center"
                    >
                      <ArrowUpRight className="w-5 h-5 text-white" />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Overview Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-8"
            >
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 text-gray-900 dark:text-white">
                <Rocket className="w-6 h-6 text-gray-400" />
                Overview
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {project.longDescription}
              </p>
            </motion.div>

            {/* Features Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-8"
            >
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 text-gray-900 dark:text-white">
                <Star className="w-6 h-6 text-gray-400" />
                Key Features
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    variants={featureVariants}
                    initial="initial"
                    animate="animate"
                    whileHover="hover"
                    className="flex items-start gap-4 group cursor-pointer"
                  >
                    <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center flex-shrink-0
                                group-hover:bg-gray-900 dark:group-hover:bg-white transition-colors duration-300">
                      <Lightbulb className="w-4 h-4 text-gray-600 dark:text-gray-300 group-hover:text-white dark:group-hover:text-gray-900 transition-colors duration-300" />
                    </div>
                    <div className="flex-1">
                      <span className="text-gray-600 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300">
                        {feature}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6 tablet:space-y-8">
            {/* Technologies Section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
              className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-8"
            >
              <h3 className="text-xl font-bold mb-6 flex items-center gap-3 text-gray-900 dark:text-white">
                <Code2 className="w-5 h-5 text-gray-400" />
                Technologies
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {project.technologies.map((tech, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                    whileHover={{ 
                      scale: 1.05,
                      rotate: 1,
                      transition: { type: "spring", stiffness: 400 }
                    }}
                    className="flex items-center gap-3 p-3 bg-gray-100 dark:bg-gray-700/50 rounded-xl
                             hover:bg-gray-900 dark:hover:bg-white group cursor-pointer
                             transition-all duration-300"
                  >
                    <img 
                      src={tech.icon}
                      alt={tech.name}
                      className="w-5 h-5 text-gray-500 dark:text-gray-400 
                               group-hover:text-white dark:group-hover:text-gray-900 
                               transition-colors duration-300"
                    />
                    <span className="text-sm text-gray-600 dark:text-gray-300 
                                 group-hover:text-white dark:group-hover:text-gray-900
                                 transition-colors duration-300">
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Action Buttons */}
            <div className="space-y-4">
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between w-full px-6 py-4 bg-gray-900 
                           dark:bg-white text-white dark:text-gray-900 rounded-xl group 
                           hover:bg-gray-800 dark:hover:bg-gray-100 transition-all"
                >
                  <span className="font-medium">View Live Demo</span>
                  <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
                </a>
              )}
              
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between w-full px-6 py-4 bg-gray-100 
                           dark:bg-gray-800 text-gray-900 dark:text-white rounded-xl group 
                           hover:bg-gray-200 dark:hover:bg-gray-700 transition-all"
                >
                  <span className="font-medium">View Source Code</span>
                  <Github className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Tab Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-white dark:bg-gray-800/50 rounded-2xl p-6"
      >
        {/* Your tab content here */}
      </motion.div>
    </motion.div>
  );
}