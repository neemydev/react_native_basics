import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:'carts',
    initialState:{
        carts:[], 
        totalAmount:0,
    },
    reducers:{
        addCart:(state, action)=>{ 
            const item = action.payload;
           const exists = state.carts .find((product) => product.id === item.id);
                if (!exists) {
                    state.carts. push(item); // add only if not already in cart
                }
        }, 
        removeCart:(state,action)=>{ 
            const pId = action.payload;
            console.log(pId);
           state.carts= state.carts.filter((product)=> product.id!== pId)
            
           

           
        
        },

           
        clearCart: (state) => {
            state.carts=[];
              },
        
        cartTotal:(state)=>{
             state.totalAmount = state.carts.reduce((sum,product)=> sum+product.price, 0);
         
          
        },

        increment:()=>{},
        decrement:()=>{}
    }
})

export  const {addCart, removeCart , increment, decrement , cartTotal} = cartSlice.actions;
export default cartSlice.reducer