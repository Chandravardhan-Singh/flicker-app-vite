import React, { FC, useEffect, useState } from "react";
import "./style.css";
import { Button, Grid, Typography } from "@mui/material";
import { Link, Route } from "react-router-dom";
import { RoutePaths } from "../routes/route-path.enum";

export const Home: FC = () => {
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
              src="https://images.pexels.com/photos/6474523/pexels-photo-6474523.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
          </div>
        </Grid>
        <Grid item xs={12} lg={6}>
          <div
            style={{
              width: "100%",
              height: "100vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              color: "#000",
              backgroundColor: "#fff",
            }}
          >
            <Typography variant="h5" component={"h5"}>
              Welcome To{"\n"}
            </Typography>
            <Typography
              variant="h2"
              display={"block"}
              fontWeight={"bold"}
              component={"h2"}
              className="fade-in"
            >
              {"\n"}Flicker
            </Typography>
            <Link to={RoutePaths.search + "/dog"}>
              <Button
                variant="contained"
                color="error"
                disableElevation
                style={{ backgroundColor: "#000" }}
              >
                Explore
              </Button>
            </Link>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};
