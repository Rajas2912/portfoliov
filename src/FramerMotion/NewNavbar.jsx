import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaLinkedin, FaGithub, FaCode } from "react-icons/fa";
export const NewNavbar = () => {
  return (
    <>
    <div className="main_navbar">
    <div className="bg-neutral-100 py-20" style={{paddingTop:"1rem",paddingBottom:"1rem",backgroundColor:"black"}}>
      <SlideTabs />
    </div>
    </div>

    </>

  );
};

const SlideTabs = () => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <ul
      onMouseLeave={() => {
        setPosition((pv) => ({
          ...pv,
          opacity: 0,
        }));
      }}
      className="relative mx-auto flex w-fit rounded-full border-2 border-grey bg-black p-1"
    >
      <Tab setPosition={setPosition}>
        <Link to="/">Home</Link>
      </Tab>
      <Tab setPosition={setPosition}>
      <Link to="/about">About</Link>
        </Tab>
      <Tab setPosition={setPosition}>
      <Link to="/certifications">Certifications</Link>
        </Tab>
      <Tab setPosition={setPosition}>
      <Link to="/projects">Projects</Link>
        
        </Tab>

      <Tab setPosition={setPosition}>
      <Link to="/resume">Resume</Link>
      </Tab>
      <Tab setPosition={setPosition}>
                  <a
                    href="https://github.com/Rajas2912"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "white" }}
                  >
                    <FaGithub size={25} />
                  </a>
      </Tab>
      <Tab setPosition={setPosition}>
      <a
            href="https://www.linkedin.com/in/rajas-bhosale-44773a258"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "white" }}
          >
            <FaLinkedin size={25} />
          </a>
      </Tab>
      <Tab setPosition={setPosition}>
      <a
            href="https://leetcode.com/u/RajasBhosale/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "white" }}
          >
            <FaCode size={25} />
          </a>
      </Tab>
      <Cursor position={position} />
    </ul>
  );
};

const Tab = ({ children, setPosition }) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref?.current) return;

        const { width } = ref.current.getBoundingClientRect();

        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        });
      }}
      className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase text-white mix-blend-difference md:px-5 md:py-3 md:text-base"
    >
      {children}
    </li>
  );
};

const Cursor = ({ position }) => {
  return (
    <motion.li
      animate={{
        ...position,
      }}
      className="absolute z-0 h-7 rounded-full bg-white md:h-12"
    />
  );
};