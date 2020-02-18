import React from "react";
import { Jumbotron, Button } from "react-bootstrap";
import { GearWideConnected, ShieldLock } from "react-bootstrap-icons";
import AuthContext from "../AuthContext";

function Home() {
  const auth = React.useContext(AuthContext);
  const payload = auth.session.id_payload;
  return (
    <Jumbotron>
      <h1 className="display-3"> {payload.given_name} </h1>{" "}
      <p className="lead">You are now logged in.</p>{" "}
      <p>You can update your profile details or password.</p>
      <Button variant="primary" href={auth.get_user_settings_url()} target="_blank">
         <GearWideConnected className="mr-1 mb-1" size={20} /> Update profile{" "}
       </Button>{" "}
       <Button variant="primary" href={auth.get_user_password_url()} target="_blank">
         <ShieldLock className="mr-1 mb-1" size={20} /> Change Password{" "}
       </Button>{" "}
    </Jumbotron>
  );
}

export default Home;
