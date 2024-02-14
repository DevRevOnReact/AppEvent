// themeSlice.ts
import { createSlice } from "@reduxjs/toolkit";

interface ThemeState {
  isDarkMode: boolean;
}

const initialState: ThemeState = {
  isDarkMode: false, // начальная тема: светлая
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme(state) {
      state.isDarkMode = !state.isDarkMode;
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
