import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

interface TestimonialProps {
  content: string;
  author: string;
  role: string;
  image: string;
}

export default function Testimonial({ content, author, role, image }: TestimonialProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg flex flex-col items-center text-center"
    >
      <Quote className="w-12 h-12 text-indigo-500 mb-6" />
      <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg">{content}</p>
      <img src={image} alt={author} className="w-16 h-16 rounded-full mb-4 object-cover" />
      <h4 className="font-bold dark:text-white">{author}</h4>
      <p className="text-gray-500 dark:text-gray-400">{role}</p>
    </motion.div>
  );
}