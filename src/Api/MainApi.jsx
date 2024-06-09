import axios from "axios";

const baseURL = "http://localhost:3001";
const api = axios.create({
  baseURL: baseURL,
});

export const getAllProducts = async () => {
  try {
    const response = await axios({
      url: `${baseURL}/product`,
      responseType: "json",
      credentials: "include",
      mode: "no-cors",
      headers: {
        Accept: "application/json; odata=verbose",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching products", error);
    throw error;
  }
};

export const getAllDate = async (startDate, endDate) => {
  try {
    const response = await axios({
      url: `${baseURL}/date`,
      responseType: "json",
      credentials: "include",
      mode: "no-cors",
      headers: {
        Accept: "application/json; odata=verbose",
      },
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

export const getAllSales = async () => {
  try {
    const response = await axios({
      url: `${baseURL}/sales`,
      responseType: "json",
      credentials: "include",
      mode: "no-cors",
      headers: {
        Accept: "application/json; odata=verbose",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching sales", error);
    throw error;
  }
};

export const getAllRevenue = async () => {
  try {
    const response = await axios({
      url: `${baseURL}/revenue`,
      responseType: "json",
      credentials: "include",
      mode: "no-cors",
      headers: {
        Accept: "application/json; odata=verbose",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching revenue", error);
    throw error;
  }
};

export default api;

// import axios from "axios";

// const baseURL = "http://localhost:3001";
// const api = axios.create({
//   baseURL: baseURL,
// });

// export const getAllSales = async () => {
//   try {
//     const response = await api.get("/sales");
//     return response.data;
//   } catch (error) {
//     console.error("Error fetching data", error);
//     throw error;
//   }
// };

// export const getAllProducts = async () => {
//   try {
//     const response = await api.get("/products");
//     return response.data;
//   } catch (error) {
//     console.error("Error fetching products", error);
//     throw error;
//   }
// };

// export const getSalesByDateRange = async (startDate, endDate) => {
//   try {
//     const response = await api.get("/sales", {
//       params: {
//         start_date: startDate,
//         end_date: endDate,
//       },
//     });
//     return response.data;
//   } catch (error) {
//     console.error("Error fetching sales by date range", error);
//     throw error;
//   }
// };

// export default api;
