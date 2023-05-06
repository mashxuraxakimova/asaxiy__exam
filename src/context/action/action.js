import {
  ADD_TO_HEART,
  OPEN_CATALOG,
  REMOVE_FROM_HEART,
  REMOVE_FROM_CART,
  ADD_TO_CART,
  DEC_FROM_CART,
  DEL_ALL_CART,
} from "./actionType";

export const addToHeart = (payload) => {
  return { type: ADD_TO_HEART, payload: payload };
};

export const removeFromHeart = (payload) => {
  return { type: REMOVE_FROM_HEART, payload };
};

export const openCatalog = () => {
  return { type: OPEN_CATALOG };
};

export const addToCart = (payload) => {
  return { type: ADD_TO_CART, payload };
};

export const removeFromCart = (payload) => {
  return { type: REMOVE_FROM_CART, payload };
};

export const decFromCart = (payload) => {
  return { type: DEC_FROM_CART, payload };
};

export const DelAllCart = (payload) => {
  return { type: DEL_ALL_CART, payload };
};
