import React from "react";
import { BrowserRouter } from "react-router-dom";

import Topbar from "../../components/Topbar";

import Routes from "../../routes";

import "./App.scss";

const App = () => (
  <BrowserRouter>
    <Topbar />
  </BrowserRouter>
);

export default App;
