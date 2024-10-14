import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import contactStyles from "./contact.styles";
import HomePoster from "../../components/header/HomePoster/HomePoster";
function Contacts() {
  const classes = contactStyles;
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
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12}>
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
                CONTACT US
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
                CONTACT US
              </Typography>
              {/* <Typography style={{fontSize: '15px', color: '#fff'}}>Home→ MISSION & VISION</Typography> */}
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Grid
        container
        spacing={2}
        px={isTab ? "20px" : "50px"}
        py={isTab ? "20px" : "40px"}
        mt={6}
        justifyContent="space-between"
      >
        <Grid item xs={12} sm={isMobile ? 12 : 6}>
          <Box>
            <Typography
              style={{
                fontFamily: "Outfit",
                fontWeight: "400",
                fontSize: isTab ? "20px" : "30px",
                lineHeight: "37.8px",
                color: "#1377C0",
              }}
            >
              GET IN TOUCH
            </Typography>
            <Typography
              style={{
                fontFamily: "Outfit",
                fontWeight: "700",
                fontSize: isTab ? "24px" : "50px",
                lineHeight: isTab ? "36px" : "62.6px",
              }}
            >
              Don’t Hesitate to Contact Us
            </Typography>
          </Box>
          <div style={{ marginTop: "30px" }}>
            <div
              style={{
                display: "flex",
                gap: "10px",
                alignItems: "flex-start",

                border: "1px solid #ECF1F9",
                padding: "10px 16px",
                borderRadius: "8px",
                width: "100%",
              }}
            >
              <img
                src="./images/address.svg"
                style={{ width: "50px", height: "50px" }}
              />
              <div>
                <p
                  style={{
                    marginBottom: "0px",
                    fontSize: "20px",
                    fontFamily: "Outfit",
                    fontWeight: "400",
                  }}
                >
                  Our Address
                </p>
                <h2
                  style={{
                    fontSize: "26px",
                    fontFamily: "Outfit",
                    fontWeight: "600",
                    margin: "0px",
                  }}
                >
                  Girdharipura, Jaipur India, 302021
                </h2>
              </div>
            </div>
            <div
              style={{
                marginTop: "15px",
                display: "flex",
                gap: "10px",
                alignItems: "flex-start",
                width: "100%",
                border: "1px solid #ECF1F9",
                padding: "10px 16px",
                borderRadius: "8px",
              }}
            >
              <img
                src="./images/phoneNumber.svg"
                style={{ width: "50px", height: "50px" }}
              />
              <div>
                <p
                  style={{
                    marginBottom: "0px",
                    fontSize: "20px",
                    fontFamily: "Outfit",
                    fontWeight: "400",
                  }}
                >
                  Phone Number
                </p>
                <h2
                  style={{
                    fontSize: "26px",
                    fontFamily: "Outfit",
                    fontWeight: "600",
                    margin: "0px",
                  }}
                >
                  +91 8949 059403
                </h2>
              </div>
            </div>

            <div
              style={{
                marginTop: "15px",
                display: "flex",
                gap: "10px",
                alignItems: "flex-start",
                width: "100%",
                border: "1px solid #ECF1F9",
                padding: "10px 16px",
                borderRadius: "8px",
              }}
            >
              <img
                src="./images/email.svg"
                style={{ width: "50px", height: "50px" }}
              />
              <div>
                <p
                  style={{
                    marginBottom: "0px",
                    fontSize: "20px",
                    fontFamily: "Outfit",
                    fontWeight: "400",
                  }}
                >
                  Email
                </p>
                <h2
                  style={{
                    fontSize: "26px",
                    fontFamily: "Outfit",
                    fontWeight: "600",
                    margin: "0px",
                  }}
                >
                  gw.official@gaanvwala.com
                </h2>
              </div>
            </div>
          </div>
        </Grid>
        <Grid
          container
          xs={12}
          sm={isMobile ? 12 : 5}
          display="flex"
          borderRadius="8px"
          padding="30px 30px"
          ml={isTab ? "12px" : "0px"}
          width={isMobile ? "100%" : "auto"}
          bgcolor="#EFF8FF"
          mt={isMobile ? 6 : 0}
        >
          <Typography
            style={{
              fontFamily: "Outfit",
              fontWeight: "700",
              fontSize: isTab ? "24px" : "48px",
              lineHeight: isTab ? "36px" : "62.6px",
              marginBottom: "20px",
            }}
          >
            Send us Message
          </Typography>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "10px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                width: "100%",
                justifyContent: "space-between",
                padding: "5px 20px 5px 10px",
                marginBottom: "15px",
                background: "#fff",
              }}
            >
              <input
                placeholder="Full Name*"
                style={{
                  ...classes.input,
                  fontFamily: "Outfit",
                  width: "100%",
                  fontSize: "20px",
                }}
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                width: "100%",
                justifyContent: "space-between",
                padding: "5px 20px 5px 10px",
                marginBottom: "15px",
                background: "#fff",
              }}
            >
              <input
                placeholder="Phone Number*"
                style={{
                  ...classes.input,
                  fontFamily: "Outfit",
                  width: "100%",
                  fontSize: "20px",
                }}
              />
            </div>
          </div>
          
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              justifyContent: "space-between",
              padding: "5px 20px 5px 10px",
              marginBottom: "15px",
              background: "#fff",
            }}
          >
            <input
              placeholder="Email*"
              style={{
                ...classes.input,
                fontFamily: "Outfit",
                width: "100%",
                fontSize: "20px",
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              justifyContent: "space-between",
              padding: "5px 20px 5px 10px",
              marginBottom: "15px",
              background: "#fff",
              alignItems: "flex-start",
            }}
          >
            <textarea
              placeholder="Message"
              style={{
                ...classes.input,
                fontFamily: "Outfit",
                width: "100%",
                height: "241px",
                fontSize: "20px",
              }}
            />
          </div>
          <Button
            variant="contained"
            color="primary"
            style={{
              width: isTab ? "auto" : "fit-content",
              height: isTab ? "40px" : "50px",
              background: "#1377C0",
              borderRadius: "8px",
              color: "#fff",
              fontWeight: "700",
              marginTop: "10px",
              fontSize: isTab ? "12px" : "14px",
              display: "flex",
              alignItems: "center",
            }}
          >
            SEND MESSAGE US
            <span style={{ fontSize: "30px", padding: "0px 0px 6px 6px" }}>
              →
            </span>
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Contacts;
