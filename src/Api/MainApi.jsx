import axios from "axios";

const baseURL = "https://fakhrialfi9.github.io/APi/db.json";

const fetchData = async () => {
  try {
    const response = await axios.get(baseURL);
    return response.data;
  } catch (error) {
    console.error("Error fetching data from GitHub", error);
    throw error;
  }
};

export const getAllProducts = async () => {
  try {
    const data = await fetchData();
    return data.sales.map((item) => item.product);
  } catch (error) {
    console.error("Error fetching products", error);
    throw error;
  }
};

export const getAllDate = async (startDate, endDate) => {
  try {
    const data = await fetchData();
    const filteredData = data.sales.filter((item) => {
      const date = new Date(item.date);
      return date >= new Date(startDate) && date <= new Date(endDate);
    });
    return filteredData;
  } catch (error) {
    console.error("Error fetching sales by date range", error);
    throw error;
  }
};

export const getAllSales = async () => {
  try {
    const data = await fetchData();
    return data.sales;
  } catch (error) {
    console.error("Error fetching sales", error);
    throw error;
  }
};

export const getAllRevenue = async () => {
  try {
    const data = await fetchData();
    return data.sales.map((item) => item.revenue);
  } catch (error) {
    console.error("Error fetching revenue", error);
    throw error;
  }
};

// import axios from "axios";

// const baseURL = "http://localhost:3001";
// const api = axios.create({
//   baseURL: baseURL,
// });

// const baseURL = "https://fakhrialfi9.github.io/APi/db.json";
// const api = axios.create({
//   baseURL: baseURL,
// });

// export const getAllProducts = async () => {
//   try {
//     const response = await axios({
//       url: `${baseURL}/product`,
//       responseType: "json",
//       credentials: "include",
//       mode: "no-cors",
//       headers: {
//         Accept: "application/json; odata=verbose",
//       },
//     });
//     return response.data;
//   } catch (error) {
//     console.error("Error fetching products", error);
//     throw error;
//   }
// };

// export const getAllDate = async (startDate, endDate) => {
//   try {
//     const response = await axios({
//       url: `${baseURL}/date`,
//       responseType: "json",
//       credentials: "include",
//       mode: "no-cors",
//       headers: {
//         Accept: "application/json; odata=verbose",
//       },
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

// export const getAllSales = async () => {
//   try {
//     const response = await axios({
//       url: `${baseURL}/sales`,
//       responseType: "json",
//       credentials: "include",
//       mode: "no-cors",
//       headers: {
//         Accept: "application/json; odata=verbose",
//       },
//     });
//     return response.data;
//   } catch (error) {
//     console.error("Error fetching sales", error);
//     throw error;
//   }
// };

// export const getAllRevenue = async () => {
//   try {
//     const response = await axios({
//       url: `${baseURL}/revenue`,
//       responseType: "json",
//       credentials: "include",
//       mode: "no-cors",
//       headers: {
//         Accept: "application/json; odata=verbose",
//       },
//     });
//     return response.data;
//   } catch (error) {
//     console.error("Error fetching revenue", error);
//     throw error;
//   }
// };

// export default api;
