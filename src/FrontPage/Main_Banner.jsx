import { useEffect, useRef } from "react";
import Lenis from "lenis";
import { motion, useInView } from "framer-motion";
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
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <NewNavbar />
      
      <motion.main
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="pt-16"
      >
        {/* Hero Section */}
        <section className="px-6 md:px-12 lg:px-24 py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto">
            <motion.div 
              className="flex flex-col lg:flex-row items-center justify-between gap-12"
              variants={containerVariants}
            >
              <motion.div className="lg:w-1/2 space-y-8" variants={itemVariants}>
                <motion.p className="text-lg text-gray-600" variants={itemVariants}>
                  Hi I'm Rajas,
                </motion.p>
                
                <motion.h1 className="text-5xl md:text-6xl lg:text-7xl font-light leading-tight">
                  <span className="block text-gray-900">I build</span>
                  <span className="font-medium bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
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
                
                <motion.p className="text-xl text-gray-600 max-w-lg" variants={itemVariants}>
                  AI enthusiast, full-stack developer, and innovator passionate about 
                  building real-world solutions.
                </motion.p>

                <motion.div className="flex gap-4" variants={itemVariants}>
                  <button className="px-8 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors">
                    View Projects
                  </button>
                  <button className="px-8 py-3 border-2 border-gray-900 text-gray-900 rounded-full hover:bg-gray-100 transition-colors">
                    Contact Me
                  </button>
                </motion.div>
              </motion.div>
              
              <motion.div className="lg:w-1/2 flex justify-center" variants={itemVariants}>
                <div className="relative">
                  <div className="absolute -inset-4 bg-gray-100 rounded-2xl -z-10"></div>
                  <img
                    src={banner_img}
                    alt="Rajas Portrait"
                    className="rounded-xl w-full max-w-md object-cover shadow-lg"
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Stats Marquee */}
        <div className="py-12 bg-gray-50">
          <div className="overflow-hidden">
            <div className="flex animate-marquee whitespace-nowrap">
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
                      className="mx-4 p-6 bg-white rounded-xl shadow-md min-w-[200px] text-center transform hover:scale-105 transition-transform duration-300"
                    >
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.count}</p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* About Section */}
        <section id="about" className="py-24">
          <AboutMe />
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-24 bg-gray-50">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
            <HorizontalScroll />
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-24">
          <SkillsSection />
        </section>

        {/* Certifications Section */}
        <section id="certifications" className="py-24 bg-gray-50">
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