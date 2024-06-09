import axios from "axios";

const baseURL = "http://localhost:3001";
const api = axios.create({
  baseURL: baseURL,
});

export const getAllSales = async () => {
  try {
    const response = await api.get("/sales");
    return response.data;
  } catch (error) {
    console.error("Error fetching data", error);
    throw error;
  }
};

export const getAllProducts = async () => {
  try {
    const response = await api.get("/products");
    return response.data;
  } catch (error) {
    console.error("Error fetching products", error);
    throw error;
  }
};

export const getSalesByDateRange = async (startDate, endDate) => {
  try {
    const response = await api.get("/sales", {
      params: {
        start_date: startDate,
        end_date: endDate,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching sales by date range", error);
    throw error;
  }
};

export default api;
