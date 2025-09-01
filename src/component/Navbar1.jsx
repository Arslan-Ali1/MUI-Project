// src/components/Navbar.jsx
import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import { Link } from "react-router-dom";

export default function Navbar1
() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  const navItems = [
    { text: "Dashboard", path: "/" },
    { text: "Profile", path: "/profile" },
    { text: "Sign Up", path: "/signUp" },
    { text: "Sign In", path: "/signIn" },
  ];

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center", p: 2 }}>
      <Typography variant="h6" sx={{ my: 2, fontWeight: "bold" }}>
        VISION UI FREE
      </Typography>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton component={Link} to={item.path} sx={{ textAlign: "center" }}>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Button
        variant="contained"
        sx={{
          backgroundColor: "#1976d2",
          borderRadius: "12px",
          textTransform: "none",
          fontWeight: "bold",
          px: 3,
          mt: 2,
          "&:hover": { backgroundColor: "#1976d2", boxShadow: "none" },
        }}
      >
        Free download
      </Button>
    </Box>
  );

  return (
    <Box
      sx={{
        width: { xs: "95%", sm: "90%", md: "70%" }, // responsive width
        display: "flex",
        justifyContent: "center",
        mx: "auto",
      }}
    >
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          background: "rgba(255, 255, 255, 0.4)",
          boxShadow: "none",
          width: {xs:"100%",md:"70%"}, // fills parent Box
          border: "2px solid",
          borderRadius: "20px",
          mt: 2,
          mr:{xs:0,md:25}
        
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          {/* Logo */}
          <Typography variant="h6" sx={{ fontWeight: "bold", color: "white", letterSpacing: 1 }}>
            VISION UI FREE
          </Typography>

          {/* Desktop Links */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3, alignItems: "center" }}>
            <Button component={Link} to="/" startIcon={<DashboardIcon />} sx={{ color: "white", textTransform: "none" }}>
              Dashboard
            </Button>
            <Button component={Link} to="/profile" startIcon={<PersonIcon />} sx={{ color: "white", textTransform: "none" }}>
              Profile
            </Button>
            <Button component={Link} to="/signUp" startIcon={<PersonAddIcon />} sx={{ color: "white", textTransform: "none" }}>
              Sign Up
            </Button>
            <Button component={Link} to="/signIn" startIcon={<VpnKeyIcon />} sx={{ color: "white", textTransform: "none" }}>
              Sign In
            </Button>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#1976d2",
                borderRadius: "12px",
                textTransform: "none",
                fontWeight: "bold",
                px: 3,
                "&:hover": { backgroundColor: "#1976d2", boxShadow: "none" },
              }}
            >
              Free download
            </Button>
          </Box>

          {/* Mobile Hamburger Menu */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ display: { md: "none" }, color: "white" }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: "250px" },
        }}
      >
        {drawer}
      </Drawer>
    </Box>
  );
}
