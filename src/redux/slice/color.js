import { createSlice } from "@reduxjs/toolkit";

const colorSlice=createSlice({
    name:'color', // Name of the slice
    initialState:{
        bgColor:'red', 
        color:'purple' // Initial state of the color
    }, 
    reducers:{
        selectRandomColor:(state)=>{
            const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange'];
            const randomIndex1 = Math.floor(Math.random() * colors.length);
            const randomIndex2 = Math.floor(Math.random() * colors.length);
            state.bgColor = colors[randomIndex1];
            state.color = colors[randomIndex2];
        }
    }
})
export const { selectRandomColor } = colorSlice.actions;
export default colorSlice.reducer; // Export the reducer to be used in the store