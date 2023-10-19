import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: "" || null,
  toggle: false,
};

const GlobalState = createSlice({
  name: "state",
  initialState,
  reducers: {
    createUser: (state: any, { payload }: any) => {
      state.user = payload;
    },

    logOut: (state: any) => {
      state.user = null;
    },

    toggleTrue: (state: any) => {
      state.user = true;
    },

    toggleFalse: (state: any) => {
      state.user = false;
    },
  },
});

export const { logOut, createUser, toggleTrue, toggleFalse } =
  GlobalState.actions;

export default GlobalState.reducer;
