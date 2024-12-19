import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Moon, Sun, Download, Code2, Smartphone, Database, GitBranch, Palette, Server, Layout, Cpu, Boxes, Layers, Wrench, Rocket, PaintBucket, Brackets, Workflow, Linkedin, Mail, Instagram, Facebook, ExternalLink, LinkedinIcon, MailIcon, Instagram as InstagramIcon, FacebookIcon, GithubIcon, TwitterIcon, FileText, Menu, FileDown, User, Brain, Store, ArrowUpRight, X } from 'lucide-react';
import ProjectCard from '../components/ProjectCard';
import BrandSlider from '../components/BrandSlider';
import { projects } from '../data/projects';
import userImage from '../assets/images/user.jpg';
import linkedinIcon from '../assets/images/linkedin.png';
import githubIcon from '../assets/images/github.png';
import emailIcon from '../assets/images/email.png';
import About from '../components/About';
import ChatBot from '../components/ChatBot';
import MobileMenu from '../components/MobileMenu';
import { Link } from 'react-router-dom';
import AppStore from '../components/AppStore';

const EyeFollowCursor = ({ className = "", size = 24 }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const eyeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (eyeRef.current) {
        const eye = eyeRef.current.getBoundingClientRect();
        const eyeCenterX = eye.left + eye.width / 2;
        const eyeCenterY = eye.top + eye.height / 2;
        
        const radian = Math.atan2(e.clientY - eyeCenterY, e.clientX - eyeCenterX);
        const radius = eye.width / 4;
        const offsetX = Math.cos(radian) * radius;
        const offsetY = Math.sin(radian) * radius;
        
        setMousePosition({ x: offsetX, y: offsetY });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div 
      ref={eyeRef}
      className={`relative ${className}`}
    >
      {/* Eye Container */}
      <div 
        className="w-[24px] h-[24px] rounded-full bg-white dark:bg-gray-700 
                   flex items-center justify-center shadow-inner"
        style={{ width: size, height: size }}
      >
        {/* Pupil */}
        <motion.div
          className="w-1/2 h-1/2 rounded-full bg-gray-900 dark:bg-white"
          animate={{
            x: mousePosition.x,
            y: mousePosition.y,
          }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 10,
            mass: 0.2
          }}
        />
      </div>
    </div>
  );
};

interface HomeProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

export default function Home({ darkMode, setDarkMode }: HomeProps) {
  const [isAppStoreOpen, setIsAppStoreOpen] = useState(false);
  const [showNotification, setShowNotification] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const [activeFilter, setActiveFilter] = useState('all');
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isChatBotOpen, setIsChatBotOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const filteredProjects = projects.filter(project => 
    activeFilter === 'all' ? true : project.category.toLowerCase() === activeFilter
  );

  const filterButtons = [
    { id: 'all', label: 'All' },
    { id: 'web', label: 'Web' },
    { id: 'mobile', label: 'Mobile' },
    { id: 'game', label: 'Games' },
    { id: 'design', label: 'Design' },
    { id: 'saas', label: 'SaaS' }
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.3,
        duration: 0.5
      }
    }
  };

  const itemVariants = {
    hidden: { 
      y: 40, 
      opacity: 0,
      scale: 0.95
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        duration: 0.6
      }
    }
  };

  const navVariants = {
    hidden: { 
      y: -20, 
      opacity: 0 
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
        duration: 0.4
      }
    }
  };

  const skillVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 15,
      }
    }
  };

  const handleResumeClick = () => {
    window.open('https://drive.google.com/file/d/1v8Rv8Qix4XanzWb7BuZ93vOCVnJK3BHI/view?usp=drive_link', '_blank');
  };

  const skills = [
    { name: 'Android Studio', icon: Smartphone },
    { name: 'Flutter', icon: Boxes },
    { name: 'Firebase', icon: Database },
    { name: 'React.js', icon: Code2 },
    { name: 'Next.js', icon: Rocket },
    { name: 'Tailwind CSS', icon: Palette },
    { name: 'TypeScript', icon: Brackets },
    { name: 'Node.js', icon: Server },
    { name: 'MongoDB', icon: Database },
    { name: 'REST APIs', icon: Workflow },
    { name: 'Git', icon: GitBranch },
    { name: 'Vite', icon: Rocket },
    { name: 'Material UI', icon: Layout },
    { name: 'Kotlin', icon: Cpu },
    { name: 'Dart', icon: Layers }
  ];

  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, -50]);
  const y2 = useTransform(scrollY, [0, 500], [0, 50]);
  const opacity = useTransform(scrollY, [0, 200], [1, 0]);

  const headerVariants = {
    hidden: { 
      opacity: 0,
      y: 100
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 20,
        mass: 1,
        staggerChildren: 0.2
      }
    }
  };

  const childVariants = {
    hidden: { 
      opacity: 0,
      y: 50
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20
      }
    }
  };

  const appStoreBannerRef = useRef<HTMLDivElement>(null);

  const scrollToAppBanner = () => {
    appStoreBannerRef.current?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'center'
    });
  };

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <>
      {/* Notification Bar */}
      <AnimatePresence>
        {showNotification && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="fixed top-[72px] left-0 right-0 z-40 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md 
                      border-b border-gray-200 dark:border-gray-800"
          >
            <div className="container mx-auto px-4">
              <motion.div 
                className="h-8 flex items-center justify-between cursor-pointer"
                onClick={scrollToAppBanner}
              >
                <div className="flex-1 text-center">
                  <p className="text-xs text-gray-600 dark:text-gray-300">
                    Explore my Portfolio Hub! Check out my latest projects and work.
                  </p>
                </div>
                <motion.button
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowNotification(false);
                  }}
                  className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X className="w-4 h-4" />
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen bg-white dark:bg-gray-900"
      >
        {/* Navigation Bar - Modified for mobile */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 
                      backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              {/* Logo - Always visible */}
              <Link to="/" className="flex items-center gap-2">
                <Code2 className="w-8 h-8 text-gray-900 dark:text-white" />
                <span className="text-xl font-bold text-gray-900 dark:text-white">KHK</span>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden tablet:flex items-center gap-4">
                <button
                  onClick={() => setIsAboutOpen(true)}
                  className="flex items-center gap-2 px-4 py-2 text-gray-600 dark:text-gray-300 
                           hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-all duration-300"
                >
                  <User className="w-4 h-4" />
                  <span>About</span>
                </button>
                
                <button
                  onClick={handleResumeClick}
                  className="flex items-center gap-2 px-4 py-2 text-gray-600 dark:text-gray-300 
                           hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-all duration-300"
                >
                  <FileText className="w-4 h-4" />
                  <span>Resume</span>
                </button>

                <button
                  onClick={toggleDarkMode}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                >
                  {darkMode ? (
                    <Sun className="w-5 h-5 text-gray-900 dark:text-white" />
                  ) : (
                    <Moon className="w-5 h-5 text-gray-900 dark:text-white" />
                  )}
                </button>
              </div>

              {/* Mobile Right Side - Only Dark Mode Toggle */}
              <div className="flex tablet:hidden items-center">
                <button
                  onClick={toggleDarkMode}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                >
                  {darkMode ? (
                    <Sun className="w-5 h-5 text-gray-900 dark:text-white" />
                  ) : (
                    <Moon className="w-5 h-5 text-gray-900 dark:text-white" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </nav>

        <MobileMenu
          isOpen={isMobileMenuOpen}
          setIsOpen={setIsMobileMenuOpen}
          setIsAppStoreOpen={setIsAppStoreOpen}
          setIsChatBotOpen={setIsChatBotOpen}
          scrollToAbout={scrollToAbout}
          handleResumeClick={handleResumeClick}
          setIsAboutOpen={setIsAboutOpen}
        />

        {/* Hero Section */}
        <motion.section
          variants={headerVariants}
          initial="hidden"
          animate="visible"
          className="pt-24 mobile:pt-28 tablet:pt-32 desktop:pt-36 pb-12 mobile:pb-14 tablet:pb-16 desktop:pb-20 px-4"
        >
          <div className="container mx-auto">
            <motion.div className="max-w-[320px] mobile:max-w-[380px] tablet:max-w-[720px] desktop:max-w-4xl mx-auto">
              <div className="flex flex-col tablet:flex-row tablet:items-center tablet:gap-8 desktop:gap-12">
                {/* Profile Image */}
                <motion.div
                  variants={childVariants}
                  className="relative"
                >
                  <div className="w-32 h-32 mobile:w-40 mobile:h-40 tablet:w-48 tablet:h-48 rounded-full overflow-hidden mb-8 tablet:mb-0 mx-auto tablet:mx-0">
                    <img 
                      src={userImage} 
                      alt="Profile" 
                      className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-110"
                    />
                  </div>
                </motion.div>

                <div className="tablet:flex-1">
                  <motion.h1 
                    variants={childVariants}
                    className="text-3xl mobile:text-4xl tablet:text-5xl desktop:text-7xl font-medium mb-4 mobile:mb-5 tablet:mb-6 desktop:mb-8 text-gray-900 dark:text-white leading-tight text-center tablet:text-left"
                  >
                    I'm Kamrul<br />Hasan Kallol
                    <motion.span 
                      className="inline-block"
                      animate={{ rotate: [0, 10, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <span className="text-gray-900 dark:text-white">.</span>
                    </motion.span>
                  </motion.h1>
                  <motion.p 
                    variants={childVariants}
                    className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-6 leading-relaxed text-center tablet:text-left"
                  >
                    I design and develop digital products with meticulous attention to detail.
                  </motion.p>
                  
                  {/* Tech Stack Pills */}
                  <motion.div 
                    variants={childVariants}
                    className="flex flex-wrap gap-3 justify-center tablet:justify-start mb-12"
                  >
                    {[
                      { name: 'Flutter', icon: Boxes, color: 'from-blue-500/20 to-blue-500/10' },
                      { name: 'Next.js', icon: Rocket, color: 'from-gray-500/20 to-gray-500/10' },
                      { name: 'React', icon: Code2, color: 'from-cyan-500/20 to-cyan-500/10' },
                      { name: 'Node.js', icon: Server, color: 'from-green-500/20 to-green-500/10' },
                      { name: 'TypeScript', icon: Brackets, color: 'from-indigo-500/20 to-indigo-500/10' },
                      { name: 'Firebase', icon: Database, color: 'from-amber-500/20 to-amber-500/10' },
                      { name: 'MongoDB', icon: Database, color: 'from-emerald-500/20 to-emerald-500/10' },
                      { name: 'Tailwind', icon: Palette, color: 'from-sky-500/20 to-sky-500/10' },
                      { name: 'Git', icon: GitBranch, color: 'from-rose-500/20 to-rose-500/10' }
                    ].map((tech, index) => (
                      <motion.div
                        key={tech.name}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`px-4 py-2 rounded-full bg-gradient-to-r ${tech.color} 
                                   backdrop-blur-sm flex items-center gap-2 group cursor-pointer`}
                      >
                        <tech.icon className="w-4 h-4 text-gray-700 dark:text-gray-300" />
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          {tech.name}
                        </span>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Brand Slider */}
        <motion.div 
          variants={itemVariants}
          className="overflow-hidden"
        >
          <BrandSlider />
        </motion.div>

        {/* Projects Section */}
        <motion.section 
          id="projects"
          variants={itemVariants}
          className="py-12 mobile:py-14 tablet:py-16 desktop:py-20 px-4"
        >
          <div className="container mx-auto">
            <div className="flex flex-col mobile:flex-col tablet:flex-row items-start tablet:items-center justify-between mb-8 mobile:mb-10 tablet:mb-12 desktop:mb-16">
              <h2 className="text-2xl mobile:text-3xl tablet:text-4xl desktop:text-4xl font-medium text-gray-900 dark:text-white mb-4 tablet:mb-0">
                My Creations ✨
              </h2>
              
              {/* Filter Buttons - Desktop */}
              <div className="hidden tablet:flex items-center gap-2">
                {filterButtons.map((btn) => (
                  <button
                    key={btn.id}
                    onClick={() => setActiveFilter(btn.id)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all
                      ${activeFilter === btn.id
                        ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900'
                        : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                      }`}
                  >
                    {btn.label}
                  </button>
                ))}
              </div>

              {/* Mobile Filter Buttons */}
              <div className="flex tablet:hidden items-center gap-2 w-full overflow-x-auto pb-2">
                {filterButtons.map((btn) => (
                  <button
                    key={btn.id}
                    onClick={() => setActiveFilter(btn.id)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap
                      ${activeFilter === btn.id
                        ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900'
                        : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                      }`}
                  >
                    {btn.label}
                  </button>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 gap-6">
              {projects.map((project) => (
                <ProjectCard
                  key={project.id}
                  {...project}
                />
              ))}
            </div>
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section 
          variants={itemVariants}
          id="contact" 
          className="py-16 mobile:py-20 tablet:py-24 desktop:py-32 px-4 relative overflow-hidden"
        >
          <div className="container mx-auto relative z-10">
            <motion.div 
              className="max-w-4xl mx-auto text-center"
              variants={itemVariants}
            >
              <h2 className="text-3xl mobile:text-4xl tablet:text-5xl desktop:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
                Let's Connect
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
                Feel free to reach out through any platform. I'm always open to discussing new projects, creative ideas, or opportunities.
              </p>

              <div className="grid grid-cols-1 tablet:grid-cols-3 gap-4 max-w-3xl mx-auto">
                {[
                  {
                    name: 'LinkedIn',
                    icon: linkedinIcon,
                    color: 'bg-[#0077B5]/10 hover:bg-[#0077B5]/20',
                    link: 'https://www.linkedin.com/in/kamrul-hasan-dev'
                  },
                  {
                    name: 'GitHub',
                    icon: githubIcon,
                    color: 'bg-gray-300/30 hover:bg-gray-300/40 dark:bg-gray-500/10 dark:hover:bg-gray-500/20',
                    link: 'https://github.com/Kallolx'
                  },
                  {
                    name: 'Email',
                    icon: emailIcon,
                    color: 'bg-gray-500/10 hover:bg-gray-500/20',
                    link: 'mailto:kallol.business.ds@gmail.com'
                  }
                ].map((platform) => (
                  <motion.a
                    key={platform.name}
                    href={platform.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group relative p-6 rounded-2xl ${platform.color} transition-all duration-300`}
                    whileHover={{ y: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="flex flex-col items-center gap-3">
                      <img 
                        src={platform.icon} 
                        alt={platform.name}
                        className="w-8 h-8 object-contain"
                      />
                      <span className="font-medium text-sm text-gray-900 dark:text-white">
                        {platform.name}
                      </span>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <motion.div
              className="absolute -top-1/2 -right-1/2 w-[500px] h-[500px] tablet:w-[800px] tablet:h-[800px] rounded-full bg-gradient-to-br from-lime-300/20 to-transparent dark:from-lime-500/10"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 90, 0],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            <motion.div
              className="absolute -bottom-1/2 -left-1/2 w-[500px] h-[500px] tablet:w-[800px] tablet:h-[800px] rounded-full bg-gradient-to-tr from-lime-300/20 to-transparent dark:from-lime-500/10"
              animate={{
                scale: [1.2, 1, 1.2],
                rotate: [0, -90, 0],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          </div>
        </motion.section>

        {/* Footer Section */}
        <motion.footer 
          variants={itemVariants}
          className="py-8 px-4 border-t border-gray-200 dark:border-gray-800"
        >
          <div className="container mx-auto">
            <div className="flex flex-col tablet:flex-row items-center justify-between gap-6">
              <div className="flex flex-col items-center tablet:items-start gap-2">
                <span className="text-xl font-bold text-gray-900 dark:text-white">
                  khk.
                </span>
                <p className="text-sm text-gray-600 dark:text-gray-400 text-center tablet:text-left">
                  Crafting digital experiences with precision and passion.
                </p>
              </div>

              <div className="flex flex-col items-center tablet:items-end gap-2">
                <div className="flex items-center gap-4">
                  <a 
                    href="#about" 
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    About
                  </a>
                  <span className="text-gray-300 dark:text-gray-700">•</span>
                  <a 
                    href="#contact" 
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    Contact
                  </a>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-500">
                  © {new Date().getFullYear()} All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </motion.footer>
      </motion.div>

      <About 
        isOpen={isAboutOpen} 
        onClose={() => setIsAboutOpen(false)} 
      />
      <ChatBot isOpen={isChatBotOpen} setIsOpen={setIsChatBotOpen} />
      <AppStore 
        isOpen={isAppStoreOpen} 
        setIsOpen={setIsAppStoreOpen}
        showFloatingButton={true}
      />

      {/* App Store Banner - Add ref here */}
      <motion.section
        ref={appStoreBannerRef}
        variants={containerVariants}
        className="py-8 px-4"
      >
        <div className="container mx-auto">
          <motion.div
            className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-600 to-blue-500"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute inset-0 bg-grid-white/10" />
            
            {/* Animated Particles */}
            <motion.div
              className="absolute inset-0"
              initial={false}
              animate={{
                backgroundPosition: ['0% 0%', '100% 100%'],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
                backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
                backgroundSize: '20px 20px',
              }}
            />

            <div className="relative flex flex-col tablet:flex-row items-center justify-between p-8 tablet:p-12 gap-12">
              <div className="flex-1 text-left">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm 
                           text-white/90 text-sm mb-4"
                >
                  <Code2 className="w-4 h-4" />
                  <span>Featured Projects</span>
                </motion.div>
                
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="text-2xl tablet:text-3xl font-bold text-white mb-3"
                >
                  Explore My Portfolio Hub
                </motion.h2>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="text-white/80 mb-4 text-base max-w-xl"
                >
                  Discover my collection of projects, designs, and development work. 
                  From web applications to mobile solutions.
                </motion.p>
                
                <motion.button
                  onClick={() => setIsAppStoreOpen(true)}
                  className="px-6 py-2.5 bg-white rounded-xl font-semibold text-emerald-600 
                           hover:bg-gray-100 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Open Portfolio Hub
                </motion.button>
              </div>

              {/* Project Showcase Grid */}
              <div className="relative w-full tablet:w-1/2">
                <div className="grid grid-cols-2 tablet:grid-cols-3 gap-4">
                  {[
                    {
                      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400',
                      title: 'Mobile App'
                    },
                    {
                      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400',
                      title: 'Web Development'
                    },
                    {
                      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400',
                      title: 'Backend API'
                    },
                    {
                      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400',
                      title: 'Frontend UI'
                    },
                    {
                      image: 'https://images.unsplash.com/photo-1607799279861-4dd421887fb3?w=400',
                      title: 'Database Design'
                    },
                    {
                      image: 'https://images.unsplash.com/photo-1523800503107-5bc3ba2a6f81?w=400',
                      title: 'System Architecture'
                    }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="aspect-video relative rounded-xl overflow-hidden shadow-lg"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ 
                        opacity: 1, 
                        y: 0,
                        transition: { 
                          delay: index * 0.1,
                          duration: 0.5 
                        }
                      }}
                      whileHover={{ 
                        scale: 1.02,
                        transition: { duration: 0.2 } 
                      }}
                    >
                      {/* Background Image */}
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />

                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent">
                        <div className="absolute bottom-0 left-0 right-0 p-4">
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            className="flex items-center justify-between"
                          >
                            <span className="text-sm text-white font-medium">
                              {item.title}
                            </span>
                            {index % 2 === 0 ? (
                              <Code2 className="w-4 h-4 text-emerald-400" />
                            ) : (
                              <Rocket className="w-4 h-4 text-emerald-400" />
                            )}
                          </motion.div>
                        </div>
                      </div>

                      {/* Shine Effect on Hover */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full"
                        animate={{
                          translateX: ['100%', '-100%'],
                        }}
                        transition={{
                          duration: 1,
                          ease: "easeInOut",
                          repeat: Infinity,
                          repeatDelay: 1
                        }}
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
}