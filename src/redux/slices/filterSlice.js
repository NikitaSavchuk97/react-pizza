import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categoryId: 0,
  currentPage: 1,
  sortId: { name: 'популярности +', type: 'rating' },
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategodyId(state, action) {
      state.categoryId = action.payload;
    },
    setSortId(state, action) {
      state.sortId = action.payload;
    },
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
    setFiltres(state, action) {
      state.sortId = action.payload.sort;
      state.currentPage = Number(action.payload.currentPage);
      state.categoryId = Number(action.payload.categoryId);
    },
  },
});

// Action creators are generated for each case reducer function
export const { setCategodyId, setCurrentPage, setSortId, setFiltres } = filterSlice.actions;

export default filterSlice.reducer;
