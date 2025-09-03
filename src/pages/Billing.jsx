import React from "react";
import {
  Box, Typography, Grid, Card, CardContent, Button, IconButton,
  Avatar, Stack
} from "@mui/material";
import { CreditCard, Delete, Edit, PictureAsPdf } from "@mui/icons-material";
import Icon from '@mui/icons-material/AcUnit';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import BusinessIcon from '@mui/icons-material/Business';

const Newest = [
  { logo: <ArrowCircleDownIcon style={{ color: "red", width: 35, height: 35 }} />, name: "Netflix", time: "27 March 2020, 12:30 PM", amount: "-$2500", color: "rgba(160, 174, 192, 1)" },
  { logo: <ArrowCircleUpIcon style={{ color: "green", width: 35, height: 35 }} />, name: "Apple", time: "27 March 2020, 12:30 PM", amount: "+$2500", color: "green" },
];
const Yesterday = [
  { logo: <ArrowCircleUpIcon style={{ color: "green", width: 35, height: 35 }} />, name: "Stripe", time: "26 March 2020, 13:45 PM", amount: "+$980", color: "green" },
  { logo: <ArrowCircleUpIcon style={{ color: "green", width: 35, height: 35 }} />, name: "HubSpot", time: "26 March 2020, 12:30 PM", amount: "+$1700", color: "green" },
  { logo: <ErrorOutlineIcon style={{ color: "rgba(160, 174, 192, 1)", width: 35, height: 35 }} />, name: "Webflow", time: "25 March 2020, 05:00 AM", amount: "pending", color: "rgba(160, 174, 192, 1)" },
  { logo: <ArrowCircleDownIcon style={{ color: "red", width: 35, height: 35 }} />, name: "Microsoft", time: "25 March 2020, 05:00 AM", amount: "-$987", color: "rgba(160, 174, 192, 1)" },
];

function Billing() {
  return (
    <Box
      sx={{
        mt: 10,
        fontFamily: "Roboto, sans-serif",
        width: { xs: "100%", md: "calc(100% - 260px)" },
        ml: { xs: 0, md: "260px" },

      }}
    >
      <Box sx={{ minHeight: "100vh", color: "#fff", p: 2,width:"100%" }}>
        
        {/* First Row */}
        <Grid container spacing={3}>
          <Grid item xs={12} md={4} sx={{width:{xs:"100%",md:"27%"}}}>
            <Card sx={{
              bgcolor: "rgba(34,40,72,0.85)",
              boxShadow: 6,
              height: "239px",
              backgroundImage: "url(/Background.png)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: "20px",
              p: 1
            }}>
              <CardContent sx={{ color: "#fff", display: "flex", flexDirection: "column", gap: 5 }}>
                <Typography variant="subtitle2" gutterBottom color="white" sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  Vision UI
                  <Avatar sx={{ bgcolor: "transparent" }}> <Icon sx={{ color: "#FFFF", background: "none" }} /> </Avatar>
                </Typography>
                <Box display="flex" alignItems="center">
                  <Typography variant="h6" fontWeight={700} letterSpacing={2} color="white">
                    7812 2139 0823 XXXX
                  </Typography>
                </Box>
              </CardContent>
              <Box display={"flex"} flexDirection={"row"} gap={4} p={1}>
                <Typography variant="body2" color="white">
                  Valid Thru
                  <Typography variant="body2" color="white">05/24</Typography>
                </Typography>
                <Typography variant="body2" color="white">
                  CVV
                  <Typography variant="body2" color="white">09X</Typography>
                </Typography>
              </Box>
            </Card>
          </Grid>

          <Grid item xs={12} md={4} sx={{width:{xs:"100%",md:"33%"}}}>
            <Card sx={{
              backgroundColor: "#052e66",
              boxShadow: 6,
              height: "239px",
              borderRadius: "20px"
            }}>
              <CardContent sx={{ color: "#fff" }}>
                <Box p={2} bgcolor={"#0c1939"} borderRadius={"20px"}>
                  <Typography variant="subtitle2" color="white" display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
                    Credit Balance
                    <IconButton ><MoreHorizIcon sx={{ color: "#FFF" }} /></IconButton>
                  </Typography>
                  <Typography variant="h5" fontWeight={700} color="white">$25,215</Typography>
                </Box>
                <Typography variant="body2" sx={{ color: "rgba(160, 174, 192, 1)" }}>Newest</Typography>
                <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
                  <Box display={"flex"} flexDirection={"row"} gap={2}>
                    <BusinessIcon sx={{ color: "rgba(1, 181, 116, 1)", fontSize: "large" ,width:"40px",height:"40px"}} />
                    <Typography color="#fff">
                      Bill & Taxes
                      <Typography color="rgba(160, 174, 192, 1)">Today, 16:36</Typography>
                    </Typography>
                  </Box>
                  <Typography color="#FFF">-$154.50</Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4} sx={{width:{xs:"100%",md:"35%"}}}>
            <Card sx={{ bgcolor: "#061f4b", boxShadow: 6, height: "436px", borderRadius: "20px" }}>
              <CardContent sx={{ color: "#fff" }}>
                <Typography variant="h5" color="white" display={"flex"} justifyContent={"space-between"} mb={2}>
                  Invoices
                  <Button sx={{ bgcolor: "#0075ff", borderRadius: "12px", fontSize: "10px", px: 2 ,color:"#FFF"}}>VIEW All</Button>
                </Typography>
                <Box display={"flex"} flexDirection={"column"} gap={1}>
                  {[
                    { date: "March, 01 2020", amount: "$180", subtitle: "#MS-415646" },
                    { date: "February, 10 2021", amount: "$250", subtitle: "#MS-415646" },
                    { date: "April, 05 2020", amount: "$560", subtitle: "#MS-415646" },
                    { date: "June, 25 2019", amount: "$200", subtitle: "#MS-415646" },
                    { date: "March, 01 2019", amount: "$300", subtitle: "#MS-415646" },
                  ].map((inv, idx) => (
                    <Box key={idx} display="flex" alignItems="center" justifyContent="space-between" py={1}>
                      <Typography variant="body2" color="white">
                        {inv.date}
                        <Typography color="rgba(160, 174, 192, 1)">{inv.subtitle}</Typography>
                      </Typography>
                      <Typography variant="body2" color="white" sx={{ display: "flex", flexDirection: "row", gap: 2, alignItems: "center" }}>
                        {inv.amount}
                        <IconButton size="small"><PictureAsPdf sx={{ color: "#90caf9" }} /></IconButton>
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Payment Method */}
        <Grid container spacing={3} mt={{ xs: 2, md: -22 }} mb={5} >
          <Grid item xs={12} md={8} sx={{width:{xs:"100%",md:"62%"}}}>
            <Card sx={{ bgcolor: "#052c6b", boxShadow: 6, height:{xs:"300px",md:"173px"}, borderRadius: "20px" }}>
              <CardContent sx={{ color: "#fff", display: "flex", flexDirection: "column", gap: 4 }}>
                <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"} flexWrap="wrap">
                  <Typography variant="h5" color="white" fontWeight={700}>Payment Method</Typography>
                  <Button sx={{ color: "#fff", bgcolor: "rgba(0, 117, 255, 1)", fontSize: "10px", width: { xs: "100%", md: "20%" }, borderRadius: "20px", mt: { xs: 2, md: 0 } }}>
                    Add a new card
                  </Button>
                </Box>

                <Box display={"flex"} flexDirection={{ xs: "column", md: "row" }} gap={2}>
                  {[1,2].map((c,i)=>(
                    <Box key={i} display="flex" alignItems="center" justifyContent={"space-between"} flexWrap="wrap" height="65px" borderRadius="20px" px="20px"
                      sx={{
                        background: "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.39) 100%)",
                        border: "2px solid",
                        width: { xs: "100%", md: "50%" }
                      }}
                    >
                      <Typography fontWeight={700} color="white" sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                        <CreditCard sx={{ mr: 2, color: "#fff" }} /> 7812 2139 0823 XXXX
                      </Typography>
                      <IconButton><Edit sx={{ color: "#90caf9" }} /></IconButton>
                    </Box>
                  ))}
                </Box>

              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Billing Information & Transactions */}
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} sx={{width:{xs:"100%",md:"62%"}}}>
            <Card sx={{ backgroundColor:"#062a6d" , boxShadow: 6, mb: 2, borderRadius: "20px" }}>
              <CardContent sx={{ color: "#fff", display: "flex", flexDirection: "column", gap: 3 }}>
                <Typography variant="h5" color="white">Billing Information</Typography>
                {[1, 2, 3].map((item) => (
                  <Box key={item} mb={4} p={2} borderRadius={2} display="flex" justifyContent="space-between" alignItems="center"
                    sx={{ backgroundColor: "#081a46" }}>
                    <Box>
                      <Typography fontWeight={700} color="white" >Oliver Liam</Typography>
                      <Typography variant="body2" color="rgba(160, 174, 192, 1)">Company Name: Viking Burrito</Typography>
                      <Typography variant="body2" color="rgba(160, 174, 192, 1)">Email: oliver@burrito.com</Typography>
                      <Typography variant="body2" color="rgba(160, 174, 192, 1)">VAT: FRB1235476</Typography>
                    </Box>
                    <Box display="flex" flexDirection="row" gap={1}>
                      <IconButton><Delete sx={{ color: "red" }} /><Typography color="rgba(160,174,192,1)">Delete</Typography></IconButton>
                      <IconButton><Edit sx={{ color: "#90caf9" }} /><Typography color="rgba(160,174,192,1)">Edit</Typography></IconButton>
                    </Box>
                  </Box>
                ))}
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6} sx={{width:{xs:"100%",md:"35%"},borderRadius:"20px"}}>
            <Card sx={{ backgroundColor: "#061f4b", boxShadow: 6 }}>
              <CardContent sx={{ color: "#fff" ,borderRadius:"20px"}}>
                <Typography variant="h5" color="white">Your Transactions</Typography>
                <Box>
                  <CardContent>
                    <Typography color="rgba(160, 174, 192, 1)">Newest</Typography>
                    {Newest.map((tx, idx) => (
                      <Box key={idx} display="flex" alignItems="center" justifyContent="space-between" py={1}>
                        <Stack direction="row" spacing={2} alignItems="center">
                          {tx.logo}
                          <Stack spacing={0.4}>
                            <Typography fontWeight={700} color="white">{tx.name}</Typography>
                            <Typography variant="body2" color="rgba(160,174,192,1)">{tx.time}</Typography>
                          </Stack>
                        </Stack>
                        <Typography variant="body2" sx={{ color: tx.color, fontWeight: 700 }}>{tx.amount}</Typography>
                      </Box>
                    ))}
                  </CardContent>

                  <CardContent>
                    <Typography color="rgba(160,174,192,1)">Yesterday</Typography>
                    {Yesterday.map((tx, idx) => (
                      <Box key={idx} display="flex" alignItems="center" justifyContent="space-between" py={1}>
                        <Stack direction="row" spacing={2} alignItems="center" mb={1}>
                          {tx.logo}
                          <Stack spacing={0.1}>
                            <Typography fontWeight={700} color="white">{tx.name}</Typography>
                            <Typography variant="body2" color="rgba(160,174,192,1)">{tx.time}</Typography>
                          </Stack>
                        </Stack>
                        <Typography variant="body2" sx={{ color: tx.color, fontWeight: 700 }}>{tx.amount}</Typography>
                      </Box>
                    ))}
                  </CardContent>

                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

      </Box>
    </Box>
  );
}

export default Billing;
