import { motion } from 'framer-motion';
import { ArrowLeft, Star, Download, ArrowUpRight, Clock, Tag, Info, Github } from 'lucide-react';
import { App } from './AppStore';
import AppReviews from './AppReviews';

interface AppDetailProps {
  app: App;
  onClose: () => void;
}

export default function AppDetail({ app, onClose }: AppDetailProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col h-full"
    >
      {/* Header */}
      <div className="flex-shrink-0 p-6 border-b border-gray-200/50 dark:border-gray-800/50">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <motion.button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowLeft className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            </motion.button>
            <h2 className="text-lg font-medium text-gray-900 dark:text-white">
              App Details
            </h2>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto">
        <div className="p-6 space-y-6">
          {/* App Info */}
          <div className="flex items-start gap-4">
            <img
              src={app.icon}
              alt={app.title}
              className="w-20 h-20 rounded-2xl"
            />
            <div>
              <h1 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {app.title}
              </h1>
              <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  <span className="font-medium">{app.rating}</span>
                </div>
                <span className="text-gray-300 dark:text-gray-700">•</span>
                <span>{app.downloads} downloads</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            {app.playStoreLink && (
              <motion.a
                href={app.playStoreLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 
                       bg-purple-600 hover:bg-purple-700 text-white rounded-xl 
                       text-sm font-medium transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Download className="w-4 h-4" />
                Install App
              </motion.a>
            )}
            
            {app.github && (
              <motion.a
                href={app.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-2.5 
                       bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white 
                       rounded-xl text-sm font-medium hover:bg-gray-200 
                       dark:hover:bg-gray-700 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Github className="w-4 h-4" />
                Source
              </motion.a>
            )}
          </div>

          {/* Screenshots with horizontal scroll */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Preview
            </h3>
            <div className="relative">
              <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory">
                {app.screenshots.map((screenshot, index) => (
                  <motion.div
                    key={index}
                    className="relative flex-shrink-0 w-60 rounded-2xl overflow-hidden 
                             aspect-[9/16] bg-gray-100 dark:bg-gray-800 snap-center"
                    whileHover={{ scale: 1.02 }}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <img
                      src={screenshot}
                      alt={`${app.title} screenshot ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                ))}
              </div>

              {/* Scroll Indicator */}
              <div className="absolute -bottom-2 left-0 right-0 flex justify-center gap-1">
                {app.screenshots.map((_, index) => (
                  <motion.div
                    key={index}
                    className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-700"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.2,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              About this app
            </h3>
            <p className="text-gray-600 dark:text-gray-300 whitespace-pre-wrap">
              {app.longDescription}
            </p>
          </div>

          {/* Reviews */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Reviews & Ratings
            </h3>
            <AppReviews
              reviews={app.reviews}
              averageRating={app.averageRating}
              totalReviews={app.totalReviews}
              ratingCounts={app.ratingCounts}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
} 