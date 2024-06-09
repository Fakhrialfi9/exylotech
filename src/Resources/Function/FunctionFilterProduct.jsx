import { useState, useEffect } from "react";

export const FilterProduct = (salesData, initialFilter = "") => {
  const [filteredData, setFilteredData] = useState([]);
  const [filter, setFilter] = useState(initialFilter);

  useEffect(() => {
    filterData();
  }, [filter, salesData]);

  const filterData = () => {
    let sortedData = [...salesData];

    // Urutkan data berdasarkan ID secara default
    sortedData.sort((a, b) => a.id - b.id);

    if (filter === "Descending") {
      sortedData.sort((a, b) => b.revenue - a.revenue);
    } else if (filter === "Ascending") {
      sortedData.sort((a, b) => a.revenue - b.revenue);
    } else if (filter === "AtoZ") {
      sortedData.sort((a, b) => a.product.localeCompare(b.product));
    } else if (filter === "ZtoA") {
      sortedData.sort((a, b) => b.product.localeCompare(a.product));
    }

    setFilteredData(sortedData);
  };

  return { filteredData, filter, setFilter };
};
