import React from "react";
import Header from "../header/header";
import ReactAnimatedWeather from 'react-animated-weather';
import { Typography } from "@material-ui/core";
import { Stack } from "@mui/material";


const DreamPage: React.FC = () => {

  const defaults = {
    icon: 'CLEAR_DAY',
    color: 'goldenrod',
    size: 200,
    animate: true
  };


  return (
    <>
      <Header />
      <Stack display="flex" flexDirection="column" alignItems="center" justifyContent="center" gap={8}>
        <ReactAnimatedWeather
          icon={defaults.icon}
          color={defaults.color}
          size={defaults.size}
          animate={defaults.animate}
        />
        <Stack gap={1}>
          <Typography variant="h6" align="center"><b>You ARE living the dream!</b>
          </Typography>
          <Typography variant="h6" align="center"><b>LETS GOOOO!</b></Typography>
        </Stack>
      </Stack>
    </>
  );
};

export default DreamPage;
