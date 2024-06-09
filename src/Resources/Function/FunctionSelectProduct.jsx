import { useState, useEffect } from "react";
import { getAllSales } from "../../Api/MainApi";

function SelectProduct() {
  const [salesData, setSalesData] = useState([]);
  const [selectedProduct, onSelectProduct] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllSales();
        console.log("Fetched sales data:", data);

        const filteredData = selectedProduct ? data.filter((item) => item.product === selectedProduct) : data;
        setSalesData(filteredData);
      } catch {}
    };

    fetchData();
  }, [selectedProduct]);

  const handleSelectProduct = (product) => {
    onSelectProduct(product);
  };

  return {
    salesData,
    selectedProduct,
    handleSelectProduct,
  };
}

export default SelectProduct;
