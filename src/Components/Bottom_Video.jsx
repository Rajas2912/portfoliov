import React from "react";
import "./Bottom_video.css"; // Import your CSS for the sliding effect
import video1 from "../assets/Video/video1_carousel.mp4";
import video2 from "../assets/Video/valo1.mp4";
import video3 from "../assets/Video/valo2.mp4";
import video4 from "../assets/Video/valo3.mp4";

const Bottom_Video = () => {
  return (
    <div className="slider-container2">
      <div className="slider-row2">
        {/* Title Column */}
        {/* Videos Column */}
        <div className="slider2">
          {/* Video 1 */}
          <div className="video2">
            <video className="video-content2" loop muted autoPlay>
              <source src={video4} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          {/* Video 2 */}
          <div className="video2">
            <video className="video-content2" loop muted autoPlay>
              <source src={video2} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          {/* Video 3 */}
          <div className="video2">
            <video className="video-content2" loop muted autoPlay>
              <source src={video3} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          {/* Video 4 */}
          <div className="video2">
            <video className="video-content2" loop muted autoPlay>
              <source src={video2} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bottom_Video;
