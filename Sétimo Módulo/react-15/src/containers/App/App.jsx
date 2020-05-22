import React from "react";
import { BrowserRouter } from "react-router-dom";

import Topbar from "../../components/Topbar";

import Routes from "../../routes";

import "./App.scss";

const App = () => (
  <BrowserRouter data-testid="app">
    <Topbar />
    <Routes />
  </BrowserRouter>
);

export default App;
