import React from "react";
import CertificateCard from "./CertificateCard"; // Adjust the path if necessary
import Mainnavbar from "../Components/Mainnavbar";

function Certificate() {

  return (
    <>
    <Mainnavbar></Mainnavbar>
    <div className="proj1" style={{backgroundColor:"#f9f9f9",padding: "10px 60px",borderRadius:"25px"}}>
    <div className="flex items-center" style={{margin:"10px 10px"}}>
      {/* <span className="px-4" style={{color:"black",fontSize:"1.5rem"}}>Certifications</span> */}
      <div style={{color:"black",fontSize:"2rem",fontFamily:"Akira"}}> Certifications</div>
    </div>
    <CertificateCard></CertificateCard>
  </div>

    </>
  );
}

export default Certificate;
