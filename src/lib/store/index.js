import { combineReducers } from "redux";

import burgerBuilderReducer from "./reducers/burgerBuilder";
import orderReducer from "./reducers/order";
import authReducer from "./reducers/auth";

// let reducerContainer = {};

// export const setReducer = reducer => {
//   console.log("called");
//   reducerContainer = { ...reducerContainer, reducer };
//   combineReducers({ ...reducerContainer, reducer });
// };

// console.log(reducerContainer);

// export default combineReducers(reducerContainer);
export default combineReducers({
  burgerBuilder: burgerBuilderReducer,
  order: orderReducer,
  auth: authReducer
});
