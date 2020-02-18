import React from "react";
import "./custom.scss";
import { Container, Jumbotron, Button } from "react-bootstrap";
import Header from "./components/Header";
import { Switch, Route, Link } from "react-router-dom";
import AuthContext from "./AuthContext";
import { Columns, BoxArrowRight } from "react-bootstrap-icons";
import { Auth } from "@axioms/web-js";

// Auth
const auth = new Auth({
  axioms_domain: process.env.REACT_APP_Axioms_Domain,
  response_type: "id_token token",
  redirect_uri: process.env.REACT_APP_Redirect_Uri,
  post_logout_uri: process.env.REACT_APP_Post_Logout_Uri,
  client_id: process.env.REACT_APP_Client_Id,
  scope: "openid profile",
  post_login_navigate: "/dashboard"
});

function App() {
  return (
    <AuthContext.Provider value={auth}>
      <div className="App">
        <Container>
          <Header />
          <Switch>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Container>
      </div>
    </AuthContext.Provider>
  );
}

function Home() {
  return (
    <Jumbotron>
      <h1 className="display-3">Axioms</h1>
      <p className="lead">Sample React App</p>
      {auth.session.is_authenticated() ? (
        <div>
          <p>Please view dashboard for more actions.</p>
          <Button variant="primary">
            <Columns className="mr-1 mb-1" size={20} /> Dashboard
          </Button>
        </div>
      ) : (
        <div>
          <p>To view dashboard please login.</p>
          <Button variant="primary">
            <BoxArrowRight className="mr-1 mb-1" size={20} /> Login
          </Button>
        </div>
      )}
    </Jumbotron>
  );
}

export default App;
