import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { buildCreateApi } from "@reduxjs/toolkit/query";
import axios from "axios";



 export const fetchProducts=createAsyncThunk('products/fetchProducts',async()=>{
    const res = await axios.get('https://fakestoreapi.com/products')
    //console.log(res.data)
    return res.data;
 })

const productSlice = createSlice({
    name:'products',
 initialState:{
        loading:true,
        products:[],
        error:''
    } 
 ,    
 extraReducers:(builder)=>{
    builder.addCase(fetchProducts.pending,(state)=>{ state.loading=true })
    builder.addCase(fetchProducts.fulfilled, (state, action)=>{state.loading=false; state.products=action.payload; state.error=''})
    builder.addCase(fetchProducts.rejected, (state, action)=>{state.loading=false; state.products=[]; state.error=action.error.message})
 }

})

export default productSlice.reducer