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
import contactStyles from "./BecomePartner.styles";
import HomePoster from "../../components/header/HomePoster/HomePoster";
function BecomePartner() {
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
                BECOME A PARTNER
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
                BECOME A PARTNER
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
              Join the
            </Typography>
            <Typography
              style={{
                fontFamily: "Outfit",
                fontWeight: "700",
                fontSize: isTab ? "24px" : "50px",
                lineHeight: isTab ? "36px" : "62.6px",
              }}
            >
              Gaanv Wala Partner Program!
            </Typography>
          </Box>
          <div style={{ marginTop: "10px" }}>
            <Typography
              variant="body1"
              style={{
                marginTop: "2px",
                color: "#000",
                fontSize: "15px",

                fontFamily: "Outfit",
                fontWeight: "300",
                margin: isTab ? "2px 0px" : "4% 0px",
              }}
              align="justify"
            >
              Empower rural communities by partnering with schools and
              educational institutions. Join us as a Gaaw Wala Partner to make
              quality education accessible and affordable. Here's why it's the
              right choice for you:
            </Typography>
            <ul
              style={{
                marginTop: "2px",
                color: "#000",
                fontSize: "15px",

                fontFamily: "Outfit",
                fontWeight: "300",
                paddingRight: "25px",
                paddingLeft: "20px",
                margin: "30px 0px",
              }}
            >
              <li>
                <b style={{ fontWeight: "700" }}>Support Local Growth:</b> Bring
                world-class educational tools to your community.
              </li>
              <li style={{ marginTop: "10px" }}>
                <b style={{ fontWeight: "700" }}>Exclusive Benefits:</b>Access
                unique resources, training, and financial perks.
              </li>
              <li style={{ marginTop: "10px" }}>
                <b style={{ fontWeight: "700" }}>Network Expansion:</b> Connect
                with educators and administrators nationwide.
              </li>
              <li style={{ marginTop: "10px" }}>
                <b style={{ fontWeight: "700" }}>Flexible Collaboration:</b>{" "}
                Customize the partnership to fit your institution's needs.
              </li>
              <li style={{ marginTop: "10px" }}>
                <b style={{ fontWeight: "700" }}>Ongoing Support:</b> Receive
                dedicated guidance for your school's growth and success.
              </li>
            </ul>
            <p
              style={{
                margin: "1px 0px",
                color: "#000",
                fontSize: "15px",

                fontFamily: "Outfit",
                fontWeight: "300",
              }}
            >
              Become a part of this exciting initiative to uplift education
              standards in your region!
            </p>
            <p
              style={{
                margin: "2px 0px",
                color: "#000",
                fontSize: "15px",

                fontFamily: "Outfit",
                fontWeight: "700",
              }}
            >
              Partner With Us Today!
            </p>
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
                placeholder="First Name*"
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
                placeholder="Last Name*"
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
                placeholder="Phone Number*"
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
                placeholder="Email Address*"
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
                placeholder="City/Town*"
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
                placeholder="District*"
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
                placeholder="State*"
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
                placeholder="ZipCode"
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
                placeholder="State*"
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
                placeholder="Select Fee Range"
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
              alignItems: "flex-start",
            }}
          >
            <textarea
              placeholder="Write Message"
              style={{
                ...classes.input,
                fontFamily: "Outfit",
                width: "100%",
                height: "120px",
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

export default BecomePartner;
