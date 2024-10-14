import React, { useState, useEffect } from "react";
import PeachNumberStyles from "./peachNumber.style";
import { Box, Grid, Typography } from "@mui/material";
import { Button } from "react-bootstrap";

const PeachNumber = () => {
  const classes = PeachNumberStyles;
  const [isMobile, setIsMobile] = useState(false);
  const [isTab, setIsTab] = useState(false);

  useEffect(() => {
    // Function to update screen width
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Change 768 to the desired breakpoint
      setIsTab(window.innerWidth < 1080);
    };

    // Initial check
    handleResize();

    // Listen for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <Box sx={{ width: "100%" }}>
      <Grid
        container
        spacing={2}
        alignItems="center"
        sx={{
          background: "#1377C0",
          display: "flex",
          width: isTab ? "100%" : "70%",
          padding: "28px 0px 28px 0px",

          margin: "0 auto",
          textAlign: "center",
          boxShadow: "0px 5px 21px -3px rgba(0, 0, 0, 0.1)",
          borderRadius: isTab ? "0px" : "10px",
        }}
      >
        <Grid xs={3} sm={3} md={3} lg={3} xl={3} sx={{ paddingLeft: "0px" }}>
          <Typography
            sx={{
              fontFamily: "Outfit",
              fontStyle: "normal",
              fontWeight: "900",
              fontSize: isTab ? "24px" : "50px",
              color: "#fff",
            }}
          >
            10
          </Typography>
          <Typography
            sx={{
              fontFamily: "Outfit",
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: isTab ? "14px" : "30px",
              color: "#fff",
            }}
          >
            States
          </Typography>
        </Grid>
   

        <Grid xs={3} sm={3} md={3} lg={3} xl={3} sx={{ paddingLeft: "0px" }}>
          <Typography
            sx={{
              fontFamily: "Outfit",
              fontStyle: "normal",
              fontWeight: "900",
              fontSize: isTab ? "24px" : "50px",
              color: "#fff",
            }}
          >
            45+
          </Typography>
          <Typography
            sx={{
              fontFamily: "Outfit",
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: isTab ? "14px" : "30px",
              color: "#fff",
            }}
          >
            Schools
          </Typography>
        </Grid>

        <Grid xs={3} sm={3} md={3} lg={3} xl={3} sx={{ paddingLeft: "0px" }}>
          <Typography
            sx={{
              fontFamily: "Outfit",
              fontStyle: "normal",
              fontWeight: "900",
              fontSize: isTab ? "24px" : "50px",
              color: "#fff",
            }}
          >
            800+
          </Typography>
          <Typography
            sx={{
              fontFamily: "Outfit",
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: isTab ? "14px" : "30px",
              color: "#fff",
            }}
          >
            Teachers
          </Typography>
        </Grid>
        <Grid xs={3} sm={3} md={3} lg={3} xl={3} sx={{ paddingLeft: "0px" }}>
          <Typography
            sx={{
              fontFamily: "Outfit",
              fontStyle: "normal",
              fontWeight: "900",
              fontSize: isTab ? "24px" : "50px",
              color: "#fff",
            }}
          >
            12000+
          </Typography>
          <Typography
            sx={{
              fontFamily: "Outfit",
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: isTab ? "14px" : "30px",
              color: "#fff",
            }}
          >
            Total Student
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};
export default PeachNumber;
