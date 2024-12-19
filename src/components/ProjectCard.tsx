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

  const cardContent = (
    <>
      <div className="relative overflow-hidden rounded-lg aspect-video">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
          {description}
        </p>
        {demo && (
          <div className="flex items-center gap-2 text-sm text-purple-600 dark:text-purple-400">
            <ExternalLink className="w-4 h-4" />
            <span>View Demo</span>
          </div>
        )}
      </div>
    </>
  );

  // If there's a demo link, wrap in anchor tag
  if (demo) {
    return (
      <a
        href={demo}
        target="_blank"
        rel="noopener noreferrer"
        className="block group hover:-translate-y-1 transition-transform duration-300"
      >
        <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg">
          {cardContent}
        </div>
      </a>
    );
  }

  // If no demo link, just return the card
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg group">
      {cardContent}
    </div>
  );
}