import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import { HashRouter } from "react-router-dom";
import { createBrowserHistory } from "history";
import App from "./App";

ReactDOM.render(
  <HashRouter history={createBrowserHistory()}>
    <App />
  </HashRouter>,
  document.getElementById("root")
);
