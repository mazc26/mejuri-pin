import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

let initialState = {
  items: [],
  isLoading: false,
  favorites: [],
};

const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    fetchItems(state, action) {
      state.isLoading = true;
    },
    fetchItemsSuccess(state, action) {
      state.isLoading = false;
      state.items = action.payload
    },
    fetchItemsError(state, action) {
      state.isLoading = false;
      toast.error("Could not fetch the items, please try again later", {hideProgressBar: true})
    },
    setFavorites(state, action) {
      state.favorites = [...state.favorites, action.payload]
      toast.success("Added to favorites",  {hideProgressBar: true})
    },
    removeFavorites(state, action) {
      const removed = state.favorites.filter(item => item.id !== action.payload)
      state.favorites = removed;
      toast.success("Removed from favorites",  {hideProgressBar: true})
    },
  }
});

export const { 
  fetchItems,
  fetchItemsSuccess,
  fetchItemsError,
  setFavorites,
  removeFavorites,
} = commonSlice.actions;

export default commonSlice.reducer;
