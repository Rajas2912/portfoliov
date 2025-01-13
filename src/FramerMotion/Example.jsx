import { motion, useTransform, useScroll } from "framer-motion";
import "./Example1.css";
import { useRef } from "react";
import Mainnavbar from "../Components/Mainnavbar";
import banner_img from "../assets/portrait.png";
import potrait2_img from "../assets/Potrait2.jpg";
import { Button } from "@nextui-org/react";
import ProjectCard from "../Components/ProjectCard";
import App12 from "../Components/App12";
import RotatingText from "../Components/RotatingText";
import SlidingCards from "../Components/SlidingCards";
import SkillsSection from "../Components/SkillsSection";
import Video_Carousel from "../Components/Video_Carousel";
import Bottom_Video from "../Components/Bottom_Video";
import { RevealLinks } from "../Components/RevealLinks";
import AboutMe from "../FrontPage/AboutMe";
import Footer from "../Components/Footer";
import Typewriter from "typewriter-effect";
import { NewNavbar } from "../FramerMotion/NewNavbar";
// import Example from "../FramerMotion/Example";
const Example = () => {
  return (
    
    <>
    <NewNavbar></NewNavbar>
      <div className="frontPage">
        <div className="topDiv">
          <div className="container">
            <div className="row">
              <div
                className="name1"
                style={{ fontFamily: "Montserrat-Regular" }}
              >
                Hi I'm Rajas,
              </div>
              {/* <button className="btn1">Night Mode</button> */}
            </div>
          </div>
        </div>
        <div className="container">
          <div
            className="row"
            style={{ margin: "40px 200px", display: "flex" }}
          >
            <div className="colText" style={{ padding: "3%" }}>
              <div
                className="title1"
                style={{
                  fontSize: "3.5rem",
                  fontWeight: "500",
                  fontFamily: "Montserrat-Regular",
                }}
              >
                <Typewriter
                  options={{
                    strings: [
                      "Software Developer",
                      "AI Developer",
                      "React Developer",
                    ],
                    autoStart: true,
                    loop: true,
                    cursor: "_",
                  }}
                />
              </div>

              {/* <h1 className="title" >SOFTWARE DEVELOPER</h1> */}
              <p className="lead" style={{ fontSize: "1.3rem" }}>
                AI enthusiast, full-stack developer, and innovator passionate
                about building real-world solutions and sharing knowledge
                through projects and workshops.
              </p>
            </div>
            <div className="colImage">
              <img
                src={banner_img}
                className="bannerImage"
                alt="Bootstrap Themes"
                width="400"
                height="500"
                loading="lazy"
              />
            </div>
          </div>
        </div>
        <div className="bottomDiv">
          <div className="container" id="vc1">
            <div className="row">
              <RotatingText></RotatingText>
              <Bottom_Video></Bottom_Video>

              <App12></App12>
              <Button color="default" variant="shadow">
                Projects
              </Button>
            </div>
          </div>
        </div>
        <HorizontalScrollCarousel />
        <SkillsSection></SkillsSection>
        <AboutMe></AboutMe>
      </div>

      <Footer></Footer>

      
    </> 
    
    
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-neutral-900">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      <div className="absolute inset-0 z-10 grid place-content-center">
        <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg">
          {card.title}
        </p>
      </div>
    </div>
  );
};

export default Example;

const cards = [
  {
    url: "/imgs/abstract/1.jpg",
    title: "Title 1",
    id: 1,
  },
  {
    url: "/imgs/abstract/2.jpg",
    title: "Title 2",
    id: 2,
  },
  {
    url: "/imgs/abstract/3.jpg",
    title: "Title 3",
    id: 3,
  },
  {
    url: "/imgs/abstract/4.jpg",
    title: "Title 4",
    id: 4,
  },
  {
    url: "/imgs/abstract/5.jpg",
    title: "Title 5",
    id: 5,
  },
  {
    url: "/imgs/abstract/6.jpg",
    title: "Title 6",
    id: 6,
  },
  {
    url: "/imgs/abstract/7.jpg",
    title: "Title 7",
    id: 7,
  },
];
