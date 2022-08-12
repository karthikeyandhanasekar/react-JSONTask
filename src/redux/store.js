import { configureStore,combineReducers } from "@reduxjs/toolkit";
import { employeeslice } from "./slice";



export const employeestores = configureStore({
    reducer: {
        employeeslice:  combineReducers( employeeslice)
    }
})
