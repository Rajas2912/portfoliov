import React from "react";
import { motion, useAnimationControls } from "framer-motion";
import "./RevealLinks.css"; // Separate CSS file

export const RevealLinks = () => {
  return (
    <section className="reveal-links-container">
      <FlipLink href="#">Twitter</FlipLink>
      <FlipLink href="#">Linkedin</FlipLink>
      <FlipLink href="#">Facebook</FlipLink>
      <FlipLink href="#">Instagram</FlipLink>
    </section>
  );
};

const DURATION = 0.5;
const STAGGER = 0.05;
const INTERVAL = 3; // Interval between text changes in seconds

const FlipLink = ({ children, href }) => {
  const controls = useAnimationControls();

  React.useEffect(() => {
    const cycleAnimation = async () => {
      while (true) {
        await controls.start("animate");
        await controls.start("initial");
      }
    };
    cycleAnimation();
  }, [controls]);

  return (
    <motion.a
      href={href}
      className="flip-link"
      initial="initial"
      animate={controls}
    >
      <div>
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: { y: 0 },
              animate: { y: "-100%" },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="flip-char"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
      <div className="flip-overlay">
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: { y: "100%" },
              animate: { y: 0 },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="flip-char"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
    </motion.a>
  );
};
