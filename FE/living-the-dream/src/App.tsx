import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./client/components/mainPage/mainPage";
import NightmarePage from "./client/components/nightmarePage/nightmarePage";
import DreamPage from "./client/components/dreamPage/dreamPage";
import CallbackPage from "./client/components/callback/callbackPage";
import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { isAuthenticated, loginWithRedirect, isLoading } = useAuth0();
  const [shouldRenderRoutes, setShouldRenderRoutes] = useState(isAuthenticated);

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      loginWithRedirect();
    }
  }, [isAuthenticated, loginWithRedirect, isLoading]);

  useEffect(() => {
    setShouldRenderRoutes(isAuthenticated);
  }, [isAuthenticated]);

  if (isLoading || !shouldRenderRoutes) {
    return <div>Loading...</div>;
  }

  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/nightmare" element={<NightmarePage />} />
        <Route path="/dream" element={<DreamPage />} />
        <Route path="/callback" element={<CallbackPage />} />
        {!isAuthenticated && (
          <Route path="/*" element={<div>Redirecting to login...</div>} />
        )}
      </Routes>
    </div>
  );
}

export default App;
