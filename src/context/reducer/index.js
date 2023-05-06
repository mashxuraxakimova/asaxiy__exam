import { combineReducers } from "redux";
import heart from "./heart";
import catalog from "./catalog";
import cart from "./cart";
const rootReducer = combineReducers({
  water() {
    return "Redux water";
  },
  heart,
  catalog,
  cart,
});

export default rootReducer;
