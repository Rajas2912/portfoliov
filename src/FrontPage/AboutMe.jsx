import banner_img from "../assets/portrait.png";
function AboutMe(){
return(
    <>
        <div className="container">
          <div
            className="row"
            style={{ margin: "40px 200px", display: "flex" }}
          >
            <div className="colText" style={{ padding: "3%" }}>
              <h1 className="title">ABOUT ME</h1>
              <p className="lead">
              Hello! I'm Rajas Bhosale 👋, a BTech student in Artificial Intelligence and Data Science at Vishwakarma Institute of Technology and a Diploma candidate in Programming at IIT Madras. Passionate about machine learning, AI, and full-stack development, I thrive on creating innovative solutions and have experience with real-world projects like ML-based image extraction and leading college workshops. Beyond coding, I enjoy exploring emerging technologies, collaborating with developers, and contributing to technical workshops and open-source projects.
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
    </>
);
}
export default AboutMe;