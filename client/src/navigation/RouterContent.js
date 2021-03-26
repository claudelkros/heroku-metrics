import { Route, Switch } from "react-router-dom";
import AboutView from "../components/about/AboutView";
import HomeView from "../components/home/HomeView";
import ManageView from "../components/manage/ManageView";
import { ABOUT, DASHBOARD, HOME, MANAGE } from "./CONSTANTS";
import PrivateRoute from "./PrivateRoute";

export default function RouterContent() {
  return (
    <Switch>
      <PrivateRoute exact path={DASHBOARD} component={HomeView} />
      <Route exact path={HOME} component={HomeView} />
      <Route exact path={ABOUT} component={AboutView} />
      <Route exact path={MANAGE} component={ManageView} />
    </Switch>
  );
}
