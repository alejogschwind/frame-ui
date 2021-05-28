import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import HomePage from "./containers/HomePage";
import PortfolioPage from "./containers/PortfolioPage";

const routes = () => (
  <BrowserRouter>
    <Route exact path="/" component={HomePage} />
    <Route exact path="/portfolio" component={PortfolioPage} />
  </BrowserRouter>
);

export default routes;