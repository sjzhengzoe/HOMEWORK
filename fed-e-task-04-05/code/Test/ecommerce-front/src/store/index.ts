import { applyMiddleware, createStore } from "redux";
import createRootReducer from "./reducers";
import { createHashHistory } from "history";
import { routerMiddleware } from "connected-react-router";

import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";
import { composeWithDevTools } from "redux-devtools-extension";

export const history = createHashHistory();

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  createRootReducer(history),
  // 使用谷歌插件浏览器
  composeWithDevTools(applyMiddleware(routerMiddleware(history), sagaMiddleware))
);

sagaMiddleware.run(rootSaga);
export default store;
