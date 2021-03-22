import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Routing from "./routes.js";
import Header from 'components/Header';
import Footer from  'components/Footer'
import './App.css';

ReactDOM.render(
  <>
  <Header></Header>
  <BrowserRouter>
			<Routing	/>
  </BrowserRouter>
  <Footer></Footer>
</>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
