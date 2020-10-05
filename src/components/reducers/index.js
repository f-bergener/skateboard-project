import productList from "../data/products";

const initialState = {
  cart: [],
  subtotal: 0,
  tax: 0,
  total: 0,
};

const cartReducer = (state = initialState, action) => {
  if (action.type === "ADD_TO_CART") {
    let addedProduct = productList[action.payload];
    addedProduct.quantity = 1;
    let newSubtotal = state.subtotal + addedProduct.price;
    let newTax = 0.08 * newSubtotal;
    let newTotal = newSubtotal + newTax;
    return {
      ...state,
      cart: [...state.cart, addedProduct],
      subtotal: newSubtotal,
      tax: newTax,
      total: newTotal,
    };
  } else if (action.type === "REMOVE_FROM_CART") {
    let removedProduct = productList[action.payload];
    let updatedCart = state.cart.filter(
      (product) => action.payload !== product.id
    );
    let newSubtotal =
      state.subtotal - removedProduct.price * removedProduct.quantity;
    let newTax =
      state.tax - removedProduct.price * removedProduct.quantity * 0.08;
    let newTotal = newSubtotal + newTax;
    if (updatedCart.length === 0) {
      newSubtotal = 0;
      newTax = 0;
      newTotal = 0;
      return {
        ...state,
        cart: updatedCart,
        subtotal: newSubtotal,
        tax: newTax,
        total: newTotal,
      };
    } else {
      return {
        ...state,
        cart: updatedCart,
        subtotal: newSubtotal,
        tax: newTax,
        total: newTotal,
      };
    }
  } else if (action.type === "INCREMENT") {
    let productToUpdate = state.cart.find(
      (product) => product.id === action.payload
    );
    productToUpdate.quantity += 1;
    let newSubtotal = state.subtotal + productToUpdate.price;
    let newTax = state.tax + productToUpdate.price * 0.08;
    let newTotal = newSubtotal + newTax;
    return {
      ...state,
      subtotal: newSubtotal,
      tax: newTax,
      total: newTotal,
    };
  } else if (action.type === "DECREMENT") {
    let productToUpdate = state.cart.find(
      (product) => product.id === action.payload
    );
    if (productToUpdate.quantity === 1) {
      let updatedCart = state.cart.filter(
        (product) => action.payload !== product.id
      );
      let newSubtotal = state.subtotal - productToUpdate.price;
      let newTax = state.tax - productToUpdate.price * 0.08;
      let newTotal = newSubtotal + newTax;
      if (updatedCart.length === 0) {
        newSubtotal = 0;
        newTax = 0;
        newTotal = 0;
        return {
          ...state,
          cart: updatedCart,
          subtotal: newSubtotal,
          tax: newTax,
          total: newTotal,
        };
      } else {
        return {
          ...state,
          cart: updatedCart,
          subtotal: newSubtotal,
          tax: newTax,
          total: newTotal,
        };
      }
    } else {
      productToUpdate.quantity -= 1;
      let newSubtotal = state.subtotal - productToUpdate.price;
      let newTax = state.tax - productToUpdate.price * 0.08;
      let newTotal = newSubtotal + newTax;
      return {
        ...state,
        subtotal: newSubtotal,
        tax: newTax,
        total: newTotal,
      };
    }
  } else {
    return state;
  }
};

export default cartReducer;
