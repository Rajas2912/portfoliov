import Footer from "../Components/Footer";
import { NewNavbar } from "../FramerMotion/NewNavbar";
import { useEffect, useRef } from "react";
import Lenis from "lenis";
import about_img from "../assets/images/prof23.jpg"
import About_section from "./About_section";
function About_Main()
{

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time){
        lenis.raf(time)
        requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  }, []);


    return(
        <>
        <NewNavbar></NewNavbar>
        <div className="about_main" style={{height:"100vh"}}>
        <div className="container" style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
          <div className="f12" style={{ margin: "60px 183px" ,display:"flex"}}>
            <div>
            <div
              style={{ color: "black", fontSize: "2rem", fontFamily: "Montserrat-Regular" }}
            >
              About.
            </div>
            <div className="me_1"style={{display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1.2rem",paddingRight:"80px"}}>
            I’m Rajas Bhosale, skilled in AI, Machine Learning, Python, Data Structures and Algorithms (DSA), and Full-Stack Development. I have a passion for exploring new technologies and applying my skills to solve real-world problems.
            </div>
            </div>
            <div>
              <img
                              src={about_img}
                              
                              alt="Bootstrap Themes"
                              width="400"
                              height="500"
                              loading="lazy"
                            />
            </div>

          </div>
          
          
        </div>
      </div>
      <Footer></Footer>
        </>
    );
}
export default About_Main;