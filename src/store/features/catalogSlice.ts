import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface CatalogItem {
  id: number;
  image: string;
  name: string;
  price: number;
}

interface CatalogState {
  items: CatalogItem[];
  loading: boolean;
  error: string | null;
}

const initialState: CatalogState = {
  items: [],
  loading: false,
  error: null,
};

export const fetchCatalog = createAsyncThunk(
  "catalog/fetchCatalog",
  async () => {
    const response = await fetch("https://appevent.ru/dev/task1/catalog");
    const data = await response.json();
    return data.items;
  },
);

const catalogSlice = createSlice({
  name: "catalog",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCatalog.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCatalog.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchCatalog.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Failed to fetch catalog";
      });
  },
});

export default catalogSlice.reducer;
