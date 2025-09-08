import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  FormControlLabel,
  Grid,
  Paper,
  Switch,
} from "@mui/material";
import { Link } from "react-router-dom"; 

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = () => {
    console.log("Email:", email, "Password:", password);
    setEmail("");
    setPassword("");
  };

  return (
    <Grid container sx={{ minHeight: "100vh" }}>
      {/* Left Side with Image (Hide on mobile) */}
      <Grid
        item
        xs={false}
        md={6}
        sx={{
          backgroundImage: "url('/bgSign.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: { xs: "none", md: "flex" },
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          color: "white",
          p: 3,
          width: { xs: "false", md: "50%" },
        }}
      >
        <Typography variant="overline" sx={{ letterSpacing: 2 }}>
          INSPIRED BY THE FUTURE
        </Typography>
        <Typography
          variant="h4"
          sx={{
            color: "rgba(255, 255, 255, 1)",
            fontFamily: "Plus Jakarta Display",
            fontWeight: "700",
          }}
        >
          THE VISION UI DASHBOARD
        </Typography>
      </Grid>

      {/* Right Side Form */}
      <Grid
        item
        xs={12}
        md={6}
        component={Paper}
        elevation={0}
        square
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
          bgcolor: "#0a0e31",
          color: "white",
          p: { xs: 3, md: 4 },
          width: { xs: "100%", md: "50%" },
        }}
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: 360,
            pt: { xs: 6, md: 7 },
            mt: 20,
            mr: { xs: 0, md: 20 },
          }}
        >
          <Typography variant="h4" fontWeight="bold" mb={1} color="#ffff">
            Nice to see you!
          </Typography>
          <Typography
            variant="body2"
            mb={3}
            color="rgba(160, 174, 192, 1)"
            marginBottom={5}
          >
            Enter your email and password to sign in
          </Typography>

          <Typography color="#ffff" sx={{ mb: 2 }}>
            Email
          </Typography>
          <TextField
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            variant="outlined"
            margin="normal"
            InputProps={{
              style: { color: "#fff", borderRadius: 12 },
            }}
            sx={{
              borderRadius: "20px",
              mb: 3,
                      
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#FFFFFF", 
      },
      "&:hover fieldset": {
        borderColor: "#FFFFFF", 
      },
      "&.Mui-focused fieldset": {
        borderColor: "#FFFFFF", 
      },
    },

            }}
          />

          <Typography color="#ffff" sx={{ mb: 2 }}>
            Password
          </Typography>
          <TextField
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Your password"
            variant="outlined"
            margin="normal"
            type="password"
            InputProps={{
              style: { color: "#fff", borderRadius: 12 },
            }}
                     sx={{
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#FFFFFF", 
      },
      "&:hover fieldset": {
        borderColor: "#FFFFFF", 
      },
      "&.Mui-focused fieldset": {
        borderColor: "#FFFFFF", 
      },
    },
    borderRadius:"20px",
  }}
          />

          <FormControlLabel
            control={<Switch defaultChecked sx={{ color: "white" }} />}
            label="Remember me"
          />

          <Button
            fullWidth
            variant="contained"
            sx={{
              mt: 2,
              borderRadius: "20px",
              bgcolor: "#1a73e8",
              "&:hover": { bgcolor: "#1669c1" },
              textDecoration: "none",
              color: "white",
            }}
            onClick={handleSignIn}
          >
            SIGN IN
          </Button>

          <Typography
            variant="body2"
            align="center"
            sx={{ mt: 2, mb: 5 }}
            color="rgba(160, 174, 192, 1)"
          >
            Don’t have an account?{" "}
            <Link
              to="/signUp"
              style={{ color: "#1a73e8", textDecoration: "none" }}
            >
              Sign up
            </Link>
          </Typography>

          <Typography variant="caption" sx={{ mt: 5, opacity: 0.7 }}>
            © 2021, Made with ❤️ by Simmmple & Creative Tim for a better web
          </Typography>

          <Box display={"flex"} justifyContent={"center"} gap={6} mt={2}>
            <span
              style={{
                color: "rgba(160, 174, 192, 1)",
                cursor: "pointer",
                fontSize: "13px",
              }}
            >
              Marketplace
            </span>
            <span
              style={{
                color: "rgba(160, 174, 192, 1)",
                cursor: "pointer",
                fontSize: "13px",
              }}
            >
              Blog
            </span>
            <span
              style={{
                color: "rgba(160, 174, 192, 1)",
                cursor: "pointer",
                fontSize: "13px",
              }}
            >
              License
            </span>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
