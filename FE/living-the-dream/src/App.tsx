import MainPage from "./client/components/mainPage/mainPage";
import NightmarePage from "./client/components/nightmarePage/nightmarePage";
import DreamPage from "./client/components/dreamPage/dreamPage";
import CallbackPage from "./client/components/callback/callbackPage";
import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Routes, Route } from "react-router-dom";
import ReactLoading from "react-loading";

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
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          width: "100vw",
        }}
      >
        <ReactLoading
          type={"bars"}
          color={"#7fffd4"}
          height={100}
          width={100}
        />
      </div>
    );
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
