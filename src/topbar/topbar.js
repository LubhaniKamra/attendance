import React from "react";
import "../App.css"; // Assuming you have a CSS file for styles
const TopBar = () => {
  return (
    <div className="topbar">
      <div className="topbar">
        <h1 className="topbar-heading">Summary Report</h1>
      </div>

      <div className="user">
        <i className="fas fa-bell"></i>
        <input type="text" placeholder="Search..."></input>
        <img
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
          alt="User Avatar"
        />
      </div>
    </div>
  );
};

export default TopBar;
