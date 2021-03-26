import React from "react";
import { Route, Switch } from "react-router-dom";
import DashboardView from "../components/dashboard/DashboardView";
import HeaderView from "../components/header/HeaderView";
import { ABOUT, DASHBOARD, HOME, MANAGE } from "./CONSTANTS";
import PrivateRoute from "./PrivateRoute";

export default function RouterHeader() {
  return (
    <Switch>
      <PrivateRoute exact path={DASHBOARD} component={HeaderView} />
      <Route exact path={HOME} component={HeaderView} />
      <PrivateRoute exact path={MANAGE} component={HeaderView} />
      <Route exact path={ABOUT} component={HeaderView} />
    </Switch>
  );
}
