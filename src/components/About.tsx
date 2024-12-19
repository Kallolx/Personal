import { motion, AnimatePresence } from 'framer-motion';
import { X, Star, Award, LinkedinIcon, GithubIcon,  TwitterIcon } from 'lucide-react';
import botImage from '../assets/images/bot.png';
import bannerVideo from '../assets/images/banner1.mp4';

interface AboutProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function About({ isOpen, onClose }: AboutProps) {
  const socialStats = [
    {
      platform: 'Fiverr',
      metric: '4.7',
      metricType: 'Rating',
      icon: Award,
      color: 'bg-gradient-to-r from-[#1DBF73] to-[#19A463]',
      bgColor: 'bg-gray-900/5 dark:bg-gray-800/50',
      link: 'https://www.fiverr.com/sm_kamrul_hasan'
    },
    {
      platform: 'LinkedIn',
      metric: '4.5K',
      metricType: 'Views',
      icon: LinkedinIcon,
      color: 'bg-gradient-to-r from-[#0A66C2] to-[#0077B5]',
      bgColor: 'bg-gray-900/5 dark:bg-gray-800/50',
      link: 'https://linkedin.com/in/kamrul-hasan-dev'
    },
    {
      platform: 'GitHub',
      metric: '3.8K',
      metricType: 'Views',
      icon: GithubIcon,
      color: 'bg-gradient-to-r from-[#2D333B] to-[#1A1D21]',
      bgColor: 'bg-gray-900/5 dark:bg-gray-800/50',
      link: 'https://github.com/Kallolx'
    },
    {
      platform: 'Twitter',
      metric: '2.9K',
      metricType: 'Views',
      icon: TwitterIcon,
      color: 'bg-gradient-to-r from-[#1DA1F2] to-[#0C86D4]',
      bgColor: 'bg-gray-900/5 dark:bg-gray-800/50',
      link: 'https://x.com/khxKallol'
    }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ 
            y: window.innerWidth >= 768 ? 0 : '100%',
            x: window.innerWidth >= 768 ? '100%' : 0
          }}
          animate={{ 
            y: 0,
            x: 0
          }}
          exit={{ 
            y: window.innerWidth >= 768 ? 0 : '100%',
            x: window.innerWidth >= 768 ? '100%' : 0
          }}
          transition={{ type: "spring", damping: 30, stiffness: 300 }}
          className="fixed inset-0 z-50 bg-white dark:bg-gray-900 overflow-y-auto
                   tablet:w-[500px] tablet:left-auto tablet:shadow-2xl"
        >
          {/* Header Video Section */}
          <div className="relative h-48">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
              src={bannerVideo}
            />
            {/* Subtle overlay without blur */}
            <div className="absolute inset-0 bg-black/10" />
            <motion.button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full 
                       transition-colors z-20"
            >
              <X className="w-5 h-5 text-white" />
            </motion.button>
          </div>

          {/* Profile Section */}
          <div className="relative px-8 pb-8">
            <div className="absolute -top-16 left-1/2 transform -translate-x-1/2">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white dark:border-gray-900">
                <img 
                  src={botImage}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="pt-20 text-center">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Kamrul Hasan Kallol
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                Full Stack Developer & UI/UX Designer
              </p>

              {/* Redesigned Social Stats Grid */}
              <div className="grid grid-cols-2 gap-4 px-4 mb-8">
                {socialStats.map((platform, index) => {
                  const Icon = platform.icon;
                  return (
                    <motion.a
                      key={index}
                      href={platform.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                      className={`group relative p-6 rounded-2xl ${platform.bgColor} 
                               border border-transparent transition-all duration-500
                               hover:border-purple-500/20 dark:hover:border-purple-500/10
                               hover:shadow-[0_0_20px_rgba(168,85,247,0.15)]`}
                    >
                      {/* Background Gradient on Hover */}
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-600/5 to-blue-500/5 
                                   opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      {/* Content */}
                      <div className="relative">
                        {/* Platform Info */}
                        <div className="flex flex-col items-start">
                          <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1
                                     group-hover:text-purple-600 dark:group-hover:text-purple-400
                                     transition-colors duration-300">
                            {platform.platform}
                          </h3>
                          
                          {/* Metric */}
                          <div className="flex items-baseline gap-2">
                            <span className={`text-3xl font-bold bg-gradient-to-r ${platform.color} 
                                         bg-clip-text text-transparent`}>
                              {platform.metric}
                            </span>
                            <span className="text-sm text-gray-500 dark:text-gray-400">
                              {platform.metricType}
                            </span>
                          </div>

                          {/* Fiverr Rating Stars */}
                          {platform.platform === 'Fiverr' && (
                            <div className="flex items-center gap-1 mt-2">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`w-4 h-4 ${
                                    i < Math.floor(Number(platform.metric))
                                      ? 'text-purple-500 fill-purple-500'
                                      : 'text-gray-300 fill-gray-300 dark:text-gray-600 dark:fill-gray-600'
                                  }`}
                                />
                              ))}
                            </div>
                          )}
                        </div>

                        {/* Icon */}
                        <div className="absolute top-1 right-1">
                          <Icon className={`w-4 h-4 text-gray-400 dark:text-gray-600 
                                       group-hover:text-purple-500 dark:group-hover:text-purple-400
                                       transition-colors duration-300`} />
                        </div>
                      </div>
                    </motion.a>
                  );
                })}
              </div>

              {/* Bio Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-6 mb-6"
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">About Me</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Full-stack developer with expertise in React, Flutter, and Node.js. 
                  Passionate about creating intuitive user experiences and scalable solutions. 
                  Currently exploring AI integration while pursuing Computer Science at BUBT.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 