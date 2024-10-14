import React, { useState, useEffect, useRef } from "react";
import styles from "./Testimonial.style";
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
import { PiStarFill } from "react-icons/pi";
import Slider from "react-slick";

export const testimonials = [
  {
    name: "Aashvi Chandel",
    role: "Individual Tax Payer",
    feedback:
      "Hello, my name is Aashvi Chandel and currently, I am a Gaanv Wala online student. Prior to joining GW, I was a typical student who followed the traditional method of learning by simply listening to NCERT lines from the teacher in a boring manner and memorising NCERT lines without understanding the actual meaning of concepts. After joining GW, I am able to build my concepts and solve problems from various books. The method of teaching and studying material is very unique, and I feel very different from the other students in my school who are learning in a traditional manner.",
    rating: 5,
    img:"./images/testimonial_1.png"
  },
  {
    name: "Anjali Saini",
    role: "Individual Tax Payer",
    feedback:
      "Hello, I'm Anjali, a student at GW. The beginning of the journey with GW was very Unique. As a student in a small town, I had no access to any learning resources during the COVID-19 lockdowns. But when the Gaanv Wala team contacted me, they asked me about my study. I just said, There is not a single source through which I can study, in response. Once that, they began teaching us within a few days, and after that, I studied GW classes and study material. I experienced a different way of study and exams and I learned the concept's true meaning.",
    rating: 5,
     img:"./images/testimonial_2.jpg"
  },

  {
    name: "Tanu",
    role: "Individual Tax Payer",
    feedback:"Hello, my name is Tanu and I am a GW student. I'll state that Gaanvwala is the best because of its unique study material and effective teaching methods. After joining GW, I saw the true value of basic concepts and the actual means of education. My parents are no longer concerned about any issues pertaining to my career or studies because the GW team is here to help me at every point throughout my academic career. I am now doing well in my studies with the support of GW.",
         rating: 5,
          img:"./images/testimonial_3.jpg"
  },
  {
    name: "Soumya",
    role: "Individual Tax Payer",
    feedback:"Hello, my name is Soumya and I am a GW student. I am delighted to share some heartfelt thoughts for GW. Before joining GW, my friend Aashvi suggested Gaanvwala. I used to be a shy student who never asked questions in class. But when I joined GW, Manish Sir mentored me very well and suggested the best way for me to learn while clearing all of my doubts. GW team also suggested me future career options for my life and ways for me to pursue my dreams and achieve my goals. Because of the variety of exercise problems, I never get bored while studying ",
         rating: 5,
          img:"./images/testimonial_4.png"
  },  {
    name: "Anjani",
    role: "Individual Tax Payer",
    feedback:"Hello, my name is Anjani and I am a student at GW Schools. It is a good time to recall my past as a typical high school student who never topped the class on tests, but after studying at GW, there was not a single test in which I did not come out on top. It was the only result of care and study material provided by G.W. Ajay sir always motivated me to be a successful person at every stage of life, and Manish Sir's unique way of teaching SST developed my interest in learning. It was my belief that SST is not a subject of understanding, but rather a subject of memories.",
         rating: 5,
          img:"./images/testimonial_5.png"
  },

  
];
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
        width: isTab ? "auto" : "75px",
        height: isTab ? "40px" : "75px",
        background: "#FFFFFF",
        borderRadius: "100%",
        color: "#1377C0",
        fontWeight: "600",
        fontSize: isTab ? "12px" : "14px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        marginLeft: "20px",
        boxShadow: "none",
      }}
    >
      <img
        src="./images/arrow.svg"
        alt="Next"
        style={{ fontSize: "40px", rotate: "180deg" }}
      />
    </Button>
  );
};

// Custom Previous Arrow component with explicit prop types
const PrevArrow: React.FC<ArrowProps> = ({ onClick, isTab }) => {
  return (
    <Button
      variant="contained"
      color="primary"
      onClick={onClick}
      style={{
        width: isTab ? "auto" : "75px",
        height: isTab ? "40px" : "75px",
        background: "#FFFFFF",
        borderRadius: "100%",
        color: "#1377C0",
        fontWeight: "600",
        fontSize: isTab ? "12px" : "14px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        marginRight: "20px",
        boxShadow: "none",
      }}
    >
      <img
        src="./images/arrow.svg"
        alt="Previous"
        style={{ fontSize: "40px" }}
      />
    </Button>
  );
};

const Testionial = () => {
  const classes = styles;
  const [isMobile, setIsMobile] = useState(false);
  const [isTab, setIsTab] = useState(false);
  const sliderRef = React.useRef<Slider>(null);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <></>,
    prevArrow: <></>,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1324,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1200,
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
        padding: isTab ? "20px" : "40px 40px",
        width: "100%",
        background: "#F3F7FB",
        borderRadius: "10px",
      }}
    >
      <Grid
        item
        xs={12}
        sm={3}
        display="flex"
        flexDirection={isMobile ? "column" : "row"}
        justifyContent="space-between"
        alignItems={isTab ? "flex-start" : "flex-end"}
      >
        <div>
          <Typography
            style={{
              fontFamily: "Outfit",
              fontWeight: "400",
              fontSize: isTab ? "20px" : "30px",
              lineHeight: isTab ? "27.8px" : "37.8px",
              color: "#1377C0",
            }}
          >
            Our Students Testimonials
          </Typography>
          <Typography
            style={{
              fontFamily: "Outfit",
              fontWeight: "700",
              fontSize: isTab ? "24px" : "50px",
              lineHeight: isTab ? "36px" : "75.6px",
            }}
          >
            Students Say’s About Us!
          </Typography>
        </div>
        <div
          style={{
            alignItems: "center",
            display: isTab ? "none" : "flex",
          }}
        >
          <PrevArrow onClick={goToPrev} isTab={isTab} />
          <NextArrow onClick={goToNext} isTab={isTab} />
        </div>
      </Grid>
      <Grid
        spacing={2}
        style={{
          padding: "20px 0px 0px 10px",
          marginTop: "30px",
          justifyContent: "space-between",
          position: "relative",
          gap: "10px",
        }}
      >
        <img
          src="./images/backround_object_1.png"
          style={{
            width: "180px",
            height: "180px",
            objectFit: "contain",
            position: "absolute",
            top: "-50px",
            left: "-60px",
            zIndex: 0,
          }}
        />
        <img
          src="./images/backround_object_1.png"
          style={{
            width: "180px",
            height: "180px",
            objectFit: "contain",
            position: "absolute",
            bottom: "-0px",
            right: isTab ? "0px" : "-30px",
            zIndex: 0,
          }}
        />
        <Slider ref={sliderRef} {...settings}>
          {testimonials.map((slide, index) => (
            <div style={{ padding: "10px" }}>
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
                bgcolor="#ffffff"
                padding="40px 30px"
                borderRadius="12px"
                zIndex={10}
                width="90%"
                margin="auto"
                minHeight="600px" // Set a minimum height for all slides
        height="100%" // Ensure it grows if needed
              >
                <div
                  style={{
                    display: "flex",
                    gap: 2,
                    alignItems: "center",
                    marginBottom: isTab ? "15px" : "30px",
                  }}
                >
                  <PiStarFill
                    style={{
                      width: isTab ? "20px" : "25px",
                      height: isTab ? "20px" : "25px",
                      color: "#FFCB47",
                    }}
                  />
                  <PiStarFill
                    style={{
                      width: isTab ? "20px" : "25px",
                      height: isTab ? "20px" : "25px",
                      color: "#FFCB47",
                    }}
                  />
                  <PiStarFill
                    style={{
                      width: isTab ? "20px" : "25px",
                      height: isTab ? "20px" : "25px",
                      color: "#FFCB47",
                    }}
                  />
                  <PiStarFill
                    style={{
                      width: isTab ? "20px" : "25px",
                      height: isTab ? "20px" : "25px",
                      color: "#FFCB47",
                    }}
                  />
                  
                  <span
                    style={{
                      fontSize: isTab ? "14px" : "16px",
                      color: "#757575",
                      fontFamily: "Outfit",
                    }}
                  >
                    (4.7)
                  </span>
                </div>
                <p
                  style={{
                    fontSize: isTab ? "14px" : "18px",
                    fontFamily: "Outfit",
                    fontWeight: "300",
                    lineHeight: isTab ? "20px" : "25.2px",
                    textAlign: "justify",
                    color: "#3D3D3D",
                  }}
                >
                 {slide.feedback}
                </p>
                <Grid
                  display="flex"
                  justifyContent="space-around"
                  width="100%"
                  borderRadius="10px"
                >
                  <div style={{ display: "flex", gap: 10 }}>
                    <img
                      src={slide.img}
                      style={{
                        width: isTab ? "100px" : "130px",
                        height: isTab ? "100px" : "130px",
                        objectFit: "cover",
                        marginRight: "10px",
                        borderRadius: "8px",
                      }}
                    />
                    <div>
                      <h2
                        style={{
                          fontSize: isTab ? "20px" : "25px",
                          fontFamily: "Outfit",
                          fontWeight: "700",
                          lineHeight: "31.5px",
                          marginTop: "10px",
                        }}
                      >
                       {slide.name}
                      </h2>
                      <p
                        style={{
                          fontSize: isTab ? "16px" : "20px",
                          fontFamily: "Outfit",
                          fontWeight: "400",
                          lineHeight: "20.16px",
                          textAlign: "justify",
                          color: "#1377C0",
                        }}
                      >
                        Student
                      </p>
                    </div>
                  </div>
                  <img
                    src="./images/quotes.png"
                    style={{
                      width: isTab ? "50px" : "70px",
                      height: isTab ? "50px" : "70px",
                      objectFit: "contain",
                    }}
                  />
                </Grid>
              </Box>
            </div>
          ))}
        </Slider>
      </Grid>

      {/* View More Button */}
    </div>
  );
};
export default Testionial;
