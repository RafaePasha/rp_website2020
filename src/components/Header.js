import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typed from "react-typed";
import { Typography, Avatar, Grid, Box } from "@material-ui/core";

//CSS Styles
const useStyles = makeStyles((theme) => ({
  Avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    margin: theme.spacing(1),
  },

  Title: {
    color: "#face0a",
  },

  Subtitle: {
    color: "white",
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

      <Typography className={classes.Title} variant="h4">
        <Typed strings={["Rafae Pasha"]} typeSpeed={40} />
      </Typography>

      <br />

      <Typography className={classes.Subtitle} variant="h5">
        <Typed
          strings={["Web Development", "Backend Development", "MERN Stack"]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
      </Typography>
    </Box>
  );
};

export default Header;
