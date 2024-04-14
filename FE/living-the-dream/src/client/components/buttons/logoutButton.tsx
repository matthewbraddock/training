import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

export const LogoutButton = ({ className }: { className?: string }) => {
  const { logout } = useAuth0();

  const handleLogout = () => {
    logout({
      logoutParams: {
        returnTo: window.location.origin,
      },
    });
  };

  return (
    <button className={`button__logout ${className}`} onClick={handleLogout}>
      Log Out
    </button>
  );
};
