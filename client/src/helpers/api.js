import axios from "axios";

// methode to fetch all the phones stored in database
export const getAllPhonesAPI = () => {
  return axios
    .get("http://localhost:8000/api/phones")
    .catch((err) => console.log("aaaaa :", err.response.status));
};
