import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    setValueFilter(state, action) {
      state = action.payload;
    },
  },
});

export const { setValueFilter } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
