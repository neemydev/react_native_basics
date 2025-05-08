import { createSlice } from "@reduxjs/toolkit";

const diceSLice=createSlice({
    initialState:1,
    name:'dice',
    reducers:{
        handleDiceRoll:(state)=>{
            const randomNumber = Math.floor(Math.random() * 6) + 1;
            return randomNumber;
        }
    },
})

export const {handleDiceRoll}=diceSLice.actions;    
export  default diceSLice.reducer;