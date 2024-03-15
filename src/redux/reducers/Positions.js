import { createSlice } from '@reduxjs/toolkit';
import { fetchPositions } from '../operations';

export const positionsSlice = createSlice({
  name: 'positions',
  initialState: {
    positionsData: [],
    status: 'idle',
    error: null
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPositions.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPositions.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.positionsData = action.payload;
      })
      .addCase(fetchPositions.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export default positionsSlice.reducer;