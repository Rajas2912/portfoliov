import React from "react";
import "./Front_page_Card.css";
import { FaGithub } from "react-icons/fa";
import SmoothScroll from "./SmoothScroll";
import Main12 from "./Main12";


function FrontPage() {
  return (
    <>
    <SmoothScroll>
    <div>
        <Main12></Main12>

        {/* <section className="flex flex-col gap-8">
          <div className="card2" style={{width:"100%"}}>
            <div className="imageWrapper">
              <img
                src="https://www.google.com/imgres?q=python%20image&imgurl=https%3A%2F%2Fi0.wp.com%2Fjunilearning.com%2Fwp-content%2Fuploads%2F2020%2F06%2Fpython-programming-language.webp%3Ffit%3D1920%252C1920%26ssl%3D1&imgrefurl=https%3A%2F%2Fjunilearning.com%2Fblog%2Fguide%2Fwhat-is-python-101-for-students%2F&docid=qRxpxiqPRXCuJM&tbnid=fPDSxZuCSjd-gM&vet=12ahUKEwjJ3peMi-6KAxUMnK8BHV3zNS4QM3oECBwQAA..i&w=1920&h=1920&hcb=2&ved=2ahUKEwjJ3peMi-6KAxUMnK8BHV3zNS4QM3oECBwQAA"
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
          <div className="card2" style={{width:"100%"}}>
            <div className="imageWrapper">
              <img
                src="https://www.google.com/imgres?q=python%20image&imgurl=https%3A%2F%2Fi0.wp.com%2Fjunilearning.com%2Fwp-content%2Fuploads%2F2020%2F06%2Fpython-programming-language.webp%3Ffit%3D1920%252C1920%26ssl%3D1&imgrefurl=https%3A%2F%2Fjunilearning.com%2Fblog%2Fguide%2Fwhat-is-python-101-for-students%2F&docid=qRxpxiqPRXCuJM&tbnid=fPDSxZuCSjd-gM&vet=12ahUKEwjJ3peMi-6KAxUMnK8BHV3zNS4QM3oECBwQAA..i&w=1920&h=1920&hcb=2&ved=2ahUKEwjJ3peMi-6KAxUMnK8BHV3zNS4QM3oECBwQAA"
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
          <div className="card2" style={{width:"100%"}}>
            <div className="imageWrapper">
              <img
                src="https://www.google.com/imgres?q=python%20image&imgurl=https%3A%2F%2Fi0.wp.com%2Fjunilearning.com%2Fwp-content%2Fuploads%2F2020%2F06%2Fpython-programming-language.webp%3Ffit%3D1920%252C1920%26ssl%3D1&imgrefurl=https%3A%2F%2Fjunilearning.com%2Fblog%2Fguide%2Fwhat-is-python-101-for-students%2F&docid=qRxpxiqPRXCuJM&tbnid=fPDSxZuCSjd-gM&vet=12ahUKEwjJ3peMi-6KAxUMnK8BHV3zNS4QM3oECBwQAA..i&w=1920&h=1920&hcb=2&ved=2ahUKEwjJ3peMi-6KAxUMnK8BHV3zNS4QM3oECBwQAA"
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
          <div className="card2" style={{width:"100%"}}>
            <div className="imageWrapper">
              <img
                src="https://www.google.com/imgres?q=python%20image&imgurl=https%3A%2F%2Fi0.wp.com%2Fjunilearning.com%2Fwp-content%2Fuploads%2F2020%2F06%2Fpython-programming-language.webp%3Ffit%3D1920%252C1920%26ssl%3D1&imgrefurl=https%3A%2F%2Fjunilearning.com%2Fblog%2Fguide%2Fwhat-is-python-101-for-students%2F&docid=qRxpxiqPRXCuJM&tbnid=fPDSxZuCSjd-gM&vet=12ahUKEwjJ3peMi-6KAxUMnK8BHV3zNS4QM3oECBwQAA..i&w=1920&h=1920&hcb=2&ved=2ahUKEwjJ3peMi-6KAxUMnK8BHV3zNS4QM3oECBwQAA"
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
          <div className="card2" style={{width:"100%"}}>
            <div className="imageWrapper">
              <img
                src="https://www.google.com/imgres?q=python%20image&imgurl=https%3A%2F%2Fi0.wp.com%2Fjunilearning.com%2Fwp-content%2Fuploads%2F2020%2F06%2Fpython-programming-language.webp%3Ffit%3D1920%252C1920%26ssl%3D1&imgrefurl=https%3A%2F%2Fjunilearning.com%2Fblog%2Fguide%2Fwhat-is-python-101-for-students%2F&docid=qRxpxiqPRXCuJM&tbnid=fPDSxZuCSjd-gM&vet=12ahUKEwjJ3peMi-6KAxUMnK8BHV3zNS4QM3oECBwQAA..i&w=1920&h=1920&hcb=2&ved=2ahUKEwjJ3peMi-6KAxUMnK8BHV3zNS4QM3oECBwQAA"
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
          <div className="card2" style={{width:"100%"}}>
            <div className="imageWrapper">
              <img
                src="https://www.google.com/imgres?q=python%20image&imgurl=https%3A%2F%2Fi0.wp.com%2Fjunilearning.com%2Fwp-content%2Fuploads%2F2020%2F06%2Fpython-programming-language.webp%3Ffit%3D1920%252C1920%26ssl%3D1&imgrefurl=https%3A%2F%2Fjunilearning.com%2Fblog%2Fguide%2Fwhat-is-python-101-for-students%2F&docid=qRxpxiqPRXCuJM&tbnid=fPDSxZuCSjd-gM&vet=12ahUKEwjJ3peMi-6KAxUMnK8BHV3zNS4QM3oECBwQAA..i&w=1920&h=1920&hcb=2&ved=2ahUKEwjJ3peMi-6KAxUMnK8BHV3zNS4QM3oECBwQAA"
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

        </section> */}
        <section>
          
        </section>
      </div>
    </SmoothScroll>

    </>
  );
}
export default FrontPage;
