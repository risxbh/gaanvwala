import React, { useState, useEffect } from "react";
import { Grid, Typography, Button, Box } from "@mui/material";
import galleryStyles from "./gallery.style";
import { transform } from "typescript";
import ReactPlayer from "react-player";

const Gallery = () => {
  const classes = galleryStyles;
  const [isMobile, setIsMobile] = useState(false);
  const [isTab, setIsTab] = useState(false);
  const [lessthan600, setLessthan600] = useState(false);
  const [selected, setSelected] = useState("All");
  useEffect(() => {
    // Function to update screen width
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Change 768 to the desired breakpoint
      setIsTab(window.innerWidth < 1080);
      setLessthan600(window.innerWidth < 550);
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
  const images = [
    "./images/about.jpg",
    "./images/about.jpg",
    "./images/about.jpg",
    "./images/about.jpg",
    "./images/about.jpg",
    "./images/about.jpg",
    "./images/about.jpg",
    "./images/about.jpg",
  ];

  return (
    <div>
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
                Gallery
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
                GALLERY
              </Typography>
              {/* <Typography style={{fontSize: '15px', color: '#fff'}}>Home→ MISSION & VISION</Typography> */}
            </Box>
          </Box>
        </Grid>
      </Grid>

      <div
        style={{
          padding: isTab ? "20px" : "50px 40px",
          width: "100%",

          borderRadius: "10px",
        }}
      >
        <div
          style={{
            display: isMobile ? "block" : "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
          }}
        >
          <Grid
            spacing={2}
            style={{ padding: isTab ? "0px" : "20px 0px 0px 40px" }}
          >
            <Grid xs={12} sm={6} mt={2}>
              <Box
                mb={2}
                mt={isTab ? 2 : 0}
                display="flex"
                justifyContent={isTab ? "flex-start" : "flex-end"}
                gap={isTab ? "0px" : "0px"}
                paddingRight={isTab ? "0px" : "40px"}
                flexWrap={isTab ? "wrap" : "nowrap"}
              >
                <Typography
                  variant="subtitle1"
                  component="span"
                  fontFamily="Outfit"
                  fontSize={isTab ? "13px" : "16px"}
                  fontWeight="500"
                  color={selected == "All" ? "primary" : "#000"}
                  style={{ padding: "0px 12px 10px", textWrap: "nowrap" }}
                  onClick={() => setSelected("All")}
                  borderBottom={
                    lessthan600
                      ? "none"
                      : selected == "All"
                      ? "2px solid #1377C0"
                      : "2px solid #D9D9D9"
                  }
                >
                  All
                </Typography>
                <Typography
                  variant="subtitle1"
                  component="span"
                  fontFamily="Outfit"
                  fontSize={isTab ? "13px" : "16px"}
                  fontWeight="500"
                  color={selected == "SRN EVENT" ? "primary" : "#000"}
                  style={{ padding: "0px 12px 10px", textWrap: "nowrap" }}
                  onClick={() => setSelected("SRN EVENT")}
                  borderBottom={
                    lessthan600
                      ? "none"
                      : selected == "SRN EVENT"
                      ? "2px solid #1377C0"
                      : "2px solid #D9D9D9"
                  }
                >
                  SRN EVENT
                </Typography>
                <Typography
                  variant="subtitle1"
                  component="span"
                  fontFamily="Outfit"
                  fontSize={isTab ? "13px" : "16px"}
                  fontWeight="500"
                  color={selected == "SANSKRITI EVENTS" ? "primary" : "#000"}
                  style={{ padding: "0px 12px 10px", textWrap: "nowrap" }}
                  onClick={() => setSelected("SANSKRITI EVENTS")}
                  borderBottom={
                    lessthan600
                      ? "none"
                      : selected == "SANSKRITI EVENTS"
                      ? "2px solid #1377C0"
                      : "2px solid #D9D9D9"
                  }
                >
                  SANSKRITI EVENTS
                </Typography>
                <Typography
                  variant="subtitle1"
                  component="span"
                  fontFamily="Outfit"
                  fontSize={isTab ? "13px" : "16px"}
                  fontWeight="500"
                  color={selected == "AAYUSHI EVENTS" ? "primary" : "#000"}
                  style={{ padding: "0px 12px 10px", textWrap: "nowrap" }}
                  onClick={() => setSelected("AAYUSHI EVENTS")}
                  borderBottom={
                    lessthan600
                      ? "none"
                      : selected == "AAYUSHI EVENTS"
                      ? "2px solid #1377C0"
                      : "2px solid #D9D9D9"
                  }
                >
                  AAYUSHI EVENTS
                </Typography>
                <Typography
                  variant="subtitle1"
                  component="span"
                  fontFamily="Outfit"
                  fontSize={isTab ? "13px" : "16px"}
                  fontWeight="500"
                  color={selected == "A-ONE EVENTS" ? "primary" : "#000"}
                  style={{ padding: "0px 12px 10px", textWrap: "nowrap" }}
                  onClick={() => setSelected("A-ONE EVENTS")}
                  borderBottom={
                    lessthan600
                      ? "none"
                      : selected == "A-ONE EVENTS"
                      ? "2px solid #1377C0"
                      : "2px solid #D9D9D9"
                  }
                >
                  A-ONE EVENTS
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </div>
        <Grid container spacing={2} style={{ padding: isTab ? "0px" : "40px" }}>
          {images.map((imgSrc, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <img
                src={imgSrc}
                alt={`Event ${index + 1}`}
                style={{
                  width: "100%",
                  borderRadius: "10px",
                  objectFit: "cover",
                  height: "264px",
                }}
              />
            </Grid>
          ))}
        </Grid>
        <div
          style={{
            padding: isTab ? "20px 0px" : "50px 40px",
            width: "100%",
          }}
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
              Videos
            </Typography>
            <Typography
              style={{
                fontFamily: "Outfit",
                fontWeight: "700",
                fontSize: isTab ? "24px" : "50px",
                lineHeight: isTab ? "36px" : "62.6px",
                marginBottom: "20px",
              }}
            >
              What People Say
            </Typography>
          </div>

          <ReactPlayer
            url="https://www.youtube.com/watch?v=LG8nx91K32I"
            playing={true} // Autoplay enabled
            controls={true} // Optional: Show video controls
            width="100%"
            height={isMobile ? "320px" : isTab ? "400px" : "512px"}
          />

          <Grid
            container
            spacing={2}
            style={{ padding: isTab ? "10px 0px" : " 20px 0px" }}
          >
            {images.map((imgSrc, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <ReactPlayer
                  url="https://www.youtube.com/watch?v=LG8nx91K32I"
                  playing={false} // Autoplay enabled
                  controls={false} // Optional: Show video controls
                  width="100%"
                  height="200px"
                />
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
