import { useState, useEffect } from "react";
import { getAllDate } from "../../Api/MainApi";

function FunctionSelectDate({ startDate, endDate }) {
  const [salesData, setSalesData] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllDate(startDate, endDate);
        console.log("Fetched sales data:", data);

        const filteredData = selectedProduct ? data.filter((item) => item.product === selectedProduct) : data;
        setSalesData(filteredData);
      } catch (error) {
        console.error("Error fetching sales data", error);
      }
    };

    fetchData();
  }, [selectedProduct, startDate, endDate]);

  const handleSelectProduct = (product) => {
    setSelectedProduct(product);
  };

  return {
    salesData,
    selectedProduct,
    handleSelectProduct,
  };
}

export default FunctionSelectDate;
