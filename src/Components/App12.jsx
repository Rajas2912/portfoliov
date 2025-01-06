import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, color } from "framer-motion";
import "./App12.css";

const TEXTS = ["Machine Learning", "Artificial Intelligence", "WebDev", "DSA"];
const DURATION = 2;

const App12 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % TEXTS.length);
    }, DURATION * 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="reveal-single-text-container">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          style={{color:"grey" ,fontSize:"2rem"}}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="reveal-text"
        >
          {TEXTS[currentIndex]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default App12; // Default export
