import { motion } from 'framer-motion';
import { Globe2, Smartphone, Rocket, Layout, Package, Code2, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ProjectCardProps {
  id: string;
  title: string;
  year: string;
  category: string;K
  description?: string;
  technologies?: string[];
  image?: string;
}

const getCategoryIcon = (category: string) => {
  switch(category.toLowerCase()) {
    case 'web':
      return Globe2;
    case 'mobile':
      return Smartphone;
    case 'game':
      return Rocket;
    case 'design':
      return Layout;
    case 'saas':
      return Package;
    default:
      return Code2;
  }
};

const getCategoryColor = (category: string) => {
  switch(category.toLowerCase()) {
    case 'web':
      return 'bg-blue-100/10 text-blue-400';
    case 'mobile':
      return 'bg-green-100/10 text-green-400';
    case 'game':
      return 'bg-purple-100/10 text-purple-400';
    case 'design':
      return 'bg-pink-100/10 text-pink-400';
    case 'saas':
      return 'bg-yellow-100/10 text-yellow-400';
    default:
      return 'bg-gray-100/10 text-gray-400';
  }
};

export default function ProjectCard({ id, title, year, category, description, technologies, image }: ProjectCardProps) {
  const Icon = getCategoryIcon(category);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="group relative"
    >
      <Link to={`/project/${id}`}>
        <div className="relative h-[400px] rounded-2xl overflow-hidden cursor-pointer">
          {/* Background Image with Hover Effects */}
          <div className="absolute inset-0">
            <motion.div
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
              className="relative h-full"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/50 to-gray-900 z-10 
                           group-hover:via-gray-900/70 group-hover:to-gray-900 transition-all duration-500" />
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover transform transition-transform duration-700 
                         group-hover:scale-110"
              />
            </motion.div>
          </div>

          {/* Content Overlay */}
          <div className="absolute inset-0 z-20 p-10 flex flex-col justify-between">
            {/* Top Section */}
            <div className="flex items-center justify-between mb-8">
              <motion.span 
                whileHover={{ scale: 1.05 }}
                className={`flex items-center gap-2 px-6 py-2.5 text-base rounded-full backdrop-blur-sm
                         ${getCategoryColor(category)} hover:shadow-lg hover:shadow-current/20 
                         transition-all duration-300`}
              >
                <Icon className="w-4 h-4" />
                {category}
              </motion.span>
              <span className="flex items-center gap-2 text-base font-medium text-white/90 
                           bg-black/20 backdrop-blur-sm px-4 py-2 rounded-full">
                {year}
              </span>
            </div>

            {/* Bottom Section */}
            <div>
              <motion.h3 
                className="text-2xl font-bold text-white mb-4 group-hover:text-lime-400 
                         transition-colors duration-300 flex items-center gap-2"
              >
                {title}
                <motion.span
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 0, x: -10 }}
                  whileHover={{ opacity: 1, x: 0 }}
                  className="inline-flex"
                >
                  <ArrowUpRight className="w-6 h-6" />
                </motion.span>
              </motion.h3>
              
              {description && (
                <p className="text-white/80 mb-6 line-clamp-2 transform transition-all duration-300 
                           group-hover:text-white">
                  {description}
                </p>
              )}
              
              {technologies && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="flex flex-wrap gap-2"
                >
                  {technologies.map((tech, index) => (
                    <motion.span
                      key={index}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="px-3 py-1 text-sm bg-white/10 backdrop-blur-sm rounded-full 
                               text-white/80 hover:bg-white/20 hover:text-white 
                               transition-all duration-300"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </motion.div>
              )}
            </div>
          </div>

          {/* Hover Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-black/20 backdrop-blur-[2px] z-10 pointer-events-none"
          />

          {/* Corner Decoration */}
          <motion.div
            initial={{ scale: 0, rotate: -45 }}
            whileHover={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="absolute top-4 right-4 w-12 h-12 bg-lime-400/20 backdrop-blur-sm 
                     rounded-lg z-30 flex items-center justify-center opacity-0 
                     group-hover:opacity-100 transition-opacity duration-300"
          >
            <ArrowUpRight className="w-6 h-6 text-lime-400" />
          </motion.div>
        </div>
      </Link>
    </motion.div>
  );
}