import React, { useEffect, useState } from "react";
import { ResponsiveContainer, Brush, Area, ComposedChart, Line, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import { getAllSales } from "../../../../Api/MainApi";

import "../../../Style/Components/Chart/Chart.css";
import "../../../Style/Pages/Home/DashBoard.css";

function ComparisonSales({ selectedProduct }) {
  const [salesData, setSalesData] = useState([]);

  useEffect(() => {
    fetchData();
  }, [selectedProduct]);

  const fetchData = async () => {
    try {
      const data = await getAllSales();
      if (selectedProduct === "all") {
        setSalesData(data);
        return;
      }

      const filteredData = selectedProduct ? data.filter((item) => item.product === selectedProduct) : data;

      const sortedData = filteredData.sort((a, b) => a.sales - b.sales);

      setSalesData(sortedData);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

  return (
    <div className="ChartContainer">
      <h5>Pembandingan Penjualan</h5>
      <ResponsiveContainer width="100%" height={400}>
        <ComposedChart
          data={salesData}
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
