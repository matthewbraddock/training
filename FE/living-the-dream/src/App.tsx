import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import Header from "./client/components/header/header";
import MainPage from "./client/components/mainPage/mainPage";
import NightmarePage from "./client/components/nightmarePage/nightmarePage";
import DreamPage from "./client/components/dreamPage/dreamPage";
import { Auth0Provider } from "@auth0/auth0-react";

function App() {
  const [isLivingTheDream, setIsLivingTheDream] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const domain = process.env.REACT_APP_AUTH0_DOMAIN;
  const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
  const redirectUri = process.env.REACT_APP_AUTH0_CALLBACK_URL;

  const onRedirectCallback = () => {
    window.location.replace("/");
  };

  if (!(domain && clientId && redirectUri)) {
    return null;
  }

  return (
    <div className="app-container">
      <Header />
      <Auth0Provider
        domain={domain}
        clientId={clientId}
        authorizationParams={{
          redirect_uri: redirectUri,
        }}
        onRedirectCallback={onRedirectCallback}
      >
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <MainPage
                  setIsLivingTheDream={setIsLivingTheDream}
                  setIsFormSubmitted={setIsFormSubmitted}
                />
              }
            />
            <Route
              path="/callback"
              element={<h1>WOW The Callback works!</h1>}
            />
            {isFormSubmitted &&
              (isLivingTheDream ? (
                <Route path="/dreamPage" element={<DreamPage />} />
              ) : (
                <Route path="/nightmarePage" element={<NightmarePage />} />
              ))}
          </Routes>
        </Router>
      </Auth0Provider>
    </div>
  );
}

export default App;
