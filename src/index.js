import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Fb from "./Fb";

Fb.init()

var mountNode = document.getElementById("app");
ReactDOM.render(<App />, mountNode);