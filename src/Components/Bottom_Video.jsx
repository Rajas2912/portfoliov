import React from "react";
import "./Bottom_video.css"; // Import your CSS for the sliding effect


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
              <source src="https://videos.pexels.com/video-files/2278095/2278095-hd_1920_1080_30fps.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          {/* Video 2 */}
          <div className="video2">
            <video className="video-content2" loop muted autoPlay>
              <source src="https://videos.pexels.com/video-files/853919/853919-hd_1920_1080_25fps.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          {/* Video 3 */}
          <div className="video2">
            <video className="video-content2" loop muted autoPlay>
              <source src="https://videos.pexels.com/video-files/2278095/2278095-hd_1920_1080_30fps.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          {/* Video 4 */}
          <div className="video2">
            <video className="video-content2" loop muted autoPlay>
              <source src="https://videos.pexels.com/video-files/853919/853919-hd_1920_1080_25fps.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bottom_Video;
