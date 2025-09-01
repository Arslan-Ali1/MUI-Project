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
export default function SignUp() {
  return (
    <Grid container sx={{ minHeight: "100vh", }}>
      {/* Left Side - Image + Text */}
     <Grid
            item
            xs={false} // hide on mobile
            md={6}     // show 50% width on desktop
            sx={{
              backgroundImage: "url('/bgSign.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              display: { xs: "none", md: "flex" }, // hide on xs, show on md
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              color: "white",
              p: 3,
              width:{xs:"false",md:"50%"}
            }}
          >
            <Typography variant="overline" sx={{ letterSpacing: 2 }}>
              INSPIRED BY THE FUTURE
            </Typography>
            <Typography variant="h4" fontWeight="bold" sx={{  color: " rgba(255, 255, 255, 1)", fontFamily:"Plus Jakarta Display",fontWeight:"700"}}>
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
         bgcolor:"#0b0f33",
          p: 2,
       width:{xs:"100%",md:"50%"},
        }}
      >
        <Box sx={{mt:{xs:10 ,md:20} ,mr:{xs:0,md:20}}} >
          <Box mt={"80px"}>

           <Typography variant="h5" fontWeight="bold" gutterBottom color="#ffff" sx={{display:"flex",alignItems:"center",justifyContent:"center" }}>
              Welcome!
            </Typography>
            <Typography variant="body2" sx={{ fontSize:"14px",fontWeight:"400", color:"#ffff",display:"flex",alignItems:"center",justifyContent:"center"  }}>
              Use these awesome forms to login or create new
            </Typography>
            <Typography sx={{fontSize:"14px", mb: 3,color:"#ffff",display:"flex",alignItems:"center",justifyContent:"center" }}>
              account in your project for free.
            </Typography>
          </Box>
        <Card
          sx={{
            width: "452px",
            maxWidth: 400,
            borderRadius: "30px",
            bgcolor: "#131738",
            color: "#fff",
            boxShadow: "0 8px 24px rgba(0,0,0,0.4)",
          }}
          >
            
          <CardContent sx={{ textAlign: "center" }}>

            {/* Social Register */}
            <Typography sx={{color:"#fff",mb:2,mt:5}} variant="h5">Register With</Typography>


            <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mb: 2 }}>

              <Box sx={{width:"70px",height:"70px",bgcolor:"#131738",display:"flex",justifyContent:"center",alignItems:"center",border:"2px solid" , borderImage: "linear-gradient(135deg, rgba(255,255,255,1), rgba(255,255,255,0)) 1", borderRadius:"20px"}}>
              <IconButton sx={{  color: "#fff" ,borderRadius:"20px" }}>
                <FacebookIcon />
              </IconButton>
              </Box>

              <Box sx={{width:"70px",height:"70px",bgcolor:"#131738",display:"flex",justifyContent:"center",alignItems:"center",border:"2px solid" , borderImage: "linear-gradient(135deg, rgba(255,255,255,1), rgba(255,255,255,0)) 1", borderRadius:"20px"}}>
              <IconButton sx={{  color: "#fff" ,borderRadius:"20px" }}>
               <AppleIcon/>
              </IconButton>
              </Box>
              <Box sx={{width:"70px",height:"70px",bgcolor:"#131738",display:"flex",justifyContent:"center",alignItems:"center",border:"2px solid" , borderImage: "linear-gradient(135deg, rgba(255,255,255,1), rgba(255,255,255,0)) 1", borderRadius:"20px"}}>
              <IconButton sx={{  color: "#fff" ,borderRadius:"20px" }}>
                <GoogleIcon/>
              </IconButton>
              </Box>
            </Box>

            <Divider sx={{  my: 2 }}>
              <Typography variant="h7" color="rgba(160, 174, 192, 1)">
                or
              </Typography>
            </Divider>


            {/* Input Fields */}
         







            <Box>

            <Typography  color="#ffff" display={"flex"} justifyContent={"left"}>Name</Typography>
            <TextField
              fullWidth
              label="Name"
              variant="outlined"
              margin="normal"
              InputLabelProps={{ style: { color: "#aaa" } }}
              InputProps={{
                style: { color: "#fff", borderRadius: 12 },
              }}
              />
              </Box>







            <TextField
              fullWidth
              label="Email"
              type="email"
              variant="outlined"
              margin="normal"
              InputLabelProps={{ style: { color: "#aaa" } }}
              InputProps={{
                style: { color: "#fff", borderRadius: 12 },
              }}
            />
            <TextField
              fullWidth
              label="Password"
              type="password"
              variant="outlined"
              margin="normal"
              InputLabelProps={{ style: { color: "#aaa" } }}
              InputProps={{
                style: { color: "#fff", borderRadius: 12 },
              }}
            />

            <FormControlLabel
              control={<Checkbox sx={{ color: "#fff" }} />}
              label={<Typography color="gray">Remember me</Typography>}
              />

            <Button
              fullWidth
              variant="contained"
              sx={{
                mt: 2,
                mb: 1,
                borderRadius: 2,
                background: "#2563eb",
                "&:hover": { background: "#1d4ed8" },
              }}
            >
              SIGN UP
            </Button>

            <Typography variant="body2" color="gray">
              Already have an account?{" "}
              <span style={{ color: "#3b82f6", cursor: "pointer" }}>Sign in</span>
            </Typography>
          </CardContent>
        </Card>
                </Box>
            
      </Grid>
    </Grid>
  );
}
