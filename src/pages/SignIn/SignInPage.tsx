import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { User_API } from "../../api/user";
import { signInData } from "../../api/user/user.types";
import { Snackbar } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { Controller, useForm } from "react-hook-form";

export function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="http://chamodshehanka.com/">
        chamodshehanka.com
      </Link>
      {new Date().getFullYear()}
    </Typography>
  );
}

export const useStylesSignIn = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage: "url(https://source.unsplash.com/random)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function SignInPage() {
  const [openSuccessSnackbar, setOpenSuccessSnackbar] = useState(false);
  const [openFailedSnackbar, setOpenFailedSnackbar] = useState(false);

  const { handleSubmit, errors, control } = useForm();

  if (Object.keys(errors).length > 0) {
    console.log("Err : ", errors);
  }

  const onSubmitAction = (formData: signInData, e: any) => {
    e.preventDefault();

    //console.log(formData.isEmpty());
    User_API.signInUser(formData)
      .then(() => {
        setOpenSuccessSnackbar(true);
      })
      .catch((e) => {
        console.error(e);
        setOpenFailedSnackbar(true);
      });
  };
  const classes = useStylesSignIn();
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
              Sign in
            </Typography>
            <form
              className={classes.form}
              onSubmit={handleSubmit(onSubmitAction)}
              noValidate
            >
              <Controller
                as={<TextField />}
                control={control}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                size={"small"}
              />
              <Controller
                as={<TextField />}
                control={control}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                size={"small"}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
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
          Successfully sing in
        </Alert>
      </Snackbar>

      <Snackbar
        open={openFailedSnackbar}
        autoHideDuration={2000}
        onClose={() => setOpenFailedSnackbar(false)}
      >
        <Alert onClose={() => setOpenFailedSnackbar(false)} severity="error">
          Failed to sign in
        </Alert>
      </Snackbar>
    </>
  );
}

export default SignInPage;
