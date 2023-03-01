import {createSlice} from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name : 'Cart',
    initialState : {
        items: ["Salad", "Pizza"]
    },
    reducers: {
        addItem : (state, action) =>{
            state.items.push(action.payload);
        },
        clearCart : (state) =>{
            state.items = [];
        },
        removeItem : (state, action) =>{
            let index = state.items.filter((item) =>{
                
                return (item === action.payload) ? indexOf(item) : undefined;
            });
            state.items.splice(index,1);
            
        }
    }
});

export default CartSlice.reducer;
export const {addItem, removeItem, clearCart} = CartSlice.actions;