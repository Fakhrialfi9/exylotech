import React, { useEffect, useState } from "react";
import { ResponsiveContainer, Brush, Area, ComposedChart, Line, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import salesData from "../../../../Storage/Database/db.json";

import "../../../Style/Components/Chart/Chart.css";
import "../../../Style/Pages/Home/DashBoard.css";

function ComparisonSales({ selectedProduct }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(salesData.sales); // Mengatur data dari file JSON ke state
  }, []);

  return (
    <div className="ChartContainer">
      <h5>Pembandingan Penjualan</h5>
      <ResponsiveContainer width="100%" height={400}>
        <ComposedChart
          data={data}
          // syncId="anyId"
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="product" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area type="monotone" dataKey="sales" fill="#8884d8" stroke="#8884d8" />
          <Bar dataKey="sales" stackId="a" fill="#0c64a2" />
          <Line type="monotone" dataKey="revenue" stroke="#82ca9d" />
          <Brush />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ComparisonSales;
