import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
 
const LoginButton = () => {
    const { loginWithRedirect, isAuthenticated, user, isLoading } = useAuth0();
    if (!isLoading && !user) {
        return <button className="btn btn-primary 
            mx-5 my-5 px-4"
            onClick={() => loginWithRedirect()}>
            Log In</button>;
    }
};
 
export default LoginButton;