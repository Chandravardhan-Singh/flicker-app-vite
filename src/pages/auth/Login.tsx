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
} from "@mui/material";

import { useNavigate } from "react-router-dom";
import { RoutePaths } from "../../routes/route-path.enum";

type Props = {};

const marginTop = {
  marginTop: 15,
};

export const Login = (props: Props) => {
  const [rememberMe, setRememberMe] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { isAuthenticated } = useAppSelector((state) => state.authUser);

  const onLoginPressed = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    dispatch(
      login({
        email,
        password,
        rememberMe,
      })
    );
    navigate(RoutePaths.Root);
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
              <form>
                <TextField
                  fullWidth
                  id="standard-basic"
                  variant="standard"
                  label="Email"
                  type="email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  placeholder="Enter Email"
                  value={email}
                  style={marginTop}
                />
                <TextField
                  fullWidth
                  id="standard-basic"
                  variant="standard"
                  type="password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  value={password}
                  placeholder="Enter Password"
                  label="Password"
                  style={marginTop}
                />
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
                  onClick={onLoginPressed}
                  fullWidth
                  style={marginTop}
                >
                  Login
                </Button>
                {/* <Button
              variant="outlined"
              style={marginTop}
              onClick={onLoginPressed}
              fullWidth
            >
              Sign Up
            </Button> */}
              </form>
            </Box>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};
