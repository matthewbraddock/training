import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { ReactComponent as MySvg } from "./header_image.svg";
import { LogoutButton } from "../buttons/logoutButton";

const useStyles = makeStyles(() => ({
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "row",
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
  logoutButton: {
    order: 2,
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <div>
      <header className={classes.header}>
        <MySvg className={classes.img} />
      </header>
      <LogoutButton className={classes.logoutButton} />
    </div>
  );
};

export default Header;
