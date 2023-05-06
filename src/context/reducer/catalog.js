import { OPEN_CATALOG } from "../action/actionType";

const catalog = (state = false, action) => {
  switch (action.type) {
    case OPEN_CATALOG:
      state = !state;
      return state;
    default:
      return state;
  }
};

export default catalog;
