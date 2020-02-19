import React from 'react';
import AuthContext from "../AuthContext";

function Logout() {
    const auth = React.useContext(AuthContext);
    auth.logout_with_redirect();
    return null
}

export default Logout;