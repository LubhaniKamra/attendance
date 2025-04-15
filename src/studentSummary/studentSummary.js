import React from "react";
import "../App.css"; // or another CSS file

const StudentSummary = () => {
  return (
    <div className="summary-container">
      <div className="summary-header">
        <h2>📊 Student Summary</h2>
        <span className="year">2025–2026</span>
      </div>

      <div className="summary-grid">
        <div className="summary-box joined">
          <h3>12</h3>
          <p>Joined</p>
        </div>
        <div className="summary-box left">
          <h3>3</h3>
          <p>Left</p>
        </div>
        <div className="summary-box enrolled">
          <h3>105</h3>
          <p>Currently Enrolled</p>
        </div>
        <div className="summary-box alumni">
          <h3>40</h3>
          <p>Alumni</p>
        </div>
      </div>

      <p className="note">* This summary reflects current academic year data.</p>
    </div>
  );
};

export default StudentSummary;
