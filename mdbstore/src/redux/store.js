import { configureStore } from '@reduxjs/toolkit'
import searchReducer, { fetchCategories } from "./searchSlice";

export const store = configureStore({
  reducer: {
    search: searchReducer
  },
});

store.dispatch(fetchCategories());
