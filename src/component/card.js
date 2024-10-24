import React from "react";
import parse from "html-react-parser";
import { marked } from "marked";

export default function Card({ title, post, url, score }) {
  const htmlContent = marked(post || "", { sanitize: true });

  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "16px",
        marginTop: "10px",
        backgroundColor: "#f9f9f9",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        width: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h2 style={{ fontSize: "18px", marginBottom: "8px", color: "#333" }}>
        {title}
      </h2>

      <div
        style={{
          fontSize: "14px",
          color: "#555",
          marginBottom: "12px",
          maxHeight: "150px",
          overflow: "hidden",
        }}
        // dangerouslySetInnerHTML={{ __html: post }}
      >
        {parse(htmlContent)}{" "}
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "auto",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#007bff",
              textDecoration: "none",
              fontSize: "14px",
            }}
          >
            Link to Post
          </a>

          <p
            style={{
              fontSize: "14px",
              fontWeight: "bold",
              margin: 0,
              color: "#333",
            }}
          >
            Score: {score}
          </p>
        </div>
      </div>
    </div>
  );
}
