'use client';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import Image from 'next/image';

const projects = [
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
  
  // Add more projects...
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function ProjectsSection() {
  return (
    <section className="py-12 px-4 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: any }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden transition-transform hover:-translate-y-2"
    >
      {/* Project Image */}
      <div className="relative h-48 w-full">
        <Image 
          src={project.image}
          alt={project.title}
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
          priority
        />
      </div>

      {/* Project Info */}
      <div className="p-6 flex flex-col justify-between h-[calc(100%-12rem)]">
        <div>
          <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map((tech: string, idx: number) => (
              <span key={idx} className="bg-blue-100 text-blue-700 text-xs font-medium px-2 py-1 rounded">
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div className="flex items-center space-x-4 mt-4">
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-black">
            <FaGithub size={20} />
          </a>
          <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-black">
            <FaExternalLinkAlt size={20} />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
