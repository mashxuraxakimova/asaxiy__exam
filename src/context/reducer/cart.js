import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  DEC_FROM_CART,
  DEL_ALL_CART,
} from "../action/actionType";

const cart = (state = [], action) => {
  let index = state.findIndex((i) => i.id === action?.payload?.id);
  switch (action.type) {
    case ADD_TO_CART:
      if (index < 0) {
        return (state = [...state, { ...action.payload, soni: 1 }]);
      } else {
        return state?.map((e, inx) =>
          inx === index ? { ...e, soni: e.soni + 1 } : e
        );
      }
    // return state;
    case DEC_FROM_CART:
      return state?.map((e, inx) =>
        inx === index ? { ...e, soni: e.soni - 1 } : e
      );
    case REMOVE_FROM_CART:
      return (state = state.filter((i) => i.id !== action.payload.id));
    case DEL_ALL_CART:
      return (state = []);
    default:
      return state;
  }
};
export default cart;
