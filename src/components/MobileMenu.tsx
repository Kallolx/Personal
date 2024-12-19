import { motion } from 'framer-motion';
import { User, FileText, Bot, Folder } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  setIsAppStoreOpen: (isOpen: boolean) => void;
  setIsChatBotOpen: (isOpen: boolean) => void;
  scrollToAbout: () => void;
  handleResumeClick: () => void;
  setIsAboutOpen: (isOpen: boolean) => void;
}

export default function MobileMenu({ 
  isOpen, 
  setIsOpen,
  setIsAppStoreOpen,
  setIsChatBotOpen,
  scrollToAbout,
  handleResumeClick,
  setIsAboutOpen
}: MobileMenuProps) {
  const menuItems = [
    { 
      id: 'about', 
      label: 'About', 
      icon: User,
      onClick: () => {
        setIsAboutOpen(true);
        setIsOpen(false);
      }
    },
    { 
      id: 'resume', 
      label: 'Resume', 
      icon: FileText,
      onClick: () => {
        handleResumeClick();
        setIsOpen(false);
      }
    },
    { 
      id: 'ai-chat', 
      label: 'AI Chat', 
      icon: Bot,
      onClick: () => {
        setIsChatBotOpen(true);
        setIsOpen(false);
      }
    },
    { 
      id: 'store', 
      label: 'Folders', 
      icon: Folder,
      onClick: () => {
        setIsAppStoreOpen(true);
        setIsOpen(false);
      }
    }
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 tablet:hidden">
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        className="flex items-center justify-around p-4 bg-white/80 dark:bg-gray-900/80 
                 backdrop-blur-lg border-t border-gray-200 dark:border-gray-800"
      >
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <motion.button
              key={item.id}
              onClick={item.onClick}
              className="flex flex-col items-center gap-1 p-2 rounded-xl text-gray-500 
                       dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 
                       transition-colors"
              whileTap={{ scale: 0.95 }}
            >
              <Icon className="w-5 h-5" />
              <span className="text-xs">{item.label}</span>
            </motion.button>
          );
        })}
      </motion.div>
    </div>
  );
} 