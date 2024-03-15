import { createSlice } from "@reduxjs/toolkit";

export const signUpSlice = createSlice({
  name: 'success',
  initialState: {
    isSignUp: false
  },
  reducers: {
    toggleBoolean(state) {
      state.isSignUp = true
    },
  }
})

export const { toggleBoolean } = signUpSlice.actions
