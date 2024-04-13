import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { SignupButton } from "../buttons/signupButton";
import { LoginButton } from "../buttons/loginButton";
import { LogoutButton } from "../buttons/logoutButton";

export const NavBarButtons = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <div className="nav-bar__buttons">
      {!isAuthenticated && (
        <>
          <SignupButton />
          <LoginButton />
        </>
      )}
      {isAuthenticated && (
        <>
          <LogoutButton />
        </>
      )}
    </div>
  );
};
