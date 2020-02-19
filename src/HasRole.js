import React from "react";
import AuthContext from "../AuthContext";

function hasRole(required_scopes) {
    const auth = React.useContext(AuthContext);
    return auth.session.hasAccessScope(required_scopes);
}

export default hasRole;