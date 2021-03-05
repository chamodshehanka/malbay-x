import React, { useState } from "react";
import { Copyright, useStylesSignIn } from "../SignIn/SignInPage";
import Grid from "@material-ui/core/Grid";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
//import FormControlLabel from "@material-ui/core/FormControlLabel";
//import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { User_API } from "../../api/user";
import { signUpData } from "../../api/user/user.types";
import { Snackbar } from "@material-ui/core";
import { Alert } from "@material-ui/lab";

function SignUpPage() {
  const history = useHistory();
  const classes = useStylesSignIn();

  const [openSuccessSnackbar, setOpenSuccessSnackbar] = useState(false);
  const [openFailedSnackbar, setOpenFailedSnackbar] = useState(false);

  const {
    // register,
    handleSubmit, errors
  } = useForm();

  if (errors) {
    console.log("Err : ", errors);
  }

  const onSubmitAction = (formData: signUpData, e: any) => {
    e.preventDefault();

    //console.log(formData.isEmpty());
    User_API.signUpUser(formData)
      .then(() => {
        setOpenSuccessSnackbar(true);
      })
      .catch((e) => {
        console.error(e);
        setOpenFailedSnackbar(true);
      });
  };

  return (
    <>
      <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <Grid item xs={false} sm={4} md={7} className={classes.image} />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <form
              className={classes.form}
              onSubmit={handleSubmit(onSubmitAction)}
            >
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    label="Name"
                    name="name"
                    autoComplete="name"
                    autoFocus
                    size={"small"}
                    // ref={register({ required: true })}
                  />
                </Grid>

                <Grid item xs={6}>
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    label="Address"
                    name="address"
                    autoComplete="address"
                    autoFocus
                    size={"small"}
                    // ref={register({ required: true })}
                  />
                </Grid>
              </Grid>

              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                label="Email Address"
                name="email"
                autoFocus
                size={"small"}
                // ref={register({ required: true })}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                size={"small"}
                // ref={register({ required: true })}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Sign Up
              </Button>
              <Grid container>
                <Grid item>
                  <Link variant="body2" onClick={() => history.push("/signIn")}>
                    {"Already have an account? Sign Ip"}
                  </Link>
                </Grid>
              </Grid>
              <Box mt={5}>
                <Copyright />
              </Box>
            </form>
          </div>
        </Grid>
      </Grid>

      <Snackbar
        open={openSuccessSnackbar}
        autoHideDuration={2000}
        onClose={() => setOpenSuccessSnackbar(false)}
      >
        <Alert onClose={() => setOpenSuccessSnackbar(false)} severity="success">
          Successfully Data Saved
        </Alert>
      </Snackbar>

      <Snackbar
        open={openFailedSnackbar}
        autoHideDuration={2000}
        onClose={() => setOpenFailedSnackbar(false)}
      >
        <Alert onClose={() => setOpenFailedSnackbar(false)} severity="error">
          Failed to save data
        </Alert>
      </Snackbar>
    </>
  );
}

export default SignUpPage;
