import { useEffect, useRef, useState } from "react";
import Lenis from "lenis";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { NewNavbar } from "../FramerMotion/NewNavbar";
import VerticalCardScroll from "../FramerMotion/VerticalCardScroll";
import SkillsSection from "../Components/SkillsSection";
import AboutMe from "./AboutMe";
import Footer from "../Components/Footer";
import "./Main_Banner.css";
import banner_img from "../assets/portrait.png";
import HorizontalScroll from "../Components/HorizontalScroll";
import ScrollingCards from "../Components/ScrollingCards";
import SidebarWithIframe from "../Certifications/SidebarWithIframe";

function Main_Banner() {
  // Smooth scrolling setup
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "anticipate"
      }
    }
  };

  // Refs for section scrolling
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const certificationsRef = useRef(null);
  const skillsRef = useRef(null);

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <NewNavbar />
      
      <motion.main
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="pt-24"
      >
        {/* Hero Section */}
        <section className="px-6 md:px-12 lg:px-24 py-12 md:py-24">
          <div className="container mx-auto">
            <motion.div 
              className="flex flex-col lg:flex-row items-center justify-between gap-12"
              variants={containerVariants}
            >
              <motion.div 
                className="lg:w-1/2 space-y-6"
                variants={itemVariants}
              >
                <motion.p 
                  className="text-lg text-gray-600"
                  variants={itemVariants}
                >
                  Hi I'm Rajas,
                </motion.p>
                
                <motion.h1 
                  className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight"
                  variants={itemVariants}
                >
                  <span className="block">I build</span>
                  <span className="font-medium text-black">
                    <Typewriter
                      words={['AI solutions', 'web experiences', 'scalable systems']}
                      loop={true}
                      cursor
                      cursorStyle="_"
                      typeSpeed={70}
                      deleteSpeed={50}
                      delaySpeed={1000}
                    />
                  </span>
                </motion.h1>
                
                <motion.p 
                  className="text-lg text-gray-600 max-w-lg"
                  variants={itemVariants}
                >
                  AI enthusiast, full-stack developer, and innovator passionate about 
                  building real-world solutions and sharing knowledge through 
                  projects and workshops.
                </motion.p>
              </motion.div>
              
              <motion.div 
                className="lg:w-1/2 flex justify-center"
                variants={imageVariants}
              >
                <div className="relative">
                  <div className="absolute -inset-4 bg-gray-200 rounded-2xl -z-10"></div>
                  <img
                    src={banner_img}
                    alt="Rajas Portrait"
                    className="rounded-xl w-full max-w-md object-cover"
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Marquee Section */}
        <section className="py-12 bg-gray-50">
          <div className="overflow-hidden">
            <div className="flex animate-marquee whitespace-nowrap">
              {[
                { title: "Resume", count: "Download" },
                { title: "Experience", count: "4+ Years" },
                { title: "Projects", count: "15+" },
                { title: "Certifications", count: "8+" },
                { title: "Publications", count: "3" }
              ].map((item, index) => (
                <div
                  key={index}
                  className="mx-4 p-4 bg-white rounded-lg shadow-md min-w-[200px] text-center"
                >
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-gray-600">{item.count}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section ref={aboutRef} id="about" className="py-24 bg-white">
          <AboutMe />
        </section>

        {/* Projects Section */}
        <section ref={projectsRef} id="projects" className="py-24 bg-gray-50">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
            <HorizontalScroll />
          </div>
        </section>

        {/* Skills Section */}
        <section ref={skillsRef} id="skills" className="py-24 bg-white">
          <SkillsSection />
        </section>

        {/* Certifications Section */}
        <section ref={certificationsRef} id="certifications" className="py-24 bg-gray-50">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Certifications</h2>
            <SidebarWithIframe />
          </div>
        </section>
      </motion.main>

      <Footer />
    </div>
  );
}

export default Main_Banner;