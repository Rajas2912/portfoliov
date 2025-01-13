import PdfViewer from "../Components/PdfViewer";
import Example from "../FramerMotion/Example";
import SmoothscrollTemp from "../FramerMotion/SmoothscrollTemp";
import ResumePage from "./ResumePage";
import { pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url,
  ).toString();

function ResumeMain(){
    return(
        <>
        
            <div>
            <Example></Example>
            </div>
        
        
        
        </>
    );
}
export default ResumeMain;