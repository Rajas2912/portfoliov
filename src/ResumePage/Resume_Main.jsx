import { pdfjs } from "react-pdf";
import Footer from "../Components/Footer";
import { NewNavbar } from "../FramerMotion/NewNavbar";
import resume1 from "../assets/Resources/resume.pdf";
import { useEffect, useRef } from "react";
import Lenis from "lenis";
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

function ResumeMain() {


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
      <div className="container" style={{display:"flex",width:"70%",alignItems:"center",justifyContent:"center"}}>
      <div
        className="res121"
        style={{
          flex: 1,
          display: "flex",
          width:"100%",
          height: "100vh",

          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#f5f5f5",
        }}
      >
        <iframe
          src={resume1}
          title="Resume"
          style={{
            width: "95%",
            height: "95%",
            border: "1px solid #ccc",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          }}
        ></iframe>
      </div>
      </div>

      <Footer></Footer>
    </>
  );
}
export default ResumeMain;
