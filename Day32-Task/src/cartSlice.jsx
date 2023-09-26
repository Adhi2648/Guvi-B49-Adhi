import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
    totalValue: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const { id, title, price } = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({
          id,
          title,
          price,
          quantity: 1,
        });
      }
      state.totalQuantity += 1;
      state.totalValue += price;
      console.log(state.totalQuantity);
    },
    removeFromCart: (state, action) => {
      const itemId = action.payload;
      const removedItem = state.items.find((item) => item.id === itemId);

      if (removedItem) {
        state.totalQuantity -= removedItem.quantity;
        state.totalValue -= removedItem.price * removedItem.quantity;
        state.items = state.items.filter((item) => item.id !== itemId);
      }
    },
    increaseQuantity: (state, action) => {
      const itemId = action.payload;
      const itemToIncrease = state.items.find((item) => item.id === itemId);

      if (itemToIncrease) {
        itemToIncrease.quantity += 1;
        state.totalQuantity += 1;
        state.totalValue += itemToIncrease.price;
      }
    },
    decreaseQuantity: (state, action) => {
      const itemId = action.payload;
      const itemToDecrease = state.items.find((item) => item.id === itemId);

      if (itemToDecrease && itemToDecrease.quantity > 1) {
        itemToDecrease.quantity -= 1;
        state.totalQuantity -= 1;
        state.totalValue -= itemToDecrease.price;
      }
    },
  },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
