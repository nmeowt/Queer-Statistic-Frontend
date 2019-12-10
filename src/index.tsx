import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import Home from "./views/Home";
import './index.css';
import './assets/css/queer-statistic.scss';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/index" render={props => <Home />} />
      <Redirect to="/index" />
    </Switch>
  </BrowserRouter>
  , document.getElementById('root'));