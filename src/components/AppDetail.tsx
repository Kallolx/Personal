import { motion } from 'framer-motion';
import { ArrowLeft, ArrowUpRight, Github } from 'lucide-react';

interface AppDetailProps {
  item: PortfolioItem;
  onClose: () => void;
}

export default function AppDetail({ item, onClose }: AppDetailProps) {
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
              {item.category === 'project' ? 'Project Details' : 
               item.category === 'achievement' ? 'Achievement Details' : 
               'Document Details'}
            </h2>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto">
        <div className="p-6 space-y-6">
          {/* Item Info */}
          <div className="flex items-start gap-4">
            <img
              src={item.thumbnail}
              alt={item.title}
              className="w-20 h-20 rounded-2xl object-cover"
            />
            <div>
              <h1 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {item.title}
              </h1>
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-800 
                             text-gray-600 dark:text-gray-400 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          {(item.links?.live || item.links?.github || item.links?.document) && (
            <div className="flex gap-3">
              {item.links.live && (
                <motion.a
                  href={item.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 
                         bg-purple-600 hover:bg-purple-700 text-white rounded-xl 
                         text-sm font-medium transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <ArrowUpRight className="w-4 h-4" />
                  View Live
                </motion.a>
              )}
              
              {item.links.github && (
                <motion.a
                  href={item.links.github}
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
                  Source Code
                </motion.a>
              )}

              {item.links.document && (
                <motion.a
                  href={item.links.document}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-2.5 
                         bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white 
                         rounded-xl text-sm font-medium hover:bg-gray-200 
                         dark:hover:bg-gray-700 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FileText className="w-4 h-4" />
                  View Document
                </motion.a>
              )}
            </div>
          )}

          {/* Description */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Description
            </h3>
            <p className="text-gray-600 dark:text-gray-300 whitespace-pre-wrap">
              {item.longDescription}
            </p>
          </div>

          {/* Details */}
          {item.details && (
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Details
              </h3>
              <div className="space-y-4">
                {item.details.technologies && (
                  <div>
                    <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {item.details.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-800 
                                   text-gray-600 dark:text-gray-400 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                
                {item.details.role && (
                  <div>
                    <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">
                      Role
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      {item.details.role}
                    </p>
                  </div>
                )}

                {item.details.duration && (
                  <div>
                    <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">
                      Duration
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      {item.details.duration}
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Images Gallery */}
          {item.images && item.images.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Gallery
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {item.images.map((image, index) => (
                  <motion.div
                    key={index}
                    className="relative aspect-video rounded-xl overflow-hidden"
                    whileHover={{ scale: 1.02 }}
                  >
                    <img
                      src={image}
                      alt={`${item.title} preview ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
} 