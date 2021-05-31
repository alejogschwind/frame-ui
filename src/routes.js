import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import HomePage from "./containers/HomePage";
import PortfolioPage from "./containers/PortfolioPage";
import ContactPage from "./containers/ContactPage";
import ServiceDevelopmentPage from "./containers/ServiceDevelopmentPage";

const routes = () => (
  <BrowserRouter>
    <Route exact path="/" component={HomePage} />
    <Route exact path="/portfolio" component={PortfolioPage} />
    <Route exact path="/contacto" component={ContactPage} />
    <Route exact path="/servicio/desarollo" component={ServiceDevelopmentPage} />
  </BrowserRouter>
);

export default routes;