import axios from "axios";

// methode to fetch all the phones stored in database
export const getAllPhonesAPI = () => {
  return axios
    .get("http://localhost:8000/api/phones")
    .catch((err) => console.log("error :", err.response.status));
};


// methode to get phone by ID
export const getPhoneByIdAPI = (idPhone) => {
  return axios
    .get("http://localhost:8000/api/phone/" + idPhone)
    .catch((err) => console.log("error :", err.response.status));
};
