import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./app.css";
import Login from "./components/login/Login";
import Main from "./components/main/Main";

function App({ authService }) {
  return (
    <Router>
      <Switch>
        <Route exact path={["/", "/login"]}>
          <Login authService={authService} />
        </Route>
        <Route path="/main">
          <Main authService={authService} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
