import React from 'react';
import AuthContext from "../AuthContext";

function Callback() {
    const $auth = React.useContext(AuthContext);
    $auth.process_authorize_response();
    return null;
}

export default Callback;