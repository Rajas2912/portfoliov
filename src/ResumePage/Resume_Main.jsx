import PdfViewer from "../Components/PdfViewer";
import Example from "../FramerMotion/Example";
import SmoothscrollTemp from "../FramerMotion/SmoothscrollTemp";
import ResumePage from "./ResumePage";
import { pdfjs } from "react-pdf";
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
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url,
  ).toString();

function ResumeMain(){
    return(
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
        </div>
            <Example></Example>
        <Footer></Footer>


      

      
            




      
            
        
        
        
        </>
    );
}
export default ResumeMain;