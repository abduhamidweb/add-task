import React from "react";
import "./style.css";

export default function Load() {
  return (
    <div className="container text-center">
      <div className="spinner-container mx-auto d-flex justify-content-center mt-5">
        <div className="loading-spinner"></div>
      </div>
    </div>
  );
}
