import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = {
  query: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    setValueFilter(state, action) {
      state.query = action.payload;
    },
  },
});

export const { setValueFilter } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
