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
import SidebarWithIframe from "../Certifications/SidebarWithIframe";

function Main_Banner() {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

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

  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const certificationsRef = useRef(null);
  const skillsRef = useRef(null);

  return (
    <div className="min-h-screen bg-[#111111] text-white font-sans">
      <NewNavbar />
      
      <motion.main
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="pt-24"
      >
        {/* Hero Section */}
        <section className="px-6 md:px-12 lg:px-24 py-12 md:py-24 bg-[#111111]">
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
                  className="text-lg text-gray-400"
                  variants={itemVariants}
                >
                  Hi I'm Rajas,
                </motion.p>
                
                <motion.h1 
                  className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight"
                  variants={itemVariants}
                >
                  <span className="block">I build</span>
                  <span className="font-medium text-white">
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
                  className="text-lg text-gray-400 max-w-lg"
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
                  <div className="absolute -inset-4 bg-gray-800 rounded-2xl -z-10"></div>
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
        <div className="relative overflow-hidden bg-[#1a1a1a] py-8">
          <div className="flex whitespace-nowrap marquee-container">
            <div className="animate-marquee flex">
              {[...Array(2)].map((_, i) => (
                <div key={i} className="flex">
                  {[
                    { title: "Resume", count: "Download" },
                    { title: "Experience", count: "4+ Years" },
                    { title: "Projects", count: "15+" },
                    { title: "Certifications", count: "8+" },
                    { title: "Publications", count: "3" }
                  ].map((item, index) => (
                    <div
                      key={`${i}-${index}`}
                      className="mx-4 p-6 bg-[#222222] rounded-lg min-w-[200px] text-center transform hover:scale-105 transition-transform duration-300"
                    >
                      <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                      <p className="text-gray-400">{item.count}</p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* About Section */}
        <section ref={aboutRef} id="about" className="py-24 bg-[#111111]">
          <AboutMe />
        </section>

        {/* Projects Section */}
        <section ref={projectsRef} id="projects" className="py-24 bg-[#1a1a1a]">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">Featured Projects</h2>
            <HorizontalScroll />
          </div>
        </section>

        {/* Skills Section */}
        <section ref={skillsRef} id="skills" className="py-24 bg-[#111111]">
          <SkillsSection />
        </section>

        {/* Certifications Section */}
        <section ref={certificationsRef} id="certifications" className="py-24 bg-[#1a1a1a]">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">Certifications</h2>
            <SidebarWithIframe />
          </div>
        </section>
      </motion.main>

      <Footer />
    </div>
  );
}

export default Main_Banner;