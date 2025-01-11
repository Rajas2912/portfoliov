import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import "./Card_Scroll.css";
import Card_Main from "../Temp_components/Card_main";
import proj1 from "../assets/python.png";
import proj2 from "../assets/api.png";
import proj3 from "../assets/nodejs.png";

const Card_Scroll = () => {
  const cards = [
    {
      image: proj1,
      title: "Python Project",
      description: "This project uses Python to solve complex problems.",
      githubLink: "https://github.com/your-repository",
    },
    {
      image: proj2,
      title: "API Development",
      description: "This project demonstrates API development using modern tools.",
      githubLink: "https://github.com/your-repository",
    },
    {
      image: proj3,
      title: "Node.js Project",
      description: "This project showcases backend development with Node.js.",
      githubLink: "https://github.com/your-repository",
    },
    {
      image: proj2,
      title: "Advanced APIs",
      description: "This project delves into API integration and management.",
      githubLink: "https://github.com/your-repository",
    },
  ];

  return (
    <div className="slider-container2">
      {cards.map((card, index) => (
        <CardItem key={index} card={card} index={index} />
      ))}
    </div>
  );
};

const CardItem = ({ card, index }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.3, // Adjust how much of the card should be in view before animation
  });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  const cardVariants = {
    hidden: { opacity: 0, x: index % 2 === 0 ? -100 : 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={cardVariants}
      className="card_carousel1"
      style={{ marginBottom: "20px" }}
    >
      <Card_Main
        image={card.image}
        title={card.title}
        description={card.description}
        githubLink={card.githubLink}
      />
    </motion.div>
  );
};

export default Card_Scroll;
