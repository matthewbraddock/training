import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { ReactComponent as MySvg } from "./header_image.svg";

const useStyles = makeStyles(() => ({
  header: {
    display: "flex",
    height: "30vh",
    border: "none",
    backgroundColor: "transparent",
    margin: "0",
    padding: "0",
  },
  img: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    border: "none",
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <header className={classes.header}>
      <MySvg className={classes.img} />
    </header>
  );
};

export default Header;
