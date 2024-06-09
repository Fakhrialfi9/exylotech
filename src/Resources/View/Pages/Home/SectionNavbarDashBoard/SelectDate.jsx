import React, { useState } from "react";

function SelectDate({ onDateChange }) {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
  };

  const handleSubmit = () => {
    onDateChange(startDate, endDate);
  };

  return (
    <div className="InputDateNavbarDashBoardBottom-Right">
      <div className="InputDateNavbarDashBoardBottom-Right">
        <label>Start Date:</label>
        <input className="date-filter-input" type="date" value={startDate} onChange={handleStartDateChange} placeholder="Filter by start date" />
      </div>
      <div className="InputDateNavbarDashBoardBottom-Right">
        <label>End Date:</label>
        <input className="date-filter-input" type="date" value={endDate} onChange={handleEndDateChange} placeholder="Filter by end date" />
      </div>
      <button className="DateButtonApply" onClick={handleSubmit}>
        Terapkan
      </button>
    </div>
  );
}

export default SelectDate;
