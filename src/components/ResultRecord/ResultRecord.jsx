import React from "react";
import "./ResultRecord.css"; // Assuming you have a CSS file for styling

function ResultRecord({ data, onClick }) {
  const { teams, mentors } = data;

  return (
    <div id="result-record-container" onClick={onClick}>
      <div className="mentor-info">
        <p>{mentors.nombre}</p>
        <p>{mentors.empresa}</p>
      </div>
      <div className="group-info">
        <p>{teams.nombre}</p>
      </div>
    </div>
  );
}

export default ResultRecord;
