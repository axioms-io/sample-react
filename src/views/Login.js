import React from 'react';
import AuthContext from "../AuthContext";

function Login() {
    const auth = React.useContext(AuthContext);
    return auth.login_with_redirect();
}

export default Login;