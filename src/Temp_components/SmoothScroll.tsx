import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll, useSpring, useTransform } from "framer-motion"
import { motion } from "framer-motion"
const SmoothScroll: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {

  const [isLoading,setIsLoading] = useState(true);

  //get height
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState(0);
  const [WindowHeight, setWindowHeight] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (contentRef.current != null) {
        setContentHeight(contentRef.current.scrollHeight);
      }
      setWindowHeight(window.innerHeight);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [contentRef]);


  //intercept normal scroll behavior 
  const { scrollYProgress } = useScroll()
  const smoothProgress = useSpring(scrollYProgress,{
    mass:0.1,
    stiffness:100,
    damping:20,
    restDelta:0.001,
  });

  useMotionValueEvent(smoothProgress,"change",(latest) =>{
    if(latest === 0){
      setIsLoading(false);
    }
  });


  const y = useTransform(smoothProgress,(value) =>{
    return value * -(contentHeight - WindowHeight);
  });

  return (
    <>
      <div  style={{height:contentHeight}}/>
      <motion.div className="w-screen fixed top-0 flex flex-col transition-opacity duration-200 ease-in-out" ref={contentRef} style={{y:isLoading ? 0 : y, opacity:isLoading ? 0 : 1}}>
        {children}
      </motion.div >
    </>
  );
};
export default SmoothScroll;
