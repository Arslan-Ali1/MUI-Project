// src/components/Navbar.jsx
import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Modal,
  Fade,
  Backdrop,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";

export default function Navbar1() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  const navItems = [
    { text: "Dashboard", path: "/" },
    { text: "Profile", path: "/profile" },
    { text: "Sign Up", path: "/signUp" },
    { text: "Sign In", path: "/signIn" },
  ];

  return (
    <Box
      sx={{
        width: { xs: "95%", sm: "90%", md: "70%" },
        display: "flex",
        justifyContent: "center",
        mx: { xs: "30px", md: "auto" },
      }}
    >
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          
          background: "rgba(255, 255, 255, 0.4)",
          boxShadow: "none",
          width: { xs: "95%", md: "70%" },
          border: "2px solid",
          borderRadius: "20px",
          mt: 2,
          mr: { xs: 0, md: 25 },
          px: { xs: 2, md: 0 },
          mx: { xs: 1 },
       
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            minHeight: { xs: "64px", md: "65px" },
          }}
        >
          {/* Logo */}
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", color: "white", letterSpacing: 1 }}
          >
            VISION UI FREE
          </Typography>

          {/* Desktop Links */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: 3,
              alignItems: "center",
            }}
          >
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

      {/* Custom Modal for Mobile Menu */}
      <Modal
        open={mobileOpen}
        onClose={handleDrawerToggle}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{ backdrop: { timeout: 300 } }}
      >
        <Fade in={mobileOpen}>
          <Box
            sx={{
              position: "absolute",
              top: "90px", // navbar ke bilkul neeche
              left: "50%",
              transform: "translateX(-50%)",
              width: "60%",
              maxWidth: 360,
              bgcolor: "#0f1535",
              color: "white",
              borderRadius: 3,
              boxShadow: 24,
              p: 2,
            }}
          >
            {/* Close Button */}
            <IconButton
              onClick={handleDrawerToggle}
              sx={{ position: "absolute", top: 8, right: 8, color: "white" }}
            >
              <CloseIcon />
            </IconButton>

            <List>
              {navItems.map((item) => (
                <ListItem key={item.text} disablePadding>
                  <ListItemButton
                    component={Link}
                    to={item.path}
                    onClick={handleDrawerToggle}
                    sx={{ color: "white", textAlign: "center" }}
                  >
                    <ListItemText
                      primary={item.text}
                      primaryTypographyProps={{ fontWeight: "bold" }}
                    />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </Fade>
      </Modal>
    </Box>
  );
}
