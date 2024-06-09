import React, { useState } from "react";

function SelectDate() {
  return (
    <div className="InputDateNavbarDashBoardBottom-Right">
      <div className="InputDateNavbarDashBoardBottom-Right">
        <label>Start Date:</label>
        <input className="date-filter-input" type="date" placeholder="Filter by start date" />
      </div>
      <div className="InputDateNavbarDashBoardBottom-Right">
        <label>End Date:</label>
        <input className="date-filter-input" type="date" placeholder="Filter by end date" />
      </div>
      <button className="DateButtonApply">Terapkan</button>
    </div>
  );
}

export default SelectDate;
