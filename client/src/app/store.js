import { configureStore } from "@reduxjs/toolkit";
import dateReducer from "../features/datesSlice";

export default configureStore({
  reducer: {
    dates: dateReducer,
  },
});
