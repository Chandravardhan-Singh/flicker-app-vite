import React, { useState } from "react";
import "./login.css";
import "../style.css";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { login } from "../../redux/feature/products/authSlice";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useForm, SubmitHandler, Controller } from "react-hook-form";

import { useNavigate } from "react-router-dom";
import { RoutePaths } from "../../routes/route-path.enum";

type Props = {};

const marginTop = {
  marginTop: 15,
};

type Inputs = {
  email: string;
  password: string;
};

export const Login = (props: Props) => {
  const [rememberMe, setRememberMe] = useState<boolean>(false);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    control,
  } = useForm<Inputs>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onLoginPressed: SubmitHandler<Inputs> = (data) => {
    dispatch(
      login({
        email: data.email,
        password: data.password,
        rememberMe,
      })
    );
    navigate(RoutePaths.Root);
  };

  const navigateToSignUp = () => {
    navigate(RoutePaths.Signup);
  };

  return (
    <div>
      <Grid
        container
        sx={{
          flexDirection: {
            lg: "row",
            xs: "column-reverse",
            sm: "column-reverse",
            md: "column-reverse",
          },
        }}
      >
        <Grid item xs={12} lg={6} spacing={0}>
          <div
            style={{
              backgroundColor: "#000",
              width: "100%",
              height: "100vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              style={{
                width: "auto",
                height: "80%",
              }}
              className="black-white"
              src="https://images.pexels.com/photos/6474524/pexels-photo-6474524.jpeg?auto=compress&cs=tinysrgb&w=1600"
            />
          </div>
        </Grid>
        <Grid item xs={12} lg={6}>
          <div className="login-form">
            <Box>
              <form onSubmit={handleSubmit(onLoginPressed)}>
                <Controller
                  name="email"
                  control={control}
                  rules={{
                    required: true,
                  }}
                  render={({ field }) => (
                    <TextField
                      fullWidth
                      id="standard-basic"
                      variant="standard"
                      label="Email"
                      type="email"
                      placeholder="Enter Email"
                      style={marginTop}
                      error={!!errors.email?.type}
                      {...field}
                    />
                  )}
                />
                {!!errors.email?.type && (
                  <Typography variant="caption" component={"p"}>
                    {errors.email?.message || "Email is required"}
                  </Typography>
                )}
                <Controller
                  name="password"
                  control={control}
                  rules={{
                    required: true,
                  }}
                  render={({ field }) => (
                    <TextField
                      fullWidth
                      id="standard-basic"
                      variant="standard"
                      type="password"
                      placeholder="Enter Password"
                      label="Password"
                      style={marginTop}
                      error={!!errors.password?.type}
                      {...field}
                    />
                  )}
                />
                {!!errors.password?.type && (
                  <Typography variant="caption" component={"p"}>
                    {errors.password?.message || "Password is required"}
                  </Typography>
                )}
                <FormControlLabel
                  style={marginTop}
                  label="Remember Me"
                  control={
                    <Checkbox
                      value={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      color={"info"}
                      inputProps={{
                        "aria-label": "Remember Me",
                      }}
                    />
                  }
                />

                <Button
                  variant="contained"
                  fullWidth
                  style={marginTop}
                  type="submit"
                >
                  Login
                </Button>
                <Button
                  type="button"
                  variant="text"
                  style={marginTop}
                  fullWidth
                  color="secondary"
                  onClick={navigateToSignUp}
                >
                  Sign Up
                </Button>
              </form>
            </Box>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};
