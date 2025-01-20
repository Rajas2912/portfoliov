import React from "react";
import CertificateCard from "./CertificateCard"; // Adjust the path if necessary
import Mainnavbar from "../Components/Mainnavbar";
import { NewNavbar } from "../FramerMotion/NewNavbar";
import { useEffect, useRef } from "react";
import Lenis from "lenis";
function Certificate() {
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
    <div className="proj1" style={{backgroundColor:"#f9f9f9",padding: "10px 60px",borderRadius:"25px"}}>
      <div className="container">
      <div className="flex items-center" style={{margin:"30px 10px"}}>
      {/* <span className="px-4" style={{color:"black",fontSize:"1.5rem"}}>Certifications</span> */}
      <div style={{color:"black",fontSize:"2rem",fontFamily:"Montserrat-Regular"}}> Certifications.</div>
    </div>
    <CertificateCard></CertificateCard>
      </div>

  </div>

    </>
  );
}

export default Certificate;
