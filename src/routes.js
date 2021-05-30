import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import HomePage from "./containers/HomePage";
import PortfolioPage from "./containers/PortfolioPage";
import ContactPage from "./containers/ContactPage";

const routes = () => (
  <BrowserRouter>
    <Route exact path="/" component={HomePage} />
    <Route exact path="/portfolio" component={PortfolioPage} />
    <Route exact path="/contact" component={ContactPage} />
  </BrowserRouter>
);

export default routes;