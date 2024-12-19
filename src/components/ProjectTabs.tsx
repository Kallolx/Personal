import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Tab {
  id: string;
  label: string;
}

interface Project {
  id: string;
  title: string;
  year: string;
  category: string;
  link?: string;
  description?: string;
  technologies?: {
    name: string;
    icon: string;
  }[];
  image?: string;
}

const tabs: Tab[] = [
  { id: 'all', label: 'All' },
  { id: 'web', label: 'Web' },
  { id: 'mobile', label: 'Mobile' },
  { id: 'saas', label: 'SaaS' },
];

const projects: Project[] = [
  { id: '1', title: 'E-commerce Platform', year: '2024', category: 'web', link: '#', technologies: [
    {
      name: 'React',
      icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg'
    }
  ] },
  { id: '2', title: 'Healthcare Dashboard', year: '2023', category: 'web', link: '#' },
  { id: '3', title: 'Social Media App', year: '2023', category: 'mobile', link: '#' },
  { id: '4', title: 'Travel Booking System', year: '2022', category: 'web', link: '#' },
  { id: '5', title: 'Brand Identity Design', year: '2023', category: 'design', link: '#' },
  {
    id: "dhaka-metro",
    title: "Dhaka Metro Rail Guide",
    year: "2024",
    category: "web",
    description: "A comprehensive web application for Dhaka Metro Rail, featuring real-time updates, route planning, and fare calculations for Bangladesh's first metro rail system.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    image: "/path/to/metro-image.jpg"
  },
];

export default function ProjectTabs() {
  const [activeTab, setActiveTab] = useState('all');

  const filteredProjects = projects.filter(
    project => activeTab === 'all' || project.category === activeTab
  );

  return (
    <div className="w-full max-w-7xl mx-auto">
      <div className="flex gap-2 mb-12 bg-gray-100/50 dark:bg-gray-800/50 p-1 rounded-lg w-fit">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`relative px-4 py-2 text-sm rounded-md transition-colors ${
              activeTab === tab.id
                ? 'text-gray-900 dark:text-white'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
            }`}
          >
            {activeTab === tab.id && (
              <motion.div
                layoutId="activeTab"
                className="absolute inset-0 bg-white dark:bg-gray-700 rounded-md"
                style={{ zIndex: 0 }}
                transition={{ type: "spring", duration: 0.5 }}
              />
            )}
            <span className="relative z-10">{tab.label}</span>
          </button>
        ))}
      </div>

      <div className="space-y-6">
        <AnimatePresence mode="wait">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="group"
            >
              <a
                href={project.link}
                className="flex items-center justify-between py-8 border-b border-gray-200 dark:border-gray-700 hover:border-gray-900 dark:hover:border-gray-500 transition-colors"
              >
                <div className="flex items-baseline gap-4">
                  <h3 className="text-2xl font-medium text-gray-900 dark:text-white group-hover:text-lime-500 dark:group-hover:text-lime-400 transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {project.year}
                  </span>
                </div>
                <motion.div
                  initial={{ x: -10, opacity: 0 }}
                  whileHover={{ x: 0, opacity: 1 }}
                  className="text-lime-500 dark:text-lime-400"
                >
                  →
                </motion.div>
              </a>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}