import React from "react";
import "./Video_Carousel.css"; // Import your CSS for the sliding effect
import video1 from "../assets/Video/video1_carousel.mp4"
import video2 from "../assets/Video/valo1.mp4"
import video3 from "../assets/Video/valo2.mp4"
import video4 from "../assets/Video/valo3.mp4"
const Video_Carousel = () => {
  return (
    <div className="slider-container">
      <div className="slider">
        {/* Video 1 */}
        <div className="video">
          <video className="video-content" loop muted autoPlay>
            <source src={video4} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        {/* Video 2 */}
        <div className="video">
          <video className="video-content" loop muted autoPlay>
            <source src={video2} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        {/* Video 3 */}
        <div className="video">
          <video className="video-content" loop muted autoPlay>
            <source src={video3} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        {/* Video 4 */}
        <div className="video">
          <video className="video-content" loop muted autoPlay>
            <source src={video2} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default Video_Carousel;
