import React from "react";
import "./RotatingText.css";
import { Button } from "@nextui-org/react";
import mailimg from "../assets/mail.png";
export default function RotatingText() {
  return (
    <div className="main">
      <img
        src={mailimg} // Replace with your icon/image URL
        alt="Mail Icon"
        className="center-icon"
        onClick={() => alert("Icon Clicked!")} // Add your button functionality here
      />
      <svg id="rotatingText" viewBox="0 0 200 200" width="200" height="200">
        <defs>
          <path
            id="circle"
            d="M 100, 100
               m -75, 0
               a 75, 75 0 1, 0 150, 0
               a 75, 75 0 1, 0 -150, 0"
          />
        </defs>
        <text width="400">
          <textPath
            alignmentBaseline="top"
            xlinkHref="#circle"
            className="text"
          >
           • CONTACT ME • GET IN TOUCH •CONTACT • GET IN TOUCH •
          </textPath>
        </text>
      </svg>
    </div>
  );
}
