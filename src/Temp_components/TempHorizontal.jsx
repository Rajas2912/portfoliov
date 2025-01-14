import { motion, useTransform, useScroll } from "framer-motion";
import "../FramerMotion/Example1.css";
import { useRef } from "react";
import { FaGithub } from "react-icons/fa";
import proj1 from "../assets/python.png";
import proj2 from "../assets/api.png";
import proj3 from "../assets/nodejs.png";
const TempHorizontal = () => {
  return (
    <>
      <HorizontalScrollCarousel2 />
    </>
  );
};

const HorizontalScrollCarousel2 = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["5%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-neutral-900">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-6 pointer-events-auto">
          <div className="card2">
            <div className="imageWrapper">
              <img
                src={proj1}
                alt="Image Classification"
                className="image2"
                width={300}
              />
            </div>
            <div className="card_body">
              <div className="card_title">Vanguard</div>
              <p className="info">
                A Machine Learning project using TensorFlow.
              </p>
            </div>
            <div className="footer_title">
              <a
                href="https://github.com/yourusername/image-classification"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="githubIcon" />
              </a>
            </div>
          </div>
          <div className="card2">
            <div className="imageWrapper">
              <img src={proj2} alt="Image Classification" className="image2" />
            </div>
            <div className="card_body">
              <div className="card_title">TaskVerify</div>
              <p className="info">
                A Machine Learning project using TensorFlow.
              </p>
            </div>
            <div className="footer_title">
              <a
                href="https://github.com/yourusername/image-classification"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="githubIcon" />
              </a>
            </div>
          </div>
          <div className="card2">
            <div className="imageWrapper">
              <img src={proj3} alt="Image Classification" className="image2" />
            </div>
            <div className="card_body">
              <div className="card_title">Vanguard</div>
              <p className="info">
                A Machine Learning project using TensorFlow.
              </p>
            </div>
            <div className="footer_title">
              <a
                href="https://github.com/yourusername/image-classification"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="githubIcon" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TempHorizontal;
