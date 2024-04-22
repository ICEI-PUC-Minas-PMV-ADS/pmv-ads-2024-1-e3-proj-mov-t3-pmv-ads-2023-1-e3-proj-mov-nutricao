import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Profile from "./Profile";
 
const LogoutButton = () => {
    const { logout, isAuthenticated, isLoading, user } = useAuth0();
 
    if (!isLoading && user) {
        return (
            <>
                <button className="btn btn-primary 
                    mx-5 my-5 px-4 logoutBtn"
                    onClick={() => logout({ returnTo: window.location.origin })}>
                    Log Out
                </button>
                <br />
                <Profile />
            </>
        );
    }
};
 
export default LogoutButton;