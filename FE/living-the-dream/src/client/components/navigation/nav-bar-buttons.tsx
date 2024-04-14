import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { SignupButton } from "../buttons/signupButton";
import { LoginButton } from "../buttons/loginButton";
import { LogoutButton } from "../buttons/logoutButton";
import { GoBackButton } from "../buttons/goBackButton";
import { useLocation } from "react-router-dom";

export const NavBarButtons = () => {
  const { isAuthenticated } = useAuth0();
  const location = useLocation();
  const showGoBackButton = ['/dream', '/nightmare'].includes(location.pathname);

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
          {showGoBackButton && <GoBackButton />}
        </>
      )}
    </div>
  );
};
