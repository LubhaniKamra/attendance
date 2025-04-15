import React from "react";
import AttendanceDashboard from "./AttendanceDashboard";
import StudentSummary from "./StudentSummary";
import "./App.css"; // Assuming you have a CSS file for styles

const DashboardWrapper = () => {
  return (
    <div className="dashboard-wrapper">
      <AttendanceDashboard />
      <StudentSummary />
    </div>
  );
};

export default DashboardWrapper;
