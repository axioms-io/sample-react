import React from 'react';
import AuthContext from "../AuthContext";

function Logout() {
    const auth = React.useContext(AuthContext);
    return auth.logout_with_redirect();
}

export default Logout;