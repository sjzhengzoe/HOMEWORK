import { connectRouter, RouterState } from "connected-react-router";
import { combineReducers } from "redux";
import { History } from "history";
import authReducer, { AuthState } from "./auth.reducer";
import categoryReducer, { CategoryState } from "./category.reducer";
export interface AppState {
  router: RouterState;
  auth: AuthState;
  category: CategoryState;
}

const createRootReducer = (history: History) =>
  combineReducers({
    auth: authReducer,
    router: connectRouter(history),
    category: categoryReducer,
  });

export default createRootReducer;
