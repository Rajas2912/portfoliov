import React from "react";
import { FaGithub } from "react-icons/fa";

const Card_Main = ({ image, title, description, githubLink }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#f9f9f9",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        padding: "20px",
        margin: "20px 0",
        maxWidth: "800px",
      }}
    >
      {/* Content Section */}
      <div style={{ flex: 1, marginRight: "20px" }}>
        <h2 style={{ fontSize: "1.5rem", marginBottom: "10px", color: "#333" }}>
          {title}
        </h2>
        <p style={{ fontSize: "1rem", marginBottom: "15px", color: "#555" }}>
          {description}
        </p>
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            textDecoration: "none",
            color: "#007bff",
            fontWeight: "bold",
          }}
        >
          <FaGithub style={{ marginRight: "8px" }} /> GitHub Repository
        </a>
      </div>

      {/* Image Section */}
      <div style={{ flexShrink: 0 }}>
        <img
          src={image}
          alt="Card Image"
          style={{
            width: "200px",
            height: "200px",
            borderRadius: "10px",
            objectFit: "cover",
          }}
        />
      </div>
    </div>
  );
};

export default Card_Main;
