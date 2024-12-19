import { motion } from 'framer-motion';
import { Globe2, Smartphone, Rocket, Layout, Package, Code2, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ProjectCardProps {
  id: string;
  title: string;
  year: string;
  category: string;
  description?: string;
  technologies?: {
    name: string;
    icon: string;
  }[];
  image?: string;
  demo?: string;
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

export default function ProjectCard({ id, title, category, description, technologies, image, demo }: ProjectCardProps) {
  const Icon = getCategoryIcon(category);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="group relative"
    >
      <Link to={`/project/${id}`} className="block">
        <div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden cursor-pointer">
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
          <div className="absolute inset-0 z-20 p-4 sm:p-6 md:p-10 flex flex-col justify-between">
            {/* Top Section */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-0 
                          sm:justify-between mb-4 md:mb-8">
              <motion.span 
                whileHover={{ scale: 1.05 }}
                className={`flex items-center gap-2 px-3 sm:px-6 py-1.5 sm:py-2.5 text-sm sm:text-base 
                           rounded-full backdrop-blur-sm ${getCategoryColor(category)} 
                           hover:shadow-lg hover:shadow-current/20 transition-all duration-300`}
              >
                <Icon className="w-3 h-3 sm:w-4 sm:h-4" />
                {category}
              </motion.span>
              
              {demo && (
                <a
                  href={demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="group/demo inline-flex items-center gap-2 
                           text-sm sm:text-base font-semibold
                           bg-gradient-to-r from-emerald-500/10 to-lime-500/10
                           hover:from-emerald-500/20 hover:to-lime-500/20
                           text-emerald-400 hover:text-emerald-300
                           px-4 sm:px-6 py-2 sm:py-2.5 rounded-full 
                           transition-all duration-300
                           border border-emerald-500/20 hover:border-emerald-400/40
                           hover:shadow-[0_0_20px_rgba(16,185,129,0.15)]
                           w-full sm:w-auto justify-center sm:justify-start
                           backdrop-blur-[2px]"
                >
                  <span>Live Demo</span>
                  <ArrowUpRight 
                    className="w-4 h-4 sm:w-5 sm:h-5
                              transform transition-all duration-300
                              group-hover/demo:rotate-45" 
                  />
                </a>
              )}
            </div>

            {/* Bottom Section */}
            <div>
              <motion.h3 
                className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-4 
                          group-hover:text-lime-400 transition-colors duration-300 
                          flex items-center gap-2"
              >
                {title}
                <motion.span
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 0, x: -10 }}
                  whileHover={{ opacity: 1, x: 0 }}
                  className="inline-flex"
                >
                  <ArrowUpRight className="w-4 h-4 sm:w-6 sm:h-6" />
                </motion.span>
              </motion.h3>
              
              {description && (
                <p className="text-sm sm:text-base text-white/80 mb-3 sm:mb-6 line-clamp-2 
                           transform transition-all duration-300 group-hover:text-white">
                  {description}
                </p>
              )}
              
              {technologies && (
                <motion.div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {technologies.map((tech, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center gap-1.5 px-2 sm:px-3 py-0.5 sm:py-1 
                               bg-white/10 backdrop-blur-sm rounded-full"
                    >
                      <img 
                        src={tech.icon} 
                        alt={tech.name}
                        className="w-4 h-4"
                      />
                      <span className="text-xs sm:text-sm text-white/80 hover:text-white">
                        {tech.name}
                      </span>
                    </motion.div>
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