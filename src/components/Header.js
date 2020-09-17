import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typed from "react-typed";
import { Typography, Avatar, Grid, Box } from "@material-ui/core";

//CSS Styles
const useStyles = makeStyles((theme) => ({
  Avatar: {
    width: theme.spacing(17),
    height: theme.spacing(17),
    margin: theme.spacing(1),
  },

  Title: {
    color: "#E8E7F4",
  },

  Subtitle: {
    color: "#03DFFE",
    marginBottom: "3rem",
  },

  TypedContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100vw",
    textAlign: "center",
    zIndex: 1,
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <Box className={classes.TypedContainer}>
      <Grid container justify="center">
        <Avatar className={classes.Avatar} src="" alt="Rafae Pasha" />
      </Grid>

      <Typography className={classes.Title} variant="h1">
        Hi, I'm Rafae.
      </Typography>

      <br />

      <Typography className={classes.Title} variant="h4" display="inline">
        I'm a
      </Typography>

      <Typography
        className={classes.Subtitle}
        variant="h4"
        display="inline"
        style={{ marginLeft: 10 }}
      >
        <Typed
          strings={[
            "Full-stack developer.",
            "Car enthusiast.",
            "Gamer.",
            "Musician.",
          ]}
          typeSpeed={40}
          backSpeed={40}
          cursorChar="_"
          loop
        />
      </Typography>
    </Box>
  );
};

export default Header;
