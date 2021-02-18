import React from 'react';
import AppContext from '../../context';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { routes } from "./routes";

const App = () => {
  const pages = routes.map((route) => (
    <Route
      key={route.key}
      component={route.component}
      exact={route.exact}
      path={route.path}
    />
  ));

  return (
    <AppContext.Provider>
      <Router>
        <Switch>{pages}</Switch>
      </Router>
    </AppContext.Provider>
  );
}

export default App;
