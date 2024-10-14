import {
  Box,
  Card,
  CardContent,
  Container,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import footerStyles from "./footer.style";
import gaanvwalaLogo from "/assets/images/gaanvwalaLogo.png";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import FacebookIcon from "@mui/icons-material/Facebook";
import { X } from "@mui/icons-material";
import CopyrightIcon from "@mui/icons-material/Copyright";
import { flattenDiagnosticMessageText } from "typescript";

function Footer() {
  const classes = footerStyles;
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
      <Grid container sx={classes.main} p={isTab ? 2 : 6}>
        <Grid item xs={12} sm={12} md={6} lg={3} sx={classes.lastBox}>
          <Box sx={classes.firstBox}>
            <img
              src="./images/logo.png"
              style={{
                objectFit: "contain",
                height: isTab ? "34.69px" : "48.69px",
              }}
            />

            <p
              style={{
                fontSize: "16px",
                fontFamily: "Outfit",
                fontWeight: "300",
                lineHeight: "20.16px",
                textAlign: "justify",
                marginTop: "20px",
              }}
            >
              Gaanvwala stands for good and affordable academics in nearby
              villages. We are working to ensure that quality education reaches
              every corner of India.
            </p>
            <Box sx={classes.icons}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: isTab ? "12px" : "15px",
                }}
              >
                <img
                  src="./images/insta.svg"
                  style={{ height: isTab ? "24px" : "30px" }}
                />
                <img
                  src="./images/twitter.svg"
                  style={{ height: isTab ? "24px" : "30px" }}
                />
                <img
                  src="./images/facebook.svg"
                  style={{ height: isTab ? "24px" : "30px" }}
                />
              </div>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={2} sx={classes.list}>
          <Typography
            variant="h5"
            sx={{ fontFamily: "Outfit", fontSize: isTab ? "1.3rem" : "1.5rem" }}
          >
            Quick Links
          </Typography>
          <img
            src="./images/lineBottom.png"
            style={{ width: isTab ? "122px" : "152px", marginTop: "-10px" }}
          />
          <Divider style={{}} />
          <ul style={{ paddingLeft: "24px", marginTop: "10px" }}>
            <li style={{ ...classes.listItems, fontFamily: "Outfit" }}>
              Experts
            </li>
            <li style={{ ...classes.listItems, fontFamily: "Outfit" }}>
              Products and Services
            </li>
            <li style={{ ...classes.listItems, fontFamily: "Outfit" }}>
              Gallery
            </li>
            <li style={{ ...classes.listItems, fontFamily: "Outfit" }}>
              Contact Us
            </li>
          </ul>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={3} sx={classes.lastBox}>
          <Typography
            variant="h5"
            sx={{ fontFamily: "Outfit", fontSize: isTab ? "1.3rem" : "1.5rem" }}
          >
            Location
          </Typography>
          <img
            src="./images/lineBottom.png"
            style={{ width: isTab ? "122px" : "152px", marginTop: "-10px" }}
          />
          <Divider style={{}} />
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14233.268633099642!2d75.7001932765668!3d26.89342781371452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4b4dd390e461%3A0x57e4b98d805aa9e7!2sGirdharipura%2C%20Jaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1726564755674!5m2!1sen!2sin"
            style={{
              borderRadius: "8px",
              marginTop: "10px",
              width: isMobile ? "100%" : "90%",
            }}
          ></iframe>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={4} sx={classes.lastBox}>
          <Typography
            variant="h5"
            sx={{ fontFamily: "Outfit", fontSize: isTab ? "1.3rem" : "1.5rem" }}
          >
            Get In Touch
          </Typography>
          <img
            src="./images/lineBottom.png"
            style={{ width: isTab ? "122px" : "152px", marginTop: "-10px" }}
          />
          <Divider style={{}} />
          <p
            style={{
              color: "#C2C2C2",
              fontFamily: "Outfit",
              fontSize: isTab ? "16px" : "20px",
              marginBottom: "6px",
            }}
          >
            Call Us
          </p>
          <Typography
            sx={{
              color: "#fff",
              fontFamily: "Outfit",
              fontSize: isTab ? "20px" : "24px",
              marginBottom: "6px",
              fontWeight: "700",
            }}
          >
            +918949059403
          </Typography>
          <Divider style={classes.divider} />
          <p
            style={{
              color: "#C2C2C2",
              fontFamily: "Outfit",
              fontSize: isTab ? "16px" : "20px",
              marginBottom: "6px",
            }}
          >
            Email Us
          </p>
          <Typography
            sx={{
              color: "#fff",
              fontFamily: "Outfit",
              fontSize: isTab ? "20px" : "24px",
              marginBottom: "6px",
              fontWeight: "700",
            }}
          >
            gw.official@gaanvwala.com
          </Typography>
          <Divider style={classes.divider} />
          <p
            style={{
              color: "#C2C2C2",
              fontFamily: "Outfit",
              fontSize: isTab ? "16px" : "20px",
              marginBottom: "6px",
            }}
          >
            Address
          </p>
          <Typography
            sx={{
              color: "#fff",
              fontFamily: "Outfit",
              fontSize: isTab ? "20px" : "24px",
              marginBottom: "6px",
              fontWeight: "700",
            }}
          >
            Girdharipura, Jaipur India, 302021
          </Typography>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12} sx={classes.footerBox}>
        <Typography
          sx={{
            color: "#fff",
            fontFamily: "Outfit",
            fontSize: isTab ? "16px" : "20px",
            fontWeight: "400",
          }}
          p={2}
        >
          CopyRight <CopyrightIcon /> 2024 Gaanv Wala
        </Typography>
      </Grid>
    </Box>
  );
}

export default Footer;
