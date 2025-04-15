import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faBookmark, faUserFriends, faChartLine, faCalendarAlt, faCog } from "@fortawesome/free-solid-svg-icons";
import "../App.css"; // Assuming you have a CSS file for styles
 
const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="logo">
                <img src="https://marketplace.canva.com/EAGLvNcMY10/1/0/1600w/canva-white-and-blue-illustrative-class-logo-mjY8ushmYT4.jpg"   alt="logo" />
            </div>
            <div className="menu">
            <a href="#"><FontAwesomeIcon icon={faHome} /></a>
                <a href="#"><FontAwesomeIcon icon={faBookmark} /></a>
                <a href="#"><FontAwesomeIcon icon={faUserFriends} /></a>
                <a href="#"><FontAwesomeIcon icon={faChartLine} /></a>
                <a href="#"><FontAwesomeIcon icon={faCalendarAlt} /></a>
                <a href="#"><FontAwesomeIcon icon={faCog} /></a>
            </div>
        </div>
    );
};
 
export default Sidebar;
