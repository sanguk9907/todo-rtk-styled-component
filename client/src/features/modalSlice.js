import { createSlice } from "@reduxjs/toolkit";

export const modal = createSlice({
  name: "modal",
  initialState: {
    selcetedDate: "",
    on: false,
  },
  reducers: {
    modalOn: (state, action) => {
      state.selcetedDate = action.payload;
      state.on = true;
    },
    modalOff: (state) => {
      state.selcetedDate = "";
      state.on = false;
    },
  },
});

export const { modalOn, modalOff } = modal.actions;
export default modal.reducer;
