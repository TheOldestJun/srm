import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  logIn: false,
  email: "",
  name: "",
  role: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setLogIn(state) {
      state.logIn = true;
    },
    setLogOut(state) {
      state.logIn = false;
      state.email = "";
      state.name = "";
      state.role = "";
    },
    setEmail(state, payload) {
      state.email = payload;
    },
    setName(state, payload) {
      state.name = payload;
    },
    setRole(state, payload) {
      state.role = payload;
    },
  },
});

export const { setLogIn, setLogOut, setEmail, setName, setRole } =
  userSlice.actions;

export default userSlice.reducer;
