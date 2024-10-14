import React, { useState, useEffect, useRef } from "react";
import academicsPresentStyles from "./academicsPresent.style";
import { Grid, Typography, Button, Box } from "@mui/material";
import PeachNumber from "../peachNumber/PeachNumber";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface ArrowProps {
  onClick: () => void;
  isTab: boolean;
}

// Custom Next Arrow component with explicit prop types
const NextArrow: React.FC<ArrowProps> = ({ onClick, isTab }) => {
  return (
    <Button
      variant="contained"
      color="primary"
      onClick={onClick}
      style={{
        width: isTab ? "auto" : "40px",
        height: isTab ? "40px" : "40px",
        background: "#FFFFFF",
        borderRadius: "100%",
        color: "#1377C0",
        fontWeight: "600",
        fontSize: isTab ? "12px" : "14px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        minWidth: "fit-content",
        boxShadow: "none",
        padding: "8px",
      }}
    >
      <img
        src="./images/arrow.svg"
        alt="Next"
        style={{ width: 24, rotate: "180deg" }}
      />
    </Button>
  );
};

// Custom Previous Arrow component with explicit prop types
const PrevArrow: React.FC<ArrowProps> = ({ onClick, isTab }) => {
  return (
    <Button
      onClick={onClick}
      style={{
        width: isTab ? "auto" : "40px",
        height: isTab ? "40px" : "40px",
        background: "#FFFFFF",
        borderRadius: "100%",
        color: "#1377C0",
        fontWeight: "600",
        fontSize: isTab ? "12px" : "14px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        minWidth: "fit-content",
        boxShadow: "none",
      }}
    >
      <img src="./images/arrow.svg" alt="Previous" style={{ width: 24 }} />
    </Button>
  );
};

const AcademicsPresent = () => {
  const classes = academicsPresentStyles;
  const [isMobile, setIsMobile] = useState(false);
  const [isTab, setIsTab] = useState(false);
  const sliderRef = React.useRef<Slider>(null);
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
  };

  useEffect(() => {
    // Function to update screen width
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Change 768 to the desired breakpoint
      setIsTab(window.innerWidth < 1200);
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

  const goToNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const goToPrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const images = [
    "./images/betterment.jpg",
    "./images/banner_1.jpeg",
    "./images/banner_2.jpeg",
    "./images/banner_3.jpeg",
    "./images/banner_4.jpeg",
    "./images/banner_5.jpeg",
  ];
  return (
    <div style={{ position: "relative" }}>
      <Grid
        container
        spacing={2}
        alignItems="center"
        flexDirection={isTab ? "column-reverse" : "row"}
      >
        <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
          <Box sx={{ padding: isTab ? "0px 20px" : "0px 40px 0px 60px" }}>
            <Typography
              style={{
                padding: isTab ? "0px" : "0px 0px 0px 0px",
                fontFamily: "Outfit",
                fontStyle: "normal",
                fontWeight: "900",
                fontSize: isTab ? "40px" : "50px",
                color: "#1377C0",
                lineHeight: isTab ? "44px" : "60px",
              }}
              align="left"
            >
              For the betterment of Academics we present
            </Typography>
            <Typography
              style={{
                fontFamily: "Outfit",
                fontStyle: "normal",
                marginTop: "10px",
                fontSize: isTab ? "18px" : "22px",
                lineHeight: isTab ? "22px" : "35px",
                color: "#000000",
              }}
            >
              Good and Affordable Education nearby villages
            </Typography>
            <Button
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                padding: "18px 26px",
                gap: "10px",
                marginRight: "auto",
                width: isTab ? "auto" : "200px",
                height: "50px",
                fontWeight: "600",
                marginTop: "20px",
                color: "#fff",
                background: "#1377C0",
                borderRadius: "10px",
                marginBottom: isTab ? "20px" : "100px",
              }}
            >
              Explore More
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6} xl={6} position="relative">
          <div
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
              position: "absolute",
              height: "100%",
              top: " 0px",
              zIndex: "10",
              alignItems: "center",
              left: "0px",
              padding: "0px 20px 0px 30px",
            }}
          >
            <PrevArrow onClick={goToPrev} isTab={isTab} />
            <NextArrow onClick={goToNext} isTab={isTab} />
          </div>
          <Slider ref={sliderRef} {...settings}>
            {images.map((slide, index) => (
              <div key={index} style={{ width: "100%", height: "100vh" }}>
                <img
                  style={{
                    width: "100%",
                    height: isMobile ? "50vh" : "600px",
                    objectFit: "cover",
                  }}
                  src={slide}
                />
              </div>
            ))}
          </Slider>
        </Grid>
      </Grid>
      <div
        style={{
          position: isTab ? "initial" : "absolute",
          bottom: "-80px",
          width: "100%",
          zIndex: 10,
        }}
      >
        <PeachNumber />
      </div>
    </div>
  );
};
export default AcademicsPresent;
