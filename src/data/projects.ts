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
  technologies: {
    name: string;
    icon: string;
  }[];
  gallery?: string[];
}

export const projects: Project[] = [
  {
    id: 'dhaka-metro',
    title: 'Easy Metro',
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
    technologies: [
      {
        name: 'React',
        icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg'
      },
      {
        name: 'TypeScript',
        icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg'
      },
      {
        name: 'Tailwind CSS',
        icon: 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg'
      },
      {
        name: 'Vite',
        icon: 'https://raw.githubusercontent.com/vitejs/vite/main/docs/public/logo.svg'
      },
      {
        name: 'MongoDB',
        icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg'
      },
      {
        name: 'Bkash',
        icon: 'https://logos-download.com/wp-content/uploads/2022/01/BKash_Logo_icon-700x662.png'
      }
    ],
    gallery: [
      'https://thereport.live/storage/bangladesh-vs-england/metro-rail.jpg',
    ]
  },
  {
    id: '2',
    title: 'StudentBuddy',
    description: 'A comprehensive tool for students to manage their academic life.',
    longDescription: `StudentBuddy is an innovative platform designed to assist students in managing their academic tasks, 
    schedules, and resources effectively. The application provides features such as task management, calendar integration, 
    and resource sharing to enhance the student experience.

    Built with modern web technologies, StudentBuddy offers a user-friendly interface and seamless navigation, making it easy 
    for students to stay organized and focused on their studies.`,
    image: 'https://images.pexels.com/photos/3278757/pexels-photo-3278757.jpeg?auto=compress&cs=tinysrgb&w=600',
    year: '2024',
    category: 'web',
    tags: ['Education', 'Student Tools', 'Web App'],
    features: [
      'Task management system',
      'Calendar integration',
      'Resource sharing',
      'User-friendly interface',
      'Mobile-friendly design',
      'Collaboration tools'
    ],
    github: 'https://github.com/Kallolx/bubtStudenttool',
    demo: 'https://studbuddy.vercel.app/',
    technologies: [
      {
        name: 'React',
        icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg'
      },
      {
        name: 'TypeScript',
        icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg'
      },
      {
        name: 'Tailwind CSS',
        icon: 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg'
      },
      {
        name: 'Firebase',
        icon: 'https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg'
      },
      {
        name: 'Vite',
        icon: 'https://raw.githubusercontent.com/vitejs/vite/main/docs/public/logo.svg'
      }
    ],
    gallery: [
      'https://images.pexels.com/photos/1370298/pexels-photo-1370298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',   
    ]
  },
  {
    id: '3',
    title: 'StudySpot',
    description: 'A platform for students to find study spaces and collaborate with peers.',
    longDescription: `StudySpot is an innovative web application designed to help students find available study spaces 
    and collaborate with their peers. The platform allows users to search for nearby study spots, book them in advance, 
    and connect with other students for group study sessions.

    With features like real-time availability updates, user reviews, and a user-friendly interface, StudySpot enhances 
    the academic experience by promoting collaboration and effective study habits.`,
    image: 'https://images.pexels.com/photos/7516363/pexels-photo-7516363.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    year: '2024',
    category: 'web',
    tags: ['Education', 'Collaboration', 'Web App'],
    features: [
      'Search for nearby study spaces',
      'Real-time availability updates',
      'User reviews and ratings',
      'Booking system for study spots',
      'Collaboration tools for group studies',
      'Mobile-friendly design'
    ],
    github: 'https://github.com/Kallolx/StudySpot',
    demo: 'https://study-spot-kappa.vercel.app/',
    technologies: [
      {
        name: 'React',
        icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg'
      },
      {
        name: 'Firebase',
        icon: 'https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg'
      },
      {
        name: 'Tailwind CSS',
        icon: 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg'
      },
      {
        name: 'Vite',
        icon: 'https://raw.githubusercontent.com/vitejs/vite/main/docs/public/logo.svg'
      }
    ],
    gallery: [
      'https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    ]
  },
  {
    id: '4',
    title: 'PlayRelax',
    description: 'A modern web-based gaming platform featuring multiple browser games with beautiful UI and smooth gameplay',
    longDescription: `PlayRelax is a comprehensive web-based gaming platform that offers multiple browser games 
    with a focus on beautiful UI and smooth gameplay experience. The platform features various game categories 
    including Action, Arcade, and Puzzle games, all accessible through a responsive and user-friendly interface.

    The platform includes popular games like Space Shooter, Rock Paper Scissors, Whack-a-Mole, Snake Game, 
    Tic Tac Toe, and 2048, with real-time game stats and leaderboards to enhance the gaming experience.`,
    image: 'https://images.pexels.com/photos/7047299/pexels-photo-7047299.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    year: '2024',
    category: 'game',
    tags: ['Web Games', 'Gaming Platform', 'Browser Games', 'Interactive'],
    features: [
      'Multiple game categories',
      'Responsive design for all devices',
      'Beautiful animations and transitions',
      'Real-time game stats and leaderboards',
      'Search functionality',
      'Category filtering',
      'Multiple classic games'
    ],
    github: 'https://github.com/Kallolx/PlayRelax-webgame',
    demo: 'https://playrelax-webgame.vercel.app',
    technologies: [
      {
        name: 'React',
        icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg'
      },
      {
        name: 'TypeScript',
        icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg'
      },
      {
        name: 'Tailwind CSS',
        icon: 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg'
      },
      {
        name: 'Vite',
        icon: 'https://raw.githubusercontent.com/vitejs/vite/main/docs/public/logo.svg'
      }
    ],
    gallery: ['https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1']
  },
  {
    id: '5',
    title: 'AkashiAgro',
    description: 'A modern e-commerce platform for agricultural products and farming equipment',
    longDescription: `AkashiAgro is a comprehensive e-commerce platform designed to connect farmers, suppliers, and buyers 
    in the agricultural sector. The platform facilitates the trade of farming equipment, seeds, fertilizers, and other 
    agricultural products through a user-friendly interface.

    The application features a robust product management system, secure payment integration, and real-time inventory 
    tracking. It also includes a vendor management system allowing farmers and suppliers to list their products and 
    manage their online stores.`,
    image: 'https://images.pexels.com/photos/8064068/pexels-photo-8064068.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    year: '2023',
    category: 'e-commerce',
    tags: ['Agriculture', 'E-commerce', 'B2B', 'Marketplace'],
    features: [
      'Product catalog management',
      'Secure payment gateway integration',
      'Vendor management system',
      'Real-time inventory tracking',
      'Order management system',
      'User authentication and authorization',
      'Review and rating system'
    ],
    github: 'https://github.com/Kallolx/akashi-agro',
    demo: 'https://akashiagro.vercel.app/',
    technologies: [
      {
        name: 'React',
        icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg'
      },
      {
        name: 'Vite',
        icon: 'https://raw.githubusercontent.com/vitejs/vite/main/docs/public/logo.svg'
      },
      {
        name: 'MongoDB',
        icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg'
      },
      {
        name: 'Bkash',
        icon: 'https://logos-download.com/wp-content/uploads/2022/01/BKash_Logo_icon-700x662.png'
      }
    ],
    gallery: ['https://images.pexels.com/photos/382166/pexels-photo-382166.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1']
  },
  {
    id: '6',
    title: 'MS BABUI Traders',
    description: 'A modern business showcase website for MS BABUI Traders, highlighting their products, services, and company information',
    longDescription: `MS BABUI Traders is a comprehensive business showcase website that presents the company's 
    extensive range of products and services. The website features a professional design that effectively communicates 
    the company's values, expertise, and commitment to quality. Visitors can easily explore product categories, 
    learn about the company's history, and get in touch for business inquiries.`,
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    year: '2024',
    category: 'web',
    tags: ['Business', 'Corporate Website', 'Company Profile', 'Product Showcase'],
    features: [
      'Company profile and history',
      'Product and service showcase',
      'Business information display',
      'Contact and inquiry forms',
      'Image galleries',
      'Responsive design',
      'SEO optimization',
      'Social media integration'
    ],
    github: 'https://github.com/Kallolx/ms-babui-traders',
    demo: 'https://msbabuitrads.vercel.app/',
    technologies: [
      {
        name: 'Next.js',
        icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg'
      },
      {
        name: 'TypeScript',
        icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg'
      },
      {
        name: 'Tailwind CSS',
        icon: 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg'
      },
      {
        name: 'MongoDB',
        icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg'
      }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D']
  }
];