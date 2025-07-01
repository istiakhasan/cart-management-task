import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { message } from "antd";
import { toast } from "react-toastify";

interface CartState {
  cart: any[];
  wishList: any[];
  total: number;
  shipping: number;
  coupon: string;
}

const initialState: CartState = {
  cart: [],
  wishList: [],
  total: 0,
  shipping: 0,
  coupon: "",
};

const calculateShipping = (subtotal: number): number => {
  if (subtotal > 200) return 10;
  if (subtotal > 100) return 20;
  return 30;
};

const updateTotalAndShipping = (state: CartState) => {
  const subtotal = state.cart.reduce(
    (acc, product) => acc + product.price * (product.purchaseQuantity || 1),
    0
  );
  state.total = subtotal;
  state.shipping = calculateShipping(subtotal);
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, { payload }: PayloadAction<any>) => {
      const isExist = state.cart.find(
        (item) =>
          item?.data?.id === payload?.data?.id &&
          payload?.color?.valueId === item?.color?.valueId &&
          payload?.size?.valueId === item?.size?.valueId
      );
      if (isExist) {
        message.error("Already added");
      } else {
        const productToAdd = {
          data: payload?.data,
          quantity: payload?.quantity,
          size: payload?.size,
          color: payload?.color,
        };
        state.cart.push(productToAdd);
        updateTotalAndShipping(state);
        message.success("Product added successfully...");
      }
    },

    incrementQuantity: (
      state,
      { payload }: PayloadAction<{ index: number }>
    ) => {
      console.log(payload);
      state.cart[payload.index].quantity =
        (state.cart[payload.index].quantity || 1) + 1;
      updateTotalAndShipping(state);
    },

    decrementQuantity: (
      state,
      { payload }: PayloadAction<{ index: number }>
    ) => {
      const currentItem = state.cart[payload.index];

      if ((currentItem.quantity || 1) - 1 === 0) {
        state.cart.splice(payload.index, 1);
      } else {
        currentItem.quantity = (currentItem.quantity || 1) - 1;
      }

      updateTotalAndShipping(state);
    },
    removeToCart: (state, { payload }: PayloadAction<{ index: number }>) => {
      if (payload.index >= 0 && payload.index < state.cart.length) {
        state.cart.splice(payload.index, 1);
        updateTotalAndShipping(state);
      }
    },

    clearCart: (state) => {
      state.cart = [];
      state.total = 0;
      state.shipping = 0;
    },
    selectAll: (state, { payload }) => {
      state.cart = state.cart.map((item: any) => {
        return {
          ...item,
          select: payload?.select,
        };
      });
    },
    selectById: (state, { payload }) => {
      state.cart[payload?.index].select = payload?.select;
    },
    addCoupon: (state, { payload }) => {
      state.coupon = payload?.coupon;
    },
  },
});

export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeToCart,
  clearCart,
  selectAll,
  selectById,
  addCoupon,
} = cartSlice.actions;

export default cartSlice.reducer;
