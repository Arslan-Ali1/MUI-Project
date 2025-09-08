import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  InputBase,
  IconButton,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import NotificationIcon from "@mui/icons-material/Notifications";
import { useLocation } from "react-router-dom"; 
import HomeIcon from '@mui/icons-material/Home';

export default function Navbar() {
  const location = useLocation();

  const pathName = location.pathname.split("/").filter(Boolean); 
  const currentPage = pathName[pathName.length - 1] || "Dashboard"; 

  return (
    <>
      {/* Top Navbar */}
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          width: { xs: "95%", md: "calc(100% - 280px)" },
          ml: { xs: 0, md: "275px" },
          mt: "10px",
          mx:{ xs: 2, md:1},
          borderRadius: "12px",
          background: "rgba(15, 23, 42, 0.6)",  
          backdropFilter: "blur(12px)",        
          WebkitBackdropFilter: "blur(12px)",    
          px: 2,
          height: 52,
          justifyContent: "center",
          minHeight: "70px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
          border: "1px solid rgba(255,255,255,0.1)" 
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            minHeight: "unset",
          }}
        >
          {/* Left - Breadcrumb */}
          <Box>
            <Typography
              variant="caption"
              sx={{ color: "gray", display: "flex",alignItems:"center", fontSize: "14px" ,gap:0.5 }}
            >
              <HomeIcon   sx={{ color: "gray", fontSize: "18px"}}/> / {currentPage}
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "white", fontWeight: "bold", textTransform: "capitalize" }}
            >
              {currentPage}
            </Typography>
          </Box>

          {/* Right - Search & Icons */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              flexWrap: "wrap",
            }}
          >
            {/* Search Box */}
            <Box
              sx={{
                display: { xs: "none", sm: "flex" },
                alignItems: "center",
                background: "rgba(255,255,255,0.08)",
                borderRadius: "12px",
                px: 1.5,
                py: 0.3,
                color: "white",
              }}
            >
              <SearchIcon sx={{ fontSize: "18px", opacity: 0.7 }} />
              <InputBase
                placeholder="Type here..."
                sx={{
                  ml: 1,
                  color: "white",
                  fontSize: "0.85rem",
                  width: { xs: "100px", md: "200px" },
                }}
              />
            </Box>

            {/* Sign In */}
            <IconButton sx={{ color: "#718096", fontSize: "0.8rem" }}>
              <PersonIcon fontSize="small" />
              <Typography
                sx={{ ml: 0.5, fontSize: "0.85rem", color: "#718096" }}
              >
                Sign In
              </Typography>
            </IconButton>
            <Box sx={{ mr: "30px" }}>
              {/* Settings */}
              <IconButton sx={{ color: "#718096" }}>
                <SettingsIcon fontSize="small" />
              </IconButton>

              {/* Notification */}
              <IconButton sx={{ color: "#718096" }}>
                <NotificationIcon fontSize="small" />
              </IconButton>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}
