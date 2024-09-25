
import { configureStore } from "@reduxjs/toolkit";
import productReducer from '../redux/ProductSlice'
import CartReducer from "./CartSlice";

export const store = configureStore({
    reducer:{
        products:productReducer,
        cart:CartReducer

    },
})
