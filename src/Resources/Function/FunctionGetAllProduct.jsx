import { useState, useEffect } from "react";
import { getAllSales } from "../../Api/MainApi";

export const GetAllProduct = () => {
  const [salesData, setSalesData] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedProduct, onSelectProduct] = useState("");

  useEffect(() => {
    fetchComparisonSales();
  }, [selectedProduct]);

  const fetchComparisonSales = async () => {
    try {
      const data = await getAllSales();
      console.log("Fetched sales data:", data);

      const filteredData = selectedProduct ? data.filter((item) => item.product === selectedProduct) : data;

      const sortedData = filteredData.sort((a, b) => a.sales - b.sales);

      setSalesData(sortedData);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

  useEffect(() => {
    fetchDailySales();
  }, [selectedProduct]);

  const fetchDailySales = async () => {
    try {
      const data = await getAllSales();
      console.log("Fetched sales data:", data);

      const filteredData = selectedProduct ? data.filter((item) => item.product === selectedProduct) : data;
      setSalesData(filteredData);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

  const handleSelectProduct = (product) => {
    onSelectProduct(product);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await getAllSales();
      setSalesData(data);
    } catch (error) {
      console.error("Error fetching sales data", error);
    }
  };

  return { salesData, products };
};
