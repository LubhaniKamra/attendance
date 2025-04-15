import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const data = [
  { year: "2022-2023", value: 1200 },
  { year: "2023-2024", value: 1350 },
  { year: "2024-2025", value: 1250 },
  { year: "2025-2026", value: 1450 }
];

const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff7f7f"];

const EnrollmentSummary = () => {
  const getPercentageChange = (current, previous) => {
    if (!previous) return "N/A";
    const change = ((current - previous) / previous) * 100;
    return change.toFixed(1);
  };

  return (
    <div className="enrollment-dashboard">
      {data.map((entry, index) => {
        const previous = data[index - 1]?.value;
        const percentChange = getPercentageChange(entry.value, previous);
        const isIncrease = percentChange >= 0;

        return (
          <div
            key={entry.year}
            className="card"
          >
            <h2 className="card-title">{entry.year}</h2>
            <ResponsiveContainer width="100%" height={150}>
              <PieChart>
                <Pie
                  dataKey="value"
                  data={[{ name: entry.year, value: entry.value }]}
                  cx="50%"
                  cy="50%"
                  outerRadius={50}
                  fill={COLORS[index % COLORS.length]}
                  label
                >
                  <Cell fill={COLORS[index % COLORS.length]} />
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="card-details">
              <p className="card-value">Enrolled: {entry.value}</p>
              {index !== 0 && (
                <p
                  className={`card-change ${isIncrease ? "increase" : "decrease"}`}
                >
                  {isIncrease ? "▲" : "▼"} {Math.abs(percentChange)}%
                </p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default EnrollmentSummary;
