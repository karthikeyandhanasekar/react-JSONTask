import { createSlice } from "@reduxjs/toolkit"
import { Employees } from "../data/employeedata"


const initialState = {
    employeedetails: Employees,
}

export const employeeslice = createSlice({
    name: "SliceName",
    initialState: initialState,
    reducers: {
        "addemployee": (state, action) => {
            state.employeedetails.push(action.payload)
        },
        "removeemployee": (state, action) => {
            state.employeedetails = state.employeedetails.filter((detail) => detail.userId !== action.payload)
        }
    }
})

export const { addemployee, removeemployee } = employeeslice.actions


export default employeeslice.reducer
