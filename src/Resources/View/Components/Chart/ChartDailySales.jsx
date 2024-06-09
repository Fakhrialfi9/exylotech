import React, { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, Brush, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import salesData from "../../../../Storage/Database/db.json";

import "../../../Style/Components/Chart/Chart.css";
import "../../../Style/Pages/Home/DashBoard.css";

function ChartDailySales() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(salesData.sales); // Mengatur data dari file JSON ke state
  }, []);

  return (
    <div className="ChartContainer">
      <h5>Grafik Penjualan Harian</h5>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="sales" stackId="a" fill="#8884d8" />
          <Bar dataKey="revenue" stackId="a" fill="#82ca9d" />
          <Brush />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ChartDailySales;
