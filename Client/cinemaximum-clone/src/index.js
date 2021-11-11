import React from "react";
import ReactDOM from "react-dom";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "./style.css";
import App from "./App";
import store from "./store";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
