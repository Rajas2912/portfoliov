import React, { useState } from 'react'; 
import { Document, Page } from 'react-pdf'; 
import pdf from '../assets/Resources/resume.pdf'; // Import CSS for styling

function ResumePage() {
  const [numPages, setNumPages] = useState();
  const [pageNumber,setPageNumber] = useState(1);
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div className="pdf-container">
      <Document 
        file={pdf} 
        onLoadSuccess={onDocumentLoadSuccess} 
        onLoadError={(error) => console.error('Error while loading document:', error)}
      >
        <Page pageNumber={pageNumber}  renderTextLayer = {false} renderAnnotationLayer = {false} />
      </Document>
    </div>
  );
}

export default ResumePage;
