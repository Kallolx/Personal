import React from 'react';
import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  Folder, 
  Github,
  Code2,
  ArrowLeft,
  Star,
  Users2,
  UserPlus,
  ChevronDown,
  Filter,
  Linkedin,
  Figma,
  CodepenIcon,
  Dribbble,
  Framer,
  Codesandbox,
} from 'lucide-react';
import { fetchGitHubData, fetchGitHubStats } from "../lib/github";

interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  thumbnail: string;
  category: 'project' | 'achievement' | 'document' | 'certificate' | 'media';
  date: string;
  tags: string[];
  links?: {
    live?: string;
    github?: string;
    document?: string;
    certificate?: string;
    video?: string;
    demo?: string;
  };
  images?: string[];
  details?: {
    technologies?: string[];
    role?: string;
    duration?: string;
    status?: 'completed' | 'in-progress' | 'planned';
    features?: string[];
    challenges?: string[];
    impact?: string;
    metrics?: {
      label: string;
      value: string | number;
      icon?: React.ReactNode;
    }[];
  };
}

interface FolderItem extends PortfolioItem {
  type: 'folder';
  items?: PortfolioItem[];
}

interface PortfolioHubProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  showFloatingButton?: boolean;
}

// Remove the mock portfolioItems array
const portfolioItems: PortfolioItem[] = [];

// Add this before the folders array
interface PlatformLink {
  name: string;
  icon: React.ReactNode;
  url: string;
  color: string;
}

const platformLinks: PlatformLink[] = [
  // Development Platforms
  {
    name: 'Vercel',
    icon: <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M24 22.525H0l12-21.05 12 21.05z" /></svg>,
    url: 'https://vercel.com/kallolx',
    color: 'hover:text-white'
  },
  {
    name: 'Netlify',
    icon: <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M17.3877 8.3286L15.5591 6.5H19.2727L19.8182 5.95455H14.4545L14 6.40909L16.4091 8.81818L17.3877 8.3286ZM12.0455 14.5455L11.5 15.0909L14.4545 18.0455H19.8182L20.2727 17.5909H15.5591L12.0455 14.5455ZM11.5 9.36364L12.0455 9.90909L15.5591 6.86364H20.2727L19.8182 6.40909H14.4545L11.5 9.36364ZM9.72727 12.5L10.2727 13.0455L19.2727 4.04545H14.4545L5.45455 13.0455L9.72727 12.5ZM4.18182 14.0909L4.63636 13.6364L9.72727 13.5909L4.63636 8.5L4.18182 8.95455V14.0909ZM19.2727 15.9545L18.8182 15.5H15.1045L13.2727 17.3318L13.7273 17.7864H18.8182L19.2727 17.3318V15.9545ZM11.5 12.5L12.0455 11.9545L9.72727 9.63636L9.27273 10.0909L11.5 12.5ZM15.1045 15.5L12.0455 12.4409L11.5 12.9864L14.5591 16.0455H18.8182L19.2727 15.5H15.1045Z"/></svg>,
    url: 'https://app.netlify.com/teams/kallolx',
    color: 'hover:text-[#00AD9F]'
  },
  {
    name: 'DigitalOcean',
    icon: <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M12 24C5.373 24 0 18.627 0 12c0-6.627 5.373-12 12-12s12 5.373 12 12c0 6.627-5.373 12-12 12zm0-2v-4.372c-3.12 0-5.628-2.51-5.628-5.628h4.372v-4.372h4.372v4.372h4.372c0 3.118-2.508 5.628-5.628 5.628v4.372h-1.86z"/></svg>,
    url: 'https://cloud.digitalocean.com/kallolx',
    color: 'hover:text-[#0080FF]'
  },
  {
    name: 'AWS',
    icon: <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M6.763 10.036c0 .296.032.535.088.71.064.176.144.368.256.576.04.063.056.127.056.183 0 .08-.048.16-.152.24l-.503.335a.383.383 0 0 1-.208.072c-.08 0-.16-.04-.239-.112a2.47 2.47 0 0 1-.287-.375 6.18 6.18 0 0 1-.248-.471c-.622.734-1.405 1.101-2.347 1.101-.67 0-1.205-.191-1.596-.574-.391-.384-.59-.894-.59-1.533 0-.678.239-1.23.726-1.644.487-.415 1.133-.623 1.955-.623.272 0 .551.024.846.064.296.04.6.104.918.176v-.583c0-.607-.127-1.03-.375-1.277-.255-.248-.686-.367-1.3-.367-.28 0-.568.031-.863.103-.295.072-.583.16-.862.272a2.287 2.287 0 0 1-.28.104.488.488 0 0 1-.127.023c-.112 0-.168-.08-.168-.247v-.391c0-.128.016-.224.056-.28a.597.597 0 0 1 .224-.167c.279-.144.614-.264 1.005-.36a4.84 4.84 0 0 1 1.246-.151c.95 0 1.644.216 2.091.647.439.43.662 1.085.662 1.963v2.586zm-3.24 1.214c.263 0 .534-.048.822-.144.287-.096.543-.271.758-.51.128-.152.224-.32.272-.512.047-.191.08-.423.08-.694v-.335a6.66 6.66 0 0 0-.735-.136 6.02 6.02 0 0 0-.75-.048c-.535 0-.926.104-1.19.32-.263.215-.39.518-.39.917 0 .375.095.655.295.846.191.2.47.296.838.296zm6.41.862c-.144 0-.24-.024-.304-.08-.064-.048-.12-.16-.168-.311L7.586 5.55a1.398 1.398 0 0 1-.072-.32c0-.128.064-.2.191-.2h.783c.151 0 .255.025.31.08.065.048.113.16.16.312l1.342 5.284 1.245-5.284c.04-.16.088-.264.151-.312a.549.549 0 0 1 .32-.08h.638c.152 0 .256.025.32.08.063.048.12.16.151.312l1.261 5.348 1.381-5.348c.048-.16.104-.264.16-.312a.52.52 0 0 1 .311-.08h.743c.127 0 .2.065.2.2 0 .04-.009.08-.017.128a1.137 1.137 0 0 1-.056.2l-1.923 6.17c-.048.16-.104.263-.168.311a.51.51 0 0 1-.303.08h-.687c-.151 0-.255-.024-.32-.08-.063-.056-.119-.16-.15-.32l-1.238-5.148-1.23 5.14c-.04.16-.087.264-.15.32-.065.056-.177.08-.32.08zm10.256.215c-.415 0-.83-.048-1.229-.143-.399-.096-.71-.2-.918-.32-.128-.071-.215-.151-.247-.223a.563.563 0 0 1-.048-.224v-.407c0-.167.064-.247.183-.247.048 0 .096.008.144.024.048.016.12.048.2.08.271.12.566.215.878.279.319.064.63.096.95.096.502 0 .894-.088 1.165-.264a.86.86 0 0 0 .415-.758.777.777 0 0 0-.215-.559c-.144-.151-.416-.287-.807-.415l-1.157-.36c-.583-.183-1.014-.454-1.277-.813a1.902 1.902 0 0 1-.4-1.158c0-.335.073-.63.216-.886.144-.255.335-.479.575-.654.24-.184.51-.32.83-.415.32-.096.655-.136 1.006-.136.175 0 .359.008.535.032.183.024.35.056.518.088.16.04.312.08.455.127.144.048.256.096.336.144a.69.69 0 0 1 .24.2.43.43 0 0 1 .071.263v.375c0 .168-.064.256-.184.256a.83.83 0 0 1-.303-.096 3.652 3.652 0 0 0-1.532-.311c-.455 0-.815.071-1.062.223-.248.152-.375.383-.375.71 0 .224.08.416.24.567.159.152.454.304.877.44l1.134.358c.574.184.99.44 1.237.767.247.327.367.702.367 1.117 0 .343-.072.655-.207.926-.144.272-.336.511-.583.703-.248.2-.543.343-.886.447-.36.111-.734.167-1.142.167zM21.698 16.207c-2.626 1.94-6.442 2.969-9.722 2.969-4.598 0-8.74-1.7-11.87-4.526-.247-.223-.024-.527.27-.351 3.384 1.963 7.559 3.153 11.877 3.153 2.914 0 6.114-.607 9.06-1.852.439-.2.814.287.385.607zM22.792 14.961c-.336-.43-2.22-.207-3.074-.103-.255.032-.295-.192-.063-.36 1.5-1.053 3.967-.75 4.254-.399.287.36-.08 2.826-1.485 4.007-.215.184-.423.088-.327-.151.32-.79 1.03-2.57.695-2.994z"/></svg>,
    url: 'https://aws.amazon.com/console/',
    color: 'hover:text-[#FF9900]'
  },

  // Design Tools
  {
    name: 'Figma',
    icon: <Figma className="w-4 h-4" />,
    url: 'https://figma.com/@kallolx',
    color: 'hover:text-[#F24E1E]'
  },
  {
    name: 'Framer',
    icon: <Framer className="w-4 h-4" />,
    url: 'https://framer.com/@kallolx',
    color: 'hover:text-[#0055FF]'
  },
  {
    name: 'Dribbble',
    icon: <Dribbble className="w-4 h-4" />,
    url: 'https://dribbble.com/kallolx',
    color: 'hover:text-[#EA4C89]'
  },

  // Code Platforms
  {
    name: 'GitHub',
    icon: <Github className="w-4 h-4" />,
    url: 'https://github.com/kallolx',
    color: 'hover:text-white'
  },
  {
    name: 'GitLab',
    icon: <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M4.845.904c-.435 0-.82.28-.955.692L.298 13.627c-.134.408 0 .854.324 1.106l11.5 8.363c.13.095.285.143.44.143.156 0 .31-.048.44-.143l11.5-8.363c.324-.252.458-.698.324-1.106L21.233 1.596c-.135-.412-.52-.692-.955-.692-.311 0-.6.152-.79.404L12 9.576 4.51 1.308c-.19-.252-.478-.404-.79-.404"/></svg>,
    url: 'https://gitlab.com/kallolx',
    color: 'hover:text-[#FC6D26]'
  },
  {
    name: 'CodePen',
    icon: <CodepenIcon className="w-4 h-4" />,
    url: 'https://codepen.io/kallolx',
    color: 'hover:text-[#47CF73]'
  },
  {
    name: 'CodeSandbox',
    icon: <Codesandbox className="w-4 h-4" />,
    url: 'https://codesandbox.io/u/kallolx',
    color: 'hover:text-[#151515]'
  },
  {
    name: 'StackBlitz',
    icon: <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M10.797 14.182H3.635L16.728 0l-3.525 9.818h7.162L7.272 24l3.525-9.818z"/></svg>,
    url: 'https://stackblitz.com/@kallolx',
    color: 'hover:text-[#1389FD]'
  },

  // Professional
  {
    name: 'LinkedIn',
    icon: <Linkedin className="w-4 h-4" />,
    url: 'https://linkedin.com/in/kallolx',
    color: 'hover:text-[#0A66C2]'
  },
  {
    name: 'NPM',
    icon: <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M0 7.334v8h6.666v1.332H12v-1.332h12v-8H0zm6.666 6.664H5.334v-4H3.999v4H1.335V8.667h5.331v5.331zm4 0v1.336H8.001V8.667h5.334v5.332h-2.669v-.001zm12.001 0h-1.33v-4h-1.336v4h-1.335v-4h-1.33v4h-2.671V8.667h8.002v5.331zM10.665 10H12v2.667h-1.335V10z"/></svg>,
    url: 'https://www.npmjs.com/~kallolx',
    color: 'hover:text-[#CB3837]'
  },
  {
    name: 'Dev.to',
    icon: <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M7.42 10.05c-.18-.16-.46-.23-.84-.23H6l.02 2.44.04 2.45.56-.02c.41 0 .63-.07.83-.26.24-.24.26-.36.26-2.2 0-1.91-.02-1.96-.29-2.18zM0 4.94v14.12h24V4.94H0zM8.56 15.3c-.44.58-1.06.77-2.53.77H4.71V8.53h1.4c1.67 0 2.16.18 2.6.9.27.43.29.6.32 2.57.05 2.23-.02 2.73-.47 3.3zm5.09-5.47h-2.47v1.77h1.52v1.28l-.72.04-.75.03v1.77l1.22.03 1.2.04v1.28h-1.6c-1.53 0-1.6-.01-1.87-.3l-.3-.28v-3.16c0-3.02.01-3.18.25-3.48.23-.31.25-.31 1.88-.31h1.64v1.3zm4.68 5.45c-.17.43-.64.79-1 .79-.18 0-.45-.15-.67-.39-.32-.32-.45-.63-.82-2.08l-.9-3.39-.45-1.67h.76c.4 0 .75.02.75.05 0 .06 1.16 4.54 1.26 4.83.04.15.32-.7.73-2.3l.66-2.52.74-.04c.4-.02.73 0 .73.04 0 .14-1.67 6.38-1.8 6.68z"/></svg>,
    url: 'https://dev.to/kallolx',
    color: 'hover:text-[#0A0A0A]'
  }
];

// Update the folders array to show correct item counts
const folders: FolderItem[] = [
  {
    id: 'github',
    type: 'folder',
    title: 'GitHub Projects',
    description: 'My open source projects and contributions',
    longDescription: 'Collection of open source projects and contributions on GitHub',
    thumbnail: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=400',
    date: '2024',
    category: 'project',
    tags: [],
    items: []
  },
  {
    id: 'documentation',
    type: 'folder',
    title: 'Documentation',
    description: 'Technical documentation and guides',
    longDescription: 'Collection of technical documentation and guides',
    thumbnail: 'https://images.unsplash.com/photo-1432888622747-4eb9a8f2c658?w=400',
    date: '2024',
    category: 'document',
    tags: ['Technical Writing'],
    items: [
      {
        id: 'doc-1',
        title: 'System Architecture',
        description: 'Comprehensive system architecture documentation for the e-commerce platform',
        longDescription: 'Detailed technical documentation covering system design, API specifications, database schema, and deployment procedures.',
        thumbnail: 'https://images.unsplash.com/photo-1432888622747-4eb9a8f2c658?w=400',
        category: 'document',
        date: '2024-02',
        tags: ['Architecture', 'Technical Writing', 'System Design'],
        links: {
          document: '#'
        }
      },
      {
        id: 'doc-2',
        title: 'API Documentation',
        description: 'REST API documentation with examples and usage guides',
        longDescription: 'Complete API reference with authentication, endpoints, request/response examples, and best practices.',
        thumbnail: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400',
        category: 'document',
        date: '2024-01',
        tags: ['API', 'Documentation', 'REST']
      }
    ]
  },
  {
    id: 'case-studies',
    type: 'folder',
    title: 'Case Studies',
    description: 'Detailed project case studies and analyses',
    longDescription: 'In-depth analysis of key projects and their outcomes',
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400',
    date: '2024',
    category: 'document',
    tags: ['Research'],
    items: [
      {
        id: 'case-1',
        title: 'E-commerce Platform Migration',
        description: 'Case study on migrating a legacy system to modern architecture',
        longDescription: 'Analysis of the challenges, solutions, and outcomes of modernizing an e-commerce platform.',
        thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400',
        category: 'document',
        date: '2024-02',
        tags: ['Migration', 'Architecture', 'Case Study'],
        details: {
          role: 'Lead Developer',
          duration: '6 months',
          impact: 'Improved performance by 300%'
        }
      },
      {
        id: 'case-2',
        title: 'Performance Optimization Study',
        description: 'Analysis of performance improvements in the web application',
        longDescription: 'Detailed study of performance optimization techniques and their impact.',
        thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400',
        category: 'document',
        date: '2024-01',
        tags: ['Performance', 'Optimization', 'Analysis']
      }
    ]
  },
  {
    id: 'media',
    type: 'folder',
    title: 'Media Gallery',
    description: 'Project screenshots, demos, and presentations',
    longDescription: 'Collection of project media including screenshots, video demos, and presentations',
    thumbnail: 'https://images.unsplash.com/photo-1516321165247-4aa89a48be28?w=400',
    date: '2024',
    category: 'media',
    tags: ['Media'],
    items: [
      {
        id: 'media-1',
        title: 'Project Demos',
        description: 'Video demonstrations of key projects',
        thumbnail: 'https://images.unsplash.com/photo-1516321165247-4aa89a48be28?w=400',
        category: 'media',
        date: '2024-02',
        tags: ['Demo', 'Video'],
        links: {
          video: 'https://youtube.com/watch?v=demo1'
        }
      },
      {
        id: 'media-2',
        title: 'UI/UX Showcase',
        description: 'Screenshots and interactions of user interfaces',
        thumbnail: 'https://images.unsplash.com/photo-1545235617-7a424c1a60cc?w=400',
        category: 'media',
        date: '2024-01',
        tags: ['UI/UX', 'Design'],
        images: [
          'https://images.unsplash.com/photo-1545235617-7a424c1a60cc?w=800',
          'https://images.unsplash.com/photo-1545235617-9465d2a55698?w=800'
        ]
      }
    ]
  },
  {
    id: 'presentations',
    type: 'folder',
    title: 'Presentations',
    description: 'Technical talks and project presentations',
    longDescription: 'Collection of technical presentations and talks',
    thumbnail: 'https://images.unsplash.com/photo-1558403194-611308249627?w=400',
    date: '2024',
    category: 'document',
    tags: ['Presentations'],
    items: [
      {
        id: 'pres-1',
        title: 'Modern Web Architecture',
        description: 'Technical presentation on modern web development practices',
        thumbnail: 'https://images.unsplash.com/photo-1558403194-611308249627?w=400',
        category: 'document',
        date: '2024-02',
        tags: ['Architecture', 'Web Development', 'Presentation'],
        links: {
          document: '#'
        }
      },
      {
        id: 'pres-2',
        title: 'DevOps Best Practices',
        description: 'Presentation on implementing DevOps workflows',
        thumbnail: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=400',
        category: 'document',
        date: '2024-01',
        tags: ['DevOps', 'CI/CD', 'Presentation']
      }
    ]
  },
  {
    id: 'platforms',
    type: 'folder',
    title: 'Platforms & Tools',
    description: 'Development and design platforms I work with',
    longDescription: 'Collection of platforms and tools I use for development and design',
    thumbnail: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=400',
    date: '2024',
    category: 'project',
    tags: ['Development', 'Design'],
    items: platformLinks.map((platform, index) => ({
      id: `platform-${index}`,
      title: platform.name,
      description: `View my work on ${platform.name}`,
      longDescription: `Check out my projects and contributions on ${platform.name}`,
      thumbnail: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=400',
      category: 'project',
      date: '2024',
      tags: ['Platform'],
      links: {
        live: platform.url
      }
    }))
  }
];

// Update the portfolio item card component
const PortfolioCard = ({ item, onClick }: { item: PortfolioItem | FolderItem; onClick: () => void }) => {
  const isFolder = 'type' in item && item.type === 'folder';
  const isPlatform = item.links?.live && platformLinks.some(p => p.url === item.links?.live);
  const platform = isPlatform ? platformLinks.find(p => p.url === item.links?.live) : null;
  const itemCount = isFolder ? item.items?.length || 0 : 0;
  
  const cardContent = (
    <div className="p-3">
      {/* Card Header */}
      <div className="flex items-start gap-3">
        {/* Icon/Thumbnail */}
        <div className="w-10 h-10 tablet:w-12 tablet:h-12 flex-shrink-0 rounded-lg overflow-hidden">
          {isFolder ? (
            <div className="w-full h-full bg-gradient-to-br from-purple-500/10 to-blue-500/10 
                         flex items-center justify-center">
              <Folder className="w-5 h-5 tablet:w-6 tablet:h-6 text-purple-400" />
            </div>
          ) : isPlatform && platform ? (
            <div className={`w-full h-full bg-white/5 flex items-center justify-center ${platform.color}`}>
              {platform.icon}
            </div>
          ) : (
            <img
              src={item.thumbnail}
              alt={item.title}
              className="w-full h-full object-cover"
            />
          )}
        </div>

        {/* Title and Description */}
        <div className="flex-1 min-w-0">
          <h3 className="text-sm font-medium text-white mb-1 truncate">
            {item.title}
          </h3>
          <p className="text-xs text-white/60 line-clamp-2">
            {item.description}
          </p>
        </div>
      </div>

      {/* Footer */}
      {isFolder && (
        <div className="mt-3 flex items-center justify-between text-xs text-white/40">
          <span>{itemCount} item{itemCount !== 1 ? 's' : ''}</span>
          <ArrowLeft className="w-4 h-4 rotate-180" />
        </div>
      )}
    </div>
  );

  const cardWrapper = (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
      className="group cursor-pointer relative overflow-hidden rounded-lg bg-white/5 
                border border-white/10 backdrop-blur-sm hover:border-purple-500/20 
                transition-all duration-300"
    >
      {cardContent}
    </motion.div>
  );

  // Return different versions based on type
  if (isPlatform && item.links?.live) {
    return (
      <a
        href={item.links.live}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        {cardWrapper}
      </a>
    );
  }

  return (
    <div onClick={onClick}>
      {cardWrapper}
    </div>
  );
};

// Update the YouTube helper function to include autoplay and loop
const getYouTubeInfo = (url: string) => {
  const videoId = url.split('v=')[1]?.split('&')[0];
  return {
    thumbnail: `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
    embedUrl: `https://www.youtube.com/embed/${videoId}`
  };
};

// Add a new ImageGrid component for the folder view
const ImageGrid = ({ images, repos }: { 
  images?: { id: string; url: string; title: string }[];
  repos?: GitHubRepo[];
}) => {
  const githubImages = repos?.map(repo => ({
    id: repo.id,
    url: `https://opengraph.githubassets.com/1/${repo.html_url.split('github.com/')[1]}`,
    title: repo.name
  })) || [];

  const displayImages = images || githubImages;

  return (
    <div className="grid grid-cols-4 tablet:grid-cols-6 desktop:grid-cols-8 gap-2 p-4">
      {displayImages.map((image) => (
        <motion.div
          key={image.id}
          className="group relative aspect-square rounded-lg overflow-hidden 
                   hover:ring-2 ring-purple-500 cursor-pointer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <img
            src={image.url}
            alt={image.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-x-0 bottom-0 p-1.5 bg-black/60 backdrop-blur-sm
                       translate-y-full group-hover:translate-y-0 transition-transform">
            <p className="text-[10px] text-white truncate text-center">
              {image.title}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

// Add these interfaces for better stats organization
interface GitHubMetric {
  label: string;
  value: number;
  icon: React.ReactNode;
  color: string;
}

interface PlatformLink {
  name: string;
  icon: React.ReactNode;
  url: string;
  color: string;
}

interface HubHeaderProps {
  currentFolder: FolderItem | null;
  setCurrentFolder: (folder: FolderItem | null) => void;
  setIsOpen: (isOpen: boolean) => void;
  githubStats: GitHubStats;
  githubUsername: string;
}

const HubHeader = ({ 
  currentFolder, 
  setCurrentFolder, 
  setIsOpen,
  githubStats,
  githubUsername 
}: HubHeaderProps) => {
  const metrics = [
    {
      label: 'Repositories',
      value: githubStats.public_repos,
      icon: <Code2 className="w-4 h-4" />,
      color: 'from-blue-500/20 to-blue-600/20'
    },
    {
      label: 'Stars',
      value: githubStats.total_stars,
      icon: <Star className="w-4 h-4" />,
      color: 'from-yellow-500/20 to-yellow-600/20'
    },
    {
      label: 'Followers',
      value: githubStats.followers,
      icon: <Users2 className="w-4 h-4" />,
      color: 'from-purple-500/20 to-purple-600/20'
    },
    {
      label: 'Following',
      value: githubStats.following,
      icon: <UserPlus className="w-4 h-4" />,
      color: 'from-green-500/20 to-green-600/20'
    }
  ];

  return (
    <div className="relative flex-shrink-0">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 to-blue-900/30">
        <div className="absolute inset-0 backdrop-blur-xl">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent" />
        </div>
      </div>

      <div className="relative">
        {/* Navigation Bar */}
        <div className="px-4 py-3 flex items-center justify-between border-b border-white/10">
          <div className="flex items-center gap-3">
            <button
              onClick={() => currentFolder ? setCurrentFolder(null) : null}
              className="p-2 hover:bg-white/5 rounded-lg transition-colors"
            >
              {currentFolder ? (
                <ArrowLeft className="w-5 h-5 text-white" />
              ) : (
                <Folder className="w-5 h-5 text-white" />
              )}
            </button>
            <div>
              <h2 className="text-sm font-medium text-white">
                {currentFolder?.title || 'Portfolio Hub'}
              </h2>
              <p className="text-xs text-white/60">
                {currentFolder?.description || 'Projects, documentation, and more'}
              </p>
            </div>
          </div>

          {/* Close button */}
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 hover:bg-white/5 rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* GitHub Profile Section - Only show on main view */}
        {!currentFolder && (
          <div className="p-6 tablet:p-8">
            <div className="flex flex-col tablet:flex-row gap-6 tablet:gap-8 items-start tablet:items-center">
              {/* Profile Info */}
              <div className="flex items-center gap-4">
                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-blue-500 
                                rounded-full opacity-75 group-hover:opacity-100 blur 
                                transition duration-1000 group-hover:duration-200" />
                  <div className="relative w-12 h-12 tablet:w-16 tablet:h-16 rounded-full overflow-hidden">
                    <img
                      src={`https://github.com/${githubUsername}.png`}
                      alt="GitHub Avatar"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg tablet:text-xl text-white font-medium">
                      {githubUsername}
                    </h3>
                    <a
                      href={`https://github.com/${githubUsername}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1 rounded-full hover:bg-white/5 transition-colors"
                    >
                      <Github className="w-4 h-4 text-white/60" />
                    </a>
                  </div>
                  <p className="text-sm text-white/60 mt-1">
                    Full Stack Developer & Open Source Contributor
                  </p>
                </div>
              </div>

              {/* GitHub Stats Grid */}
              <div className="grid grid-cols-2 tablet:grid-cols-4 gap-3 tablet:gap-4 w-full tablet:w-auto tablet:ml-auto">
                {metrics.map((metric, index) => (
                  <div
                    key={index}
                    className="group relative overflow-hidden rounded-xl bg-gradient-to-br border border-white/10 backdrop-blur-sm"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${metric.color} opacity-0 group-hover:opacity-100 transition-opacity`} />
                    <div className="relative p-4">
                      <div className="flex items-center gap-2 text-white/60 mb-1">
                        {metric.icon}
                        <span className="text-xs">{metric.label}</span>
                      </div>
                      <div className="text-2xl font-bold text-white">
                        {metric.value.toLocaleString()}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// Update the content area to handle GitHub folder view
const GitHubGrid = ({ repos }: { repos: GitHubRepo[] }) => {
  return (
    <div className="p-4">
      <div className="grid grid-cols-2 tablet:grid-cols-3 desktop:grid-cols-4 gap-4">
        {repos.map((repo) => (
          <motion.a
            key={repo.id}
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex flex-col bg-white/5 backdrop-blur-sm 
                     rounded-lg overflow-hidden border border-white/10
                     hover:border-purple-500/30 transition-all duration-300"
            whileHover={{ y: -4, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {/* Repository Preview */}
            <div className="aspect-video w-full overflow-hidden bg-gradient-to-br from-purple-500/5 to-blue-500/5">
              <img
                src={`https://opengraph.githubassets.com/1/${repo.html_url.split('github.com/')[1]}`}
                alt={repo.name}
                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
              />
            </div>

            {/* Repository Info */}
            <div className="p-4">
              <h3 className="text-sm font-medium text-white truncate mb-1 
                         group-hover:text-purple-400 transition-colors">
                {repo.name}
              </h3>
              <p className="text-xs text-gray-400 line-clamp-2 mb-3 min-h-[2.5rem]">
                {repo.description || 'No description available'}
              </p>

              {/* Repository Stats */}
              <div className="flex items-center gap-4 text-xs text-gray-500">
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 rounded-full bg-yellow-500" />
                  {repo.language || 'None'}
                </div>
                <div className="flex items-center gap-1">
                  <Star className="w-3 h-3" />
                  {repo.stargazers_count}
                </div>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
};

// Add a ProjectMetrics component for better visualization
const ProjectMetrics = ({ metrics }: { metrics: PortfolioItem['details']['metrics'] }) => {
  if (!metrics) return null;
  
  return (
    <div className="grid grid-cols-2 gap-3 mt-4">
      {metrics.map((metric, index) => (
        <div 
          key={index}
          className="bg-white/5 rounded-lg p-3 backdrop-blur-sm flex items-center gap-3"
        >
          {metric.icon}
          <div>
            <div className="text-sm text-gray-400">{metric.label}</div>
            <div className="text-lg font-bold text-white">{metric.value}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

// Update the GitHub integration to include more data
const processGitHubRepos = (repos: GitHubRepo[]): PortfolioItem[] => {
  return repos.map(repo => {
    // Extract features from README if available
    const features = repo.description?.match(/Features:(.*?)(?=\n|$)/i)?.[1]?.split(',') || [];
    
    return {
      id: repo.id.toString(),
      title: repo.name,
      description: repo.description || 'No description available',
      longDescription: repo.description || 'No description available',
      thumbnail: `https://opengraph.githubassets.com/1/${repo.html_url.split('github.com/')[1]}`,
      category: 'project',
      date: new Date(repo.created_at).toLocaleDateString(),
      tags: [repo.language, ...(repo.topics || [])].filter(Boolean),
      links: {
        github: repo.html_url,
      },
      details: {
        technologies: [repo.language, ...(repo.topics || [])].filter(Boolean),
        role: 'Developer',
        duration: 'Ongoing'
      }
    };
  });
};

// Add sorting and filtering functionality
const usePortfolioFilters = (items: PortfolioItem[]) => {
  const [sortBy, setSortBy] = useState<'date' | 'stars' | 'name'>('date');
  const [filterTech, setFilterTech] = useState<string[]>([]);
  
  const sortedAndFilteredItems = useMemo(() => {
    let result = [...items];
    
    // Apply filters
    if (filterTech.length > 0) {
      result = result.filter(item => 
        item.tags.some(tag => filterTech.includes(tag))
      );
    }
    
    // Apply sorting
    result.sort((a, b) => {
      switch (sortBy) {
        case 'date':
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        case 'stars':
          return (b.details?.metrics?.[0]?.value as number || 0) - 
                 (a.details?.metrics?.[0]?.value as number || 0);
        case 'name':
          return a.title.localeCompare(b.title);
        default:
          return 0;
      }
    });
    
    return result;
  }, [items, sortBy, filterTech]);
  
  return {
    sortedAndFilteredItems,
    sortBy,
    setSortBy,
    filterTech,
    setFilterTech
  };
};

// Select Component
interface SelectOption {
  label: string;
  value: string;
}

interface SelectProps {
  value: string;
  onValueChange: (value: string) => void;
  options: SelectOption[];
}

const Select = ({ value, onValueChange, options }: SelectProps) => {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={(e) => onValueChange(e.target.value)}
        className="appearance-none bg-white/5 text-white text-sm rounded-lg px-3 py-2 pr-8
                 border border-white/10 focus:border-purple-500 focus:outline-none
                 backdrop-blur-sm cursor-pointer"
      >
        {options.map((option) => (
          <option 
            key={option.value} 
            value={option.value}
            className="bg-gray-900 text-white"
          >
            {option.label}
          </option>
        ))}
      </select>
      <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none">
        <ChevronDown className="w-4 h-4 text-gray-400" />
      </div>
    </div>
  );
};

// TechFilter Component
interface TechFilterProps {
  selected: string[];
  onChange: (value: string[]) => void;
  technologies: string[];
}

const TechFilter = ({ selected, onChange, technologies }: TechFilterProps) => {
  return (
    <div className="relative group">
      <button
        className="bg-white/5 text-white text-sm rounded-lg px-3 py-2
                 border border-white/10 hover:border-purple-500
                 backdrop-blur-sm flex items-center gap-2"
      >
        <Filter className="w-4 h-4" />
        <span>{selected.length ? `${selected.length} selected` : 'Filter'}</span>
      </button>

      {/* Dropdown */}
      <div className="absolute top-full left-0 mt-2 w-48 bg-gray-900/95 backdrop-blur-sm
                   border border-white/10 rounded-lg shadow-xl opacity-0 invisible
                   group-hover:opacity-100 group-hover:visible transition-all duration-200">
        <div className="p-2 max-h-60 overflow-y-auto">
          {technologies.map((tech) => (
            <label
              key={tech}
              className="flex items-center gap-2 px-2 py-1.5 rounded hover:bg-white/5 cursor-pointer"
            >
              <input
                type="checkbox"
                checked={selected.includes(tech)}
                onChange={(e) => {
                  if (e.target.checked) {
                    onChange([...selected, tech]);
                  } else {
                    onChange(selected.filter(t => t !== tech));
                  }
                }}
                className="rounded border-white/20 bg-white/5 text-purple-500 
                       focus:ring-purple-500 focus:ring-offset-0"
              />
              <span className="text-sm text-white">{tech}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

// Update the main component to use the new header
export default function AppStore({ 
  isOpen, 
  setIsOpen,
  showFloatingButton = false
}: PortfolioHubProps) {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const [currentFolder, setCurrentFolder] = useState<FolderItem | null>(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [githubRepos, setGithubRepos] = useState<GitHubRepo[]>([]);
  const [githubStats, setGithubStats] = useState<GitHubStats>({
    public_repos: 0,
    followers: 0,
    following: 0,
    total_stars: 0,
    total_commits: 0,
    total_prs: 0,
    languages: {}
  });
  
  // Example YouTube URL - replace with your actual video URL
  const portfolioVideoUrl = "https://www.youtube.com/watch?v=YvJxhWcX_VU";
  const { thumbnail, embedUrl } = getYouTubeInfo(portfolioVideoUrl);

  // Add GitHub username constant
  const githubUsername = 'Kallolx';

  // Fetch GitHub data
  useEffect(() => {
    const loadGitHubData = async () => {
      const repos = await fetchGitHubData(githubUsername);
      setGithubRepos(repos);
    };
    loadGitHubData();
  }, [githubUsername]);

  // Fetch GitHub stats
  useEffect(() => {
    const loadGitHubStats = async () => {
      const stats = await fetchGitHubStats(githubUsername);
      setGithubStats(stats);
    };
    loadGitHubStats();
  }, [githubUsername]);

  // Convert GitHub repos to portfolio items
  const githubPortfolioItems: PortfolioItem[] = githubRepos.map(repo => ({
    id: repo.id.toString(),
    title: repo.name,
    description: repo.description || 'No description available',
    longDescription: repo.description || 'No description available',
    thumbnail: `https://opengraph.githubassets.com/1/${repo.html_url.split('github.com/')[1]}`,
    category: 'project',
    date: new Date(repo.created_at).toLocaleDateString(),
    tags: [repo.language, ...(repo.topics || [])].filter(Boolean),
    links: {
      github: repo.html_url,
    },
    details: {
      technologies: [repo.language, ...(repo.topics || [])].filter(Boolean),
      role: 'Developer',
      duration: 'Ongoing'
    }
  }));

  const handleItemClick = (item: PortfolioItem | FolderItem) => {
    if ('type' in item && item.type === 'folder') {
      setCurrentFolder(item);
    } else {
      setSelectedItem(item);
    }
  };

  const displayItems = currentFolder ? currentFolder.items : [...folders, ...portfolioItems];

  const {
    sortedAndFilteredItems,
    sortBy,
    setSortBy,
    filterTech,
    setFilterTech
  } = usePortfolioFilters(githubPortfolioItems);

  // Update content area with filters
  const ContentHeader = () => (
    <div className="p-4 border-b border-white/10">
      <div className="flex items-center justify-between">
        <div className="flex gap-2">
          <Select
            value={sortBy}
            onValueChange={(value) => setSortBy(value as 'date' | 'stars' | 'name')}
            options={[
              { label: 'Latest', value: 'date' },
              { label: 'Most Stars', value: 'stars' },
              { label: 'Name', value: 'name' }
            ]}
          />
          <TechFilter
            selected={filterTech}
            onChange={setFilterTech}
            technologies={Array.from(new Set(
              githubPortfolioItems.flatMap(item => item.tags)
            ))}
          />
        </div>
        <div className="text-sm text-gray-400">
          {sortedAndFilteredItems.length} items
        </div>
      </div>
    </div>
  );

  // Update the GitHub folder items when repos are loaded
  useEffect(() => {
    if (githubRepos.length > 0) {
      const githubFolder = folders.find(f => f.id === 'github');
      if (githubFolder) {
        githubFolder.items = githubPortfolioItems;
      }
    }
  }, [githubRepos]);

  return (
    <>
      {/* Only show floating button on non-mobile screens and when showFloatingButton is true */}
      {showFloatingButton && (
        <div className="hidden tablet:block">
          <motion.button
            onClick={() => setIsOpen(true)}
            className="fixed bottom-24 right-6 z-50 px-4 py-3 bg-gradient-to-tr from-purple-600 to-blue-500
                     rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300
                     flex items-center gap-2"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Folder className="w-5 h-5 text-white" />
            <span className="text-white text-sm font-medium">Portfolio Hub</span>
          </motion.button>
        </div>
      )}

      {/* Portfolio Modal */}
      <AnimatePresence mode="wait">
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/20 dark:bg-black/40 backdrop-blur-md z-[60]"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="fixed inset-0 tablet:inset-8 z-[70] flex items-center justify-center p-4"
            >
              <div className="w-full max-w-5xl h-[100vh] tablet:h-[85vh] bg-gray-900/90 
                          backdrop-blur-xl rounded-xl tablet:rounded-3xl shadow-2xl border border-white/20 
                          flex flex-col overflow-hidden relative">
                <AnimatePresence mode="wait">
                  {selectedItem ? (
                    <AppDetail item={selectedItem} onClose={() => setSelectedItem(null)} />
                  ) : (
                    <motion.div className="flex flex-col h-full">
                      <HubHeader 
                        currentFolder={currentFolder}
                        setCurrentFolder={setCurrentFolder}
                        setIsOpen={setIsOpen}
                        githubStats={githubStats}
                        githubUsername={githubUsername}
                      />
                      
                      {/* Content Area */}
                      <div className="flex-1 overflow-y-auto">
                        <ContentHeader />
                        {currentFolder?.id === 'projects' ? (
                          <div className="grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 gap-3 tablet:gap-4 p-3 tablet:p-4">
                            {sortedAndFilteredItems.map((item) => (
                              <PortfolioCard
                                key={item.id}
                                item={item}
                                onClick={() => handleItemClick(item)}
                              />
                            ))}
                          </div>
                        ) : currentFolder?.id === 'github' ? (
                          <GitHubGrid repos={githubRepos} />
                        ) : currentFolder?.id === 'images' ? (
                          <ImageGrid 
                            images={currentFolder.items?.map(item => ({
                              id: item.id,
                              url: item.thumbnail,
                              title: item.title
                            }))}
                            repos={githubRepos}
                          />
                        ) : (
                          <div className="grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 gap-3 tablet:gap-4 p-3 tablet:p-4">
                            {displayItems.map((item) => (
                              <PortfolioCard
                                key={item.id}
                                item={item}
                                onClick={() => handleItemClick(item)}
                              />
                            ))}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
} 