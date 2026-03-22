'use client';
import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Image from 'next/image';
import { CardContainer, CardBody, CardItem } from '@/components/ui/3d-card';

const projects = [
  {
    title: 'Stock Price Analysis Tool',
    description: 'A multi-page MERN stack application that analyzes and visualizes stock data using core Data Structures and Algorithms like Monotonic Stack, Greedy, Sliding Window, and Array Traversal.',
    tech: ['React', 'Express.js', 'Supabase/MongoDB', 'Node.js', 'TailwindCSS', 'Recharts', 'Chart.js', 'D3.js'],
    image: '/StockAnalysisTool.png', // <- relative public folder path
    github: 'https://github.com/Ajayrazz/',
    live: 'https://stockpriceanalysiss.netlify.app/',

  },
  {
    title: 'DreamDrift AI',
    description: 'A full-stack AI career coach platform offering resume generation, mock interviews, and personalized career guidance.',
    tech: ['Next.js', 'NeonDB', 'TailwindCSS', 'Prisma', 'Inngest', 'Shadcn/UI'],
    image: '/DreamDrift.jpg', // <- relative public folder path
    github: 'https://github.com/Ajayrazz/',
    live: 'https://dream-drift-ai.vercel.app/',
  },
  {
    title: 'ProsPly',
    description: 'A full-stack job portal for job search, applications, and recruiter postings.',
    tech: ['React.js', 'TailwindCSS', 'Framer Motion', 'supabase'],
    image: '/Prosply.png', // <- relative public folder path
    github: 'https://github.com/Ajayrazz/',
    live: 'https://your-live-site.com',
  },
  {
    title: 'PathFinder AI',
    description: 'An AI-powered platform for personalized learning paths and skill development.',
    tech: ['React.js', 'TailwindCSS', 'Framer Motion', 'supabase'],
    image: "/pathfinder.png",
    github: 'https://github.com/Ajayrazz/',
    live: 'https://your-live-site.com',
  },
  {
    title: 'ZestShelf',
    description: 'Modern e-commerce store built using React and Stripe API.',
    tech: ['Nextjs', 'Stripe', 'Node.js'],
    image: "/ZestShelf.png",
    github: 'https://github.com/Ajayrazz/',
    live: 'https://your-live-site.com',
  },
  {
    title: 'InvestEase Portfolio Tracker',
    description: 'A portfolio tracker for managing and analyzing investments with a personalized chatbot.',
    tech: ['React', 'Node.js', "Supabase", "Gemini API"],
    image: "/InvestEase.png",
    github: 'https://github.com/Ajayrazz/',
    live: 'https://your-live-site.com',
  },
  {
    title: 'Requaps Software Delivery',
    description: 'A platform for software delivery and project management.',
    tech: ['React', 'Node', 'TailwindCSS', 'Express'],
    image: "/Requaps.png",
    github: 'https://github.com/Ajayrazz/',
    live: 'https://your-live-site.com',
  },
  {
    title: 'The Tech Titan',
    description: 'A platform for tech enthusiasts to connect and share knowledge.',
    tech: ['React', 'Stripe', 'Node.js'],
    image: "/TechTitan.png",
    github: 'https://github.com/Ajayrazz/',
    live: 'https://your-live-site.com',
  },
  {
    title: "Let'sChat",
    description: 'A real-time chat application with secure authentication and end-to-end encryption.',
    tech: ['React', 'Stripe', 'Node.js'],
    image: "/hehe.png",
    github: 'https://github.com/Ajayrazz/',
    live: 'https://your-live-site.com',
  },
  {
    title: 'Disney+ Clone',
    description: 'A clone of the Disney+ streaming platform with a responsive design.',
    tech: ['React', 'Stripe', 'Node.js'],
    image: "/Disney.png",
    github: 'https://github.com/Ajayrazz/',
    live: 'https://your-live-site.com',
  },
  {
    title: 'Prescripto',
    description: 'A hospital management system with appointment scheduling and patient records.',
    tech: ['React', 'Stripe', 'Node.js'],
    image: "/Prescripto.png",
    github: 'https://github.com/Ajayrazz/',
    live: 'https://your-live-site.com',
  },
  {
    title: 'CognitoStream',
    description: 'A Saas platform for video streaming and content management.',
    tech: ['React', 'Stripe', 'Node.js'],
    image: "/enotes.png",
    github: 'https://github.com/Ajayrazz/',
    live: 'https://your-live-site.com',
  },
  {
    title: 'BudgetBliss',
    description: 'A personal finance management tool for tracking expenses and budgeting.',
    tech: ['html', 'css', 'js', 'tailwindcss', 'php'],
    image: "/Budget.png",
    github: 'https://github.com/Ajayrazz/',
    live: 'https://your-live-site.com',
  },
  {
    title: 'DriveHop',
    description: 'A car rental platform with a user-friendly interface and secure payment system.',
    tech: ['React', 'Stripe', 'Node.js'],
    image: "/DriveHop.png",
    github: 'https://github.com/Ajayrazz/',
    live: 'https://your-live-site.com',
  },
  {
    title: 'DevMate',
    description: 'A platform for developers to connect, collaborate, and share resources.',
    tech: ['React', 'Stripe', 'Node.js'],
    image: "/DevMate.png",
    github: 'https://github.com/Ajayrazz/',
    live: 'https://your-live-site.com',
  },
  {
    title: 'Air Pollution And Control',
    description: 'A web application for monitoring and controlling air pollution levels.',
    tech: ['React', 'Stripe', 'Node.js'],
    image: "/AirPollution.png",
    github: 'https://github.com/Ajayrazz/',
    live: 'https://your-live-site.com',
  },
  {
    title: 'GitHub Profile Viewer',
    description: 'A web application for viewing GitHub profiles and repositories.',
    tech: ['React', 'Stripe', 'Node.js'],
    image: "/onlinevote.jpg",
    github: 'https://github.com/your-repo',
    live: 'https://your-live-site.com',
  },
];

export default function ProjectsSection() {
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (currentIndex >= projects.length) {
      setCurrentIndex(Math.max(0, projects.length - itemsPerPage));
    }
  }, [itemsPerPage, currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex + itemsPerPage >= projects.length) return prevIndex;
      return prevIndex + itemsPerPage;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex - itemsPerPage < 0) return 0;
      return prevIndex - itemsPerPage;
    });
  };

  const visibleProjects = projects.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <section id="projects" className="py-12 px-4 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-center mb-12">
        <div className="section-heading-container !justify-start !w-auto relative mb-6 md:mb-0">
          <h2 className="section-heading relative inline-block mb-0">
            Things I’ve Engineered
          </h2>
        </div>
        
        {/* Navigation Arrows */}
        <div className="flex space-x-3 mt-4 md:mt-0">
          <button 
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className={`p-3 rounded-full flex items-center justify-center transition-all ${
              currentIndex === 0 
                ? 'bg-gray-200 dark:bg-gray-800 text-gray-400 cursor-not-allowed border border-gray-300 dark:border-gray-700' 
                : 'bg-white dark:bg-gray-800 hover:bg-cyan-500 hover:text-white dark:hover:bg-cyan-500 text-gray-700 dark:text-gray-200 shadow border border-gray-200 dark:border-gray-700'
            }`}
            aria-label="Previous projects"
          >
            <FaChevronLeft size={16} />
          </button>
          <button 
            onClick={nextSlide}
            disabled={currentIndex + itemsPerPage >= projects.length}
            className={`p-3 rounded-full flex items-center justify-center transition-all ${
              currentIndex + itemsPerPage >= projects.length 
                ? 'bg-gray-200 dark:bg-gray-800 text-gray-400 cursor-not-allowed border border-gray-300 dark:border-gray-700' 
                : 'bg-white dark:bg-gray-800 hover:bg-cyan-500 hover:text-white dark:hover:bg-cyan-500 text-gray-700 dark:text-gray-200 shadow border border-gray-200 dark:border-gray-700'
            }`}
            aria-label="Next projects"
          >
            <FaChevronRight size={16} />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-12">
        <AnimatePresence mode="popLayout">
          {visibleProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: any }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
      transition={{ duration: 0.3 }}
      className="flex justify-center"
    >
      <CardContainer className="inter-var w-full">
        <CardBody className="bg-black/20 backdrop-blur-md border border-white/10 shadow-2xl w-full h-full rounded-2xl p-6 relative group/card hover:shadow-cyan-500/[0.1] transition-all flex flex-col min-h-[500px]">
          {/* Project Title */}
          <CardItem 
            translateZ="50" 
            className="text-2xl font-bold text-white mb-3"
          >
            {project.title}
          </CardItem>
          
          {/* Project Description */}
          <CardItem 
            as="p" 
            translateZ="60" 
            className="text-gray-300 text-sm mb-6 line-clamp-3 min-h-[60px]"
          >
            {project.description}
          </CardItem>

          {/* Project Image */}
          <CardItem 
            translateZ="100" 
            className="w-full mb-6 mt-auto"
          >
            <div className="relative h-48 w-full rounded-xl overflow-hidden shadow-lg group-hover/card:shadow-xl transition-shadow">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover/card:scale-110"
              />
            </div>
          </CardItem>

          {/* Tech Stack */}
          <CardItem 
            translateZ="80" 
            className="flex flex-wrap gap-2 mb-6"
          >
            {project.tech.slice(0, 5).map((tech: string, idx: number) => (
              <span 
                key={idx} 
                className="bg-white/5 border border-white/10 backdrop-blur-sm text-gray-200 text-[10px] font-semibold px-2.5 py-1 rounded-md"
              >
                {tech}
              </span>
            ))}
            {project.tech.length > 5 && (
              <span className="bg-white/5 border border-white/10 backdrop-blur-sm text-gray-200 text-[10px] font-semibold px-2.5 py-1 rounded-md">
                +{project.tech.length - 5}
              </span>
            )}
          </CardItem>

          {/* Bottom Links */}
          <div className="flex items-center justify-between mt-auto w-full pt-4 border-t border-white/10">
            <CardItem 
              translateZ="40" 
              as="a" 
              href={project.live} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-2"
            >
              Live Demo <FaExternalLinkAlt size={12} />
            </CardItem>
            <CardItem 
              translateZ="40" 
              as="a" 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            >
              <FaGithub size={20} />
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
    </motion.div>
  );
}
