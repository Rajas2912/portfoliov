import Footer from "../Components/Footer";
import Mainnavbar from "../Components/Mainnavbar";
import { NewNavbar } from "../FramerMotion/NewNavbar";
import Proj_sec1 from "./Proj_sec1";
import { useEffect, useRef } from "react";
import Lenis from "lenis";
function Project_page() {

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time){
        lenis.raf(time)
        requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  }, []);

  return (
    <>
      <NewNavbar></NewNavbar>
      <div className="proj_main1" style={{height:"100vh"}}>
        <div className="container">
          <div className="flex items-center" style={{ margin: "60px 183px" }}>
            {/* <span className="px-4" style={{color:"black",fontSize:"1.5rem"}}>Certifications</span> */}
            <div
              style={{ color: "black", fontSize: "2rem", fontFamily: "Montserrat-Regular" }}
            >
              {" "}
              PROJECTS
            </div>
          </div>
          <Proj_sec1></Proj_sec1>
          
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
export default Project_page;
