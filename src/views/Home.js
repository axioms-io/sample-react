import React from 'react';
import { Jumbotron, Button } from "react-bootstrap";
import { Columns, BoxArrowRight } from "react-bootstrap-icons";
import AuthContext from "../AuthContext";

function Home() {
  const $auth = React.useContext(AuthContext);
  return (
    <Jumbotron>
      <h1 className="display-3">Axioms</h1>
      <p className="lead">Sample React App</p>
      {$auth.session.is_authenticated() ? (
        <div>
          <p>Please view dashboard for more actions.</p>
          <Button variant="primary" href="/dashboard">
            <Columns className="mr-1 mb-1" size={20} /> Dashboard
          </Button>
        </div>
      ) : (
        <div>
          <p>To view dashboard please login.</p>
          <Button variant="primary" href="/login">
            <BoxArrowRight className="mr-1 mb-1" size={20} /> Login
          </Button>
        </div>
      )}
    </Jumbotron>
  );
}

export default Home;