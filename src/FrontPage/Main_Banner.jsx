import { useEffect, useRef } from "react";
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
import CardMarquee from "../Components/Cardmarquee";
import HorizontalCardMarquee from "../Components/Cardmarquee";
import MarqueeCards from "../Components/Cardmarquee";

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

  // In-view detection
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

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
                
                <motion.div variants={itemVariants}>
                  <button className="px-8 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors">
                    View Projects
                  </button>
                </motion.div>
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
        <section>
         <MarqueeCards></MarqueeCards>
        </section>
        <section>
          <HorizontalScroll></HorizontalScroll>
        </section>

        {/* Projects Section
        <section 
          ref={ref}
          className="px-6 md:px-12 lg:px-24 py-12 bg-gray-50"
        >
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-light text-center">
                Selected <span className="font-medium text-black">Projects</span>
              </h2>
              <div className="w-24 h-0.5 bg-gray-300 mx-auto mt-4"></div>
            </motion.div>
            
            <VerticalCardScroll />
          </div>
        </section> */}

        {/* Skills Section */}
        <section className="px-6 md:px-12 lg:px-24 py-24">
          <SkillsSection />
        </section>

        {/* About Section */}
        <section className="px-6 md:px-12 lg:px-24 py-12 bg-gray-50">
          <AboutMe />
        </section>
      </motion.main>

      <Footer />
    </div>
  );
}

export default Main_Banner;