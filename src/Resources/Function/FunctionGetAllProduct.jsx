import { useState, useEffect } from "react";
import { getAllSales } from "../../Api/MainApi";

export const GetAllProduct = () => {
  const [salesData, setSalesData] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState("");

  useEffect(() => {
    const fetchSalesData = async () => {
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

    fetchSalesData();
  }, [selectedProduct]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getAllSales();
        const uniqueProducts = [...new Set(data.map((item) => item.product))];
        setProducts(uniqueProducts);
      } catch (error) {
        console.error("Error fetching products", error);
      }
    };

    fetchProducts();
  }, []);

  const handleSelectProduct = (product) => {
    setSelectedProduct(product);
  };

  return { salesData, products, handleSelectProduct };
};
