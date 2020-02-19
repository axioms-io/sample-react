import React from 'react';
import AuthContext from "../AuthContext";

function Login() {
    const auth = React.useContext(AuthContext);
    auth.login_with_redirect();
    return null;
}

export default Login;