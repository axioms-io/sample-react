import React from "react";
import "./custom.scss";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import { Switch, Route, Redirect } from "react-router-dom";
import AuthContext from "./AuthContext";
import Home from "./views/Home";
import Login from "./views/Login";
import Logout from "./views/Logout";
import Callback from "./views/Callback";
import Dashboard from "./views/Dashboard";
import { Auth } from "@axioms/web-js";

// Auth
const $auth = new Auth({
  axioms_domain: process.env.REACT_APP_Axioms_Domain,
  response_type: "code",
  redirect_uri: process.env.REACT_APP_Redirect_Uri,
  post_logout_uri: process.env.REACT_APP_Post_Logout_Uri,
  client_id: process.env.REACT_APP_Client_Id,
  scope: "openid profile",
  post_login_navigate: "/dashboard"
});

function App() {
  return (
    <AuthContext.Provider value={$auth}>
      <div className="App">
        <Container>
          <Header />
          <Switch>
            <Route path="/login">
              <Login />
            </Route>{" "}
            <PrivateRoute path="/logout">
              <Logout />
            </PrivateRoute>{" "}
            <Route path="/callback">
              <Callback />
            </Route>{" "}
            <PrivateRoute path="/dashboard">
              <Dashboard />
            </PrivateRoute>{" "}
            <Route path="/">
              <Home />
            </Route>{" "}
          </Switch>{" "}
        </Container>{" "}
      </div>{" "}
    </AuthContext.Provider>
  );
}

function PrivateRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        $auth.session.is_authenticated() ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: {
                from: location
              }
            }}
          />
        )
      }
    />
  );
}

function $role(required_scopes) {
  return $auth.session.hasAccessScope(required_scopes);
}

export default App;
export { $role };
