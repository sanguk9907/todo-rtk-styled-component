import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const insert = createAsyncThunk("todo/insert", async (state) => {
  return await axios({
    url: "http://localhost:5000/todo/insert",
    method: "post",
    data: state,
  });
});

export const todos = createSlice({
  name: "todos",
  initialState: {
    date: "",
    content: "",
    todoList: [],
  },
  reducers: {
    createTodo: (state, action) => {
      state.date = action.payload.date;
      state.content = action.payload.content;
    },
  },
  extraReducers: {
    [insert.fulfilled]: (state, action) => {
      state.date = "";
      state.content = "";
      state.todoList = action.payload.data;
    },
  },
});

export const { createTodo } = todos.actions;
export default todos.reducer;
