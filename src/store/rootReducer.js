import { combineReducers } from "redux";
import theme from "./theme/themeSlice";
import auth from "./auth";
import base from "./base";

const rootReducer = (asyncReducers) => (state, action) => {
  const combineReducer = combineReducers({
    theme,
    auth,
    base,
    ...asyncReducers,
  });
  return combineReducer(state, action);
};

export default rootReducer;
