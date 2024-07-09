import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem("cartBelajarReact")) || {
  cartItems: [],
  totalPrice: 0,
};

// createSlice
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { ...payload } = action.payload;
      console.log("payload : ", payload);
      const existingItem = state.cartItems.find(
        (item) => item.id === payload.id
      );

      if (existingItem) {
        state.cartItems = state.cartItems.map((item) =>
          item.id === payload.id
            ? { ...item, quantity: item.quantity + 1, price: item.price * 2 }
            : item
        );
      } else {
        state.cartItems = [...state.cartItems, { ...payload, quantity: 1 }];
      }

      state.totalPrice = state.cartItems.reduce(
        (acc, item) => acc + item.price,
        0
      );
      localStorage.setItem(
        "cartBelajarReact",
        JSON.stringify({
          cartItems: state.cartItems,
          totalPrice: state.totalPrice,
        })
      );
    },

    removeFromCart: (state, action) => {
      const id = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== id);
      state.totalPrice = state.cartItems.reduce(
        (acc, item) => acc + item.price,
        0
      );
      localStorage.setItem(
        "cartBelajarReact",
        JSON.stringify({
          cartItems: state.cartItems,
          totalPrice: state.totalPrice,
        })
      );
    },

    clearCart: (state) => {
      state.cartItems = [];
      state.totalPrice = 0;
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
