import { connectRouter, RouterState } from "connected-react-router";
import { combineReducers } from "redux";
import { History } from "history";
import authReducer, { AuthState } from "./auth.reducer";
export interface AppState {
  router: RouterState;
  auth: AuthState;
}

const createRootReducer = (history: History) =>
  combineReducers({
    auth: authReducer,
    router: connectRouter(history),
  });

export default createRootReducer;
