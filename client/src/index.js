import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./containers/App";
import * as serviceWorker from "./serviceWorker";

/** redux */
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import { createLogger } from "redux-logger";

const middleware = [thunk, createLogger(rootReducer)];
const store = createStore(rootReducer, {}, applyMiddleware(...middleware));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
