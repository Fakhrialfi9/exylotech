import React, { useState, useEffect } from "react";
import { getSalesByDateRange } from "../../../../../Api/MainApi";
import ChartDailySales from "../View/Components/Chart/ChartDailySales";
import SelectDate from "../View/Pages/Home/SectionNavbarDashBoard/SelectDate";

function FunctionSelectDate() {
  const [dateRange, setDateRange] = useState({ startDate: "", endDate: "" });

  const handleDateChange = (startDate, endDate) => {
    setDateRange({ startDate, endDate });
  };

  return (
    <div>
      <SelectDate onDateChange={handleDateChange} />
      <ChartDailySales dateRange={dateRange} />
    </div>
  );
}

export default FunctionSelectDate;
