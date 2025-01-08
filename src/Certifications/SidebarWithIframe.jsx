import React, { useState } from "react";
import patent1 from "../assets/Resources/PatentPublishReport.pdf";
import resume from "../assets/Resources/resume.pdf";
function SidebarWithIframe() {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const certificates = [
    {
      name: "Patent: Vanguard",
      pdfUrl: patent1,
    },
    {
      name: "Machine Learning Certification",
      pdfUrl: resume,
    },
    {
      name: "AI Fundamentals Certification",
      pdfUrl: resume,
    },
    // Add more certificates as needed
  ];

  return (
    <>
      <div className="certificate_page">
        <div className="container">
          
            <div style={{ display: "flex", height: "100vh" }}>
              {/* Sidebar */}
              <div
                style={{
                  width: "250px",
                  backgroundColor: "rgb(0 0 0)",
                  color: "#ecf0f1",
                  padding: "20px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "15px",
                  boxShadow: "2px 0 5px rgba(0, 0, 0, 0.2)",
                }}
              >
                <h3 style={{ textAlign: "center" }}>Certificates</h3>
                {certificates.map((cert, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedCertificate(cert)}
                    style={{
                      padding: "10px 15px",
                      backgroundColor:
                        selectedCertificate?.name === cert.name
                          ? "rgb(51 51 51)"
                          : "rgb(85 85 85)",
                      color: "#ecf0f1",
                      border: "none",
                      borderRadius: "5px",
                      cursor: "pointer",
                      textAlign: "left",
                    }}
                  >
                    {cert.name}
                  </button>
                ))}
              </div>

              {/* Iframe Display */}
              <div
                style={{
                  flex: 1,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#f5f5f5",
                }}
              >
                {selectedCertificate ? (
                  <iframe
                    src={selectedCertificate.pdfUrl}
                    title={selectedCertificate.name}
                    style={{
                      width: "95%",
                      height: "95%",
                      border: "1px solid #ccc",
                      borderRadius: "10px",
                      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                    }}
                  ></iframe>
                ) : (
                  <p style={{ color: "#7f8c8d", fontSize: "18px" }}>
                    Select a certificate to view.
                  </p>
                )}
              </div>
            
          </div>
        </div>
      </div>
    </>
  );
}

export default SidebarWithIframe;
