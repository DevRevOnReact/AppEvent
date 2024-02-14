// store/features/cartSlice.ts
import { createSlice } from "@reduxjs/toolkit";

interface CartItem {
  id: number;
  name: string;
  price: number;
  image?: any;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  isVisible: boolean;
  totalQuantity: number;
}

const loadCartFromLocalStorage = (): CartItem[] => {
  const cartItems = localStorage.getItem("cart");
  return cartItems ? JSON.parse(cartItems) : [];
};

const initialState: CartState = {
  items: loadCartFromLocalStorage(),
  isVisible: false,
  totalQuantity: 0,
};

const saveCartToLocalStorage = (cartItems: CartItem[]) => {
  localStorage.setItem("cart", JSON.stringify(cartItems));
};

const updateTotalQuantity = (items: CartItem[]) => {
  return items.reduce((acc, item) => acc + item.quantity, 0);
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      const { id, name, price, image } = action.payload;
      const existingItemIndex = state.items.findIndex((item) => item.id === id);
      if (existingItemIndex !== -1) {
        state.items[existingItemIndex].quantity += 1;
      } else {
        state.items.push({
          id,
          name,
          price,
          quantity: 1,
          image,
        });
      }
      state.totalQuantity = updateTotalQuantity(state.items);
      saveCartToLocalStorage(state.items);
    },
    removeItemFromCart: (state, action) => {
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === action.payload,
      );
      if (existingItemIndex !== -1) {
        state.items[existingItemIndex].quantity -= 1;
        if (state.items[existingItemIndex].quantity === 0) {
          state.items.splice(existingItemIndex, 1);
        }
      }
      state.totalQuantity = updateTotalQuantity(state.items);
      saveCartToLocalStorage(state.items);
    },
    toggleCartVisibility: (state) => {
      state.isVisible = !state.isVisible;
    },
    clearCart: (state) => {
      state.items = [];
      state.totalQuantity = 0;
      localStorage.removeItem("cart");
    },
  },
});

export const {
  addItemToCart,
  removeItemFromCart,
  toggleCartVisibility,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
