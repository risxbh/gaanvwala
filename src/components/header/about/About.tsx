import React, { useState, useEffect } from "react";
import aboutStyles from "./about.style";
import {
  Grid,
  Typography,
  Button,
  Box,
  CardActionArea,
  CardMedia,
  CardContent,
} from "@mui/material";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
const About = () => {
  const classes = aboutStyles;
  const [isMobile, setIsMobile] = useState(false);
  const [isTab, setIsTab] = useState(false);
  const [notTab, setNotTab] = useState(false);
  const navigate = useNavigate();

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
    <div>
      <Grid
        container
        spacing={2}
        alignItems="center"
        style={{
          height: isTab ? "auto" : "850px",
          padding: "50px 0px 0px",
          flexDirection: isTab ? "row" : "column",
        }}
      >
        <Grid item xs={12} sm={12} md={6} xl={6} position="relative">
          <Box position="absolute" left={0} top={0}>
            <img
              style={{
                width: isTab ? "0%" : "80%",
                height: isTab ? "0%" : "100%",
                display: isTab ? "none" : "block",
              }}
              src="./images/grey.png"
            />
          </Box>
          <Box
            sx={{
              width: isTab ? "100%" : "80%",
              height: isTab ? "auto" : "600px",
              position: "relative",
            }}
          >
            <Box>
              <img
                style={{
                  maxWidth: isTab ? "100%" : "85%",
                  margin: isTab ? "0px" : "73px 0px 0px 150px",
                  padding: isTab ? "20px" : "0px",
                  width: "100%",
                  height: isTab ? "500px" : "auto",
                  objectFit: "cover",
                }}
                src="./images/about.jpg"
              />
              <Card
                style={{
                  maxWidth: isTab ? "auto" : 374,
                  width: "fit-content",
                  boxShadow:
                    "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                  margin: isTab ? "0px" : "-92px 0px 0px 55px",
                  padding: isTab
                    ? "16px 33px 15px 33px"
                    : "16px 83px 15px 53px",
                  position: "absolute",
                  bottom: isTab ? "-40px" : "-90px",
                  left: isMobile ? "45%" : isTab ? "70%" : "20px",
                }}
              >
                <CardActionArea>
                  <Typography
                    style={{
                      fontFamily: "Outfit",
                      fontWeight: "900",
                      fontSize: isTab ? "28px" : "50px",
                      color: "#000000",
                    }}
                  >
                    4500+
                  </Typography>
                  <CardContent style={{ padding: "6px" }}>
                    <Box>
                      <img
                        style={{
                          width: isTab ? "20px" : "30px",
                          height: isTab ? "20px" : "30px",
                        }}
                        src="./images/Avatar.png"
                      />
                      <img
                        style={{
                          width: isTab ? "20px" : "30px",
                          height: isTab ? "20px" : "30px",
                        }}
                        src="./images/Avatartwo.png"
                      />
                      <img
                        style={{
                          width: isTab ? "20px" : "30px",
                          height: isTab ? "20px" : "30px",
                        }}
                        src="./images/Avatarthree.png"
                      />
                      <img
                        style={{ width: "20px", height: "20px" }}
                        src="./images/Overflow.png"
                      />
                    </Box>
                  </CardContent>

                  <Typography
                    style={{
                      fontFamily: "Outfit",

                      fontWeight: "400",
                      fontSize: isTab ? "16px" : "25px",
                      color: "#1377C0",
                      padding: "10px 0px 0px",
                    }}
                  >
                    {" "}
                    Total Students
                  </Typography>
                </CardActionArea>
              </Card>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={6} xl={6}>
          <Box
            style={classes.text}
            flexDirection="column"
            justifyContent="space-between"
            padding={isTab ? "20px" : "100px 80px 100px 0px"}
          >
            <Typography
              variant="h4"
              style={classes.about}
              padding="0px"
              fontFamily="Outfit"
            >
              ABOUT
            </Typography>

            <Typography
              sx={{
                fontFamily: "Outfit",
                fontSize: "50px",
                fontWeight: "800",
              }}
              padding="0px"
            >
              Gaanv Wala
            </Typography>
            <Typography
              variant="body1"
              style={{
                marginTop: "2px",
                color: "#000",
                fontSize: "15px",

                fontFamily: "Outfit",
                fontWeight: "300",
                margin: isTab ? "2px 0px" : "8% 0px",
              }}
              align="justify"
            >
              It is not difficult to provide education to every child, yet in
              India, finding a good, affordable education is still difficult.
              Schools in Tier 2 and Tier 3 cities still use traditional themes
              for memorization in the absence of an appropriate learning
              environment. Although there is little knowledge of state and
              national competitive exams or different types of scholarships in
              these locations, all of the pupils there are capable of
              succeeding.
            </Typography>
            <Grid
              container
              spacing={2}
              alignItems="center"
              style={{ padding: "0px" }}
              marginTop={isTab ? "20px" : "0px"}
              justifyContent="space-between"
            >
              <Grid
                item
                xs={12}
                sm={isTab ? 6 : 5.5}
                width="fit-content"
                onClick={() => navigate("/mission-vision")}
              >
                <Card
                  style={{
                    boxShadow: "0px 5px 21px -3px #0000001A",
                    padding: "12px 0px",
                  }}
                >
                  <CardActionArea>
                    <Box style={classes.CardImg}>
                      <img
                        style={classes.aboutImg}
                        src="./images/ourMission.png"
                      />
                    </Box>
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        style={classes.aboutText}
                        fontFamily="Outfit"
                      >
                        Our Mission
                      </Typography>
                      <Typography
                        variant="body1"
                        style={{
                          marginTop: "2px",
                          color: "#000",
                          fontSize: "15px",
                          lineHeight: "18px",
                          fontFamily: "Outfit",
                          fontWeight: "300",
                        }}
                        align="justify"
                      >
                        Our mission is to provide quality education along .....
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
              <Grid
                item
                xs={12}
                sm={isTab ? 6 : 5.5}
                onClick={() => navigate("/mission-vision")}
              >
                <Card
                  style={{
                    boxShadow: "0px 5px 21px -3px #0000001A",
                    padding: "12px 0px",
                  }}
                >
                  <CardActionArea>
                    <Box style={classes.CardImg}>
                      <img
                        style={classes.aboutImg}
                        src="./images/ourVision.png"
                      />
                    </Box>
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        style={classes.aboutText}
                        fontFamily="Outfit"
                      >
                        Our Vision
                      </Typography>
                      <Typography
                        variant="body1"
                        style={{
                          marginTop: "2px",
                          color: "#000",
                          fontSize: "15px",
                          lineHeight: "18px",
                          fontFamily: "Outfit",
                          fontWeight: "300",
                        }}
                        align="justify"
                      >
                        Our mission is to provide quality education along .....
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            </Grid>
            <Box mt={isTab ? 2 : 3}>
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
                onClick={() => navigate("/mission-vision")}
              >
                READ MORE
                <span style={{ fontSize: "30px", padding: "0px 0px 6px 6px" }}>
                  →
                </span>
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};
export default About;
