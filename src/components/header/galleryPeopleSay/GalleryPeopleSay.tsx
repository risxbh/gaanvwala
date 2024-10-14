import React, { useState, useEffect } from "react";
import { Grid, Typography, Button, Box } from "@mui/material";
import galleryPeopleSayStyles from "./galleryPeopleSay.style";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const GalleryPeopleSay = () => {
  const classes = galleryPeopleSayStyles;
  const [isMobile, setIsMobile] = useState(false);
  const [isTab, setIsTab] = useState(false);
  const [lessthan600, setLessthan600] = useState(false);
  const [selected, setSelected] = useState("SRN EVENT");

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
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <></>,
    prevArrow: <></>,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1324,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <div
      style={{
        padding: isTab ? "20px" : "50px 40px",
        width: "100%",
        background:
          "linear-gradient(90.61deg, rgba(146, 184, 253, 0.126) 0.51%, rgba(243, 247, 251, 0.3969) 99.49%)",
        boxShadow: "0px 0px 8px 2px #0006B11C",
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
            GALLERY
          </Typography>
          <Typography
            style={{
              fontFamily: "Outfit",
              fontWeight: "700",
              fontSize: isTab ? "24px" : "50px",
              lineHeight: isTab ? "36px" : "62.6px",
            }}
          >
            What People Say
          </Typography>
        </div>
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
                color={selected == "SRN EVENT" ? "primary" : "#000"}
                style={{ padding: "0px 12px 10px", textWrap: "nowrap" }}
                onClick={() => setSelected("SRN EVENT")}
                borderBottom={lessthan600?"none":selected == "SRN EVENT" ? "2px solid #1377C0" :"2px solid #D9D9D9"}
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
                  borderBottom={lessthan600?"none":selected == "SANSKRITI EVENTS" ? "2px solid #1377C0" :"2px solid #D9D9D9"}
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
                  borderBottom={lessthan600?"none":selected == "AAYUSHI EVENTS" ? "2px solid #1377C0" :"2px solid #D9D9D9"}
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
                 borderBottom={lessthan600?"none":selected == "A-ONE EVENTS" ? "2px solid #1377C0" :"2px solid #D9D9D9"}
              >
                A-ONE EVENTS
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </div>
      <Grid
        container
        spacing={2}
        style={{ padding: isTab ? "0px" : "40px" }}
        marginTop={isMobile ? "0px" : isTab ? "20px" : "0px"}
      >
        {images.map((imgSrc, index) => (
          <Grid item xs={6} sm={6} md={3} key={index}>
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

      {/* View More Button */}
      <Box mt={3}>
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
            margin: isTab ? "auto" : "0px",
          }}
        >
          VIEW MORE
          <span style={{ fontSize: "30px", padding: "0px 0px 6px 6px" }}>
            →
          </span>
        </Button>
      </Box>
    </div>
  );
};

export default GalleryPeopleSay;
