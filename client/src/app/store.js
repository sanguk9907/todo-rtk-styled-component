import { configureStore } from "@reduxjs/toolkit";
import dateReducer from "../features/datesSlice";
import modalReducer from "../features/modalSlice";
import todosReducer from "../features/todoSlice";

export default configureStore({
  reducer: {
    dates: dateReducer,
    modal: modalReducer,
    todos: todosReducer,
  },
});
