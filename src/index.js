import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { MainComponent } from "./Component/MainComponent";
import Router from "./Component/Router";
import ApiBinding from "./Component/apibinding";

ReactDOM.render(<ApiBinding />, document.getElementById("root"));

reportWebVitals();
