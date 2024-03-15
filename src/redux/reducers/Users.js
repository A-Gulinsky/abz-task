import { createSlice } from '@reduxjs/toolkit';
import { createUser, getUsers, loadMoreBtnGetUsers } from '../operations';



export const usersSlice = createSlice({
  name: 'token',
  initialState: {
    users: [],
    status: 'idle',
    error: null,
    page: 1
  },
  reducers: {
    nextPage(state) {
     state.page += 1
    },
  },
  extraReducers: (builder) => {
    builder
      // GET Users
      .addCase(getUsers.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.users = action.payload;
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      // GET | Show More Users
      .addCase(loadMoreBtnGetUsers.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(loadMoreBtnGetUsers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.users = [...state.users,...action.payload];
      })
      .addCase(loadMoreBtnGetUsers.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      // POST | Create User
      .addCase(createUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(createUser.fulfilled, (state) => {
        console.log(`FULLFILED`)
        state.status = 'succeeded';
        state.page = 1
        state.users = [];
      })
      .addCase(createUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export const { nextPage } = usersSlice.actions

export default usersSlice.reducer;