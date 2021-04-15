import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AdminDashboard from "./AdminDashboard"
import {Route, Switch} from "react-router-dom";

const Navigation = () => {
  return (
    <React.Fragment>
        <Switch>
          <Route path="/" exact={true} component={AdminDashboard} />
        </Switch>
    </React.Fragment>
  );
};
export default Navigation;