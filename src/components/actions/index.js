export const addToCart = (id) => {
  return {
    type: "ADD_TO_CART",
    payload: id,
  };
};

export const removeFromCart = (id) => {
  return {
    type: "REMOVE_FROM_CART",
    payload: id,
  };
};

export const increment = (id) => {
  return {
    type: "INCREMENT",
    payload: id,
  };
};

export const decrement = (id) => {
  return {
    type: "DECREMENT",
    payload: id,
  };
};
