import React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Checkbox,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
  IconButton,
  Divider,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import AppleIcon from "@mui/icons-material/Apple";
import GoogleIcon from "@mui/icons-material/Google";
import { Link } from "react-router-dom"; 

export default function SignUp() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState(""); 
   const handleSignUp = () => {
    console.log("Name:", name, "Email:", email, "Password:", password);
    setName("");
    setEmail("");
    setPassword("");
  }
  return (
    <Grid container sx={{ minHeight: "100vh" }}>
      {/* Left Side - Image + Text */}
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
          fontWeight="bold"
          sx={{
            color: " rgba(255, 255, 255, 1)",
            fontFamily: "Plus Jakarta Display",
            fontWeight: "700",
          }}
        >
          THE VISION UI DASHBOARD
        </Typography>
      </Grid>

      {/* Right Side - Signup Form */}
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "#0b0f33",
          p: 2,
          width: { xs: "100%", md: "50%" },
          
        }}
      >
        <Box sx={{ mt: { xs: 10, md: 20 }, mr: { xs: 0, md: 20 } }}>
          <Box mt={"80px"} sx={{  mx: { xs: "auto" }, mr:{xs:"auto",md:"100px"}}}>
            <Typography
              variant="h5"
              fontWeight="bold"
              gutterBottom
              color="#ffff"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              Welcome!
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontSize: "14px",
                fontWeight: "400",
                color: "#ffff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              Use these awesome forms to login or create new
            </Typography>
            <Typography
              sx={{
                fontSize: "14px",
                mb: 3,
                color: "#ffff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              account in your project for free.
            </Typography>
          </Box>

         <Card
  sx={{
    width: { xs: "100%", sm: "90%", md: "420px" }, // mobile par full width, tablet par 90%, desktop par fixed
    mx: { xs: "auto", md: 0 }, 
    borderRadius: "30px",
    bgcolor: "#131738",
    color: "#fff",
    boxShadow: "0 8px 24px rgba(0,0,0,0.4)",
    p: { xs: 1, md: 1 }, 
    mb:10
  }}
>

            <CardContent sx={{ textAlign: "center" }}>
              {/* Social Register */}
              <Typography sx={{ color: "#fff", mb: 2, mt: 5 }} variant="h5">
                Register With
              </Typography>

              <Box
                sx={{ display: "flex", justifyContent: "center", gap: 2, mb: 2 }}
              >
                <Box
                  sx={{
                    width: "70px",
                    height: "70px",
                    bgcolor: "#131738",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    border: "2px solid",
                    borderImage:
                      "linear-gradient(135deg, rgba(255,255,255,1), rgba(255,255,255,0)) 1",
                    borderRadius: "20px",
                  }}
                >
                  <IconButton sx={{ color: "#fff", borderRadius: "20px" }}>
                    <FacebookIcon />
                  </IconButton>
                </Box>

                <Box
                  sx={{
                    width: "70px",
                    height: "70px",
                    bgcolor: "#131738",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    border: "2px solid",
                    borderImage:
                      "linear-gradient(135deg, rgba(255,255,255,1), rgba(255,255,255,0)) 1",
                    borderRadius: "20px",
                  }}
                >
                  <IconButton sx={{ color: "#fff", borderRadius: "20px" }}>
                    <AppleIcon />
                  </IconButton>
                </Box>

                <Box
                  sx={{
                    width: "70px",
                    height: "70px",
                    bgcolor: "#131738",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    border: "2px solid",
                    borderImage:
                      "linear-gradient(135deg, rgba(255,255,255,1), rgba(255,255,255,0)) 1",
                    borderRadius: "20px",
                  }}
                >
                  <IconButton sx={{ color: "#fff", borderRadius: "20px" }}>
                    <GoogleIcon />
                  </IconButton>
                </Box>
              </Box>

              <Divider sx={{ my: 2 }}>
                <Typography variant="h7" color="rgba(160, 174, 192, 1)">
                  or
                </Typography>
              </Divider>

              <Box>
                <Typography color="#ffff" display={"flex"} justifyContent={"left"}>
                  Name
                </Typography>
              <TextField
  fullWidth
  value={name}
  onChange={(e) => setName(e.target.value)}
  label="Your full name"
  variant="outlined"
  margin="normal"
  InputLabelProps={{ style: { color: "#aaa" } }}
  InputProps={{
    style: { color: "#fff", borderRadius: 12 },
  }}
  sx={{
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#FFFFFF", // White border
      },
      "&:hover fieldset": {
        borderColor: "#FFFFFF", // White border on hover
      },
      "&.Mui-focused fieldset": {
        borderColor: "#FFFFFF", // White border when focused
      },
    },
  }}
/>
              </Box>
              <Typography color="#ffff" display={"flex"} justifyContent={"left"}>
                  Email
                </Typography>

              <TextField
                fullWidth
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                label="Email"
                type="email"
                variant="outlined"
                margin="normal"
                InputLabelProps={{ style: { color: "#aaa" } }}
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
  }}
              />
              <Box>
                <Typography color="#ffff" display={"flex"} justifyContent={"left"}>
                  Password
                </Typography>


              <TextField
                fullWidth
                value={password}    
                onChange={(e) => setPassword(e.target.value)}

                label="Password"
                type="password"
                variant="outlined"
                margin="normal"
                InputLabelProps={{ style: { color: "#aaa" } }}
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
  }}
  
  />
  </Box>

              <FormControlLabel
                control={<Checkbox sx={{ color: "#fff" }} />}
                label={<Typography color="gray">Remember me</Typography>}
              />

              {/* ✅ Button with React Router Link */}
              <Button
                fullWidth
                variant="contained"
                sx={{
                  mt: 2,
                  mb: 1,
                  borderRadius: 2,
                  background: "#2563eb",
                  "&:hover": { background: "#1d4ed8" },
                  color: "white",
                  textDecoration: "none",
                }}
                onClick={handleSignUp}
              >

                Sign Up 
              </Button>

              <Typography variant="body2" color="gray">
                Already have an account?{" "}
                <Link
                  to="/signIn"
                  style={{ color: "#3b82f6", cursor: "pointer", textDecoration: "none" }}
                >
                  Sign in
                </Link>
              </Typography>
            </CardContent>
            
          </Card>
           <Typography variant="caption" sx={{  opacity: 0.7,mx:1,fontSize:"14px",textAlign:"left" }}>
                      © 2021, Made with ❤️ by Simmmple & Creative Tim for a better web
                    </Typography>
          
                    <Box display={"flex"} justifyContent={"center"} gap={6} mt={2}>
                      <span
                        style={{
                          color: "rgba(160, 174, 192, 1)",
                          cursor: "pointer",
                          fontSize: "14px",
                        }}
                      >
                        Marketplace
                      </span>
                      <span
                        style={{
                          color: "rgba(160, 174, 192, 1)",
                          cursor: "pointer",
                          fontSize: "14px",
                        }}
                      >
                        Blog
                      </span>
                      <span
                        style={{
                          color: "rgba(160, 174, 192, 1)",
                          cursor: "pointer",
                          fontSize: "14px",
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
