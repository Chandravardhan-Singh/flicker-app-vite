import React, { FC } from "react";
import "./style.css";
import "./home.css";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  List,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { RoutePaths } from "../routes/route-path.enum";
import { motion } from "framer-motion";

const gridContainerStyle = {
  flexDirection: {
    lg: "row",
    xs: "column-reverse",
    sm: "column-reverse",
    md: "row",
  },
};

export const Home: FC = () => {
  return (
    <>
      <nav className="navigation">
        <ul>
          <li>
            <a className="logo" href="#">
              Flicker
            </a>
          </li>
          <li>
            <a className="nav-link" href="#wall-of-fame">
              Wall of Fame
            </a>
          </li>
          <li>
            <a className="nav-link" href="#clients">
              Clients
            </a>
          </li>
          <li>
            <a className="nav-link" href="#about">
              About
            </a>
          </li>
        </ul>
      </nav>
      <div className="main">
        <section className="home-section">
          <Grid container spacing={2} sx={gridContainerStyle}>
            <Grid
              item
              xs={12}
              sm={12}
              md={8}
              lg={6}
              sx={{
                display: {
                  lg: "initial",
                  xs: "none",
                  sm: "none",
                  md: "initial",
                },
              }}
            >
              <div className="image-container">
                <img
                  className="black-white"
                  src="https://images.pexels.com/photos/6474523/pexels-photo-6474523.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                />
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={6}>
              <div className="content-container">
                <div className="details-wrapper">
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
                      marginTop: 10,
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
        <section className="home-section" id="wall-of-fame">
          <Grid
            container
            spacing={2}
            sx={gridContainerStyle}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Grid item xs={12} sm={12} md={8} lg={6}>
              <Grid container item justifyContent="center" alignItems="center">
                <Grid item xs={12} lg={7}>
                  <Typography
                    variant="h3"
                    component={"h3"}
                    display={"block"}
                    fontWeight={"bold"}
                    className="fade-in"
                    textAlign={"center"}
                    marginBottom={5}
                    sx={{
                      marginTop: {
                        lg: 0,
                        xs: 20,
                        sm: 20,
                        md: 0,
                      },
                    }}
                  >
                    Wall of Fame
                  </Typography>
                </Grid>
                {[
                  "https://images.pexels.com/photos/1546912/pexels-photo-1546912.jpeg?auto=compress&cs=tinysrgb&w=1600",
                  "https://images.pexels.com/photos/428328/pexels-photo-428328.jpeg?auto=compress&cs=tinysrgb&w=1600",
                  "https://images.pexels.com/photos/3209639/pexels-photo-3209639.jpeg?auto=compress&cs=tinysrgb&w=1600",
                ].map((imageLink) => (
                  <Grid
                    item
                    lg={7}
                    sm={12}
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                  >
                    <motion.div
                      className="motion-div"
                      initial={{ scale: 0.9 }}
                      whileInView={{
                        scale: 1,
                      }}
                      transition={{ type: "spring", stiffness: 100 }}
                    >
                      <img className="card-image" src={imageLink} />
                      <div className="text-container">
                        <h4 className="title">Alex Perry</h4>
                        <p className="description">
                          the 1960s with the release of Letraset sheets
                          containing Lorem Ipsum passages, and more recently
                          with desktop
                        </p>
                      </div>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={4}
              lg={6}
              sx={{
                display: {
                  lg: "initial",
                  xs: "none",
                  sm: "none",
                  md: "initial",
                },
              }}
            >
              <div className="image-container">
                <img
                  className="black-white"
                  src="https://images.pexels.com/photos/6474537/pexels-photo-6474537.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
                />
              </div>
            </Grid>
          </Grid>
        </section>
        <section className="home-section" id="clients">
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            spacing={2}
            sx={{
              display: {
                lg: "none",
                xs: "block",
                sm: "block",
                md: "none",
              },
              marginTop: {
                lg: 0,
                xs: 5,
                sm: 5,
                md: 0,
              },
            }}
          >
            <Grid item xs={12} sm={12} textAlign={"center"} mb={25}>
              <Typography
                variant="h3"
                component={"h3"}
                fontWeight={"bold"}
                className="fade-in"
                textAlign={"center"}
                marginBottom={5}
              >
                Clients
              </Typography>
            </Grid>
          </Grid>
          <Grid
            container
            spacing={2}
            sx={{
              ...gridContainerStyle,
              display: {
                lg: "flex",
                xs: "block",
                sm: "block",
                md: "flex",
              },
            }}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Grid item xs={12} sm={12} md={6} lg={3}>
              <Grid container item justifyContent="center" alignItems="center">
                {["Doreamon", "Shinchan", "Kitretsu"].map((clientName) => (
                  <Grid
                    item
                    lg={7}
                    sm={12}
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                  >
                    <motion.div
                      className="motion-div-client"
                      initial={{
                        x: -50,
                      }}
                      whileInView={{
                        x: 0,
                      }}
                      transition={{ type: "spring", stiffness: 50 }}
                    >
                      <div className="text-container">
                        <h4 className="client">{clientName}</h4>
                      </div>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            </Grid>

            <Grid
              item
              xs={12}
              sm={12}
              lg={6}
              sx={{
                display: {
                  lg: "unset",
                  xs: "none",
                  sm: "none",
                  md: "none",
                },
              }}
            >
              <div className="image-container">
                <img
                  className="black-white"
                  src="https://images.pexels.com/photos/6474522/pexels-photo-6474522.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
                />
              </div>
            </Grid>

            <Grid item xs={12} sm={12} lg={3} md={6}>
              <Grid container item justifyContent="center" alignItems="center">
                {["Tom", "Jerry", "Oggy"].map((clientName) => (
                  <Grid
                    item
                    lg={7}
                    sm={12}
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                  >
                    <motion.div
                      className="motion-div-client"
                      initial={{
                        x: 50,
                      }}
                      whileInView={{
                        x: 0,
                      }}
                      transition={{ type: "spring", stiffness: 100 }}
                    >
                      <div className="text-container">
                        <h4 className="client">{clientName}</h4>
                      </div>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </section>
        <section className="home-section vignette " id="about">
          <Typography
            variant="h1"
            component={"h1"}
            color={"#fff"}
            fontWeight={"bold"}
            textAlign={"center"}
            paddingY={10}
          >
            About Us
          </Typography>
          <Container>
            <Grid
              container
              spacing={3}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Grid item xs={12} sm={6} lg={4} md={6}>
                <Card
                  style={{
                    margin: 5,
                  }}
                >
                  <CardMedia
                    className="black-white"
                    component={"img"}
                    src="https://images.pexels.com/photos/6818160/pexels-photo-6818160.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
                  />
                  <CardContent>
                    <Typography
                      variant="h4"
                      component={"h4"}
                      mb={1}
                      fontWeight={"600"}
                    >
                      Delivery
                    </Typography>
                    <Typography>
                      Best in world for delivery fastest and safest with
                      hightest Air Shipping all over the world.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} lg={4} md={6}>
                <Card
                  style={{
                    margin: 5,
                  }}
                >
                  <CardMedia
                    className="black-white"
                    component={"img"}
                    src="https://images.pexels.com/photos/4006979/pexels-photo-4006979.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
                  />
                  <CardContent>
                    <Typography
                      variant="h4"
                      component={"h4"}
                      mb={1}
                      fontWeight={"600"}
                    >
                      Hospitality
                    </Typography>
                    <Typography>
                      Best in world for delivery fastest and safest with
                      hightest Air Shipping all over the world.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} lg={4} md={6}>
                <Card
                  style={{
                    margin: 5,
                  }}
                >
                  <CardMedia
                    component={"img"}
                    className="black-white"
                    src="https://images.pexels.com/photos/3770102/pexels-photo-3770102.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
                  />
                  <CardContent>
                    <Typography
                      variant="h4"
                      component={"h4"}
                      mb={1}
                      fontWeight={"600"}
                    >
                      Accommodation
                    </Typography>
                    <Typography>
                      Best in world for delivery fastest and safest with
                      hightest Air Shipping all over the world.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <Typography
                  variant="h6"
                  component={"h1"}
                  color={"#fff"}
                  fontWeight={"bold"}
                  textAlign={"center"}
                  paddingY={10}
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book
                </Typography>
              </Grid>
            </Grid>
          </Container>
        </section>
        <section className="home-section" id="footer">
          <Container maxWidth="xl">
            <Grid container spacing={1} marginTop={10} marginLeft={0}>
              <Grid item lg={6} md={12} xs={12} sm={12}>
                <input
                  className="email-subscribe"
                  placeholder="Subscribe for Newsletter"
                />
              </Grid>
              <Grid item lg={6} md={12} xs={12} sm={12} padding={10}></Grid>
              <Grid item lg={4} md={12} xs={12} sm={12} mt={5}>
                <Typography
                  variant="h4"
                  component={"p"}
                  color={"#ff9419"}
                  fontWeight={"bold"}
                >
                  Flicker
                </Typography>
                <Typography variant="subtitle1" component={"p"} color={"#fff"}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Obcaecati a quia reprehenderit vitae? Placeat sint minus
                  laborum accusamus eos atque quia odit illum ipsum
                  perspiciatis. Dolores, dicta. Ea, assumenda blanditiis!
                </Typography>
              </Grid>
              <Grid item lg={2} md={4} xs={6} sm={6} mt={5}>
                <List dense component={"a"}>
                  <ListItemButton href="#about">
                    <ListItemText primary="About" className="list-item" />
                  </ListItemButton>
                  <ListItemButton>
                    <ListItemText primary="Image" className="list-item" />
                  </ListItemButton>
                  <ListItemButton>
                    <ListItemText primary="Developer" className="list-item" />
                  </ListItemButton>
                </List>
              </Grid>
              <Grid item lg={2} md={4} xs={6} sm={6} mt={5}>
                <List dense component={"a"}>
                  <ListItemButton href="#about">
                    <ListItemText
                      primary="Terms and Condition"
                      className="list-item"
                    />
                  </ListItemButton>
                  <ListItemButton>
                    <ListItemText
                      primary="Privacy Policy"
                      className="list-item"
                    />
                  </ListItemButton>
                  <ListItemButton>
                    <ListItemText
                      primary="Cookie Policy"
                      className="list-item"
                    />
                  </ListItemButton>
                </List>
              </Grid>
              <Grid item lg={4} md={4} xs={6} sm={6} mt={5}>
                <Typography
                  variant="h6"
                  component={"h4"}
                  fontWeight={"bold"}
                  color={"#fff"}
                >
                  Let's Chat!
                </Typography>
                <Typography
                  variant="body1"
                  component={"h4"}
                  fontWeight={"bold"}
                  color={"#fff"}
                >
                  nobita@doreamon.com
                </Typography>
              </Grid>
            </Grid>
          </Container>
        </section>
      </div>
    </>
  );
};
