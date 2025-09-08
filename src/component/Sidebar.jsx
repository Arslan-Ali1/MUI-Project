import React, { useState } from "react";
import {
  Drawer,
  Box,
  Typography,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Card,
  CardContent,
  Button,
  useMediaQuery,
  useTheme,
  IconButton
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import DashboardIcon from "@mui/icons-material/Home";
import TableChartIcon from "@mui/icons-material/TableChart";
import ReceiptIcon from "@mui/icons-material/Receipt";
import LanguageIcon from "@mui/icons-material/Language";
import PersonIcon from "@mui/icons-material/Person";
import LoginIcon from "@mui/icons-material/Login";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import { Link, useLocation } from "react-router-dom";   // ✅ useLocation import

const menuItems1 = [
  { text: "Dashboard", path: "/", icon: <DashboardIcon /> },
  { text: "Tables", path: "/table", icon: <TableChartIcon /> },
  { text: "Billing", path: "/billing", icon: <ReceiptIcon /> },
  // { text: "RTL", path: "/rtl", icon: <LanguageIcon /> }
];

const menuItems2 = [
  { text: "Profile", path: "/profile", icon: <PersonIcon /> },
  { text: "SignIn", path: "/signIn", icon: <LoginIcon /> },
  { text: "SignUp", path: "/signUp", icon: <AppRegistrationIcon /> }
];

export default function Sidebar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [open, setOpen] = useState(false);
  const location = useLocation();  

  const drawerContent = (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100%", mr: 2 }}>
      <Box>
        <Typography
          variant="subtitle2"
          sx={{ opacity: 0.7, mb: 2, color: "white", textAlign: "center" }}
        >
          VISION UI FREE
        </Typography>

        {/* MAIN MENU */}
        <List sx={{ width: "200px", height: "220px" }}>
          {menuItems1.map((item, index) => (
            <ListItemButton
              key={index}
              component={Link}
              to={item.path}
              sx={{
                borderRadius: "8px",
                mb: 1,
                background:
                  location.pathname === item.path
                    ? "rgba(59, 130, 246, 0.3)"
                    : "transparent",   // ✅ Active Highlight
                "&:hover": { background: "rgba(29, 105, 228, 0.2)" }
              }}
            >
              <ListItemIcon sx={{ color: "#0075ff" }}>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          ))}
        </List>

        <Typography
          variant="subtitle2"
          sx={{ mt: 2, mb: 1, fontSize: "15px", color: "#FFFF" }}
        >
          ACCOUNT PAGES
        </Typography>

        {/* ACCOUNT PAGES */}
        <List>
          {menuItems2.map((item, index) => (
            <ListItemButton
              key={index}
              component={Link}
              to={item.path}
              sx={{
                borderRadius: "8px",
                mb: 1,
                background:
                  location.pathname === item.path
                    ? "rgba(59, 130, 246, 0.3)"
                    : "transparent",   // ✅ Active Highlight
                "&:hover": { background: "rgba(59, 130, 246, 0.2)" }
              }}
            >
              <ListItemIcon sx={{ color: "#0075ff" }}>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          ))}
        </List>
      </Box>

      <Box sx={{ display:"flex", flexDirection:"column", gap:2  ,justifyContent:"end", flexGrow:1}}>
        <Card
          sx={{
            borderRadius: "12px",
            p: 1,
            mb: 2,
            backgroundImage: "url('/bottom.png') "
          }}
        >
          <CardContent sx={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: 0.5}}>
            <Typography variant="h6" fontWeight="bold" color="white">
              Need help?
            </Typography>
            <Typography variant="body2" sx={{ mb: 1, color: "white" }}>
              Please check our docs
            </Typography>
            <Button
              variant="contained"
              size="small"
              sx={{
                background:
                  "linear-gradient(135deg, rgba(6, 11, 40, 0.74), rgba(10, 14, 35, 0.71))",
                color: "white",
                textTransform: "none",
                "&:hover": { background: "#f1f5f9" }
              }}
            >
              Documentation
            </Button>
          </CardContent>
        </Card>
      </Box>

      <Button
        variant="contained"
        size="large"
        sx={{
          marginTop: "2px",
          background: "#0c98fe",
          color: "white",
          textTransform: "none",
          "&:hover": { background: "#f1f5f9" }
        }}
      >
        Upgrade To PRO
      </Button>
    </Box>
  );

  return (
    <>
      {/* Mobile Menu Button */}
      {isMobile && (
        <IconButton
          onClick={() => setOpen(true)}
          sx={{
            position: "fixed",
            top: 25,
            right: 30,
            color: "#A0AEC0",
            zIndex: 1300
          }}
        >
          <MenuIcon />
        </IconButton>
      )}

      <Drawer
        anchor="left"
        variant={isMobile ? "temporary" : "permanent"}
        open={isMobile ? open : true}
        onClose={() => setOpen(false)}
        ModalProps={{
          keepMounted: true,
          BackdropProps: {
            sx: {
              backgroundColor: "transparent", // 🔥 blur hat gaya
              backdropFilter: "none",
            },
          },
        }}
        sx={{
          width: 260,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: 260,
            height: "100vh",
            boxSizing: "border-box",
            background:
              // "linear-gradient(rgba(6, 11, 38, 0.94),rgba(26, 31, 55, 0))",
              "linear-gradient(135deg, rgba(6, 11, 40, 1.3), rgba(10, 14, 35, 1.11))",
            color: "white",
            padding: "1rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            overflowY: "auto"
          }
        }}
      >
        {drawerContent}
      </Drawer>
    </>
  );
}
