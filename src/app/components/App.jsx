import React from "react";
import { ConnectedDashboard } from "./Dashboard";
import { ConnectedNavigation } from "./Navigation";
import { Provider } from "react-redux";
import { store } from "../store/index";
import { Router, Route } from "react-router-dom";
import { Task } from "./Task";
import { history } from "../store/history";
import "bootstrap/dist/css/bootstrap.min.css";

export const App = () => {
  return (
    <Router history={history}>
      <Provider store={store}>
        <>
          <ConnectedNavigation />
          <Route exact path="/dashboard" component={ConnectedDashboard} />
          <Route exact path="/task/:taskId" component={Task} />
        </>
      </Provider>
    </Router>
  );
};
