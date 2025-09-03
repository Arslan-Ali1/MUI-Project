import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Stack,
  LinearProgress,
  Box,
  IconButton,
} from "@mui/material";
import XdIcon from "@mui/icons-material/Close";
import BugReportIcon from "@mui/icons-material/BugReport";
import LaunchIcon from "@mui/icons-material/Launch";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AddTaskIcon from "@mui/icons-material/AddTask";
import MoreVertIcon from "@mui/icons-material/MoreVert";

// Authors Data
const authors = [
  {
    name: "Esthera Jackson",
    email: "esthera@simmple.com",
    function: "Manager Organization",
    status: "Online",
    employed: "14/06/21",
    image: "https://mui.com/static/images/avatar/1.jpg",
  },
  {
    name: "Alexa Liras",
    email: "alexa@simmple.com",
    function: "Programmer Developer",
    status: "Offline",
    employed: "14/06/21",
    image: "https://mui.com/static/images/avatar/2.jpg",
  },
  {
    name: "Laurent Michael",
    email: "laurent@simmple.com",
    function: "Executive Projects",
    status: "Online",
    employed: "14/06/21",
    image: "https://mui.com/static/images/avatar/3.jpg",
  },
  {
    name: "Freduardo Hill",
    email: "freduardo@simmple.com",
    function: "Manager Organization",
    status: "Online",
    employed: "14/06/21",
    image: "https://mui.com/static/images/avatar/4.jpg",
  },
  {
    name: "Daniel Thomas",
    email: "daniel@simmple.com",
    function: "Programmer Developer",
    status: "Offline",
    employed: "14/06/21",
    image: "https://mui.com/static/images/avatar/5.jpg",
  },
  {
    name: "Mark Wilson",
    email: "mark@simmple.com",
    function: "Designer UI/UX Design",
    status: "Offline",
    employed: "14/06/21",
    image: "https://mui.com/static/images/avatar/6.jpg",
  },
];

// Projects Data
const projects = [
  {
    name: "Chakra Soft UI Version",
    budget: "$14,000",
    completion: 60,
    status: "Working",
    icon: <XdIcon sx={{ color: "#e84393" }} />,
  },
  {
    name: "Add Progress Track",
    budget: "$3,000",
    completion: 10,
    status: "Canceled",
    icon: <AddTaskIcon sx={{ color: "#377dff" }} />,
  },
  {
    name: "Fix Platform Errors",
    budget: "Not set",
    completion: 100,
    status: "Done",
    icon: <BugReportIcon sx={{ color: "#ff4757" }} />,
  },
  {
    name: "Launch our Mobile App",
    budget: "$32,000",
    completion: 100,
    status: "Done",
    icon: <LaunchIcon sx={{ color: "#2ed573" }} />,
  },
  {
    name: "Add the New Pricing Page",
    budget: "$400",
    completion: 25,
    status: "Working",
    icon: <ShoppingCartIcon sx={{ color: "#1e90ff" }} />,
  },
];

export default function Tables() {
  return (
    <Box
      sx={{
        width: { xs: "100%", md: "calc(100% - 260px)" },
        ml: { xs: 0, md: "260px" },
        mt:10,
        backgroundColor:"#013578"
      }}
    >
      {/* Authors Card */}
      <Box sx={{ mb: 4, mt: 6 }}>
        <Card
          sx={{
            width: "100%",
            borderRadius: 2,
            bgcolor: "#042056",
            boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.5)",
          }}
        >
          <CardContent>
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", color: "white", mb: 2 }}
            >
              Authors Table
            </Typography>

            {/* Table Wrapper for Mobile Scroll */}
            <Box sx={{ overflowX: "auto" }}>
              <Table
                size="small"
                sx={{
                  "& th, & td": {
                    borderBottom: "1px solid rgba(255,255,255,0.1)", // halka border
                  },
                }}
              >
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ color: "#A0AEC0", fontSize: 12 }}>
                      AUTHOR
                    </TableCell>
                    <TableCell sx={{ color: "#A0AEC0", fontSize: 12 }}>
                      FUNCTION
                    </TableCell>
                    <TableCell sx={{ color: "#A0AEC0", fontSize: 12 }}>
                      STATUS
                    </TableCell>
                    <TableCell sx={{ color: "#A0AEC0", fontSize: 12 }}>
                      EMPLOYED
                    </TableCell>
                    <TableCell sx={{ color: "#A0AEC0", fontSize: 12 }}>
                      ACTION
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {authors.map((author, index) => (
                    <TableRow key={index}>
                      <TableCell>
                        <Stack direction="row" alignItems="center" spacing={1}>
                          <img
                            src={author.image}
                            alt={author.name}
                            style={{
                              width: 40,
                              height: 40,
                              borderRadius: "8px",
                            }}
                          />
                          <Box>
                            <Typography
                              sx={{
                                color: "white",
                                fontSize: 14,
                                fontWeight: 500,
                              }}
                            >
                              {author.name}
                            </Typography>
                            <Typography sx={{ color: "gray", fontSize: 12 }}>
                              {author.email}
                            </Typography>
                          </Box>
                        </Stack>
                      </TableCell>
                      <TableCell>
                        <Typography sx={{ color: "white", fontSize: 13 }}>
                          {author.function}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography
                          sx={{
                            fontSize: 12,
                            bgcolor:
                              author.status === "Online"
                                ? "#01B574"
                                : "#A0AEC0",
                            px: 2,
                            py: 0.5,
                            borderRadius: 2,
                            color: "white",
                            display: "inline-block",
                          }}
                        >
                          {author.status}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography sx={{ color: "white", fontSize: 13 }}>
                          {author.employed}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography
                          sx={{
                            color: "#4299E1",
                            fontSize: 13,
                            cursor: "pointer",
                            fontWeight: 500,
                          }}
                        >
                          Edit
                        </Typography>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </CardContent>
        </Card>
      </Box>

      {/* Projects Card */}
      <Box>
        <Card
          sx={{
            width: "100%",
            borderRadius: 2,
            bgcolor: "#042056",
            boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.5)",
          }}
        >
          <CardContent>
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", color: "white", mb: 1 }}
            >
              Projects
            </Typography>
            <Typography variant="body2" sx={{ color: "#01B574", mb: 2 }}>
              ✔ 30 done this month
            </Typography>

            {/* Table Wrapper for Mobile Scroll */}
            <Box sx={{ overflowX: "auto" }}>
              <Table
                size="small"
                sx={{
                  "& th, & td": {
                    borderBottom: "1px solid rgba(255,255,255,0.1)", // halka border
                  },
                }}
              >
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ color: "#A0AEC0", fontSize: 12 }}>
                      COMPANIES
                    </TableCell>
                    <TableCell sx={{ color: "#A0AEC0", fontSize: 12 }}>
                      BUDGET
                    </TableCell>
                    <TableCell sx={{ color: "#A0AEC0", fontSize: 12 }}>
                      STATUS
                    </TableCell>
                    <TableCell sx={{ color: "#A0AEC0", fontSize: 12 }}>
                      COMPLETION
                    </TableCell>
                    <TableCell />
                  </TableRow>
                </TableHead>
                <TableBody>
                  {projects.map((proj, index) => (
                    <TableRow key={index}>
                      <TableCell>
                        <Stack direction="row" alignItems="center" spacing={1}>
                          {proj.icon}
                          <Typography
                            sx={{
                              color: "white",
                              fontSize: 13,
                              fontWeight: 500,
                            }}
                          >
                            {proj.name}
                          </Typography>
                        </Stack>
                      </TableCell>
                      <TableCell>
                        <Typography sx={{ color: "white", fontSize: 13 }}>
                          {proj.budget}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography
                          sx={{
                            fontSize: 12,
                            px: 2,
                            py: 0.5,
                            borderRadius: 2,
                            color: "white",
                            bgcolor:
                              proj.status === "Working"
                                ? "#3182CE"
                                : proj.status === "Done"
                                ? "#01B574"
                                : "#E53E3E",
                            display: "inline-block",
                          }}
                        >
                          {proj.status}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Box sx={{ display: "flex",flexDirection:"column", alignItems: "left" }}>
                             <Box sx={{ minWidth: 30 }}>
                            <Typography
                              variant="caption"
                              sx={{ color: "#A0AEC0" }}
                              >
                                {`${proj.completion}%`}
                            </Typography>
                          </Box>
                          <Box sx={{ width: "100%", mr: 1 }}>
                            <LinearProgress
                              variant="determinate"
                              value={proj.completion}
                              sx={{
                                height: 6,
                                borderRadius: 5,
                                backgroundColor: "#2D3748",
                                "& .MuiLinearProgress-bar": {
                                  backgroundColor:
                                    proj.status === "Done"
                                      ? "#01B574"
                                      : proj.status === "Working"
                                      ? "#3182CE"
                                      : "#E53E3E",
                                },
                              }}
                            />
                          </Box>
                        </Box>
                      </TableCell>

                      <TableCell>
                        <IconButton sx={{ color: "#A0AEC0" }}>
                          <MoreVertIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}
