import "./Main_Banner.css";
import banner_img from "../assets/portrait.png";
import { Button } from "@nextui-org/react";
import ProjectCard from "../Components/ProjectCard";
import App12 from "../Components/App12";
import RotatingText from "../Components/RotatingText";
import SlidingCards from "../Components/SlidingCards";
import SkillsSection from "../Components/SkillsSection";
import Video_Carousel from "../Components/Video_Carousel";
import Bottom_Video from "../Components/Bottom_Video";

function Main_Banner() {
  return (
    <>
      <div className="frontPage">
        <div className="topDiv">
          <div className="container">
            <div className="row">
              <div className="name1">Hi I'm Rajas,</div>
              <button className="btn1">Night Mode</button>
            </div>
          </div>
        </div>
        <div className="container">
          <div
            className="row"
            style={{ margin: "38px 200px", display: "flex" }}
          >
            <div className="colText" style={{ padding: "3%" }}>
              <h1 className="title">SOFTWARE DEVELOPER</h1>
              <p className="lead">
                Quickly design and customize responsive mobile-first sites with
                Bootstrap, the world’s most popular front-end open source
                toolkit, featuring Sass variables and mixins, responsive grid
                system, extensive prebuilt components, and powerful JavaScript
                plugins.
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
        
              
              <div className="bd2">Machine Learning</div>
              <div className="bd2">Artificial Intelligence</div>
              <div className="bd2">ReactJS</div>
              <div className="bd2">DSA</div>
              <Button color="default" variant="shadow">
                Projects
              </Button>
              
            </div>
          </div>
        </div>
        <div className="proj1">
          <div className="flex items-center">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="px-4" style={{color:"black",fontSize:"1.5rem",margin:"10px"}}>My Recent Projects</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>
          <ProjectCard></ProjectCard>
        </div>
        {/* <div className="container">
          <div className="row">
          <SlidingCards></SlidingCards>
          </div>
        </div> */}
        
        <SkillsSection></SkillsSection>
        <Video_Carousel></Video_Carousel>
      </div>
      
     
    </>
  );
}
export default Main_Banner;
