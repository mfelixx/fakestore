import { configureStore } from "@reduxjs/toolkit";
import authReduce from "./slice/authSlice.js";
import cartReduce from "./slice/cartSlice.js";

const store = configureStore({
  reducer: {
    auth: authReduce,
    cart: cartReduce,
  },
});

// store.subscribe(() => {
//   console.log("onSubscribe : ", store.getState());
// });

export default store;
