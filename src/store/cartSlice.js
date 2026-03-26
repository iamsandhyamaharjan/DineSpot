import {createSlice} from "@reduxjs/toolkit";

const initialState={
    items:[],
    isCartOpen:false,
};

const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        addToCart:(state,action)=>{
            const existingItem = state.items.find(i => i.itemID === action.payload.itemID);
            if(existingItem){
                existingItem.quantity +=1;
            }else{
                state.items.push({...action.payload,quantity:1})
            }

        },
        removeFromCart:(state,action)=>{
            state.items =state.items.filter(i=>i.itemID !== action.payload)
        },
        clearCart:(state)=>{
            state.items=[];
        },
        toggleCart:(state)=>{
            state.isCartOpen = !state.isCartOpen;
        },
        openCart:(state)=>{
            state.isCartOpen=true;
        },
        closeCart:(state)=>{
            state.isCartOpen=false;
        },
        increaseQuantity:(state,action)=>{
            const item = state.items.find(i=>i.itemID === action.payload);
            if(item) item.quantity +=1;

        },
        decreaseQuantity:(state,action)=>{
            const item =state.items.find(i=>i.itemID ===action.payload);
            if(item && item.quantity>1){
                item.quantity -=1;
            }

        }
    }
});

export const {addToCart,removeFromCart,clearCart,toggleCart,openCart,closeCart,increaseQuantity,decreaseQuantity} =cartSlice.actions;
export default cartSlice.reducer;