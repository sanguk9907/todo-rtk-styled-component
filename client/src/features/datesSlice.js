import { createSlice } from "@reduxjs/toolkit";

const days = "일월화수목금토".split("");

export const dates = createSlice({
  name: "dates",
  initialState: {
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1,
    date: new Date().getDate(),
    day: days[new Date().getDay()],
  },
  reducers: {
    nextMonth: (state) => {
      if (state.month >= 12) {
        state.year += 1;
        state.month = 1;
      } else {
        state.month += 1;
      }
    },
    prevMonth: (state) => {
      if (state.month <= 1) {
        state.year -= 1;
        state.month = 12;
      } else {
        state.month -= 1;
      }
    },
  },
});

export const { nextMonth, prevMonth } = dates.actions;
export default dates.reducer;
