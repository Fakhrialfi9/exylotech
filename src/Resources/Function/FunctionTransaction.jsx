// import React, { useState, useEffect } from "react";
// import SelectProduct from "../View/Pages/Home/SectionNavbarDashBoard/SelectProduct";
// import ChartDailySales from "../View/Components/Chart/ChartDailySales";
// import { getAllSales } from "../../Api/MainApi";

// const Transaction = () => {
//   const [salesData, setSalesData] = useState([]);
//   const [selectedProduct, onSelectedProduct] = useState("");

//   useEffect(() => {
//     fetchData();
//   }, [selectedProduct]);

//   const fetchData = async () => {
//     try {
//       const data = await getAllSales();
//       console.log("Fetched sales data:", data);
//       setSalesData(data);
//     } catch (error) {
//       console.error("Error fetching data", error);
//     }
//   };

//   const handleSelectProduct = (product) => {
//     onSelectedProduct(product);
//   };

//   return (
//     <div>
//       <SelectProduct selectedProduct={selectedProduct} onSelectedProduct={handleSelectProduct} />
//       <ChartDailySales selectedProduct={selectedProduct} onSelectedProduct={handleSelectProduct} />
//     </div>
//   );
// };

// export default Transaction;
