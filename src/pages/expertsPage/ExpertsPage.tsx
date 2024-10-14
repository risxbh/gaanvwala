import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Button,
  Typography,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import founderStyles from "./experts.styles";

function ExpertsPage() {
  const classes = founderStyles;
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
    <Box>
      <Box style={{ position: "relative" }}>
        <img
          style={{ width: "100% ", height: 250, background: "#0F1B31" }}
          src="./images/bannerImg.png"
        />
        <Box
          style={{
            position: "absolute",
            textAlign: "center",
            width: "100%",
            height: "100%",
            top: "0px",
            left: "0px",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
          }}
        >
          <Typography
            style={{
              fontFamily: "Outfit",
              fontWeight: "700",
              fontSize: isTab ? "24px" : "60px",
              lineHeight: isTab ? "36px" : "62.6px",
              color: "white",
            }}
          >
            EXPERTS
          </Typography>
          <Typography
            style={{
              fontFamily: "Outfit",
              fontWeight: "400",
              fontSize: isTab ? "20px" : "30px",
              lineHeight: "37.8px",
              color: "#fff",
              marginTop: "10px",
            }}
          >
            HOME{" "}
            <span
              style={{
                fontSize: "30px",
                padding: "0px 0px 6px 6px",
                fontWeight: "bolder",
              }}
            >
              →
            </span>{" "}
            EXPERTS
          </Typography>
          {/* <Typography style={{fontSize: '15px', color: '#fff'}}>Home→ MISSION & VISION</Typography> */}
        </Box>
      </Box>
      <Grid
        container
        display="flex"
        justifyContent="space-between"
        spacing={2}
        px={isTab ? "20px" : "50px"}
        py={isTab ? "20px" : "40px"}
        mt={isMobile ? 2 : 6}
      >
        <Grid
          xs={12}
          sm={5.8}
          md={5.8}
          lg={5.8}
          flexWrap={isTab ? "wrap" : "nowrap"}
          mt={2}
        >
          <div
            style={{
              ...classes.borderBox,
              padding: isTab ? "20px 20px 10px" : "40px 40px 10px",
              flexWrap: isMobile ? "wrap" : "nowrap",
              height: "100%",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <img
                src="./images/team_img_1_1.png"
                style={{
                  width: isTab ? "190px" : "190px",
                  height: isTab ? "190px" : "190px",
                  minHeight: isTab ? "190px" : "190px",
                  objectFit: "cover",
                  margin: "0px",
                  borderRadius: "10px",
                  maxWidth: "190px",
                  border: "1px solid #1377C0",
                }}
              />
              <div
                style={{
                  bottom: "10px",
                  background: "#fff",
                  left: "15px",
                  borderRadius: "8px",
                  marginTop: isMobile ? "0px" : "10px",
                }}
              >
                <h2
                  style={{
                    fontSize: isTab ? "20px" : "30px",
                    fontFamily: "Outfit",
                    fontWeight: "700",
                    lineHeight: "31.5px",
                    marginTop: "10px",
                    textWrap: "nowrap",
                    marginBottom: "0px",
                  }}
                >
                  Hutesh Kumar <br />
                  Gauttam
                </h2>
                <p
                  style={{
                    fontSize: isTab ? "16px" : "20px",
                    fontFamily: "Outfit",
                    fontWeight: "400",
                    lineHeight: isTab ? "18px" : "34px",
                    marginBottom: "10px",
                    color: "#1377C0",
                  }}
                >
                  Co-Founder
                </p>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
                marginLeft: isTab ? 0 : 4,
                padding: 0,
              }}
            >
              <div
                style={{
                  fontSize: "25px",
                  padding: "10px",
                  height: isMobile ? "40%" : "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <ul
                  style={{
                    fontSize: isTab ? "14px" : "20px",
                    fontFamily: "Outfit",
                    fontWeight: "300",
                    lineHeight: isTab ? "20px" : "28px",
                    textAlign: "justify",
                    color: "#000",
                  }}
                >
                  <li>
                    NIT Rourkela alumnus with 6 years of MNC experience in
                    software engineering.
                  </li>
                  <li>
                    Patent holder with expertise in AI, computer vision, and
                    leadership.
                  </li>
                </ul>
                <Button
                  variant="contained"
                  color="primary"
                  style={{
                    width: isTab ? "150px" : "285px",
                    height: isTab ? "40px" : "45px",
                    background: "#1377C0",
                    borderRadius: "8px",
                    color: "#fff",
                    fontWeight: "700",
                    marginTop: "10px",
                    fontSize: isTab ? "12px" : "20px",
                    display: "flex",
                    alignItems: "center",
                    fontFamily: "Outfit",
                    marginLeft: isTab ? "20px" : "0px",
                    minHeight: isTab ? "40px" : "45px",
                  }}
                >
                  Book Now
                </Button>
              </div>
            </div>
          </div>
        </Grid>
        <Grid
          xs={12}
          sm={5.8}
          md={5.8}
          lg={5.8}
          flexWrap={isTab ? "wrap" : "nowrap"}
          mt={2}
        >
          <div
            style={{
              ...classes.borderBox,
              padding: isTab ? "20px 20px 10px" : "40px 40px 10px",
              flexWrap: isMobile ? "wrap" : "nowrap",
              height: "100%",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <img
                src="./images/team_img_2_2.jpg"
                style={{
                  width: isTab ? "190px" : "190px",
                  height: isTab ? "190px" : "190px",
                  minHeight: isTab ? "190px" : "190px",
                  objectFit: "cover",
                  margin: "0px",
                  borderRadius: "10px",
                  maxWidth: "190px",
                  border: "1px solid #1377C0",
                }}
              />
              <div
                style={{
                  bottom: "10px",
                  background: "#fff",
                  left: "15px",
                  borderRadius: "8px",
                  marginTop: isMobile ? "0px" : "10px",
                }}
              >
                <h2
                  style={{
                    fontSize: isTab ? "20px" : "30px",
                    fontFamily: "Outfit",
                    fontWeight: "700",
                    lineHeight: "31.5px",
                    marginTop: "10px",
                    textWrap: "nowrap",
                    marginBottom: "0px",
                  }}
                >
                  Ajay Saini
                </h2>
                <p
                  style={{
                    fontSize: isTab ? "16px" : "20px",
                    fontFamily: "Outfit",
                    fontWeight: "400",
                    lineHeight: isTab ? "18px" : "34px",
                    marginBottom: "10px",
                    color: "#1377C0",
                  }}
                >
                  Co-Founder
                </p>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
                marginLeft: isTab ? 0 : 4,
                padding: 0,
              }}
            >
              <div
                style={{
                  fontSize: "25px",
                  padding: "10px",
                  height: isMobile ? "40%" : "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <ul
                  style={{
                    fontSize: isTab ? "14px" : "20px",
                    fontFamily: "Outfit",
                    fontWeight: "300",
                    lineHeight: isTab ? "20px" : "28px",
                    textAlign: "justify",
                    color: "#000",
                  }}
                >
                  <li>
                    NIT Rourkela alumnus with 6 years of IIT-JEE teaching
                    experience.
                  </li>
                  <li>
                    Expert in operations, mentorship, career counseling, and
                    entrepreneurship.{" "}
                  </li>
                </ul>
                <Button
                  variant="contained"
                  color="primary"
                  style={{
                    width: isTab ? "150px" : "285px",
                    height: isTab ? "40px" : "45px",
                    background: "#1377C0",
                    borderRadius: "8px",
                    color: "#fff",
                    fontWeight: "700",
                    marginTop: "10px",
                    fontSize: isTab ? "12px" : "20px",
                    display: "flex",
                    alignItems: "center",
                    fontFamily: "Outfit",
                    marginLeft: isTab ? "20px" : "0px",
                    minHeight: isTab ? "40px" : "45px",
                  }}
                >
                  Book Now
                </Button>
              </div>
            </div>
          </div>
        </Grid>

        <Grid
          xs={12}
          sm={5.8}
          md={5.8}
          lg={5.8}
          mt={2}
          flexWrap={isTab ? "wrap" : "nowrap"}
        >
          <div
            style={{
              ...classes.borderBox,
              padding: isTab ? "20px 20px 10px" : "40px 40px 10px",
              flexWrap: isMobile ? "wrap" : "nowrap",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <img
                src="./images/team_img_3.jpg"
                style={{
                  width: isTab ? "190px" : "190px",
                  height: isTab ? "190px" : "190px",
                  minHeight: isTab ? "190px" : "190px",
                  objectFit: "cover",
                  margin: "0px",
                  borderRadius: "10px",
                  maxWidth: "190px",
                  border: "1px solid #1377C0",
                }}
              />
              <div
                style={{
                  bottom: "10px",
                  background: "#fff",
                  left: "15px",
                  borderRadius: "8px",
                  marginTop: isMobile ? "0px" : "10px",
                }}
              >
                <h2
                  style={{
                    fontSize: isTab ? "20px" : "30px",
                    fontFamily: "Outfit",
                    fontWeight: "700",
                    lineHeight: "31.5px",
                    marginTop: "10px",
                    textWrap: "nowrap",
                    marginBottom: "0px",
                  }}
                >
                  Mukut Bihari
                  <br /> Sharma
                </h2>
                <p
                  style={{
                    fontSize: isTab ? "16px" : "20px",
                    fontFamily: "Outfit",
                    fontWeight: "400",
                    lineHeight: isTab ? "18px" : "24px",
                    marginBottom: "10px",
                    color: "#1377C0",
                    marginTop: "5px",
                  }}
                >
                  Deputy Director
                </p>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
                marginLeft: isTab ? 0 : 4,
                padding: 0,
              }}
            >
              <div
                style={{ fontSize: "25px", padding: "10px", height: "100%" }}
              >
                <ul
                  style={{
                    fontSize: isTab ? "14px" : "20px",
                    fontFamily: "Outfit",
                    fontWeight: "300",
                    lineHeight: isTab ? "20px" : "28px",
                    textAlign: "justify",
                    color: "#000",
                  }}
                >
                  <li>
                    28+ years in academic building, experience as a District
                    Resource Person at Azim Premji Foundation and facilitator
                    for Government Teacher Training.
                  </li>
                  <li>
                    Expertise in course development, student mentorship, career
                    counseling.
                  </li>
                </ul>
                <Button
                  variant="contained"
                  color="primary"
                  style={{
                    width: isTab ? "150px" : "285px",
                    height: isTab ? "40px" : "45px",
                    background: "#1377C0",
                    borderRadius: "8px",
                    color: "#fff",
                    fontWeight: "700",
                    marginTop: "10px",
                    fontSize: isTab ? "12px" : "20px",
                    display: "flex",
                    alignItems: "center",
                    fontFamily: "Outfit",
                    marginLeft: isTab ? "20px" : "0px",
                    minHeight: isTab ? "40px" : "45px",
                  }}
                >
                  Book Now
                </Button>
              </div>
            </div>
          </div>
        </Grid>
        <Grid
          xs={12}
          sm={5.8}
          md={5.8}
          lg={5.8}
          mt={2}
          flexWrap={isTab ? "wrap" : "nowrap"}
        >
          <div
            style={{
              ...classes.borderBox,
              padding: isTab ? "20px 20px 10px" : "40px 40px 10px",
              flexWrap: isMobile ? "wrap" : "nowrap",
              height: "100%",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <img
                src="./images/team_img_4.jpeg"
                style={{
                  width: isTab ? "190px" : "190px",
                  height: isTab ? "190px" : "190px",
                  minHeight: isTab ? "190px" : "190px",
                  objectFit: "cover",
                  margin: "0px",
                  borderRadius: "10px",
                  maxWidth: "190px",
                  border: "1px solid #1377C0",
                }}
              />
              <div
                style={{
                  bottom: "10px",
                  background: "#fff",
                  left: "15px",
                  borderRadius: "8px",
                  marginTop: isMobile ? "0px" : "10px",
                }}
              >
                <h2
                  style={{
                    fontSize: isTab ? "20px" : "30px",
                    fontFamily: "Outfit",
                    fontWeight: "700",
                    lineHeight: "31.5px",
                    marginTop: "10px",
                    textWrap: "nowrap",
                    marginBottom: "0px",
                  }}
                >
                  Kapil Gupta
                </h2>
                <p
                  style={{
                    fontSize: isTab ? "16px" : "20px",
                    fontFamily: "Outfit",
                    fontWeight: "400",
                    lineHeight: isTab ? "18px" : "24px",
                    marginBottom: "10px",
                    marginTop: "5px",
                    color: "#1377C0",
                  }}
                >
                  Chief Academic Officer
                </p>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
                marginLeft: isTab ? 0 : 4,
                padding: 0,
              }}
            >
              <div
                style={{
                  fontSize: "25px",
                  padding: "10px",
                  height: isMobile ? "40%" : "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <ul
                  style={{
                    fontSize: isTab ? "14px" : "20px",
                    fontFamily: "Outfit",
                    fontWeight: "300",
                    lineHeight: isTab ? "20px" : "28px",
                    textAlign: "justify",
                    color: "#000",
                  }}
                >
                  <li>
                    Ex COO & HOD of Physics at Bansal Classes Kota, with over 20
                    years of experience in competitive exam training.
                  </li>
                  <li>
                    Focused on outsourcing the methodology to enhance access to
                    quality education nationwide.
                  </li>
                </ul>
                <Button
                  variant="contained"
                  color="primary"
                  style={{
                    width: isTab ? "150px" : "285px",
                    height: isTab ? "40px" : "45px",
                    background: "#1377C0",
                    borderRadius: "8px",
                    color: "#fff",
                    fontWeight: "700",
                    marginTop: "10px",
                    fontSize: isTab ? "12px" : "20px",
                    display: "flex",
                    alignItems: "center",
                    fontFamily: "Outfit",
                    marginLeft: isTab ? "20px" : "0px",
                    minHeight: isTab ? "40px" : "45px",
                  }}
                >
                  Book Now
                </Button>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ExpertsPage;
