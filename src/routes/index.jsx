import { Switch, Route } from "react-router-dom";
import Dashboard from "../pages/dashboard";
import Home from "../pages/home";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/dashboard">
        <Dashboard />
      </Route>
    </Switch>
  );
}
