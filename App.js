import React from 'react';
import Sidebar from './sidebar/sidebar';

import AttendanceDashboard from './Attendance/AttendanceDashboard';
import TopBar from './topbar/topbar';
import './App.css'; // Assuming you have a CSS file for styles
import StudentSummary from './studentSummary/studentSummary';


function App() {
  return (
    <div className="App">
      <TopBar />
      <Sidebar />
      <AttendanceDashboard /> 
      <StudentSummary />
      
    </div>
  );
}

export default App;
