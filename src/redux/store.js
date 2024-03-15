import { configureStore } from "@reduxjs/toolkit";
import { positionsSlice } from "./reducers/Positions";
import { tokenSlice } from "./reducers/Token";
import { usersSlice } from "./reducers/Users";
import { signUpSlice } from "./reducers/successSignUp";

export const store = configureStore({
  reducer: {
    positions: positionsSlice.reducer,
    token: tokenSlice.reducer,
    users: usersSlice.reducer,
    isSignUp: signUpSlice.reducer
  }
})