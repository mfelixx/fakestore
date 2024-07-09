import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  auth: localStorage.getItem("userBelajarReact")
    ? localStorage.getItem("userBelajarReact")
    : null,
};

// createSlice
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLogin: (state, action) => {
      state.auth = action.payload;
      localStorage.setItem("userBelajarReact", JSON.stringify(action.payload));
    },
    setLogout: (state) => {
      state.auth = null;
      localStorage.clear();
    },
  },
});

export const { setLogin, setLogout } = authSlice.actions;
export default authSlice.reducer;
