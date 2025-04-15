import React, { useState } from "react";
import "../App.css"; // Assuming you have a CSS file for styles

const AttendanceDashboard = () => {
  const [summary, setSummary] = useState({
    present: 0,
    absent: 0,
    halfDay: 0,
    notMarked: 11,
    holidays: 4,
    others: 0,
    workingDays: 11,
  });

  const [calendarDays, setCalendarDays] = useState([
    { day: 31, type: "empty" },
    { day: 1, type: "notMarked" },
    { day: 2, type: "notMarked" },
    { day: 3, type: "notMarked" },
    { day: 4, type: "notMarked" },
    { day: 5, type: "holiday" },
    { day: 6, type: "holiday" },
    { day: 7, type: "notMarked" },
    { day: 8, type: "notMarked" },
    { day: 9, type: "notMarked" },
    { day: 10, type: "notMarked" },
    { day: 11, type: "notMarked" },
    { day: 12, type: "holiday" },
    { day: 13, type: "holiday" },
    { day: 14, type: "notMarked" },
    { day: 15, type: "notMarked" },
  ]);

  const handleDayClick = (index) => {
    const updatedDays = [...calendarDays];
    const dayType = updatedDays[index].type;

    // Update the status for the clicked day
    if (dayType === "notMarked") {
      updatedDays[index].type = "present"; // Set to present initially
      setSummary((prevSummary) => ({
        ...prevSummary,
        present: prevSummary.present + 1,
        notMarked: prevSummary.notMarked - 1,
      }));
    } else if (dayType === "present") {
      updatedDays[index].type = "absent"; // Change to absent
      setSummary((prevSummary) => ({
        ...prevSummary,
        absent: prevSummary.absent + 1,
        present: prevSummary.present - 1,
      }));
    } else if (dayType === "absent") {
      updatedDays[index].type = "halfDay"; // Change to halfDay
      setSummary((prevSummary) => ({
        ...prevSummary,
        halfDay: prevSummary.halfDay + 1,
        absent: prevSummary.absent - 1,
      }));
    } else if (dayType === "halfDay") {
      updatedDays[index].type = "notMarked"; // Reset to notMarked
      setSummary((prevSummary) => ({
        ...prevSummary,
        halfDay: prevSummary.halfDay - 1,
        notMarked: prevSummary.notMarked + 1,
      }));
    }

    setCalendarDays(updatedDays);
  };

  const getStatusColor = (type) => {
    switch (type) {
      case "present":
        return "green";
      case "absent":
        return "red";
      case "halfDay":
        return "orange";
      case "notMarked":
        return "blue";
      case "holiday":
        return "gray";
      default:
        return "black";
    }
  };

  return (
    <div className="attendance-container">
      <div className="header">
        <h2>📅 My Attendance</h2>
        <span className="year">2025–2026</span>
      </div>

      <div className="stats">
        <p>Total working days: <strong>{summary.workingDays}</strong></p>
        <p>Holidays: <strong>{summary.holidays}</strong></p>

        <div className="status-boxes">
          {Object.entries(summary).map(([key, value]) =>
            key !== 'workingDays' && key !== 'holidays' ? (
              <div key={key} className={`status ${key}`}>
                {value} {key.charAt(0).toUpperCase() + key.slice(1)}
              </div>
            ) : null
          )}
        </div>
      </div>

      <div className="calendar">
        <h3>APRIL 2025</h3>
        <div className="calendar-grid">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
            <div className="day-header" key={d}>{d}</div>
          ))}
          {calendarDays.map(({ day, type }, index) => (
            <div
              key={index}
              className={`calendar-day ${type}`}
              onClick={() => handleDayClick(index)}
            >
              <span style={{ color: getStatusColor(type) }}>{day}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="leave-balance">
        <h3>Leave Balance</h3>
        <div className="leaves">
          <div className="leave casual">Casual Leave: {summary.casual}</div>
          <div className="leave sick">Sick Leave: {summary.sick}</div>
        </div>
      </div>
    </div>
  );
};

export default AttendanceDashboard;

