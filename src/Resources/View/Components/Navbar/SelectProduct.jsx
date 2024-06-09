import React, { useEffect, useState } from "react";
import { getAllSales } from "../../../../Api/MainApi";
import "../../../Style/Pages/Home/DashBoard.css";

function SelectProduct({ selectedProducts, onSelectProduct }) {
  const [products, setProducts, salesData, setSalesData] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const result = await getAllSales();
      const uniqueProducts = [...new Set(result.map((item) => item.product))];
      setProducts(uniqueProducts);
    } catch (error) {
      console.error("Error fetching products", error);
    }
  };

  const handleChange = (e) => {
    onSelectProduct(e.target.value);
  };

  return (
    <div>
      <label htmlFor="product">Select Product: </label>
      <select value={selectedProducts} className="ProductInput" id="product" onChange={handleChange}>
        <option value="all">All</option>
        {products.map((product, index) => (
          <option key={index} value={product}>
            {product}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SelectProduct;
