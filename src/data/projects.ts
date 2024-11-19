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
    id: '1',
    title: 'HealthHub Pro',
    description: 'AI-powered healthcare management platform for hospitals and clinics',
    longDescription: `HealthHub Pro is a comprehensive healthcare management system designed to streamline medical operations 
    and enhance patient care. Built with modern technologies, it offers real-time patient monitoring, automated appointment 
    scheduling, and intelligent resource allocation.
    
    The platform integrates seamlessly with existing hospital systems while providing an intuitive interface for both 
    medical staff and patients. Advanced AI algorithms help predict patient needs and optimize resource allocation, 
    leading to improved healthcare outcomes and reduced operational costs.`,
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070',
    year: '2024',
    category: 'saas',
    tags: ['Healthcare', 'AI/ML', 'Enterprise', 'SaaS'],
    features: [
      'Real-time patient monitoring dashboard',
      'AI-powered resource allocation',
      'Automated appointment scheduling',
      'Electronic health records (EHR) integration',
      'Mobile app for patients and staff',
      'Advanced analytics and reporting',
      'HIPAA compliant security measures'
    ],
    github: 'https://github.com/yourusername/healthhub-pro',
    demo: 'https://healthhub-pro.demo',
    technologies: ['React', 'Node.js', 'TensorFlow', 'MongoDB', 'Docker'],
    gallery: ['https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070']
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
    recommendations for sustainable living while gamifying the experience of environmental conservation.

    The app features precise carbon footprint calculation based on daily activities, transportation choices, and consumption 
    patterns. Users can set sustainability goals, participate in eco-challenges, and connect with a community of 
    environmentally conscious individuals.`,
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
    combat systems, and deep character customization.

    Built using Unity and featuring custom shader systems for authentic retro visuals, Pixel Quest pushes the boundaries 
    of mobile gaming while maintaining the charm of classic RPGs. The game includes a unique multiplayer system, 
    cross-platform save functionality, and an innovative crafting system.`,
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
    github: null,
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
    recommendations for optimal desk arrangements and meeting schedules.

    The system includes features for desk booking, meeting room management, and team coordination, all while ensuring 
    compliance with social distancing guidelines. Advanced analytics help organizations optimize their office space 
    and improve team productivity.`,
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
    advanced order management, real-time delivery tracking, and intelligent routing algorithms.

    The system features a powerful analytics dashboard for restaurant owners, automated inventory management, and 
    integration with popular POS systems. The platform also includes a customer-facing mobile app with features like 
    real-time order tracking and personalized recommendations.`,
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
  },
  {
    id: '7',
    title: 'CodeMentor AI',
    description: 'AI-powered programming education platform',
    longDescription: `CodeMentor AI is an innovative programming education platform that uses artificial intelligence 
    to provide personalized learning experiences. The platform analyzes students' coding patterns and learning progress 
    to create customized curriculum paths and real-time assistance.

    The system includes features like AI-powered code reviews, interactive coding challenges, and real-time mentorship 
    matching. Advanced analytics help track student progress and identify areas for improvement, while gamification 
    elements keep learners engaged.`,
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2069',
    year: '2023',
    category: 'saas',
    tags: ['Education', 'AI', 'Programming', 'E-learning'],
    features: [
      'AI-powered code analysis',
      'Personalized learning paths',
      'Interactive coding challenges',
      'Real-time mentorship',
      'Progress tracking',
      'Community features',
      'Certificate system'
    ],
    github: 'https://github.com/yourusername/codementor-ai',
    demo: 'https://codementor-ai.demo',
    technologies: ['Next.js', 'Python', 'OpenAI', 'PostgreSQL'],
    gallery: ['https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2069']
  },
  {
    id: '8',
    title: 'Space Explorer VR',
    description: 'Educational VR game about space exploration',
    longDescription: `Space Explorer VR is an immersive virtual reality game that combines education with entertainment, 
    taking players on an exciting journey through space. The game features scientifically accurate space environments, 
    interactive missions, and educational content about astronomy and space exploration.

    Built using Unreal Engine with custom physics systems for zero-gravity environments, the game offers both single-player 
    and multiplayer experiences. Players can explore different planets, conduct space experiments, and learn about the 
    universe in an engaging way.`,
    image: 'https://images.unsplash.com/photo-1615726366969-7a7c0c8dc3a4?q=80&w=2070',
    year: '2023',
    category: 'game',
    tags: ['VR', 'Education', 'Space', 'Gaming'],
    features: [
      'Realistic space environments',
      'Interactive missions',
      'Educational content',
      'Multiplayer mode',
      'Physics simulation',
      'Achievement system',
      'VR optimization'
    ],
    github: null,
    demo: 'https://space-explorer-vr.demo',
    technologies: ['Unreal Engine', 'C++', 'OpenXR', 'AWS'],
    gallery: ['https://images.unsplash.com/photo-1615726366969-7a7c0c8dc3a4?q=80&w=2070']
  },
  {
    id: '9',
    title: 'TaskFlow',
    description: 'AI-enhanced project management and collaboration tool',
    longDescription: `TaskFlow is a next-generation project management platform that uses AI to optimize team workflows 
    and enhance collaboration. The platform features intelligent task prioritization, automated resource allocation, 
    and predictive analytics for project timelines.

    The system includes advanced features like natural language processing for task creation, automated documentation, 
    and smart meeting scheduling. Integration capabilities with popular tools make it a central hub for team productivity.`,
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070',
    year: '2024',
    category: 'web',
    tags: ['Project Management', 'AI', 'Collaboration', 'SaaS'],
    features: [
      'AI task prioritization',
      'Resource management',
      'Automated documentation',
      'Team collaboration tools',
      'Integration capabilities',
      'Analytics dashboard',
      'Mobile app'
    ],
    github: 'https://github.com/yourusername/taskflow',
    demo: 'https://taskflow.demo',
    technologies: ['React', 'Node.js', 'OpenAI', 'MongoDB'],
    gallery: ['https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070']
  },
  {
    id: '10',
    title: 'FitSync',
    description: 'Personalized fitness tracking and coaching app',
    longDescription: `FitSync is a comprehensive fitness application that combines workout tracking, nutrition planning, 
    and AI-powered coaching. The app uses machine learning to create personalized workout and nutrition plans based on 
    user goals, fitness level, and progress data.

    The platform includes features like real-time workout tracking, form analysis through computer vision, and social 
    fitness challenges. Integration with wearable devices provides comprehensive health monitoring and insights.`,
    image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=2070',
    year: '2024',
    category: 'mobile',
    tags: ['Fitness', 'Health', 'Mobile App', 'AI'],
    features: [
      'Personalized workout plans',
      'Nutrition tracking',
      'AI form analysis',
      'Progress tracking',
      'Social features',
      'Wearable integration',
      'Offline support'
    ],
    github: 'https://github.com/yourusername/fitsync',
    demo: 'https://fitsync.demo',
    technologies: ['React Native', 'TensorFlow', 'Node.js', 'Firebase'],
    gallery: ['https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=2070']
  }
];