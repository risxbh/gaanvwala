import React, { useState, useEffect } from "react";
import styles from "./exploreTopCategories.style";
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
const ExploreTopCategories = () => {
  const classes = styles;
  const [isMobile, setIsMobile] = useState(false);
  const [isTab, setIsTab] = useState(false);
  const [NotTab, setNotTab] = useState(false);

  useEffect(() => {
    // Function to update screen width
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Change 768 to the desired breakpoint
      setIsTab(window.innerWidth < 1080);
      setNotTab(window.innerWidth < 1200 && window.innerWidth> 1080);
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
        padding: isTab ? "0px" : "50px 40px",
        width: "100%",

        borderRadius: "10px",
      }}
    >
      <Grid
        container
        spacing={2}
        style={{ padding: isTab ? "20px" : "20px 0px 0px 40px" }}
      >
        <Grid
          xs={12}
          md={12}
          lg={3}
          display="flex"
          alignItems="flex-start"
          flexDirection="column"
          justifyContent="center"
          pl={isTab ? "16px" : "0px"}
        >
          <Typography
            style={{
              fontFamily: "Outfit",
              fontWeight: "400",
              fontSize: isTab ? "20px" : "30px",
              lineHeight: "37.8px",
              color: "#1377C0",
            }}
          >
            OUR SERVICES & PRODUCTS
          </Typography>
          <Typography
            style={{
              fontFamily: "Outfit",
              fontWeight: "700",
              fontSize: isTab ? "24px" : "50px",
              lineHeight: isTab ? "36px" : "62.6px",
              marginTop: "10px",
            }}
          >
            Explore Top Categories
          </Typography>
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
            >
              VIEW MORE
              <span style={{ fontSize: "30px", padding: "0px 0px 6px 6px" }}>
                →
              </span>
            </Button>
          </Box>
        </Grid>
        <Grid
          container
          xs={12}
          sm={12}
          lg={isMobile ? 12: NotTab?12 : 9}
          display="flex"
          justifyContent={isTab?"center":NotTab?"center":"flex-end"}
          gap={2}
          pr={isTab?0:NotTab?0:4}
          mt={isTab ? "20px" : "0px"}
        >
          <Grid
            xs={isMobile ? 12 : isTab ? 3.5:NotTab?4 : 3.5}
            display="flex"
            justifyContent="center"
            flexDirection="column"
            boxShadow="0px 5px 21px -3px #0000001A;"
            padding="30px 15px"
            borderRadius="10px"
            bgcolor="#F1FAFF"
          >
            <img
              src="./images/academics.png"
              style={{
                width: isTab ? "70px" : "100px",
                height: isTab ? "70px" : "100px",
                objectFit: "contain",
                margin: "0px auto",
              }}
            />
            <h2
              style={{
                fontSize: isTab ? "20px" : "25px",
                fontFamily: "Outfit",
                fontWeight: "700",
                lineHeight: isTab ? "22px" : "31.5px",
                textAlign: "center",
              }}
            >
              Academics
            </h2>
            <p
              style={{
                fontSize: isTab ? "12px" : "16px",
                fontFamily: "Outfit",
                fontWeight: "300",
                lineHeight: isTab ? "16px" : "20.16px",
                textAlign: isTab ? "center" : "justify",
              }}
            >
              Our academic programme is structured to satisfy board examination
              criteria and is geared toward competitive learning, making it
              extremely advantageous for every student.
            </p>
          </Grid>
          <Grid
             xs={isMobile ? 12 : isTab ? 3.5:NotTab?3.8 : 3.5}
            display="flex"
            justifyContent="center"
            flexDirection="column"
            boxShadow="0px 5px 21px -3px #0000001A;"
            padding="30px 15px"
            borderRadius="10px"
             bgcolor="#FFF9EE"
          >
            <img
              src="./images/TeacherTraining.png"
              style={{
                width: isTab ? "70px" : "100px",
                height: isTab ? "70px" : "100px",
                objectFit: "contain",
                margin: "0px auto",
              }}
            />
            <h2
              style={{
                fontSize: isTab ? "20px" : "25px",
                fontFamily: "Outfit",
                fontWeight: "700",
                lineHeight: isTab ? "22px" : "31.5px",
                textAlign: "center",
              }}
            >
              Teacher Training
            </h2>
            <p
              style={{
                fontSize: isTab ? "12px" : "16px",
                fontFamily: "Outfit",
                fontWeight: "300",
                lineHeight: isTab ? "16px" : "20.16px",
                textAlign: isTab ? "center" : "justify",
              }}
            >
              We have mentors from reputed institutions like IITs and NITs along
              with great work experience in the industry in the different work
              domains.
            </p>
          </Grid>
          <Grid
             xs={isMobile ? 12 : isTab ? 3.5:NotTab?3.8 : 3.5}
            display="flex"
            justifyContent="center"
            flexDirection="column"
            boxShadow="0px 5px 21px -3px #0000001A;"
            padding="30px 15px"
            borderRadius="10px"
            bgcolor="#E8FFF6"
          >
            <img
              src="./images/marketing.png"
              style={{
                width: isTab ? "70px" : "100px",
                height: isTab ? "70px" : "100px",
                objectFit: "contain",
                margin: "0px auto",
              }}
            />
            <h2
              style={{
                fontSize: isTab ? "20px" : "25px",
                fontFamily: "Outfit",
                fontWeight: "700",
                lineHeight: isTab ? "22px" : "31.5px",
                textAlign: "center",
              }}
            >
              Marketing
            </h2>
            <p
              style={{
                fontSize: isTab ? "12px" : "16px",
                fontFamily: "Outfit",
                fontWeight: "300",
                lineHeight: isTab ? "16px" : "20.16px",
                textAlign: isTab ? "center" : "justify",
              }}
            >
              We will also support schools to gain reach and visibility in
              nearby areas along with content creation and design
            </p>
          </Grid>
        </Grid>
      </Grid>

      {/* View More Button */}
    </div>
  );
};
export default ExploreTopCategories;
