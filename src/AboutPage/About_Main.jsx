import Footer from "../Components/Footer";
import { NewNavbar } from "../FramerMotion/NewNavbar";
import { useEffect, useRef } from "react";
import Lenis from "lenis";
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
        <div className="container">
          <div className="flex items-center" style={{ margin: "60px 183px" }}>
            <div
              style={{ color: "black", fontSize: "2rem", fontFamily: "Montserrat-Regular" }}
            >
              {" "}
              About.
            </div>
          </div>
          <About_section></About_section>
          
        </div>
      </div>
      <Footer></Footer>
        </>
    );
}
export default About_Main;