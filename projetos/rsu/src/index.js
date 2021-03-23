import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Routing from "./routes.js";
import Header from "theme/Header";
import MenuBar from "theme/Menu";
import Footer from "theme/Footer";
import "assets/scss/Main.scss"

ReactDOM.render(
  <>
    <flexItem>  <Header></Header></flexItem>
    <flexItem>
     
      <BrowserRouter>
      <MenuBar/>
        <Routing />
      </BrowserRouter>
    </flexItem>
    <flexItem>
      <Footer></Footer>
    </flexItem>
  </>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
