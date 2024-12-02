import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Paperclip, Smile, Bot, Workflow, Linkedin, Github, Mail, Twitter, Rocket, Code2, Brain } from 'lucide-react';

interface Message {
  type: 'bot' | 'user';
  content: string;
  timestamp: Date;
  isAI?: boolean;
}

// Add new interfaces for suggestions
// interface SuggestionTab {
//   id: string;
//   label: string;
//   icon: any;
//   questions: SuggestionQuestion[];
// }

const initialMessages: Message[] = [
  {
    type: 'bot',
    content: "👋 Hey there! I'm Kamrul's AI assistant. I can help you with:\n\n• Project inquiries\n• Technical discussions\n• Collaboration opportunities\n• General questions\n\nFeel free to ask anything! 💬",
    timestamp: new Date(),
    isAI: true
  }
];

const quickReplies = [
  {
    text: "Tell me about your projects",
    icon: Rocket
  },
  {
    text: "What technologies do you use?",
    icon: Code2
  },
  {
    text: "How can we collaborate?",
    icon: Workflow
  },
  {
    text: "Show me your experience",
    icon: Brain
  }
];

const socialLinks = [
  {
    name: 'LinkedIn',
    icon: Linkedin,
    url: 'https://www.linkedin.com/in/kamrul-hasan-dev',
    color: 'bg-gradient-to-r from-[#0A66C2] to-[#0077B5]',
    username: '@kamrul-hasan-dev'
  },
  {
    name: 'GitHub',
    icon: Github,
    url: 'https://github.com/Kallolx',
    color: 'bg-gradient-to-r from-gray-700 to-gray-900 dark:from-gray-400 dark:to-gray-600',
    username: '@Kallolx'
  },
  {
    name: 'Email',
    icon: Mail,
    url: 'mailto:kallol.business.ds@gmail.com',
    color: 'bg-gradient-to-r from-purple-500 to-pink-500',
    username: 'kallol.business.ds@gmail.com'
  },
  {
    name: 'Twitter',
    icon: Twitter,
    url: 'https://twitter.com/KamrulHasanDev',
    color: 'bg-gradient-to-r from-[#1DA1F2] to-[#0C86D4]',
    username: '@KamrulHasanDev'
  }
];

export default function ChatBot({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (isOpen: boolean) => void }) {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const simulateAIResponse = async (userMessage: string) => {
    setIsTyping(true);
    await new Promise(resolve => setTimeout(resolve, 1000));

    let response = '';
    const input = userMessage.toLowerCase();

    if (input.includes('project')) {
      response = `🚀 Welcome to my Project Showcase!

🌟 Featured Projects:

📱 AI-Powered Portfolio
   • Next.js & React Architecture
   • Real-time AI Integration
   • Dynamic User Experience
   • Performance Optimized

📊 Data Analytics Platform
   • Machine Learning Integration
   • Real-time Data Processing
   • Interactive Visualizations
   • Cloud Infrastructure

🎮 Mobile Gaming Suite
   • Cross-platform Development
   • Real-time Multiplayer
   • Advanced Graphics
   • Social Integration

Would you like to explore any specific project in detail? Each one represents a unique blend of innovation and technical excellence! ✨`;
    } 
    else if (input.includes('technolog') || input.includes('stack') || input.includes('tools')) {
      response = `⚡ My Technology Arsenal:

🎨 Frontend Mastery:
   • React.js & Next.js
   • TypeScript
   • Tailwind CSS
   • Framer Motion

🔧 Backend Excellence:
   • Node.js & Express
   • Python & Django
   • GraphQL
   • RESTful APIs

🌐 Database & Cloud:
   • MongoDB & PostgreSQL
   • AWS & Firebase
   • Docker & Kubernetes
   • CI/CD Pipelines

🔮 Emerging Tech:
   • Machine Learning
   • Blockchain
   • WebAssembly
   • Edge Computing

Which technology would you like to explore further? I'd be happy to share my experiences! 💡`;
    }
    else if (input.includes('collaborate')) {
      response = `💫 Let's Create Something Amazing Together!

🔥 Services I Offer:

🏗️ Full-stack Development
   • Scalable Web Applications
   • Custom Solutions
   • Performance Optimization

📱 Mobile Development
   • Cross-platform Apps
   • Native Development
   • UI/UX Excellence

🤖 AI Integration
   • Machine Learning Solutions
   • AI-powered Features
   • Smart Automation

Let's connect and discuss your project! You can reach me through any of these platforms:

<social-links>`;
    }
    else if (input.includes('experience')) {
      response = `🎯 Professional Journey:

💼 Experience Highlights:

🌟 Senior Full-stack Developer
   • Led 10+ successful projects
   • Mentored junior developers
   • Architected scalable solutions

📱 Mobile Development Expert
   • 15+ published applications
   • 1M+ total downloads
   • Cross-platform expertise

🤖 AI/ML Specialist
   • Custom ML solutions
   • NLP implementations
   • Computer Vision projects

🏆 Achievements:
   • Best Developer Award 2023
   • Open Source Contributor
   • Tech Conference Speaker

Would you like to know more about any specific area? 🎓`;
    }
    else {
      response = `✨ I'm here to assist you with:

🚀 Project Inquiries
   Explore my portfolio of work

💻 Technical Discussions
   Deep dive into technologies

🤝 Collaboration Opportunities
   Let's build something together

📚 Professional Experience
   Learn about my journey

Feel free to ask anything! I'm here to help! 💫`;
    }

    const aiMessage: Message = {
      type: 'bot',
      content: response,
      timestamp: new Date(),
      isAI: true
    };

    setMessages(prev => [...prev, aiMessage]);
    setIsTyping(false);
  };

  const handleQuickReply = (text: string) => {
    const userMessage: Message = {
      type: 'user',
      content: text,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMessage]);
    simulateAIResponse(text);
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      type: 'user',
      content: inputMessage,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');

    await simulateAIResponse(inputMessage);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  // Add this function to handle suggestion clicks
  // const handleSuggestionClick = (question: string, answer: string) => {
  //   const userMessage: Message = {
  //     type: 'user',
  //     content: question,
  //     timestamp: new Date()
  //   };
  //   
  //   const botMessage: Message = {
  //     type: 'bot',
  //     content: answer,
  //     timestamp: new Date(),
  //     isAI: true
  //   };
  //
  //   setMessages(prev => [...prev, userMessage, botMessage]);
  // };

  // Add these styles to your CSS
  const styles = `
    .gradient-text {
      background: linear-gradient(45deg, #FF6B6B, #4ECDC4);
      -webkit-background-clip: text;
      color: transparent;
      font-weight: bold;
      padding: 8px;
      border-radius: 8px;
    }

    .project-card, .tech-section, .collaboration-card, 
    .process-card, .experience-card, .achievement-card, .menu-card {
      background: rgba(255, 255, 255, 0.1);
      padding: 12px;
      border-radius: 8px;
      border: 1px solid rgba(255, 255, 255, 0.2);
      margin: 8px 0;
    }

    .animate-pulse {
      animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
    }

    .animate-bounce {
      animation: bounce 1s infinite;
    }

    @keyframes pulse {
      0%, 100% {
        opacity: 1;
      }
      50% {
        opacity: 0.5;
      }
    }

    @keyframes bounce {
      0%, 100% {
        transform: translateY(-25%);
        animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
      }
      50% {
        transform: translateY(0);
        animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
      }
    }
  `;

  // Add this CSS class to handle social links styling
  const messageStyles = `
    .social-links-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 0.75rem;
      margin: 1rem 0;
    }

    .social-link {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 1rem;
      background: linear-gradient(135deg, var(--tw-gradient-stops));
      border-radius: 1rem;
      color: white;
      text-decoration: none;
      transition: all 0.3s ease;
      transform: translateY(0);
    }

    .social-link:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }

    .icon-wrapper {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-weight: 600;
      margin-bottom: 0.5rem;
    }

    .username {
      font-size: 0.875rem;
      opacity: 0.9;
    }
  `;

  // Add this to your component
  useEffect(() => {
    // Add styles to document
    const styleSheet = document.createElement("style");
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);

    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []);

  return (
    <>
      <style>{messageStyles}</style>
      {/* Desktop Floating Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-30 p-4 bg-black dark:bg-white rounded-full 
                 shadow-lg hover:shadow-xl transition-all duration-300
                 hidden tablet:flex items-center gap-2"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Bot className="w-6 h-6 text-white dark:text-gray-900" />
      </motion.button>

      {/* Chat Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 tablet:p-8"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />

            {/* Chat Window */}
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="relative w-full max-w-2xl h-[600px] bg-white dark:bg-gray-900 
                       rounded-2xl shadow-xl overflow-hidden"
            >
              {/* Header */}
              <div className="absolute top-0 left-0 right-0 p-4 bg-white/80 dark:bg-gray-900/80 
                           backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <motion.div 
                      className="relative"
                      whileHover={{ scale: 1.1 }}
                      animate={{ 
                        rotate: [0, -10, 10, -10, 0],
                      }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 3
                      }}
                    >
                      <Bot className="w-10 h-10 text-gray-900 dark:text-white" />
                      <motion.div 
                        className="absolute -bottom-1 -right-1 w-3 h-3 bg-emerald-400 rounded-full"
                        animate={{ 
                          scale: [1, 1.2, 1],
                        }}
                        transition={{ 
                          duration: 2,
                          repeat: Infinity,
                        }}
                      />
                    </motion.div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">AI Assistant</h3>
                      <div className="flex items-center gap-1">
                        <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
                        <p className="text-xs text-emerald-500">Online & Ready to Help</p>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl transition-colors"
                  >
                    <X className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                  </button>
                </div>
              </div>

              {/* Messages */}
              <div className="absolute top-[72px] left-0 right-0 bottom-[72px] overflow-y-auto p-4">
                <div className="space-y-4">
                  {messages.map((message, index) => (
                    <div key={index} className="space-y-4">
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                      >
                        {message.content.includes('<social-links>') ? (
                          <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="grid grid-cols-2 gap-4 w-full max-w-[90%]"
                          >
                            {socialLinks.map((link, idx) => {
                              const Icon = link.icon;
                              return (
                                <motion.a
                                  key={idx}
                                  href={link.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className={`${link.color} p-4 rounded-xl text-white hover:shadow-lg 
                                           transition-all duration-300 transform hover:-translate-y-1`}
                                  whileHover={{ scale: 1.05 }}
                                  whileTap={{ scale: 0.95 }}
                                >
                                  <div className="flex items-center gap-3 mb-2">
                                    <Icon className="w-5 h-5" />
                                    <span className="font-semibold">{link.name}</span>
                                  </div>
                                  <div className="text-sm opacity-90">
                                    {link.username}
                                  </div>
                                </motion.a>
                              );
                            })}
                          </motion.div>
                        ) : (
                          <div className={`max-w-[80%] p-4 rounded-2xl ${
                            message.type === 'user'
                              ? 'bg-black text-white dark:bg-white dark:text-gray-900'
                              : 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white'
                          }`}>
                            <p className="whitespace-pre-wrap">{message.content}</p>
                          </div>
                        )}
                      </motion.div>

                      {/* Show quick replies after every bot message */}
                      {message.type === 'bot' && (
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 }}
                          className="flex flex-wrap gap-2"
                        >
                          {quickReplies.map((reply, idx) => {
                            const Icon = reply.icon;
                            return (
                              <motion.button
                                key={idx}
                                onClick={() => handleQuickReply(reply.text)}
                                className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 
                                         rounded-xl text-gray-600 dark:text-gray-300 text-sm 
                                         hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                              >
                                <Icon className="w-4 h-4" />
                                {reply.text}
                              </motion.button>
                            );
                          })}
                        </motion.div>
                      )}
                    </div>
                  ))}

                  {/* Typing indicator */}
                  {isTyping && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex justify-start"
                    >
                      <div className="max-w-[80%] p-4 bg-gray-100 dark:bg-gray-800 rounded-2xl">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full animate-bounce" />
                          <div className="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                          <div className="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
                        </div>
                      </div>
                    </motion.div>
                  )}
                  <div ref={messagesEndRef} />
                </div>
              </div>

              {/* Input Area */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-white/80 dark:bg-gray-900/80 
                           backdrop-blur-md border-t border-gray-200 dark:border-gray-800">
                <div className="flex items-end gap-4">
                  <div className="flex-1">
                    <textarea
                      value={inputMessage}
                      onChange={(e) => setInputMessage(e.target.value)}
                      onKeyDown={handleKeyPress}
                      placeholder="Type your message..."
                      className="w-full p-3 bg-gray-100 dark:bg-gray-800 rounded-xl resize-none 
                               text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400
                               focus:outline-none focus:ring-2 focus:ring-purple-500"
                      rows={1}
                      style={{ minHeight: '44px', maxHeight: '120px' }}
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="file"
                      ref={fileInputRef}
                      className="hidden"
                      accept="image/*"
                    />
                    <motion.button
                      onClick={() => fileInputRef.current?.click()}
                      className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Paperclip className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                    </motion.button>
                    <motion.button
                      className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Smile className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                    </motion.button>
                    <motion.button
                      onClick={handleSendMessage}
                      className="p-3 bg-black dark:bg-white rounded-xl"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      disabled={!inputMessage.trim()}
                    >
                      <Send className="w-5 h-5 text-white dark:text-gray-900" />
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
} 