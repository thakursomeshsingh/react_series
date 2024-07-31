import { configureStore } from "@reduxjs/toolkit";
import TodoSlice from "./features/ToDoSlice";

export const store = configureStore({
    reducer:{
        todo:TodoSlice,
    }
})