import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Store, Gamepad, Star, Download, ArrowUpRight, Search, Trophy, Grid, Layout, Menu, ChevronDown } from 'lucide-react';
import playstore from '../assets/images/playstore.png';
import AppDetail from './AppDetail';

interface Review {
  id: string;
  userName: string;
  userImage: string;
  rating: number;
  comment: string;
  date: string;
  helpful?: number;
}

interface App {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  icon: string;
  category: 'app' | 'game';
  rating: number;
  downloads: string;
  screenshots: string[];
  playStoreLink?: string;
  appStoreLink?: string;
  version: string;
  size: string;
  changelog: string[];
  averageRating: number;
  totalReviews: number;
  ratingCounts: {
    1: number;
    2: number;
    3: number;
    4: number;
    5: number;
  };
  reviews: Review[];
}

const apps: App[] = [
  {
    id: '1',
    title: 'FitSync',
    description: 'AI-powered personal fitness tracking and coaching app with real-time workout analysis.',
    longDescription: `FitSync is your personal AI-powered fitness companion, designed to help you achieve your fitness goals with precision and expertise. Using advanced machine learning algorithms, FitSync analyzes your movements in real-time to provide instant feedback on your form and technique.

    The app creates personalized workout plans based on your fitness level, goals, and available equipment. With features like voice coaching, progress tracking, and social challenges, staying motivated has never been easier.`,
    icon: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=100&h=100&fit=crop',
    category: 'app',
    rating: 4.8,
    downloads: '50K+',
    version: '2.1.0',
    size: '45 MB',
    screenshots: [
      'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800',
      'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800',
      'https://images.unsplash.com/photo-1470468969717-61d5d54fd036?w=800'
    ],
    changelog: [
      'Added new workout tracking features',
      'Improved AI form detection accuracy',
      'Bug fixes and performance improvements'
    ],
    playStoreLink: 'https://play.google.com/store/apps/details?id=com.fitsync',
    averageRating: 4.8,
    totalReviews: 1452,
    ratingCounts: {
      1: 25,
      2: 48,
      3: 124,
      4: 486,
      5: 769
    },
    reviews: [
      {
        id: '1',
        userName: 'Sarah Johnson',
        userImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
        rating: 5,
        comment: 'This app has completely transformed my fitness journey! The AI form detection is incredibly accurate, and the personalized workout plans are just what I needed.',
        date: '2024-02-15',
        helpful: 45
      },
      {
        id: '2',
        userName: 'Michael Chen',
        userImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
        rating: 4,
        comment: 'Great app overall! The voice coaching feature is fantastic. Would love to see more advanced workout routines added in future updates.',
        date: '2024-02-10',
        helpful: 32
      },
      // Add more reviews...
    ]
  },
  {
    id: '2',
    title: 'Pixel Quest',
    description: 'Embark on an epic retro-style RPG adventure with modern gameplay mechanics.',
    longDescription: 'Pixel Quest is a modern take on classic RPGs, featuring engaging gameplay mechanics and a retro-style art style.',
    icon: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=100&h=100&fit=crop',
    category: 'game',
    rating: 4.9,
    downloads: '100K+',
    version: '1.2.0',
    size: '35 MB',
    screenshots: [
      'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800',
      'https://images.unsplash.com/photo-1472457897821-70d3819a0e24?w=800',
      'https://images.unsplash.com/photo-1498736297812-3a08021f206f?w=800'
    ],
    changelog: [
      'Added new levels and quests',
      'Improved AI enemy AI',
      'Bug fixes and performance improvements'
    ],
    playStoreLink: 'https://play.google.com/store/apps/details?id=com.pixelquest',
    averageRating: 4.9,
    totalReviews: 1000,
    ratingCounts: {
      1: 10,
      2: 20,
      3: 30,
      4: 40,
      5: 930
    },
    reviews: [
      // Add reviews...
    ]
  },
  {
    id: '3',
    title: 'MindfulMe',
    description: 'Your personal meditation and mindfulness companion for daily peace.',
    longDescription: `MindfulMe is a comprehensive meditation and mindfulness app designed to help you find peace in your busy life. With guided meditations, breathing exercises, and sleep stories narrated by experts, MindfulMe makes mental wellness accessible to everyone.

    Features include mood tracking, daily mindfulness reminders, progress statistics, and a community section where you can share your journey with others. The app adapts to your schedule and preferences, offering sessions from 3 to 60 minutes.`,
    icon: 'https://images.unsplash.com/photo-1508672019048-805c876b67e2?w=100&h=100&fit=crop',
    category: 'app',
    rating: 4.9,
    downloads: '1M+',
    version: '3.2.1',
    size: '38 MB',
    screenshots: [
      'https://images.unsplash.com/photo-1508672019048-805c876b67e2?w=800',
      'https://images.unsplash.com/photo-1593811167562-9cef47bfc4a7?w=800',
      'https://images.unsplash.com/photo-1515023115689-589c33041d3c?w=800'
    ],
    changelog: [
      'New guided meditation sessions',
      'Enhanced sleep stories collection',
      'Improved audio quality',
      'Bug fixes and performance improvements'
    ],
    playStoreLink: 'https://play.google.com/store',
    averageRating: 4.9,
    totalReviews: 2000,
    ratingCounts: {
      1: 20,
      2: 40,
      3: 60,
      4: 80,
      5: 1800
    },
    reviews: [
      // Add reviews...
    ]
  },
  {
    id: '4',
    title: 'TaskMaster Pro',
    description: 'Advanced project management and task organization with AI assistance.',
    longDescription: `TaskMaster Pro revolutionizes the way you manage projects and tasks. Using AI-powered scheduling and smart task prioritization, it helps teams and individuals maximize productivity while maintaining work-life balance.

    The app features automated task distribution, real-time collaboration tools, customizable workflows, and detailed analytics to track project progress and team performance.`,
    icon: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=100&h=100&fit=crop',
    category: 'app',
    rating: 4.7,
    downloads: '250K+',
    version: '2.4.0',
    size: '42 MB',
    screenshots: [
      'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800',
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800',
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800'
    ],
    changelog: [
      'Introduced AI task prioritization',
      'New team collaboration features',
      'Enhanced reporting dashboard',
      'Performance optimizations'
    ],
    playStoreLink: 'https://play.google.com/store',
    averageRating: 4.7,
    totalReviews: 500,
    ratingCounts: {
      1: 10,
      2: 20,
      3: 30,
      4: 40,
      5: 430
    },
    reviews: [
      // Add reviews...
    ]
  }
];

interface AppStoreProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export default function AppStore({ isOpen, setIsOpen }: AppStoreProps) {
  const [activeTab, setActiveTab] = useState<'all' | 'apps' | 'games' | 'editors'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedApp, setSelectedApp] = useState<App | null>(null);
  const [showTabsDropdown, setShowTabsDropdown] = useState(false);

  const filteredApps = apps.filter(app => 
    activeTab === 'all' ? true : 
    activeTab === 'apps' ? app.category === 'app' : 
    app.category === 'game'
  );

  const handleAppClick = (app: App) => {
    setSelectedApp(app);
  };

  const tabs = [
    { id: 'all', label: 'For you', icon: Layout },
    { id: 'apps', label: 'Apps', icon: Grid },
    { id: 'games', label: 'Games', icon: Gamepad },
    { id: 'editors', label: "Editor's", icon: Trophy }
  ];

  return (
    <>
      {/* Floating Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-24 right-6 z-50 px-4 py-3 bg-gradient-to-tr from-purple-600 to-blue-500
                 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300
                 hidden tablet:flex items-center gap-2"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Store className="w-5 h-5 text-white" />
        <span className="text-white text-sm font-medium">App Store</span>
      </motion.button>

      {/* App Store Modal */}
      <AnimatePresence mode="wait">
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/20 dark:bg-black/40 backdrop-blur-md z-[60]"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="fixed inset-4 tablet:inset-8 z-[70] flex items-center justify-center"
            >
              <div className="w-full max-w-4xl h-[85vh] bg-white/80 dark:bg-gray-900/80 
                          backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 
                          flex flex-col overflow-hidden relative">
                <AnimatePresence mode="wait">
                  {selectedApp ? (
                    <AppDetail
                      key="detail"
                      app={selectedApp}
                      onClose={() => setSelectedApp(null)}
                    />
                  ) : (
                    <motion.div
                      key="store"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex flex-col h-full"
                    >
                      {/* Header */}
                      <div className="flex-shrink-0 p-6 border-b border-gray-200/50 dark:border-gray-800/50">
                        <div className="relative flex items-center justify-between mb-6">
                          <div className="flex items-center gap-4">
                            <motion.img 
                              src={playstore} 
                              alt="Play Store"
                              className="w-10 h-10 object-contain" 
                              whileHover={{ rotate: 360 }}
                              transition={{ duration: 0.5 }}
                            />
                            <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 
                                       bg-clip-text text-transparent">
                              App Store
                            </h2>
                          </div>
                          <motion.button
                            onClick={() => setIsOpen(false)}
                            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl transition-colors"
                            whileHover={{ rotate: 90 }}
                            transition={{ duration: 0.2 }}
                          >
                            <X className="w-6 h-6 text-gray-600 dark:text-gray-400" />
                          </motion.button>
                        </div>

                        {/* Search Bar */}
                        <div className="relative mb-6">
                          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Search apps and games"
                            className="w-full pl-12 pr-4 py-3 bg-gray-100/50 dark:bg-gray-800/50 
                                   rounded-xl text-gray-900 dark:text-white placeholder-gray-500 
                                   focus:outline-none focus:ring-2 focus:ring-purple-500/50 
                                   transition-all duration-300"
                          />
                        </div>

                        {/* Tabs */}
                        <div className="flex items-center gap-2">
                          {tabs.map((tab) => (
                            <motion.button
                              key={tab.id}
                              onClick={() => setActiveTab(tab.id)}
                              className={`relative flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs
                                       whitespace-nowrap transition-all duration-300 ${
                                activeTab === tab.id
                                  ? 'text-white'
                                  : 'text-gray-600 dark:text-gray-400'
                              }`}
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              {activeTab === tab.id && (
                                <motion.div
                                  layoutId="activeTab"
                                  className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg"
                                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                />
                              )}
                              <span className="relative flex items-center gap-1.5 z-10">
                                <tab.icon className="w-3.5 h-3.5" />
                                {tab.label}
                              </span>
                            </motion.button>
                          ))}
                        </div>
                      </div>

                      {/* Apps Grid */}
                      <div className="flex-1 overflow-y-auto">
                        <div className="p-6 grid grid-cols-1 tablet:grid-cols-2 gap-6">
                          {filteredApps.map((app) => (
                            <motion.div
                              key={app.id}
                              layout
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              whileHover={{ scale: 1.02 }}
                              onClick={() => handleAppClick(app)}
                              className="group relative p-4 bg-white dark:bg-gray-800/50 rounded-2xl 
                                     hover:shadow-xl transition-all duration-300 border border-gray-200/50 
                                     dark:border-gray-700/50 backdrop-blur-sm cursor-pointer"
                            >
                              {/* App content */}
                              <div className="flex gap-4">
                                <img
                                  src={app.icon}
                                  alt={app.title}
                                  className="w-16 h-16 tablet:w-20 tablet:h-20 rounded-2xl object-cover"
                                />
                                <div className="flex-1 min-w-0">
                                  <h3 className="text-base tablet:text-lg font-semibold text-gray-900 dark:text-white mb-1">
                                    {app.title}
                                  </h3>
                                  <p className="text-xs tablet:text-sm text-gray-600 dark:text-gray-300 mb-2 line-clamp-2">
                                    {app.description}
                                  </p>
                                  <div className="flex items-center gap-3">
                                    <div className="flex items-center gap-1">
                                      <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                                      <span className="text-xs tablet:text-sm font-medium text-gray-900 dark:text-white">
                                        {app.rating}
                                      </span>
                                    </div>
                                    <span className="text-gray-300 dark:text-gray-700">•</span>
                                    <span className="text-xs tablet:text-sm text-gray-600 dark:text-gray-400">
                                      {app.downloads}
                                    </span>
                                  </div>
                                </div>
                              </div>

                              {/* Install Button - Appears on hover */}
                              <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="mt-4 pt-4 border-t border-gray-200/50 dark:border-gray-700/50"
                              >
                                <motion.button
                                  className="w-full flex items-center justify-center gap-2 px-4 py-2 
                                           bg-gradient-to-r from-purple-600 to-blue-500 rounded-xl 
                                           text-white text-sm font-medium"
                                  whileHover={{ scale: 1.02 }}
                                  whileTap={{ scale: 0.98 }}
                                >
                                  <Download className="w-4 h-4" />
                                  Install App
                                </motion.button>
                              </motion.div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
} 