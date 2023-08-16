import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const initialState = {
  modal : false
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    addModal: (state,action) => {
        state.modal = action.payload
    },
    removeModal : ( state) => {
      state.modal = false;
    }
   
  },
});

export const { addModal,removeModal } = modalSlice.actions;

export default modalSlice.reducer;

export const useModal = () => useSelector((state) => state.modal);
