import React, { useState } from "react";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useTranslation } from "react-i18next";

import { Link as RouterLink } from "react-router-dom";
import { CssBaseline, Snackbar } from "@mui/material";
import { useAuth } from "../../../contexts/AuthContext";


const Login = () => {
  const { t } = useTranslation();
  const [ email, setEmail ] = useState<string | null>(null);
  const { setCurrentUser, login } = useAuth();

  const regex = new RegExp('[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const d = {
      email: data.get("email"),
      password: data.get("password"),
    }
    console.log();
    await login(d.email, d.password)
      .then((userCredential) => {
        setCurrentUser(userCredential);
      })
      .catch((err) => {
        const errCode = err.code;
        const errMsg = err.message;
        console.log(errCode, "\n", errMsg)
        // todo snackbar msg
      })
  };

  function checkEmail(): boolean | undefined {
    if (email === null)
    {
      return true;
    }
    else if (!regex.test(email)) {
      return false;
    }
    return true;
  }

  return (
    <Container component="main" maxWidth="sm">
      <CssBaseline />
      <Box
        sx={{
          boxShadow: 3,
          borderRadius: 2,
          px: 4,
          py: 6,
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          {t("signIn")}
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            //error={checkEmail()}
            onChange={(e) => {setEmail(e.target.value)}}
            helperText={t("email.notValid")}
            fullWidth
            id="email"
            label={t("email.label")}
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label={t("password.label")}
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label={t("rememberMe")}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            {t("signIn")}
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                {t("password.forgotten")}
              </Link>
            </Grid>
            <Grid item>
              <Link component={RouterLink} to="/signup">
                {t("noAcc")}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}

export default Login;