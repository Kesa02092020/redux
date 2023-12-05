import { createSlice } from "@reduxjs/toolkit";

export const changeColor = createSlice({
    name:'changeColor',
    initialState:{
        color : '#3d251e'
    },
    reducers:{
        changeColorNewcolor(state,action) {
            state.color = action.payload
        }
    }
})

export const {changeColorNewcolor} = changeColor.actions;