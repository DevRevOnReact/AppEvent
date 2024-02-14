import { configureStore } from "@reduxjs/toolkit";
import catalogReducer from "./features/catalogSlice";
import cartReducer from "./features/cartSlice";
import themeReducer from "./features/themesSlice";

export const store = configureStore({
  reducer: {
    catalog: catalogReducer,
    cart: cartReducer,
    theme: themeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
