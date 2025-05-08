import { configureStore } from "@reduxjs/toolkit";
import cartReducer from '../slice/cart';
import productReducer from '../slice/product'
import diceReducer from  "../slice/dice";
import  colorReducer from "../slice/color";
import currencyReducer from "../slice/currency";


export const store = configureStore(
    {
        reducer : {
            carts:cartReducer,
            products:productReducer,
            dice:diceReducer,
            color:colorReducer,
            currency:currencyReducer

        }
    }

)