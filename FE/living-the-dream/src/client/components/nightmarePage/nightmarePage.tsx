import React, { useEffect, useState } from "react";
import "./nightmarePage.css";
import Header from "../header/header";
import { Typography } from "@material-ui/core";
import ReactAnimatedWeather from 'react-animated-weather';
import { Stack } from "@mui/material";


const NightmarePage: React.FC = () => {
  const defaults = {
    icon: 'RAIN',
    color: 'grey',
    size: 200,
    animate: true
  };

  const api_key = process.env.REACT_APP_API_KEY;

  const [quote, setQuote] = useState('');

  useEffect(() => {
    fetch('https://api.api-ninjas.com/v1/quotes?category=inspirational', {
      headers: {
        'X-Api-Key': `${api_key}`
      },
    })
      .then(response => response.json())
      .then(data => setQuote(data['0'].quote))
      .catch(error => console.error('Error:', error));
  }, [api_key]);

  return (
    <>
      <Header />
      <Stack display="flex" flexDirection="column" alignItems="center" justifyContent="center" gap={8}>
        <div className="nightmarePage">
          <ReactAnimatedWeather
            icon={defaults.icon}
            color={defaults.color}
            size={defaults.size}
            animate={defaults.animate}
          />
          <Stack gap={1}>
            <Typography variant="h6" align="center"><b>Sorry you aren't living the dream BUT here is an inspirational quote to help you get into the mindset:</b>
            </Typography>
            <Typography variant="h6" align="center"><em>{quote}</em></Typography>
          </Stack>
        </div>
      </Stack>
    </>
  );
};
export default NightmarePage;
