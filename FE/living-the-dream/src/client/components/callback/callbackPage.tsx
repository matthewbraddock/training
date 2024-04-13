import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

const CallbackPage: React.FC = () => {
  const { handleRedirectCallback, getAccessTokenSilently, isAuthenticated } =
    useAuth0();
  const navigate = useNavigate();
  const [isProcessingCallback, setIsProcessingCallback] = useState(true);

  useEffect(() => {
    const processCallback = async () => {
      // Check if the necessary parameters are in the URL
      if (
        window.location.search.includes("code=") &&
        window.location.search.includes("state=")
      ) {
        await handleRedirectCallback();
        await getAccessTokenSilently();
      }
      setIsProcessingCallback(false);
    };

    processCallback();
  }, [handleRedirectCallback, getAccessTokenSilently]);

  useEffect(() => {
    if (!isProcessingCallback && isAuthenticated) {
      navigate("/");
    }
  }, [isProcessingCallback, isAuthenticated, navigate]);

  return (
    <div>
      <h1>Callback Page</h1>
      {isProcessingCallback ? (
        <p>Processing callback...</p>
      ) : (
        <p>Redirecting...</p>
      )}
    </div>
  );
};

export default CallbackPage;
