import React, { useRef } from "react";
import pexels1 from "../assets/images/pexels1.jpg";
import pexels2 from "../assets/images/pexels2.jpg";
import pexels3 from "../assets/images/pexels3.jpg";
import reactjsimg from "../assets/reactjs.png";
import { motion, useScroll, useTransform } from "framer-motion";
import "./VerticalCard.css";

const VerticalCard = ({
  title,
  description,
  src,
  url,
  color,
  i,
  range,
  progress,
  targetScale,
}) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });
  const imagescale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);
  return (
    <div ref={container} className="cardContainer23">
      <motion.div
        className="card23"
        style={{scale, backgroundColor: color, top: `calc(-5vh + ${i * 25}px)` }}
      >
        <div className="h23">{title}</div>
        <div className="body23">
          <div className="description23">
            <div className="p23">{description}</div>
            <div className="span23">
              <a href={url} target="_blank">
                See more
              </a>
              <svg
                width="22"
                height="12"
                viewBox="0 0 22 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.5303 6.53033C21.8232 6.23744 21.8232 5.76256 21.5303 5.46967L16.7574 0.696699C16.4645 0.403806 15.9896 0.403806 15.6967 0.696699C15.4038 0.989592 15.4038 1.46447 15.6967 1.75736L19.9393 6L15.6967 10.2426C15.4038 10.5355 15.4038 11.0104 15.6967 11.3033C15.9896 11.5962 16.4645 11.5962 16.7574 11.3033L21.5303 6.53033ZM0 6.75L21 6.75V5.25L0 5.25L0 6.75Z"
                  fill="black"
                />
              </svg>
            </div>
          </div>

          <div className="imageContainer23">
            <motion.div style={{ scale: imagescale }} className="inner">
              <img className="img23" fill src={pexels1} alt="image" />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default VerticalCard;
