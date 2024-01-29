import React from "react";

import "./App.css";
import Header from "./client/components/header/header";
import WeatherDisplay from "./client/components/weatherDisplay/weatherDisplay";

function App() {
  return (
    <div className="App">
      <Header />
      <WeatherDisplay className="weather-display" />
    </div>
  );
}

export default App;
