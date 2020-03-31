import React from "react";
import { Jumbotron, Button } from "react-bootstrap";
import { GearWideConnected, ShieldLock, CardText } from "react-bootstrap-icons";
import AuthContext from "../AuthContext";
import {$role} from "../App";

function Dashboard() {
  const $auth = React.useContext(AuthContext);
  const payload = $auth.session.id_payload;
  return (
    <Jumbotron>
      <h1 className="display-3"> {payload.given_name} </h1>{" "}
      <p className="lead"> You are now logged in . </p>{" "}
      <p> You can update your profile details or password. </p>{" "}
      {$role(['profile']) &&
      <Button
        variant="primary"
        href={$auth.get_user_settings_url()}
        target="_blank"
        className="mr-1"
      >
        <GearWideConnected className="mr-1 mb-1" size={20} /> Update profile{" "}
      </Button>
      }
      {$role(['profile']) &&
      <Button
        variant="danger"
        href={$auth.get_user_password_url()}
        target="_blank"
        className="mr-1"
      >
        <ShieldLock className="mr-1 mb-1" size={20} /> Change password{" "}
      </Button>
      }
      {$role(['post:admin']) &&
      <Button
        variant="secondary"
        href="#"
        target="_blank"
        className="mr-1"
      >
        <CardText className="mr-1 mb-1" size={20} /> Manage posts{" "} 
        </Button>
      }
      {$role(['post:admin', 'tag:admin']) &&
      <Button
        variant="info"
        href="#"
        target="_blank"
        className="mr-1"
      >
        <CardText className="mr-1 mb-1" size={20} /> Manage tags{" "} 
        </Button>
      }
    </Jumbotron>
  );
}

export default Dashboard;
