import { motion } from 'framer-motion';
import { Code2 } from 'lucide-react';

export default function SplashScreen() {
  return (
    <motion.div
      className="fixed inset-0 bg-white dark:bg-gray-900 flex items-center justify-center z-[9999]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative flex flex-col items-center">
        {/* Main Logo */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0, y: 50 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 20,
            duration: 0.6
          }}
          className="flex items-center gap-3 mb-4"
        >
          <motion.div
            className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center"
            animate={{ 
              rotate: 360,
              scale: [1, 1.1, 1],
            }}
            transition={{
              rotate: { duration: 2, ease: "linear", repeat: Infinity },
              scale: { duration: 1, repeat: Infinity }
            }}
          >
            <Code2 className="w-6 h-6 text-gray-900 dark:text-white" />
          </motion.div>
          
          <motion.h1 
            className="text-5xl font-black text-gray-900 dark:text-white font-['DM_Sans'] tracking-tighter"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 20,
              delay: 0.2
            }}
          >
            KHK
            <motion.span 
              className="text-gray-900 dark:text-white"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [1, 0.7, 1]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              .
            </motion.span>
          </motion.h1>
        </motion.div>

        {/* Animated Line */}
        <motion.div
          className="w-24 h-[2px] bg-gray-200 dark:bg-gray-700"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.4,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Background Animation */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(0,0,0,0.1),_transparent_70%)]" />
      </motion.div>
    </motion.div>
  );
} 