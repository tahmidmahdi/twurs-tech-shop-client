import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import addCartReducer from "./Reducers/addToCartReducer";
const middleware = applyMiddleware(thunk)
const RootReducer = combineReducers({
    cart: addCartReducer,
})

export const store = createStore(RootReducer, composeWithDevTools(middleware))