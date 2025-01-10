import React from "react";
import "./TempCard.css";
import { FaGithub } from "react-icons/fa";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import proj1 from "../assets/python.png";
import proj2 from "../assets/api.png";
import proj3 from "../assets/nodejs.png";
export default function TempCard() {
  return (
    <>
      <div className="proj_sec1">
        <div className="container">
          <div className="row gap-6">
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
                <div className="card_title" >
                  Vanguard
                </div>
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
                <img
                  src={proj2}
                  alt="Image Classification"
                  className="image2"
                />
              </div>
              <div className="card_body">
                <div className="card_title" >
                  TaskVerify
                </div>
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
                <img
                  src={proj3}
                  alt="Image Classification"
                  className="image2"
                />
              </div>
              <div className="card_body">
                <div className="card_title" >
                  Vanguard
                </div>
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
          </div>
        </div>
      </div>
    </>
  );
}
