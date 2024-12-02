export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  year: string;
  category: string;
  features: string[];
  tags: string[];
  github?: string;
  demo?: string;
  technologies: string[];
  gallery?: string[];
}

export const projects: Project[] = [
  {
    id: 'dhaka-metro',
    title: 'Dhaka Metro Ticket System',
    description: 'A comprehensive web application for Dhaka Metro Rail, featuring real-time updates, route planning, and fare calculations.',
    longDescription: `The Dhaka Metro Rail Guide is a modern web application designed to help commuters navigate Bangladesh's first metro rail system. 
    Built with React and TypeScript, it provides essential features like route planning, fare calculation, and station information.
    
    The application offers an intuitive interface with interactive maps, real-time updates, and a responsive design that works seamlessly across all devices. 
    Users can easily plan their journeys, calculate fares, and access important information about metro stations and services.`,
    image: 'https://thereport.live/storage/bangladesh-vs-england/metro-rail.jpg',
    year: '2024',
    category: 'web',
    tags: ['Transportation', 'Public Service', 'Web App'],
    features: [
      'Interactive route planning',
      'Real-time fare calculation',
      'Station information and maps',
      'Responsive design for all devices',
      'Dark mode support',
      'Bilingual interface (English/Bengali)',
      'Accessibility features'
    ],
    github: 'https://github.com/Kallolx/dhaka-metro',
    demo: 'https://dhaka-metro.vercel.app',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    gallery: ['https://thereport.live/storage/bangladesh-vs-england/metro-rail.jpg']
  },
  {
    id: '2',
    title: 'CryptoTrader X',
    description: 'Advanced cryptocurrency trading platform with real-time analytics',
    longDescription: `CryptoTrader X is a sophisticated cryptocurrency trading platform that combines real-time market data 
    with advanced technical analysis tools. The platform offers institutional-grade security while maintaining an intuitive 
    interface for both novice and experienced traders.

    Built with high-performance WebSocket connections and real-time data processing, CryptoTrader X handles millions of 
    price updates per second while providing seamless trading execution. The platform includes advanced charting capabilities, 
    automated trading strategies, and comprehensive portfolio management tools.`,
    image: 'https://images.unsplash.com/photo-1605792657660-596af9009e82?q=80&w=2071',
    year: '2024',
    category: 'web',
    tags: ['Crypto', 'Trading', 'FinTech', 'Real-time'],
    features: [
      'Real-time price tracking and alerts',
      'Advanced technical analysis tools',
      'Automated trading strategies',
      'Portfolio management and analytics',
      'Multi-exchange integration',
      'Secure wallet management',
      'Mobile-responsive design'
    ],
    github: 'https://github.com/yourusername/cryptotrader-x',
    demo: 'https://cryptotrader-x.demo',
    technologies: ['Next.js', 'WebSocket', 'Redis', 'PostgreSQL', 'AWS'],
    gallery: ['https://images.unsplash.com/photo-1605792657660-596af9009e82?q=80&w=2071']
  },
  {
    id: '3',
    title: 'EcoTrack',
    description: 'Mobile app for tracking and reducing personal carbon footprint',
    longDescription: `EcoTrack is an innovative mobile application designed to help individuals and organizations monitor 
    and reduce their carbon footprint. Using advanced algorithms and real-world data, the app provides personalized 
    recommendations for sustainable living while gamifying the experience of environmental conservation.`,
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070',
    year: '2023',
    category: 'mobile',
    tags: ['Environment', 'Sustainability', 'Mobile App', 'Social Impact'],
    features: [
      'Personalized carbon footprint tracking',
      'AI-powered sustainability recommendations',
      'Community challenges and leaderboards',
      'Integration with smart home devices',
      'Detailed impact analytics',
      'Social sharing features',
      'Offline functionality'
    ],
    github: 'https://github.com/yourusername/ecotrack',
    demo: 'https://ecotrack.demo',
    technologies: ['Flutter', 'Firebase', 'TensorFlow Lite', 'Node.js'],
    gallery: ['https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070']
  },
  {
    id: '4',
    title: 'Pixel Quest',
    description: 'Retro-style RPG mobile game with modern gameplay mechanics',
    longDescription: `Pixel Quest is a captivating mobile RPG that combines classic pixel art aesthetics with modern 
    gameplay mechanics. The game features a rich, story-driven adventure with procedurally generated dungeons, dynamic 
    combat systems, and deep character customization.`,
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070',
    year: '2023',
    category: 'game',
    tags: ['Mobile Game', 'RPG', 'Pixel Art', 'Unity'],
    features: [
      'Procedurally generated dungeons',
      'Real-time combat system',
      'Character customization',
      'Multiplayer functionality',
      'Cross-platform save system',
      'In-game economy',
      'Achievement system'
    ],
    github: undefined,
    demo: 'https://pixelquest.demo',
    technologies: ['Unity', 'C#', 'Photon', 'Firebase'],
    gallery: ['https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070']
  },
  {
    id: '5',
    title: 'SmartDesk Pro',
    description: 'AI-powered workspace management application for hybrid teams',
    longDescription: `SmartDesk Pro revolutionizes hybrid workplace management through intelligent space optimization 
    and team coordination. The platform uses AI to analyze workspace utilization patterns and provides real-time 
    recommendations for optimal desk arrangements and meeting schedules.`,
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069',
    year: '2023',
    category: 'saas',
    tags: ['Workspace', 'AI', 'Enterprise', 'Hybrid Work'],
    features: [
      'AI-powered desk allocation',
      'Real-time occupancy monitoring',
      'Meeting room booking system',
      'Team coordination tools',
      'Analytics dashboard',
      'Mobile app integration',
      'Calendar synchronization'
    ],
    github: 'https://github.com/yourusername/smartdesk-pro',
    demo: 'https://smartdesk-pro.demo',
    technologies: ['React', 'Python', 'TensorFlow', 'PostgreSQL'],
    gallery: ['https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069']
  },
  {
    id: '6',
    title: 'FoodieGo',
    description: 'Restaurant management and food delivery platform',
    longDescription: `FoodieGo is a comprehensive restaurant management and food delivery platform that streamlines 
    operations for restaurants while providing a seamless ordering experience for customers. The platform includes 
    advanced order management, real-time delivery tracking, and intelligent routing algorithms.`,
    image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=2070',
    year: '2023',
    category: 'web',
    tags: ['Food Tech', 'Delivery', 'SaaS', 'Mobile App'],
    features: [
      'Order management system',
      'Real-time delivery tracking',
      'Inventory management',
      'POS integration',
      'Customer mobile app',
      'Analytics dashboard',
      'Route optimization'
    ],
    github: 'https://github.com/yourusername/foodiego',
    demo: 'https://foodiego.demo',
    technologies: ['React Native', 'Node.js', 'MongoDB', 'Socket.io'],
    gallery: ['https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=2070']
  }
];