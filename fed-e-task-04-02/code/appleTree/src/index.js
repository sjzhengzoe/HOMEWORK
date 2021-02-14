import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./components/App";
import { Provider } from "mobx-react";
import appleStore from "./stores/store.js";

ReactDOM.render(
  <Provider appleStore={appleStore}>
    <App />
  </Provider>,
  document.getElementById("root")
);
