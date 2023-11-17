import React from "react";
import ReactDOM from "react-dom";
import MainApp from "./App";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <Router>
    <MainApp />
  </Router>,
  document.getElementById("root")
);
