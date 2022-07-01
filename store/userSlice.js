import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  logIn: false,
  email: "",
  name: "",
  role: "",
  roleId: "",
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
    setGlobalEmail(state, payload) {
      state.email = payload;
    },
    setGlobalName(state, payload) {
      state.name = payload;
    },
    setGlobalRole(state, payload) {
      state.role = payload;
    },
    setGlobalRoleId(state, payload) {
      state.roleId = payload;
    },
  },
});

export const {
  setLogIn,
  setLogOut,
  setGlobalEmail,
  setGlobalName,
  setGlobalRole,
  setGlobalRoleId,
} = userSlice.actions;

export default userSlice.reducer;
