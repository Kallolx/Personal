import { motion, useAnimationControls } from 'framer-motion';
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faAndroid,
  faReact,
  faFigma,
  faFlutter,
  faFirefox,
  faGithub,
  faDribbble,
  faBehance
} from '@fortawesome/free-brands-svg-icons';

const brands = [
  { 
    id: 1, 
    name: 'Android Studio',
    icon: faAndroid,
    color: '#3DDC84'
  },
  { 
    id: 2, 
    name: 'Next.js',
    icon: faReact,
    color: '#000000'
  },
  { 
    id: 3, 
    name: 'Figma',
    icon: faFigma,
    color: '#F24E1E'
  },
  { 
    id: 4, 
    name: 'Flutter',
    icon: faFlutter,
    color: '#02569B'
  },
  { 
    id: 5, 
    name: 'Firebase',
    icon: faFirefox,
    color: '#FFCA28'
  },
  { 
    id: 6, 
    name: 'GitHub',
    icon: faGithub,
    color: '#181717'
  },
  { 
    id: 7, 
    name: 'Dribbble',
    icon: faDribbble,
    color: '#EA4C89'
  },
  { 
    id: 8, 
    name: 'Behance',
    icon: faBehance,
    color: '#1769FF'
  }
];

export default function BrandSlider() {
  const controls = useAnimationControls();

  useEffect(() => {
    controls.start({
      x: [0, -1920],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 30,
          ease: "linear",
        },
      },
    });
  }, [controls]);

  return (
    <div className="w-full py-8 sm:py-12 md:py-16 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-gray-50 to-transparent dark:from-gray-800/50 z-10" />
        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-gray-50 to-transparent dark:from-gray-800/50 z-10" />
        
        <motion.div
          animate={controls}
          className="flex gap-16 items-center"
        >
          {[...brands, ...brands, ...brands].map((brand, index) => (
            <motion.div
              key={`${brand.id}-${index}`}
              className="flex flex-col items-center"
            >
              <motion.div
                className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 flex items-center justify-center opacity-60 hover:opacity-100 transition-all duration-300"
                whileHover={{ 
                  scale: 1.2,
                  rotateX: 10,
                  rotateY: -10,
                  transition: { 
                    duration: 0.2,
                    ease: "easeOut"
                  }
                }}
                style={{ color: brand.color }}
              >
                <FontAwesomeIcon 
                  icon={brand.icon} 
                  className="w-full h-full" 
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}