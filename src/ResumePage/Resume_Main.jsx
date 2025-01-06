import ResumePage from "./ResumePage";
import { pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url,
  ).toString();

function ResumeMain(){
    return(
        <>
        <ResumePage></ResumePage>
        </>
    );
}
export default ResumeMain;