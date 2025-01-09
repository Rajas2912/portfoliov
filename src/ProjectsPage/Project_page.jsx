import Mainnavbar from "../Components/Mainnavbar";
import Proj_sec1 from "./Proj_sec1";

function Project_page() {
  return (
    <>
      <Mainnavbar></Mainnavbar>
      <div className="proj_main1">
        <div className="container">
          <div className="flex items-center" style={{ margin: "60px 183px" }}>
            {/* <span className="px-4" style={{color:"black",fontSize:"1.5rem"}}>Certifications</span> */}
            <div
              style={{ color: "black", fontSize: "2rem", fontFamily: "Akira" }}
            >
              {" "}
              Projects
            </div>
          </div>
          <Proj_sec1></Proj_sec1>
        </div>
      </div>
    </>
  );
}
export default Project_page;
