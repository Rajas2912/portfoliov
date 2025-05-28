import { motion } from "framer-motion";
import { useState } from "react";
import { FiChevronLeft, FiChevronRight, FiGithub, FiExternalLink, FiYoutube } from "react-icons/fi";

const HorizontalScroll = () => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-4xl font-bold text-gray-900 md:text-5xl">
          Projects
        </h2>
        <HorizontalScrollCarousel />
      </div>
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevProject = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="relative">
      <div className="relative w-full overflow-hidden">
        <div className="flex h-full items-center justify-center">
          <div className="w-full">
            <ProjectCard 
              project={projects[currentIndex]} 
              isActive={true} 
            />
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevProject}
        className="absolute left-0 top-1/2 z-30 -translate-y-1/2 transform rounded-full bg-gray-100 p-3 text-gray-800 transition hover:bg-gray-200 md:-left-12"
        aria-label="Previous project"
      >
        <FiChevronLeft size={24} />
      </button>
      <button
        onClick={nextProject}
        className="absolute right-0 top-1/2 z-30 -translate-y-1/2 transform rounded-full bg-gray-100 p-3 text-gray-800 transition hover:bg-gray-200 md:-right-12"
        aria-label="Next project"
      >
        <FiChevronRight size={24} />
      </button>

      {/* Indicators */}
      <div className="mt-8 flex justify-center gap-2">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 w-2 rounded-full transition-all ${index === currentIndex ? 'bg-gray-900 w-6' : 'bg-gray-300'}`}
            aria-label={`Go to project ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

const ProjectCard = ({ project, isActive }) => {
  return (
    <motion.div
      className={`mx-auto flex flex-col overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 md:h-[450px] md:flex-row ${isActive ? 'opacity-100' : 'opacity-70'}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: isActive ? 1 : 0.7 }}
      transition={{ duration: 0.5 }}
    >
      {/* Image Section (Left) */}
      <div className="h-64 w-full md:h-auto md:w-1/2">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover"
        />
      </div>
      
      {/* Content Section (Right) */}
      <div className="flex w-full flex-col p-8 md:w-1/2 md:p-10">
        <h3 className="text-2xl font-bold text-gray-900">{project.title}</h3>
        <p className="mt-4 text-gray-600">{project.description}</p>
        
        {/* Technologies Used */}
        <div className="mt-6">
          <h4 className="text-sm font-semibold uppercase text-gray-500">Technologies</h4>
          <div className="mt-2 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span 
                key={tag}
                className="rounded-md bg-gray-100 px-3 py-1 text-sm font-medium text-gray-700"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        
        {/* Project Links */}
        <div className="mt-8 flex flex-wrap gap-4">
          {project.codeUrl && (
            <a 
              href={project.codeUrl} 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-50"
            >
              <FiGithub /> Code
            </a>
          )}
          {project.demoUrl && (
            <a 
              href={project.demoUrl} 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-50"
            >
              <FiExternalLink /> Live Demo
            </a>
          )}
          {project.videoUrl && (
            <a 
              href={project.videoUrl} 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-50"
            >
              <FiYoutube /> Video Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default HorizontalScroll;

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A full-stack e-commerce solution with secure payment integration, product management, and admin dashboard. Built with modern web technologies to provide a seamless shopping experience.",
    image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1672&q=80",
    tags: ["React", "Node.js", "MongoDB", "Stripe", "Redux"],
    demoUrl: "#",
    codeUrl: "#",
    videoUrl: "#"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Productivity application featuring drag-and-drop interface, team collaboration, and real-time updates. Designed to help teams organize and prioritize their work effectively.",
    image: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    tags: ["React", "Firebase", "Tailwind CSS", "DnD"],
    demoUrl: "#",
    codeUrl: "#",
    videoUrl: "#"
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "Real-time weather forecasting application with interactive maps and detailed weather predictions. Provides location-based weather data with beautiful visualizations.",
    image: "https://images.unsplash.com/photo-1601134467661-3d775b999c8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1375&q=80",
    tags: ["JavaScript", "API Integration", "Chart.js", "Geolocation"],
    demoUrl: "#",
    codeUrl: "#"
  },
  {
    id: 4,
    title: "Social Media Analytics",
    description: "Comprehensive dashboard for tracking engagement metrics across multiple social platforms. Helps businesses understand their audience and optimize content strategy.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1415&q=80",
    tags: ["React", "D3.js", "Express", "MongoDB"],
    demoUrl: "#",
    codeUrl: "#",
    videoUrl: "#"
  },
  {
    id: 5,
    title: "AI Image Generator",
    description: "Web application that generates high-quality images from text prompts using advanced machine learning models. Includes features for saving and sharing generated artwork.",
    image: "https://images.unsplash.com/photo-1677442135136-760c813a743e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    tags: ["Python", "TensorFlow", "Flask", "React"],
    demoUrl: "#",
    codeUrl: "#"
  }
];