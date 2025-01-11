import React from "react";
import "./Card_Carousel.css"; // Import your CSS for the sliding effect
import Card_Main from "../Temp_components/Card_main";
import { FaGithub } from "react-icons/fa";
import proj1 from "../assets/python.png";
import proj2 from "../assets/api.png";
import proj3 from "../assets/nodejs.png";
const Card_Carousel = () => {
  return (
    <div className="slider-container2">
      <div className="slider-row2">
        {/* Title Column */}
        {/* Videos Column */}
        <div className="slider2">
            <div className="card_carousel1">
            <Card_Main          
            image={proj1}
        title="Project Title"
        description="This is a description of the project. It highlights key features and technologies used."
        githubLink="https://github.com/your-repository">
            </Card_Main>
            </div>

            <div className="card_carousel1">
            <Card_Main          
            image={proj2}
        title="Project Title"
        description="This is a description of the project. It highlights key features and technologies used."
        githubLink="https://github.com/your-repository">
            </Card_Main>
            </div>
            <div className="card_carousel1">
            <Card_Main          
            image={proj3}
        title="Project Title"
        description="This is a description of the project. It highlights key features and technologies used."
        githubLink="https://github.com/your-repository">
            </Card_Main>
            </div>
            <div className="card_carousel1">
            <Card_Main          
            image={proj2}
        title="Project Title"
        description="This is a description of the project. It highlights key features and technologies used."
        githubLink="https://github.com/your-repository">
            </Card_Main>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Card_Carousel;
