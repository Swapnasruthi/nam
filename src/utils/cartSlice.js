import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        items:[],
        amount:0,
    },
    reducers:{
        addItem:(state,action)=>{
            state.items.push(action.payload);
        },
        removeItem:(state,action)=>{
            state.items.pop();
        },
        clearCart:(state)=>{
            state.items.length=0;
        },
       
    },
});

export const {addItem,removeItem,clearCart,addAmount}  =  cartSlice.actions;
export default cartSlice.reducer;