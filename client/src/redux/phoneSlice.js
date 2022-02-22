import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { getAllPhonesAPI } from "../helpers/api";
const initialState = {
  listPhones: [],
  status: "idle",
  etudiantSelected: {}
};

export const getAllPhones = createAsyncThunk(
  "phones/getAllPhones",
  async () => {
    try {
      const response = await getAllPhonesAPI();
     
      return response.data.phones;
    } catch (err) {
      console.log("Erreur : ", err.response);
    }

    // The value we return becomes the `fulfilled` action payload
  }
);

/* export const getEtudiantById = createAsyncThunk(
  "etudiants/getEtudiantById",
  async (idEtudiant) => {
    try {
      const response = await FindEtudiantByIdAPI(idEtudiant);
     
      return response.data.etudiant;
    } catch (err) {
      console.log("Erreur : ", err.response);
    }

    // The value we return becomes the `fulfilled` action payload
  }
); */



export const phoneSlice = createSlice({
  name: "phones",
  initialState,
  reducers: {},

  extraReducers:  {
    [getAllPhones.pending]: (state, action) => {
      state.status = "loading";
    },
    [getAllPhones.fulfilled]: (state, action) => {
      state.status = "success";
      state.listPhones = action.payload;
    },

    // [getEtudiantById.pending]: (state, action) => {
    //   state.status = "loading";
    // },
    // [getEtudiantById.fulfilled]: (state, action) => {
    //   state.status = "success";
    //     state.etudiantSelected = action.payload;
    // },

   
   
  },
});

export default phoneSlice.reducer;
