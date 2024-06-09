import React from "react";
import { GetAllProduct } from "../../../Function/FunctionGetAllProduct";
import { FilterProduct } from "../../../Function/FunctionFilterProduct";
import "../../../Style/Pages/Home/DashBoard.css";

const TableComponent = () => {
  const { salesData } = GetAllProduct();
  const { filteredData, filter, setFilter } = FilterProduct(salesData);

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  // Calculate total revenue
  const totalRevenue = salesData.reduce((total, item) => total + item.revenue, 0);

  // Find the product with the highest revenue
  const productWithHighestRevenue = salesData.sort((a, b) => b.revenue - a.revenue)[0]?.product || "N/A";
  return (
    <div className="TableContainer">
      <div className="TableContent">
        <h5 className="TableContent-Left">Table Penjualan</h5>
        <div className="TableContent-Right">
          <label htmlFor="product">Filter Table: </label>
          <select className="FilterTable" id="FilterTable" value={filter} onChange={handleFilterChange}>
            <option value="">Pilih Filter</option>
            <option value="Descending">Descending Sales</option>
            <option value="Ascending">Ascending Sales</option>
            <option value="AtoZ">A to Z</option>
            <option value="ZtoA">Z to A</option>
          </select>
        </div>
      </div>
      {filteredData && filteredData.length > 0 ? (
        <>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Product</th>
                <th>Date</th>
                <th>Sales</th>
                <th>Revenue</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((sale) => (
                <tr key={sale.id}>
                  <td>{sale.id}</td>
                  <td>{sale.product}</td>
                  <td>{sale.date}</td>
                  <td>{sale.sales}</td>
                  <td>${sale.revenue}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      ) : (
        <p>Loading...</p>
      )}
      <div className="TableContent-RightBottom">
        <h5>
          Product Terlaku <b>{productWithHighestRevenue}</b>
        </h5>
        <h5>
          Total Penjualan <b>${totalRevenue.toFixed(2)}</b>
        </h5>
      </div>
    </div>
  );
};

export default TableComponent;
