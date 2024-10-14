import React, { useState, useEffect } from "react";
import learningProgramStyles from "./learningProgram.style";
import LearningProgramCopy from "../learningProgramCopy/LearningProgramCopy";

import {
  Card,
  CardContent,
  Typography,
  Button,
  Grid,
  Box,
} from "@mui/material";

const LearningProgram = () => {
  const classes = learningProgramStyles;
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
    <div
      style={{
        padding: isTab ? "0px" : "50px 40px 50px 60px",
        width: "100%",
        margin: isMobile ? "20px 0px" : "0px",
        borderRadius: "10px",
      }}
    >
      <Grid
        item
        xs={12}
        sm={12}
        display="flex"
        flexDirection={isTab ? "column" : "row"}
        justifyContent="space-between"
        alignItems={isTab ? "flex-start" : "flex-end"}
      >
        <div>
          <Typography
            style={{
              fontFamily: "Outfit",
              fontWeight: "400",
              fontSize: isTab ? "20px" : "30px",
              lineHeight: "37.8px",
              color: "#1377C0",
            }}
          >
            OUR COURSES
          </Typography>
          {isMobile ? (
            <>
              <Typography
                style={{
                  fontFamily: "Outfit",
                  fontWeight: "700",
                  fontSize: isTab ? "24px" : "50px",
                  lineHeight: isTab ? "36px" : "62.6px",
                }}
              >
                Let’s Get Started Your Carrier With Gaanv wala
              </Typography>
            </>
          ) : (
            <>
              <Typography
                style={{
                  fontFamily: "Outfit",
                  fontWeight: "700",
                  fontSize: isTab ? "24px" : "50px",
                  lineHeight: isTab ? "36px" : "62.6px",
                }}
              >
                Let’s Get Started Your Carrier
                <br />
                With Gaanv wala
              </Typography>
            </>
          )}
        </div>
        <Button
          variant="contained"
          color="primary"
          style={{
            width: isTab ? "auto" : "180px",
            height: isTab ? "40px" : "50px",
            background: "#1377C0",
            borderRadius: "8px",
            color: "#fff",
            fontWeight: "600",
            // marginTop: '20px',
            fontSize: isTab ? "12px" : "14px",
            display: "flex",
            alignItems: "center",
          }}
        >
          VIEW MORE
          <span style={{ fontSize: "30px", padding: "0px 0px 6px 6px" }}>
            →
          </span>
        </Button>
      </Grid>
      <Grid
        className="currentWorking"
        container
        spacing={2}
        style={{
          display: "flex",
          padding: isTab ? "20px 0px" : "50px",
          paddingBottom: "0px",
        }}
      >
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6} p={isTab ? 0 : 4}>
          <LearningProgramCopy medium="Hindi Medium" />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6} p={isTab ? 0 : 4}>
          <LearningProgramCopy medium="Hindi/English Medium" />
          {/* <LearningProgramTow/> */}
        </Grid>
      </Grid>

      {/* <Grid container spacing={2}>
        <Grid item xs={12} sm={6} lg={6} xl={6} p={4} >
          <Grid container spacing={2} style={classes.cardBox}>
            <Grid item xs={12} sm={6}>
              <img
                style={{ width: 128, height: 128 }}
                src="./images/LearningProgram.png"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box>
                <CardContent>
                  <Typography variant="h6" component="div">
                    Classes 11-12
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    Hindi / English Medium
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Customized learning program
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    style={{ marginTop: "10px" }}
                  >
                    View More →
                  </Button>
                </CardContent>
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6} lg={6} xl={6} p={4}>
          <Grid container spacing={2} style={classes.cardBox}>
            <Grid item xs={12} sm={6}>
              <img
                style={{ width: 128, height: 128 }}
                src="./images/LearningProgram.png"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box>
                <CardContent>
                  <Typography variant="h6" component="div">
                    Classes 11-12
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    Hindi / English Medium
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Customized learning program
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    style={{ marginTop: "10px" }}
                  >
                    View More →
                  </Button>
                </CardContent>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid> */}
    </div>
  );
};

export default LearningProgram;
