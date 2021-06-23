import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import HomePage from "./containers/HomePage";
import PortfolioPage from "./containers/PortfolioPage";
import ContactPage from "./containers/ContactPage";
import ServiceDevelopmentPage from "./containers/ServiceDevelopmentPage";
import ServiceProduction from "./containers/ServiceProduction";
import ServiceMarketingDigital from "./containers/ServiceMarketingDigital";
import ServiceBrandingTV from "./containers/ServiceBrandingTV";
import ServiceStudio from "./containers/ServiceStudio";
import ServicePostProduction from "./containers/ServicePostProduction";
import PortfolioDetailPage from "./containers/PortfolioDetailPage";

const routes = () => (
  <BrowserRouter>
    <Route exact path="/" component={HomePage} />
    <Route exact path="/portfolio" component={PortfolioPage} />
    <Route exact path="/contacto" component={ContactPage} />
    <Route exact path="/servicio/desarollo" component={ServiceDevelopmentPage} />
    <Route exact path="/servicio/produccion" component={ServiceProduction} />
    <Route exact path="/servicio/marketing" component={ServiceMarketingDigital} />
    <Route exact path="/servicio/brandingTV" component={ServiceBrandingTV} />
    <Route exact path="/servicio/estudio" component={ServiceStudio} />
    <Route exact path="/servicio/post-produccion" component={ServicePostProduction} />
    <Route exact path="/portfolio/:url" component={PortfolioDetailPage} />
  </BrowserRouter>
);

export default routes;