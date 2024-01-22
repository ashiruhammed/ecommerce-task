import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Product } from "./types";

export type Cart = {
  cart: Product[];
  wishList: Product[];
};

const initialState: Cart = {
  cart: [],
  wishList: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      state.cart.push(action.payload);
    },
    addToWishList: (state, action: PayloadAction<Product>) => {
      state.wishList.push(action.payload);
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      console.log(
        action.payload,
        state.cart.find((cart) => cart.id === action.payload)
      );
      // state.cart.filter((cart) => cart.id === action.payload);
    },
  },
});

export const { addToCart, addToWishList, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
