import res from "../assets/Resources/resume.pdf"
import "./PdfViewer.css"
function PdfViewer()
{
    return(
        <>
         <iframe  id="mypdf" src={res}></iframe>
        </>
    );
}
export default PdfViewer;