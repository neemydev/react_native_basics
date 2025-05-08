import { asyncThunkCreator, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { DATA } from "../../constants";
import { currencyByRupee } from "../../constants/data";

 export const  fetchCountries= createAsyncThunk('currency/fetchCountries',async()=>{
       const result= currencyByRupee;
      return result;
 })


const currencySlice=createSlice({
    name:'currency',
    initialState:{
        
        loading:true,
        countries:[],
        error:'',
        convertedAmount:0,
    },
    reducers:{
        convertCurrency:(state,payload)=>{
            const {amount, value} = payload.payload;
            const convertedAmount= amount * value;
            state.convertedAmount=convertedAmount;

        }
    }, // Define any synchronous actions here if needed
    extraReducers:(builder)=>{
        builder.addCase(fetchCountries.pending,(state)=>{ state.loading=true })
        builder.addCase(fetchCountries.fulfilled, (state, action)=>{state.loading=false; state.countries=action.payload; state.error=''})
        builder.addCase(fetchCountries.rejected, (state, action)=>{state.loading=false; state.countries=[]; state.error=action.error.message})
    }

    // Name of the slice
})

export const { convertCurrency } = currencySlice.actions;
export default currencySlice.reducer; // Export the reducer to be used in the store