import React, { useState } from "react";
import { TextField, Button, Typography, Box } from "@mui/material";
import Snackbar, { SnackbarCloseReason } from "@mui/material/Snackbar";

type WeatherDisplayProps = {
  className?: string;
};

interface Location {
  type: string;
  value: string | { lat: string; lon: string };
  state?: string;
  country?: string;
}

const WeatherDisplay: React.FC<WeatherDisplayProps> = ({ className }) => {
  const [weather, setWeather] = useState<{
    wind_speed: number;
    wind_degrees: number;
    temp: number;
    humidity: number;
    sunset: number;
    min_temp: number;
    cloud_pct: number;
    feels_like: number;
    sunrise: number;
    max_temp: number;
  } | null>(null);

  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [zip, setZip] = useState("");
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const [cityError, setCityError] = useState(false);
  const [zipError, setZipError] = useState(false);
  const [latError, setLatError] = useState(false);
  const [lonError, setLonError] = useState(false);

  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const showError = (message: string) => {
    setErrorMessage(message);
    setSnackbarOpen(true);
  };

  const fetchWeather = async (location: Location) => {
    try {
      let url = "";

      switch (location.type) {
        case "coordinates":
          if (typeof location.value === "object") {
            url = `https://api.api-ninjas.com/v1/weather?lat=${location.value.lat}&lon=${location.value.lon}`;
          }
          break;
        case "zip":
          url = `https://api.api-ninjas.com/v1/weather?zip=${location.value}`;
          break;
        case "city":
          url = `https://api.api-ninjas.com/v1/weather?city=${location.value}`;
          if (location.state) url += `&state=${location.state}`;
          if (location.country) url += `&country=${location.country}`;
          break;
        default:
          throw new Error("Invalid location type");
      }

      const response = await fetch(url, {
        method: "GET",
        headers: { "X-Api-Key": "d3hyyP16ZBgI0gC2cfdskA==JOUczayM9OULuMVH" },
      });

      if (!response.ok) {
        if (response.status === 400) {
          showError(
            "Invalid input. Please check your Lat/Long, zip code, or city."
          );
        } else {
          showError("An error occurred. Please try again.");
        }
        return;
      }

      const weatherData = await response.json();
      setWeather(weatherData);
    } catch (error) {
      showError("An error occurred. Please try again.");
    }
  };

  const handleButtonClick = () => {
    setWeather(null);

    setErrorMessage("");

    if (city && !zip && !lat && !lon) {
      if (state || country) {
        fetchWeather({ type: "city", value: city, state, country });
        setCityError(false);
      } else {
        showError("Please include 'State' and 'Country' if available.");
        setCityError(true);
      }
    } else if (zip && !city && !lat && !lon && !state && !country) {
      fetchWeather({ type: "zip", value: zip });
      setZipError(false);
    } else if (lat && lon && !city && !zip && !state && !country) {
      fetchWeather({ type: "coordinates", value: { lat, lon } });
      setLatError(false);
      setLonError(false);
    } else if (state && !city) {
      showError("City is required when 'State' is provided.");
      setCityError(true);
    } else if (country && !city) {
      showError("City is required when 'Country' is provided.");
      setCityError(true);
    } else if (lat && !lon) {
      showError("Longitude is required when 'Latitude' is provided.");
      setLatError(true);
    } else if (lon && !lat) {
      showError("Latitude is required when 'Longitude' is provided.");
      setLonError(true);
    } else if (zip && (city || state || country || lat || lon)) {
      showError("Zip must be used alone.");
      setZipError(true);
    } else {
      showError(
        "Invalid input. Please enter one of the following options: City, Zip Code, or Latitude & Longitude."
      );
    }
  };

  const handleCloseSnackbar = (
    event: Event | React.SyntheticEvent<any, Event>,
    reason: SnackbarCloseReason
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbarOpen(false);
  };

  return (
    <div className={className}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* Location Input Instructions */}
        <Typography variant="h5" gutterBottom>
          <strong>Location Input</strong>
        </Typography>
        <Typography>Please enter one of the following options:</Typography>
        <Box
          component="ul"
          sx={{
            pl: 4,
            color: "blue",
            textAlign: "left",
            mx: "auto",
            width: "fit-content",
          }}
        >
          <Typography component="li">
            <strong>City:</strong> Include 'State' and 'Country' if available
            (optional).
          </Typography>
          <Typography component="li">
            <strong>Zip Code:</strong> Ideal for specific locations within a
            country.
          </Typography>
          <Typography component="li">
            <strong>Latitude & Longitude:</strong> For precise geographic
            coordinates.
          </Typography>
        </Box>
      </Box>

      {/* Input Fields */}
      <TextField
        error={cityError}
        helperText={
          cityError
            ? "City is required when 'State' or 'Country' is provided."
            : ""
        }
        label="City"
        value={city}
        onChange={(e) => {
          setCity(e.target.value);
          setCityError(false);
        }}
      />
      <TextField
        label="State (Optional)"
        value={state}
        onChange={(e) => {
          setState(e.target.value);
          setCityError(false);
        }}
      />
      <TextField
        label="Country (Optional)"
        value={country}
        onChange={(e) => {
          setCountry(e.target.value);
          setCityError(false);
        }}
      />
      <TextField
        error={zipError}
        helperText={zipError ? "Zip must be used alone." : ""}
        label="Zip Code"
        value={zip}
        onChange={(e) => {
          setZip(e.target.value);
          setZipError(false);
        }}
      />
      <TextField
        error={lonError}
        helperText={
          lonError ? "Latitude is required when 'Longitude' is provided." : ""
        }
        label="Latitude"
        value={lat}
        onChange={(e) => {
          setLat(e.target.value);
          setLatError(false);
          setLonError(false);
        }}
      />
      <TextField
        error={latError}
        helperText={
          latError ? "Longitude is required when 'Latitude' is provided." : ""
        }
        label="Longitude"
        value={lon}
        onChange={(e) => {
          setLon(e.target.value);
          setLonError(false);
          setLatError(false);
        }}
      />

      {/* Get Weather Button */}
      <Button variant="contained" onClick={handleButtonClick}>
        Get Weather
      </Button>

      {/* Weather Data Display */}
      {weather && (
        <div>
          {weather && (
            <div>
              <h2>Weather Data:</h2>
              <p>Wind Speed: {weather.wind_speed}</p>
              <p>Wind Degrees: {weather.wind_degrees}</p>
              <p>Temperature: {weather.temp}°C</p>
              <p>Humidity: {weather.humidity}%</p>
              <p>Sunset: {new Date(weather.sunset * 1000).toLocaleString()}</p>
              <p>Min Temperature: {weather.min_temp}°C</p>
              <p>Cloud Percentage: {weather.cloud_pct}%</p>
              <p>Feels Like: {weather.feels_like}°C</p>
              <p>
                Sunrise: {new Date(weather.sunrise * 1000).toLocaleString()}
              </p>
              <p>Max Temperature: {weather.max_temp}°C</p>
            </div>
          )}
        </div>
      )}

      {/* Snackbar for Error Messages */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        message={errorMessage}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        sx={{
          width: "auto",
          maxWidth: "90%",
        }}
      />
    </div>
  );
};

export default WeatherDisplay;
