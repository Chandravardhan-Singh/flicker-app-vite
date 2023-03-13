import React from "react";
import "./login.css";
import "../style.css";

import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { RoutePaths } from "../../routes/route-path.enum";
import { Schema, z } from "zod";

type Props = {};

const marginTop = {
  marginTop: 15,
};

const schema = z.object({
  firstName: z
    .string({
      invalid_type_error: "Invalid First Name",
      required_error: "First name is required",
    })
    .min(4, {
      message: "First name length should be greater than 4",
    }),
  lastName: z
    .string({
      invalid_type_error: "Invalid Last Name",
      required_error: "Last name is required",
    })
    .min(1, {
      message: "Last name length should be greater than 1",
    }),
  age: z
    .number({
      invalid_type_error: "Entered age is invalid",
      required_error: "Age is required",
    })
    .min(18, {
      message: "Age should be greater than 18",
    })
    .max(99, {
      message: "Age should be less than 99",
    }),
  email: z
    .string({
      required_error: "Email field is required",
    })
    .email({
      message: "Invalid Email!",
    })
    .min(1, {
      message: "Email field is required",
    }),
  password: z
    .string({
      required_error: "Password field is required",
    })
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      {
        message: "Password should contain this formate (A-Z,a-z,0-9,@#$%...)",
      }
    ),
  createdAt: z.date().default(new Date()),
});
type FormData = z.infer<typeof schema>;
export const Signup = (props: Props) => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onLoginPressed: SubmitHandler<FormData> = (data) => {
    console.log(data);
    navigate(RoutePaths.Root);
  };

  const navigateToLogin = () => {
    navigate(RoutePaths.Login);
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
                  name="firstName"
                  control={control}
                  rules={{
                    required: true,
                  }}
                  render={({ field }) => (
                    <TextField
                      fullWidth
                      id="standard-basic"
                      variant="standard"
                      label="First Name"
                      type="text"
                      placeholder="First name"
                      style={marginTop}
                      error={!!errors.firstName?.type}
                      {...field}
                    />
                  )}
                />
                {!!errors.firstName?.type && (
                  <Typography variant="body2" component={"p"}>
                    {errors.firstName?.message || "First Name is required"}
                  </Typography>
                )}
                <Controller
                  name="lastName"
                  control={control}
                  rules={{
                    required: true,
                  }}
                  render={({ field }) => (
                    <TextField
                      fullWidth
                      id="standard-basic"
                      variant="standard"
                      label="Last Name"
                      type="text"
                      placeholder="Last name"
                      style={marginTop}
                      error={!!errors.lastName?.type}
                      {...field}
                    />
                  )}
                />
                {!!errors.lastName?.type && (
                  <Typography variant="body2" component={"p"}>
                    {errors.lastName?.message || "Last Name is required"}
                  </Typography>
                )}
                <Controller
                  name="age"
                  control={control}
                  rules={{
                    required: true,
                  }}
                  render={({ field }) => (
                    <TextField
                      fullWidth
                      id="standard-basic"
                      variant="standard"
                      label="Age"
                      type="number"
                      placeholder="Enter Age"
                      style={marginTop}
                      error={!!errors.age?.type}
                      {...field}
                      {...register("age", {
                        valueAsNumber: true,
                      })}
                    />
                  )}
                />
                {!!errors.age?.type && (
                  <Typography variant="body2" component={"p"}>
                    {errors.age?.message || "Age is required"}
                  </Typography>
                )}
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
                  <Typography variant="body2" component={"p"}>
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
                  <Typography variant="body2" component={"p"}>
                    {errors.password?.message || "Password is required"}
                  </Typography>
                )}

                <Button
                  variant="contained"
                  fullWidth
                  style={marginTop}
                  type="submit"
                >
                  Signup
                </Button>
                <Button
                  type="button"
                  variant="text"
                  style={marginTop}
                  fullWidth
                  color="secondary"
                  onClick={navigateToLogin}
                >
                  Login
                </Button>
              </form>
            </Box>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};
