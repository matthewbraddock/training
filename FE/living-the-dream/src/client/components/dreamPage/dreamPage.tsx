import React from "react";
import Header from "../header/header";
import ReactAnimatedWeather from 'react-animated-weather';
import { Typography } from "@material-ui/core";
import { Stack } from "@mui/material";
import { useLocation } from "react-router-dom";



const DreamPage: React.FC = () => {
  const location = useLocation();
  const braddockSpecial = location.state.braddockSpecial;

  const defaults = {
    icon: 'CLEAR_DAY',
    color: 'goldenrod',
    size: 200,
    animate: true
  };

  const { state } = useLocation();
  console.log(state.braddockSpecial);


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
          {braddockSpecial === true ? (
            <Typography variant="h6" align="center"><b>You're Braddock, you are always living the DREAM!!!</b></Typography>
          ) : (
            <>
              <Typography variant="h6" align="center"><b>You ARE living the dream!</b></Typography>
              <Typography variant="h6" align="center"><b>LETS GOOOO!</b></Typography>
            </>
          )}
        </Stack>
      </Stack>
    </>
  );
};

export default DreamPage;
