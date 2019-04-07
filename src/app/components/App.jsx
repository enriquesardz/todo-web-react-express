import React from "react";
import { ConnectedDashboard } from "./Dashboard";
import { ConnectedNavigation } from "./Navigation";
import { ConnectedTaskDetail } from "./TaskDetail";
import { Provider } from "react-redux";
import { store } from "../store/index";
import { Router, Route } from "react-router-dom";
import { history } from "../store/history";
import "bootstrap/dist/css/bootstrap.min.css";

export const App = () => {
  const TaskDetailRoute = ({ match }) => <ConnectedTaskDetail match={match} />;

  return (
    <Router history={history}>
      <Provider store={store}>
        <>
          <ConnectedNavigation />
          <Route exact path="/dashboard" component={ConnectedDashboard} />
          <Route exact path="/task/:id" render={TaskDetailRoute} />
        </>
      </Provider>
    </Router>
  );
};
