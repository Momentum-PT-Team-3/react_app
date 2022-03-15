import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom"; //browser router is also a component itself
import "./index.css";
import App from "./App";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
); //tells react where App element should be rendered in the DOM, App is defined in app.js file
