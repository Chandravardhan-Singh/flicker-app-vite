// import React, { FC } from "react";
// import { NavLink } from "react-router-dom";
// import { RoutePaths } from "../../routes/route-path.enum";
// import Search from "../Search/Search";
// import "./Navbar.css";
// import { useAppDispatch } from "../../redux/hook";
// import { login, logout } from "../../redux/feature/products/authSlice";
// import {
//   AppBar,
//   Box,
//   Container,
//   IconButton,
//   Toolbar,
//   Typography,
// } from "@mui/material";
// import ImageSearchIcon from "@mui/icons-material/ImageSearch";
// import HomeIcon from "@mui/icons-material/Home";
// export const Navbar: FC = () => {
//   const dispatch = useAppDispatch();

//   const activeClassName = "active-nav-item";

//   const onLogoutPressed = (
//     e: React.MouseEvent<HTMLButtonElement, MouseEvent>
//   ): void => {
//     e.preventDefault();
//     console.log("here");
//     dispatch(logout());
//   };
//   return (
//     // <nav className={"navbar"}>
//     //   <ul className="list">
//     //     <li className="nav-item">
//     //       <NavLink
//     //         to={RoutePaths.Root}
//     //         className={({ isActive }) => (isActive ? activeClassName : "")}
//     //       >
//     //         Home
//     //       </NavLink>
//     //     </li>
//     //     <li className="nav-item">
//     //       <NavLink
//     //         to={RoutePaths.Post}
//     //         className={({ isActive }) => (isActive ? activeClassName : "")}
//     //       >
//     //         Post
//     //       </NavLink>
//     //     </li>
//     //     <li className="nav-item">
//     //       <button className="nav-item" onClick={onLogoutPressed}>
//     //         Logout
//     //       </button>
//     //     </li>
//     //   </ul>
//     //   <div className="right">
//     //     <Search />
//     //     <img
//     //       src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
//     //       className="profile"
//     //     />
//     //   </div>
//     // </nav>

//   );
// };

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { RoutePaths } from "../../routes/route-path.enum";
import { NavLink } from "react-router-dom";
import { useAppDispatch } from "../../redux/hook";
import { logout } from "../../redux/feature/products/authSlice";

const pages = [
  { title: "Search", link: RoutePaths.search + "/dog" },
  { title: "Post", link: RoutePaths.Post },
];
const settings = ["Profile", "Dashboard"];

const visibleToSmallDevicesOnly = { xs: "flex", md: "none" };
export function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const dispatch = useAppDispatch();

  const onLogoutPressed = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    e.preventDefault();
    console.log("here");
    dispatch(logout());
  };

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" elevation={0}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Flicker
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <NavLink
                  key={page.title}
                  to={page.link}
                  style={{ textDecoration: "none" }}
                >
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page.title}</Typography>
                  </MenuItem>
                </NavLink>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: visibleToSmallDevicesOnly,
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Flicker
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <NavLink
                key={page.title}
                to={page.link}
                style={{ textDecoration: "none" }}
              >
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page.title}
                </Button>
              </NavLink>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="John Doe" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}

              <MenuItem key={"logout"} onClick={onLogoutPressed}>
                <Typography textAlign="center">Logout</Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
