import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { textSearch, getCategories, getByCategory, getAutocompleteSuggestions } from "./searchAPI";

const initialState = {
  searchTerm: "",
  status: "idle",
  data: [],
  categories: [],
  suggestions: []
}

export const fetchTextSearch = createAsyncThunk(
  'search/textSearch',
  async searchTerm => {
    const response = await textSearch(searchTerm);
    return response.data;
  }
);

export const fetchAutocompleteSuggestions = createAsyncThunk(
  'search/autocomplete',
  async searchTerm => {
    const response = await getAutocompleteSuggestions(searchTerm);
    console.log(response);
    return response;
  }
);

export const fetchCategories = createAsyncThunk(
  "search/categories",
  async () => {
    const response = await getCategories();
    let categories = response[0].categories;
    return categories;
  }
)

export const fetchByCategory = createAsyncThunk(
  "search/bycategory",
  async (category) => {
    const response = await getByCategory(category);
    return response;
  }
)

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    updateSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTextSearch.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTextSearch.fulfilled, (state, action) => {
        state.status = 'idle';
        state.data = action.payload;
      })
      .addCase(fetchAutocompleteSuggestions.fulfilled, (state, action) => {
        state.suggestions = action.payload;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
      })
      .addCase(fetchByCategory.fulfilled, (state, action) => {
        state.data = action.payload;
      });
  },
})

// Action creators are generated for each case reducer function
export const { updateSearchTerm } = searchSlice.actions

export default searchSlice.reducer