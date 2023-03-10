import React, { FC } from "react";
import "./style.css";
import "./home.css";
import { Button, Grid, Typography } from "@mui/material";
import { Link, Route } from "react-router-dom";
import { RoutePaths } from "../routes/route-path.enum";

export const Home: FC = () => {
  return (
    <div className="main">
      <section className="home-section">
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
          <Grid item sm={12} lg={6} spacing={0}>
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
          <Grid item sm={12} lg={6}>
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
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  flexDirection: "column",
                }}
              >
                <Typography variant="h6" component={"h6"}>
                  Welcome To{"\n"}
                </Typography>
                <Typography
                  variant="h1"
                  component={"h2"}
                  display={"block"}
                  fontWeight={"bold"}
                  className="fade-in"
                >
                  {"\n"}Flicker
                </Typography>
                <div
                  style={{
                    color: "#000",
                    fontSize: 28,
                    fontWeight: 600,
                    fontFamily: "sans-serif",
                    marginTop: 20,
                  }}
                >
                  <Link to={RoutePaths.search + "/dog"}>
                    <Button
                      variant="contained"
                      color="error"
                      disableElevation
                      style={{ backgroundColor: "#000" }}
                      size="large"
                    >
                      Explore
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </section>
      <section className="home-section" id="wall-of-fame"></section>
      <section className="home-section" id="clients"></section>
      <section className="home-section" id="about"></section>
      <section className="home-section" id="footer"></section>
    </div>
  );
};
