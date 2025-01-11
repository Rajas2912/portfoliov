import React from "react";
import mlimg from "../assets/ml.png";
import pythonimg from "../assets/python.png";
import githubimg from "../assets/github.png";
import jsimg from "../assets/js2.png"
import nodejsimg from "../assets/nodejs.png"
import reactimage from "../assets/react.png"
import reactimg from "../assets/reactjs.png";
import mongodbimg from "../assets/mongodb.png";
import postmanimg from "../assets/postman.png";
import "./SkillsSection.css"; // Import your CSS file
import { Image } from "@nextui-org/react";
const SkillsSection = () => {
  return (
    <div className="skills-container">
      <h2 className="skills-title" style={{fontFamily:"Montserrat-Regular"}}>SKILLS</h2>
      <div className="images-container">
        {/* Row 1 - 4 images */}
        <div className="image-row">
          <div className="image-wrapper">
            <Image
              src={jsimg}
              alt="Skill 1"
              className="circular-image"
              width={100}
              height={100}
            />
          </div>
          <div className="image-wrapper">
            <Image
              src={pythonimg}
              alt="Skill 2"
              className="circular-image"
              width={100}
              height={100}
            />
          </div>
          <div className="image-wrapper">
            <Image
              src={reactimage}
              alt="Skill 3"
              className="circular-image"
              width={100}
              height={100}
            />
          </div>
          <div className="image-wrapper">
            <Image
              src={postmanimg}
              alt="Skill 4"
              className="circular-image"
              width={100}
              height={100}
            />
          </div>
        </div>
        {/* Row 2 - 3 images */}
        <div className="image-row">
          <div className="image-wrapper">
            <Image
              src={mongodbimg}
              alt="Skill 5"
              className="circular-image"
              width={100}
              height={100}
            />
          </div>
          <div className="image-wrapper">
            <Image
              src={nodejsimg}
              alt="Skill 6"
              className="circular-image"
              width={100}
              height={100}
            />
          </div>
          <div className="image-wrapper">
            <Image
              src={githubimg}
              alt="Skill 7"
              className="circular-image"
              width={100}
              height={100}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
