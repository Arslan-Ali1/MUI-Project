import * as React from 'react';
import { Card, CardContent, Typography, Box } from "@mui/material";
import WalletIcon from '@mui/icons-material/AccountBalanceWallet';
import LanguageIcon from '@mui/icons-material/Language';
import NotesIcon from '@mui/icons-material/TextSnippet';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function Cards() {
  const [selected, setSelected] = React.useState(null);
  const stats = [
    {
      label: "Today's Money",
      value: "$53,000",
      change: "+55%",
      changeColor: "success.main",
      icon: <WalletIcon sx={{ fontSize: 32 }} />,
      highlight: true,
    },
    {
      label: "Today's Users",
      value: "2,300",
      change: "+5%",
      changeColor: "success.main",
      icon: <LanguageIcon sx={{ fontSize: 32 }} />,
    },
    {
      label: "New Clients",
      value: "+3,052",
      change: "-14%",
      changeColor: "error.main",
      icon: <NotesIcon sx={{ fontSize: 32 }} />,
    },
    {
      label: "Total Sales",
      value: "$173,000",
      change: "+8%",
      changeColor: "success.main",
      icon: <ShoppingCartIcon sx={{ fontSize: 32 }} />,
    },
  ];

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
        gap: 3,
       
        p: 2,
        width: { xs: "100%", md: "calc(100% - 300px)" },
        ml: { xs: 0, md: "260px" }, 
        mt: { xs: "70px", md: "80px" }, 
        
      }}
    >
      {stats.map((stat, index) => (
        <Card
        key={index}
        onClick={() => setSelected(index)}
          sx={{
            bgcolor: "#0d1f43",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            p: 2,
            cursor: "pointer",
            border: selected === index ? "2px solid #0075ff" : "none",
            transition: "border 0.3s ease",
            borderRadius: 2,
            boxShadow: selected === index
              ? "0 0 10px rgba(0,150,255,0.7)"
              : "none",
          }}
        >
          <CardContent sx={{ p: 0 }}>
            <Typography variant="body2" color="#A0AEC0">
              {stat.label}
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography variant="h6" sx={{ fontWeight: "bold", color: "white" }}>
                {stat.value}
              </Typography>
              <Typography
                sx={{
                  color: stat.changeColor,
                  fontSize: "0.9rem",
                  ml: 1,
                  fontWeight: "normal",
                }}
              >
                {stat.change}
              </Typography>
            </Box>
          </CardContent>

          <Box
            sx={{
              bgcolor: "#0075ff",
              p: 1,
              borderRadius: "8px",
              display: "flex",
              alignItems: "center",
            }}
          >
            {stat.icon}
          </Box>
        </Card>
      ))}
    </Box>
  );
}