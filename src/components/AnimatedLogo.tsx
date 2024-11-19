import { motion } from 'framer-motion';

export default function AnimatedLogo() {
  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: { duration: 1, ease: "easeInOut" }
    }
  };

  return (
    <motion.svg
      width="48"
      height="48"
      viewBox="0 0 24 24"
      fill="none"
      className="text-lime-500 dark:text-lime-400"
      initial="hidden"
      animate="visible"
    >
      <motion.path
        d="M12 3L20 7.5V16.5L12 21L4 16.5V7.5L12 3Z"
        stroke="currentColor"
        strokeWidth="2"
        variants={pathVariants}
      />
      <motion.path
        d="M12 8L16 10.5V15.5L12 18L8 15.5V10.5L12 8Z"
        stroke="currentColor"
        strokeWidth="2"
        variants={pathVariants}
      />
    </motion.svg>
  );
} 