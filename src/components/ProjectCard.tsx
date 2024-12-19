import { motion } from 'framer-motion';
import { Globe2, Smartphone, Rocket, Layout, Package, Code2, ArrowUpRight, ExternalLink } from 'lucide-react';
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
    case 'web': return Globe2;
    case 'mobile': return Smartphone;
    case 'game': return Rocket;
    case 'design': return Layout;
    case 'saas': return Package;
    default: return Code2;
  }
};

const getCategoryColor = (category: string) => {
  switch(category.toLowerCase()) {
    case 'web': return 'bg-blue-500/10 text-blue-400 border-blue-500/20';
    case 'mobile': return 'bg-green-500/10 text-green-400 border-green-500/20';
    case 'game': return 'bg-purple-500/10 text-purple-400 border-purple-500/20';
    case 'design': return 'bg-pink-500/10 text-pink-400 border-pink-500/20';
    case 'saas': return 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20';
    default: return 'bg-gray-500/10 text-gray-400 border-gray-500/20';
  }
};

export default function ProjectCard({ id, title, year, category, description, technologies, image, demo }: ProjectCardProps) {
  const Icon = getCategoryIcon(category);

  return (
    <motion.div
      transition={{ duration: 0.2 }}
      className="group relative rounded-2xl overflow-hidden"
    >
      {/* Main Container with Image and Overlay */}
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        {/* Background Image */}
        <img
          src={image || 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500'}
          alt={title}
          className="w-full h-full object-cover transform transition-transform duration-700 
                   ease-out group-hover:scale-110"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-gray-900/20 
                         transition-opacity duration-300 group-hover:opacity-90" />

        {/* Top Content: Category & Demo */}
        <div className="absolute top-0 left-0 right-0 p-4 flex justify-between items-start">
          <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full 
                        text-xs font-medium backdrop-blur-sm bg-black/20 text-white`}>
            <Icon className="w-3.5 h-3.5" />
            {category}
          </span>
          
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full 
                       text-xs font-medium backdrop-blur-sm bg-purple-500/30 text-white
                       hover:bg-purple-500/50 transition-all duration-300"
            >
              Live Demo
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </div>

        {/* Bottom Content */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <div className="space-y-3">
            {/* Title and Year */}
            <div className="flex items-start justify-between gap-2">
              <h3 className="text-xl font-semibold text-white group-hover:text-purple-300 
                         transition-colors duration-300">
                {title}
              </h3>
              <span className="text-xs px-2 py-1 rounded-full bg-white/10 text-gray-300 backdrop-blur-sm">
                {year}
              </span>
            </div>

            {/* Description */}
            <p className="text-sm text-gray-300 line-clamp-2">
              {description}
            </p>

            {/* Technologies */}
            {technologies && technologies.length > 0 && (
              <div className="flex flex-wrap gap-2 pt-1">
                {technologies.map((tech, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-1.5 px-2 py-1 rounded-md 
                             backdrop-blur-sm bg-white/10 border border-white/10
                             hover:bg-white/20 transition-all duration-300"
                  >
                    <img 
                      src={tech.icon}
                      alt={tech.name}
                      className="w-3.5 h-3.5"
                    />
                    <span className="text-xs text-white">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {/* View Details Link */}
            <Link 
              to={`/project/${id}`}
              className="inline-flex items-center gap-1.5 text-sm text-purple-300 
                       hover:text-purple-200 transition-colors duration-300"
            >
              View Details
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}