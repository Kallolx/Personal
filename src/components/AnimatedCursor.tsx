import { useEffect, useState, useRef } from 'react';
import { motion, useSpring } from 'framer-motion';

export default function AnimatedCursor() {
  const [isPointer, setIsPointer] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);

  // Use springs for smoother cursor movement
  const cursorX = useSpring(0, {
    stiffness: 300,
    damping: 20,
    mass: 0.5
  });
  const cursorY = useSpring(0, {
    stiffness: 300,
    damping: 20,
    mass: 0.5
  });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);

      const target = e.target as HTMLElement;
      setIsPointer(
        window.getComputedStyle(target).cursor === 'pointer' ||
        target.tagName.toLowerCase() === 'button' ||
        target.tagName.toLowerCase() === 'a' ||
        target.closest('button') !== null ||
        target.closest('a') !== null ||
        target.classList.contains('clickable')
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
  }, [cursorX, cursorY]);

  // Hide cursor on mobile devices
  if (typeof window !== 'undefined' && window.innerWidth < 768) {
    return null;
  }

  return (
    <>
      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] mix-blend-difference hidden tablet:block"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%'
        }}
        animate={{
          scale: isPressed ? 0.8 : isPointer ? 1.5 : 1,
          opacity: isPointer ? 0.5 : 0.3,
        }}
        transition={{
          scale: {
            type: "spring",
            stiffness: 300,
            damping: 20,
            mass: 0.5
          },
          opacity: {
            duration: 0.2
          }
        }}
      >
        <div className="w-8 h-8 rounded-full border border-white" />
      </motion.div>

      {/* Main dot */}
      <motion.div
        ref={cursorRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference hidden tablet:block"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%'
        }}
        animate={{
          scale: isPressed ? 0.5 : isPointer ? 0.8 : 1,
          opacity: 1
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
          mass: 0.5
        }}
      >
        <div className="w-2 h-2 bg-white rounded-full" />
      </motion.div>
    </>
  );
} 