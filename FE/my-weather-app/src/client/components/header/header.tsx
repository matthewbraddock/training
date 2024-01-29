import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  appBar: {
    position: "relative",
    height: "200px",
    backgroundColor: "#BCEAF1",
  },
  img: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
  },
}));

const Header: React.FC = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.appBar}>
      <img
        src="https://marketplace.canva.com/EAE9lfkkEkI/1/0/800w/canva-what%27s-the-weather-like-google-classroom-header-Llf1QifmIak.jpg"
        className={classes.img}
        alt="header"
      />
    </AppBar>
  );
};

export default Header;
