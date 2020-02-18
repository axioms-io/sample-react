import React from 'react';
import AuthContext from "../AuthContext";

function Callback() {
    const auth = React.useContext(AuthContext);
    return auth.process_authorize_response();
}

export default Callback;