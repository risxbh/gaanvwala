import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import founderStyles from "./founder.styles";

function FounderPage() {
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
            FOUNDERS MESSAGE
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
            FOUNDERS MESSAGE
          </Typography>
          {/* <Typography style={{fontSize: '15px', color: '#fff'}}>Home→ MISSION & VISION</Typography> */}
        </Box>
      </Box>
      <Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          m={isTab ? 0 : 5}
          flexWrap={isTab ? "wrap" : "nowrap"}
        >
          <Card
            sx={{
              ...classes.borderBox,
              padding: "40px 40px",
              flexWrap: isMobile ? "wrap" : "nowrap",
            }}
          >
            <Box
              sx={{
                ...classes.box1,
                width: isTab ? "100%" : "auto",
                position: "relative",
              }}
            >
              <img
                src="./images/team_img_1_1.png"
                style={{
                  width: isTab ? "250px" : "429px",
                  height: isTab ? "100%" : "100%",
                  minHeight: isTab ? "250px" : "429px",
                  objectFit: "cover",
                  margin: "0px",
                  borderRadius: "10px",
                  maxWidth: "429px",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: "10px",
                  width: isTab ? "220px" : "400px",
                  background: "#fff",
                  left: "15px",
                  borderRadius: "8px",
                }}
              >
                <h2
                  style={{
                    fontSize: isTab ? "20px" : "30px",
                    fontFamily: "Outfit",
                    fontWeight: "700",
                    lineHeight: "31.5px",
                    marginTop: "10px",
                    textAlign: "center",
                    marginBottom: "0px",
                  }}
                >
                  Hutesh Kumar
                </h2>
                <p
                  style={{
                    fontSize: isTab ? "16px" : "20px",
                    fontFamily: "Outfit",
                    fontWeight: "400",
                    lineHeight: isTab ? "18px" : "34px",
                    marginBottom: "10px",
                    color: "#1377C0",
                    textAlign: "center",
                  }}
                >
                  Co-Founder
                </p>
              </div>
            </Box>
            <Box
              sx={{ display: "flex", flexDirection: "column" }}
              ml={isTab ? 0 : 4}
            >
              <CardContent sx={{ fontSize: "25px" }}>
                <p
                  style={{
                    fontSize: isTab ? "14px" : "20px",
                    fontFamily: "Outfit",
                    fontWeight: "300",
                    lineHeight: isTab ? "20px" : "25.2px",
                    textAlign: "justify",
                    color: "#3D3D3D",
                  }}
                >
                  Nowadays, each parent is worried about their children’s
                  education and future. And this worry comes from the lack of
                  interest of children in the study and the lack of transparency
                  in educational systems. However, we consider every child to be
                  unique and to possess some hidden talent. We are here to
                  assure you of high-quality education and total system
                  transparency. We further assure you that, through our
                  mentorship and education model, we will be able to shape each
                  child’s career so that, by focusing on his or her areas of
                  strength, they can develop into the best versions of
                  themselves.
                </p>
                <ul
                  style={{
                    fontSize: isTab ? "14px" : "20px",
                    fontFamily: "Outfit",
                    fontWeight: "300",
                    lineHeight: isTab ? "20px" : "25.2px",
                    textAlign: "justify",
                    color: "#3D3D3D",
                  }}
                >
                  <li>BTech in Computer Science from NIT Rourkela</li>
                  <li>
                    Exp. as a Software Engineer in Tech Giants like Amdocs,
                    OYORooms, Arcesium
                  </li>
                </ul>
              </CardContent>
            </Box>
          </Card>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          m={isTab ? 0 : 5}
          flexWrap={isTab ? "wrap" : "nowrap"}
        >
          <Card
            sx={{
              ...classes.borderBox,
              padding: "40px 40px",
              flexWrap: isMobile ? "wrap" : "nowrap",
              flexDirection: isTab ? "column-reverse " : "row",
            }}
          >
            <Box sx={{ display: "flex" }} ml={isTab ? 0 : 4}>
              <CardContent sx={{ fontSize: "25px" }}>
                <p
                  style={{
                    fontSize: isTab ? "14px" : "20px",
                    fontFamily: "Outfit",
                    fontWeight: "300",
                    lineHeight: isTab ? "20px" : "25.2px",
                    textAlign: "justify",
                    color: "#3D3D3D",
                  }}
                >
                  The only means by which one’s life can be transformed from
                  nothing to an extreme degree is through education. Every
                  parent, whether they live in a city or a village, hopes for
                  their kids to succeed. This desire can become a reality with
                  the aid of affordable, high-quality education. The purpose of
                  GW is rather obvious. We are dreaming of a future in which
                  every child in rural, as well as cities of India, will shine
                  with the brightness of education. Under the influence of GW,
                  future doctors, engineers, politicians, scientists,
                  entrepreneurs, IAS, and CA will be shaped.
                </p>
                <ul
                  style={{
                    fontSize: isTab ? "14px" : "20px",
                    fontFamily: "Outfit",
                    fontWeight: "300",
                    lineHeight: isTab ? "20px" : "25.2px",
                    textAlign: "justify",
                    color: "#3D3D3D",
                  }}
                >
                  <li>Integrated MSc (5 Yrs) From NIT Rourkela</li>
                  <li>
                    Ex. Senior Professor Career Point Kota, Aakash, Byju’s,
                    Allen Institute Kota
                  </li>
                </ul>
              </CardContent>
            </Box>
            <Box
              sx={{
                ...classes.box1,
                width: isTab ? "100%" : "auto",
                position: "relative",
              }}
            >
              <img
                src="./images/team_img_2_2.jpg"
                style={{
                  width: isTab ? "250px" : "429px",
                  height: isTab ? "100%" : "100%",
                  minHeight: isTab ? "250px" : "429px",
                  objectFit: "cover",
                  margin: "0px",
                  borderRadius: "10px",
                  maxWidth: "429px",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: "10px",
                  width: isTab ? "220px" : "400px",
                  background: "#fff",
                  left: "15px",
                  borderRadius: "8px",
                }}
              >
                <h2
                  style={{
                    fontSize: isTab ? "20px" : "30px",
                    fontFamily: "Outfit",
                    fontWeight: "700",
                    lineHeight: "31.5px",
                    marginTop: "10px",
                    textAlign: "center",
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
                    textAlign: "center",
                  }}
                >
                  Co-Founder
                </p>
              </div>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default FounderPage;
