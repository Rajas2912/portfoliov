import React from "react";
import "./TempCard.css";
import { FaGithub } from "react-icons/fa";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import res21 from "../assets/python.png";
export default function TempCard() {
  return (
    <>
      <div className="proj_sec1">
        <div className="container">
          <div className="row gap-6">
            <div className="card">
              <div className="imageWrapper">
                <img
                  src={res21}
                  alt="Image Classification"
                  className="image2"
                />
              </div>
              <div className="card_body">
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
            <div className="card">
              <div className="imageWrapper">
                <img
                  src={res21}
                  alt="Image Classification"
                  className="image2"
                />
              </div>
              <div className="card_body">
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
            <div className="card">
              <div className="imageWrapper">
                <img
                  src={res21}
                  alt="Image Classification"
                  className="image2"
                />
              </div>
              <div className="card_body">
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
