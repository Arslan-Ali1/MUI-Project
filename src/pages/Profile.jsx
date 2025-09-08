import React from "react";
import {
  Box,
  Avatar,
  Grid,
  Card,
  CardContent,
  Button,
  Divider,
  Stack,
  Typography,
  Switch,
  FormControlLabel,
  IconButton,
} from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import BatteryChargingFullIcon from "@mui/icons-material/BatteryChargingFull";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import ShowChartIcon from '@mui/icons-material/ShowChart';
import { CircularProgress } from "@mui/material";




// ======================
// Reusable StatCard Component
// ======================
function StatCard({ title, value }) {
  return (
    <Card sx={{ bgcolor: "rgba(255,255,255,0.03)", borderRadius: 2, boxShadow: "0 6px 18px rgba(2,6,23,0.6)" }}>
      <CardContent>
        <Typography variant="subtitle2" color="text.secondary">{title}</Typography>
        <Typography variant="h5" sx={{ mt: 1, fontWeight: 700 }}>{value}</Typography>
      </CardContent>
    </Card>
  );
}

  const projects = [
    {
      id: 1,
      title: "Modern",
      subtitle: "Project #1",
      description:
        "As Uber works through a huge amount of internal management turmoil.",
      image: "/car1.png",
    },
    {
      id: 2,
      title: "Scandinavian",
      subtitle: "Project #2",
      description:
        "Music is something that every person has his or her own specific opinion about.",
      image: "/car2.png",
    },
    {
      id: 3,
      title: "Minimalist",
      subtitle: "Project #3",
      description:
        "Different people have different taste, and various types of music.",
      image: "/car3.png",
    },
  ];


// ======================
// Main ProfilePage Component
// ======================
export default function Profile() {
  return (
    <Box sx={{ flex: 1, mt: 10, p: 3, width: { xs: "100%", md: "calc(100% - 260px)" }, marginLeft: { xs: 0, md: "260px" },backgroundColor:"#041c45" }}>
      <Grid container spacing={3}>

        {/* ======================
            Top Row: User Card (Full Width)
            ====================== */}
      <Grid item xs={12} sx={{ width: { xs: "100%", md: "100%" } }}>
  <Card
    sx={{
      p: 2,
      borderRadius: 2,
      background: "linear-gradient(90deg,#061a3a,#07182c)",
      color: "white",
    }}
  >
    <Stack
      direction={{ xs: "column", md: "row" }}
      alignItems={{ xs: "flex-start", md: "center" }}
      justifyContent="space-between"
      spacing={2}
    >
      {/* Logo and Text */}
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={2}
        alignItems={{ xs: "flex-start", md: "center" }}
        width="100%"
      >
        <Avatar
          variant="square"
          sx={{ width: 80, height: 80, bgcolor: "#2345b8" ,m:5}}
          src="/logo.png"
          alt="Profile"
          
        />
        <Box>
          <Typography variant="h6" color="#fff">
            Mark Johnson
          </Typography>
          <Typography variant="body2" color="#fff">
            mark@simmmple.com
          </Typography>
        </Box>
      </Stack>

      {/* Buttons */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 1,
          mt: { xs: 2, md: 0 },
          width: { xs: "100%", md: "auto" },
        }}
      >
        <Button
          variant="text"
          sx={{
            textTransform: "none",
            "&:hover": { bgcolor: "#1565c0", color: "white" },
            width: { xs: "100%", md: "auto" },
          }}
        >
          Overview
        </Button>
        <Button
          variant="text"
          sx={{
            textTransform: "none",
            "&:hover": { bgcolor: "#1565c0", color: "white" },
            width: { xs: "100%", md: "auto" },
          }}
        >
          Teams
        </Button>
        <Button
          variant="text"
          sx={{
            textTransform: "none",
            "&:hover": { bgcolor: "#1565c0", color: "white" },
            width: { xs: "100%", md: "auto" },
          }}
        >
          Projects
        </Button>
      </Box>
    </Stack>
  </Card>
</Grid>


        {/* ======================
            Second Row: Welcome, Car Info, Profile Info
            ====================== */}
        <Grid item xs={12} container spacing={3} >

          {/* Welcome */}
          <Grid space xs={12} md={4} sx={{width:{xs:"100%",md:"25%"}}} >
            <Card sx={{
             width:{xs:"100%",md:"100%"},
              height: "377px",
              borderRadius: "20px",
              p: 3,
              backgroundImage: "URL(/wellcome.png)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat"
            }}>
              <Box display={"flex"} justifyContent={"space-between"} flexDirection={"column"} gap={30}>
              <Box>                
              <Typography variant="h5" sx={{ color: "white", fontWeight: 800 }}>Welcome back!</Typography>
              <Typography sx={{ color: "rgba(255,255,255,0.85)" }}>Nice to see you, Mark Johnson!</Typography>
              </Box>
               <Box >
                    <IconButton sx={{color:"#FFFF" , display:"flex",justifyContent:"left",alignItems:"center"}}>
                      <Typography color="#ffff">Tap to record</Typography>
                      <ArrowRightAltIcon/>
                    </IconButton>
              </Box>
              </Box>
            </Card>
            
          </Grid>

          {/* Car Info */}
           <Grid
  item
  xs={12}
  sx={{ width: { xs: "100%", md: "45%" } }}
>
  <Card
    sx={{
      p: 2  ,
      borderRadius: 3,
      background: "linear-gradient(135deg, #041e4e, #05307a)",
      color: "#fff", 
     height:{sx:"100vh",md:"377px"},
      display: "flex",
      flexDirection: "column",
    }}
  >
    {/* Title */}
    <Typography variant="h6" sx={{ color: "#fff" }}>
      Car Informations
    </Typography>
    <Typography variant="body2" sx={{ mb: 3, color: "#fff" }}>
      Hello, Mark Johnson! Your Car is ready.
    </Typography>

    {/* ✅ Flex Layout for Circle + Stats */}
    <Box sx={{ display: "flex", flex: 1, gap: 2,mt:3,flexDirection:{ xs: "column", md: "row" }}}>
      {/* Left Circular Gauge */}
    <Box
  sx={{
    flex: "0 0 32%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 2,
  }}
>
  {/* Circular Gauge with Green Progress */}
  <Box sx={{ position: "relative", display: "inline-flex" }}>
    {/* Background Circular Progress (light grey) */}
    <CircularProgress
      variant="determinate"
      value={100}
      size={140}
      thickness={4}
      sx={{ color: "rgba(255,255,255,0.1)" }}
    />
    {/* Foreground Circular Progress (green, percentage) */}
    <CircularProgress
      variant="determinate"
      value={68} // 👈 yahan percentage ke hisaab se green line
      size={140}
      thickness={4}
      sx={{
        color: "#10d876",
        position: "absolute",
        left: 0,
      }}
    />

    {/* Center Content */}
    <Box
      sx={{
        width: 140,
        height: 140,
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        top: 0,
        left: 0,
      }}
    >
      <BatteryChargingFullIcon
        sx={{ fontSize: 28, color: "#10d876", mt: 10 }}
      />
      <Box sx={{ textAlign: "center", position: "absolute" }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          sx={{ color: "#fff" }}
        >
          68%
        </Typography>
        <Typography variant="subtitle2" sx={{ color: "#fff" }}>
          Current load
        </Typography>
      </Box>
    </Box>
  </Box>

  {/* Time to full charge */}
  <Box textAlign="center">
    <Typography variant="caption" sx={{ color: "#fff" }}>
      0h 58 min <br /> Time to full charge
    </Typography>
  </Box>
</Box>


      {/* Right Stats */}
      <Box sx={{ flex: 2 }}>
        <Grid container spacing={1}>
          <Grid item xs={6} sx={{width:{xs:"100%",md:"45%"}}}>
            <Card sx={{ bgcolor: "rgba(255,255,255,0.05)", borderRadius: 2, p: 2 }}>
              <Stack spacing={1} display={"flex"} flexDirection={"row"} gap={3} sx={{justifyContent:{xs:"space-between"}}}>
                <Box display="flex" alignItems="left" flexDirection={"column"} gap={1}>
                <Typography variant="subtitle2" sx={{ color: "#fff" }}>
                  Health  
                </Typography>
                  <Typography variant="h6" fontWeight="bold" sx={{ color: "#fff" }}>
                    76%
                  </Typography>
                </Box>
                  <DirectionsCarIcon sx={{ bgcolor: "#1e90ff", width:"40px",height:"40px", color:"#FFFF",borderRadius:"12px" ,p:1}} />
              </Stack>
            </Card>
          </Grid>
          <Grid item xs={6} sx={{width:{xs:"100%",md:"45%"}}}>
            <Card sx={{ bgcolor: "rgba(255,255,255,0.05)", borderRadius: 2, p: 2 }}>
              <Stack spacing={1} display={"flex"} flexDirection={"row"} gap={2} sx={{justifyContent:{xs:"space-between"}}} >
                <Box display={"flex"} flexDirection={"column"}>

                <Typography variant="subtitle2" sx={{ color: "#fff" }}>
                  Efficiency
                </Typography>
                <Typography variant="h6" fontWeight="bold" sx={{ color: "#fff" }}>
                  +20%
                </Typography>
                </Box>
                <ShowChartIcon sx={{color:"green",fontSize:"large",width:"40px",height:"50px"}}/>               
              </Stack>
            </Card>
          </Grid>
          <Grid item xs={6} sx={{width:{xs:"100%",md:"45%"}}}>
            <Card sx={{ bgcolor: "rgba(255,255,255,0.05)", borderRadius: 2, p: 2 }}>
              <Stack spacing={1} display={"flex"} flexDirection={"row"} alignItems={"center"}gap={2} sx={{justifyContent:{xs:"space-between"}}}>
                <Box display={"flex"} flexDirection={"column"}>

                <Typography variant="subtitle2" sx={{ color: "#fff",fontSize:"12px" }}>
                  Consumption
                </Typography>
                <Box display="flex" justifyContent={"left"} gap={1}>
                  <Typography variant="h6" fontSize={"13px"} fontWeight="bold" sx={{ color: "#fff" }}>
                    163W/km
                  </Typography>
                </Box>
                  
                </Box>
                <FlashOnIcon sx={{ bgcolor: "#1e90ff", width:"40px",height:"40px", color:"#FFFF",borderRadius:"12px" ,p:1}} />
              </Stack>
            </Card>
          </Grid>
          <Grid item xs={6} sx={{width:{xs:"100%",md:"45%"}}}>
            <Card sx={{ bgcolor: "rgba(255,255,255,0.05)", borderRadius: 2, p: 2 }}>
              <Stack spacing={1} display={"flex"} flexDirection={"row"} alignItems={"center"}gap={2} sx={{justifyContent:{xs:"space-between"}}}>
                <Box display={"flex"} flexDirection={"column"}>

                <Typography variant="subtitle2" sx={{ color: "#fff" }}>
                  Week
                </Typography>
                <Typography variant="h6" fontWeight="bold" sx={{ color: "#fff" }}>
                  1.3km
                </Typography>
                </Box>
                <ShowChartIcon sx={{color:"green",fontSize:"large",height:"50px",width:"40px"}}/>
               
              </Stack>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  </Card>
</Grid>

          {/* Profile Info */}
          <Grid item xs={12} md={3.2} sx={{width:{xs:"100%",md:"25%"}}}>
            <Card sx={{ p: 2, borderRadius: 2, backgroundColor: "#052047", height: "377px" }}>
              <Typography variant="h6" color="#fff">Profile Informations</Typography>
              <Divider sx={{ my: 1 }} />
              <Typography sx={{ mb: 1 }} color="rgba(160, 174, 192, 1)" fontSize={"14px"}>
                Hi, I’m Mark Johnson, Decisions: If you can’t decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term.
              </Typography>
              <Divider sx={{ my: 1, borderColor: "#fff" }} />
              <Box sx={{ mt: 1 }}>
                <Typography variant="caption" display="flex" justifyContent="space-between" mb={1} color="rgba(160,174,192,1)" fontSize={"14px"} >
                  Full Name: <span style={{ color: "#fff" }}>Mark Johnson</span>
                </Typography>
                <Typography variant="caption" display="flex" justifyContent="space-between" mb={1} color="rgba(160,174,192,1)" fontSize={"14px"}>
                  Mobile: <span style={{ color: "#fff" }}>+44 (123) 1234 123</span>
                </Typography>
                <Typography variant="caption" display="flex" justifyContent="space-between" mb={1} color="rgba(160,174,192,1)" fontSize={"14px"}>
                  Email: <span style={{ color: "#fff" }}>mark@simmmple.com</span>
                </Typography>
                <Typography variant="caption" display="flex" justifyContent="space-between" mb={1} color="rgba(160,174,192,1)" fontSize={"14px"}>
                  Location: <span style={{ color: "#fff" }}>United States</span>
                </Typography>
                <Typography variant="caption" display="flex" justifyContent="space-between" color="rgba(160,174,192,1)" fontSize={"14px"}>
                  Social Media: 
                  <Stack direction="row" spacing={1}>
                    <Avatar sx={{ bgcolor: "transparent" }}><FacebookIcon fontSize="small" sx={{ color: "white" }} /></Avatar>
                    <Avatar sx={{ bgcolor: "transparent" }}><InstagramIcon fontSize="small" sx={{ color: "white" }} /></Avatar>
                    <Avatar sx={{ bgcolor: "transparent" }}><XIcon fontSize="small" sx={{ color: "white" }} /></Avatar>
                  </Stack>
                </Typography>
              </Box>
            </Card>
          </Grid>
        </Grid>

        {/* ======================
            Third Row: Platform Settings + Projects
            ====================== */}
        <Grid item xs={12} container spacing={3}>
          {/* Platform Settings */}
          <Grid item xs={12} md={6} sx={{width:{xs:"100%",md:"30%"}}}>
            <Card sx={{ p: 2, borderRadius: "20px", backgroundColor: "#061133",  }}>
              <Typography variant="h6" color="#fff">Platform Settings</Typography>
              <Divider sx={{ my: 1 }} />
              <Box p={1}>
                <Typography fontSize={"20px"} mb={3} color="rgba(160, 174, 192, 1)">Account</Typography>
                <Stack direction="row" justifyContent="space-between" alignItems="center" mb={2}>
                  <FormControlLabel control={<Switch defaultChecked sx={{ color: "white" }} />} label="" />
                  <Typography variant="body2" color="rgba(160, 174, 192, 1)" fontSize={"16px"}>Email me when someone follows me</Typography>
                </Stack>
                <Stack direction="row" justifyContent="space-between" alignItems="center" mb={2}>
                  <FormControlLabel control={<Switch defaultChecked sx={{ color: "white" }} />} label="" />
                  <Typography variant="body2" color="rgba(160, 174, 192, 1)" fontSize={"16px"}>Email me when someone follows me</Typography>
                </Stack>

                <Typography fontSize={"20px"} mt={2} mb={2} color="rgba(160, 174, 192, 1)">Application</Typography>
                <Stack direction="row" alignItems="center" mb={2}>
                  <FormControlLabel control={<Switch defaultChecked sx={{ color: "white" }} />} label="" />
                  <Typography variant="body2" color="rgba(160,174,192,1) " fontSize={"16px"}>New launches and projects</Typography>
                </Stack>
                <Stack direction="row" alignItems="center" mb={2}>
                  <FormControlLabel control={<Switch defaultChecked sx={{ color: "white" }} />} label="" />
                  <Typography variant="body2" color="rgba(160,174,192,1)" fontSize={"16px"}>Monthly product updates</Typography>
                </Stack>
                <Stack direction="row" alignItems="center" mb={2}>
                  <FormControlLabel control={<Switch defaultChecked sx={{ color: "white" }} />} label="" />
                  <Typography variant="body2" color="rgba(160,174,192,1)"fontSize={"16px"}>Monthly product updates</Typography>
                </Stack>
                <Stack direction="row" alignItems="center" mb={2}>
                  <FormControlLabel control={<Switch defaultChecked sx={{ color: "white" }} />} label="" />
                  <Typography variant="body2" color="rgba(160,174,192,1)"fontSize={"16px"}>Monthly product updates</Typography>
                </Stack>
              </Box>
            </Card>
          </Grid>

          {/* Projects */}
         <Box
  sx={{
    bgcolor: "rgba(6,11,40,0.94)",
    p: 3,
    borderRadius: 3,
    width: { xs: "100%", md: "67%" },
  }}
>
  {/* Heading */}
  <Typography variant="h6" sx={{ color: "#fff", mb: 1 }}>
    Projects
  </Typography>
  <Typography
    variant="body2"
    sx={{ color: "rgba(255,255,255,0.7)", mb: 3 }}
  >
    Architects design houses
  </Typography>

  {/* Cards Container */}
  <Box
    sx={{
      display: "flex",
      gap: 3,
      width: "100%",
      flexDirection: { xs: "column", md: "row" }, // 📱 Mobile: column, 💻 Desktop: row
    }}
  >
    {projects.slice(0, 3).map((project) => (
      <Card
        key={project.id}
        sx={{
          flex: {
            xs: "1 1 100%", // 📱 Mobile: full width
            sm: "1 1 calc(50% - 16px)", // 📲 Tablet: 2 columns
            md: "1 1 calc(33.33% - 16px)", // 💻 Desktop: 3 columns
          },
          bgcolor: "transparent",
          color: "#fff",
          borderRadius: 3,
          boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
          overflow: "hidden",
        }}
      >
        {/* Image */}
        <Box
          sx={{
            height: 180,
            backgroundImage: `url(${project.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <CardContent>
          <Typography
            variant="caption"
            sx={{ color: "rgba(255,255,255,0.6)" }}
          >
            {project.subtitle}
          </Typography>
          <Typography variant="h6" sx={{ mt: 0.5, mb: 1, color: "white" }}>
            {project.title}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: "rgba(160, 174, 192, 1)",
              mb: 2,
              fontSize: "16px",
            }}
          >
            {project.description}
          </Typography>

          {/* Bottom Row */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Button
              size="small"
              variant="outlined"
              sx={{
                borderColor: "#fff",
                color: "#fff",
                textTransform: "none",
                px: 2,
                "&:hover": {
                  borderColor: "#00bfff",
                  color: "#00bfff",
                },
              }}
            >
              View All
            </Button>

            <Stack direction="row" spacing={-1}>
              <Avatar src="/1.png" sx={{ width: 28, height: 28 }} />
              <Avatar src="/2.png" sx={{ width: 28, height: 28 }} />
              <Avatar src="/3.png" sx={{ width: 28, height: 28 }} />
              <Avatar src="/4.png" sx={{ width: 28, height: 28 }} />
            </Stack>
          </Box>
        </CardContent>
      </Card>
    ))}
  </Box>
</Box>

        </Grid>
      </Grid>
    </Box>




  );
}
