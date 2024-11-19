import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

export default function AnimatedCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      const target = e.target as HTMLElement;
      setIsPointer(
        window.getComputedStyle(target).cursor === 'pointer' ||
        target.tagName.toLowerCase() === 'button' ||
        target.tagName.toLowerCase() === 'a' ||
        target.closest('button') !== null ||
        target.closest('a') !== null
      );
    };

    const updateMouseDown = () => setIsPressed(true);
    const updateMouseUp = () => setIsPressed(false);

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mousedown', updateMouseDown);
    window.addEventListener('mouseup', updateMouseUp);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mousedown', updateMouseDown);
      window.removeEventListener('mouseup', updateMouseUp);
    };
  }, []);

  return (
    <>
      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] mix-blend-difference"
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
          scale: isPressed ? 0.8 : isPointer ? 1.2 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 350,
          damping: 25,
          mass: 0.5
        }}
      >
        <div className="w-6 h-6 rounded-full border border-white opacity-50" />
      </motion.div>

      {/* Main dot */}
      <motion.div
        ref={cursorRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          scale: isPressed ? 0.5 : isPointer ? 1.2 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 450,
          damping: 25,
          mass: 0.2
        }}
      >
        <div className="w-2 h-2 bg-white rounded-full" />
      </motion.div>
    </>
  );
} 