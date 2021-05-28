import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import HomePage from "./containers/HomePage";

const routes = () => (
  <BrowserRouter>
    <Route exact path="/" component={HomePage} />
  </BrowserRouter>
);

export default routes;