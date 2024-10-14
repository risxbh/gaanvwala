import React, { useState, useEffect } from "react";
import styles from "./OurTeam.style";
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
const OurTeam = () => {
  const classes = styles;
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
    <div
      style={{
        padding: isTab ? "20px" : "50px 40px 50px 60px",
        width: "100%",
        background:
          "linear-gradient(96.7deg, rgba(146, 184, 253, 0.126) 5.14%, rgba(243, 247, 251, 0.2016) 100.96%)",

        borderRadius: "10px",
      }}
    >
      <Grid
        item
        xs={12}
        sm={3}
        display="flex"
        flexDirection={isTab ? "column" : "row"}
        justifyContent="space-between"
        alignItems={isTab ? "flex-start" : "flex-end"}
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
            OUR TEAM
          </Typography>
          <Typography
            style={{
              fontFamily: "Outfit",
              fontWeight: "700",
              fontSize: isTab ? "24px" : "50px",
              lineHeight: isTab ? "36px" : "62.6px",
            }}
          >
            Meet Our Inspiring
            <br />
            Dedicated Team
          </Typography>
        </div>
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
      </Grid>
      <Grid
        container
        spacing={2}
        style={{ padding: "20px 0px 0px 10px" }}
        mt={isTab ? 2 : 4}
      >
        <Grid
          container
          xs={12}
          sm={12}
          display="flex"
          justifyContent="space-between"
        >
          <Grid
            xs={isTab ? 5.8 : 2.8}
            display="flex"
            justifyContent="flex-start"
            flexDirection="column"
            boxShadow="0px 5px 21px -3px #0000001A;"
            padding="12px 16px"
            borderRadius="10px"
            borderBottom="5px solid #1377C0"
            marginBottom={isTab ? "10px" : "0px"}
            bgcolor="#fff"
          >
            <img
              src="./images/team_img_1.jpg"
              style={{
                width: "100%",
                height: "202px",
                objectFit: "cover",
                margin: "0px auto",
                borderRadius: "10px",
              }}
            />
            <h2
              style={{
                fontSize: isTab ? "18px" : "25px",
                fontFamily: "Outfit",
                fontWeight: "700",
                lineHeight: isTab ? "22px" : "31.5px",
                marginTop: "10px",
              }}
            >
              Hutesh Kumar Gauttam
            </h2>
            <p
              style={{
                fontSize: isTab ? "16px" : "20px",
                fontFamily: "Outfit",
                fontWeight: "400",
                lineHeight: isTab ? "18px" : "20.16px",
                textAlign: "justify",
                color: "#1377C0",
              }}
            >
              Co-Founder
            </p>
            <ul
              style={{
                fontSize: isTab ? "14px" : "18px",
                fontFamily: "Outfit",
                fontWeight: "300",
                lineHeight: isTab ? "20px" : "24.2px",
                textAlign: "justify",
                color: "#000000",
                paddingRight: "25px",
              }}
            >
              <li>
                NIT Rourkela alumnus with 6 years of MNC experience in software
                engineering.
              </li>
              <li style={{ marginTop: "10px" }}>
                Patent holder with expertise in AI, computer vision, and
                leadership.
              </li>
            </ul>
          </Grid>
          <Grid
            xs={isTab ? 5.8 : 2.8}
            display="flex"
            justifyContent="flex-start"
            flexDirection="column"
            boxShadow="0px 5px 21px -3px #0000001A;"
            padding="12px 16px"
            borderRadius="10px"
            borderBottom="5px solid #1377C0"
            marginBottom={isTab ? "10px" : "0px"}
            bgcolor="#fff"
          >
            <img
              src="./images/team_img_2.jpg"
              style={{
                width: "100%",
                height: "202px",
                objectFit: "cover",
                margin: "0px auto",
                borderRadius: "10px",
              }}
            />
            <h2
              style={{
                fontSize: isTab ? "18px" : "25px",
                fontFamily: "Outfit",
                fontWeight: "700",
                lineHeight: isTab ? "22px" : "31.5px",
                marginTop: "10px",
              }}
            >
              Ajay Saini
            </h2>
            <p
              style={{
                fontSize: isTab ? "16px" : "20px",
                fontFamily: "Outfit",
                fontWeight: "400",
                lineHeight: isTab ? "18px" : "20.16px",
                textAlign: "justify",
                color: "#1377C0",
              }}
            >
              Co-Founder
            </p>
            <ul
              style={{
                fontSize: isTab ? "14px" : "18px",
                fontFamily: "Outfit",
                fontWeight: "300",
                lineHeight: isTab ? "20px" : "24.2px",
                textAlign: "justify",
                color: "#000000",
                paddingRight: "25px",
              }}
            >
              <li>
                NIT Rourkela alumnus with 6 years of IIT-JEE teaching
                experience.
              </li>
              <li style={{ marginTop: "10px" }}>
                Expert in operations, mentorship, career counseling, and
                entrepreneurship.
              </li>
            </ul>
          </Grid>
          <Grid
            xs={isTab ? 5.8 : 2.8}
            display="flex"
            justifyContent="flex-start"
            flexDirection="column"
            boxShadow="0px 5px 21px -3px #0000001A;"
            padding="12px 16px"
            borderRadius="10px"
            borderBottom="5px solid #1377C0"
            marginBottom={isTab ? "10px" : "0px"}
            bgcolor="#fff"
          >
            <img
              src="./images/team_img_3.jpg"
              style={{
                width: "100%",
                height: "202px",
                objectFit: "cover",
                margin: "0px auto",
                borderRadius: "10px",
              }}
            />
            <h2
              style={{
                fontSize: isTab ? "18px" : "25px",
                fontFamily: "Outfit",
                fontWeight: "700",
                lineHeight: isTab ? "22px" : "31.5px",
                marginTop: "10px",
              }}
            >
              MB Sharma
            </h2>
            <p
              style={{
                fontSize: isTab ? "16px" : "20px",
                fontFamily: "Outfit",
                fontWeight: "400",
                lineHeight: isTab ? "18px" : "20.16px",
                textAlign: "justify",
                color: "#1377C0",
              }}
            >
              Deputy Director
            </p>
            <ul
              style={{
                fontSize: isTab ? "14px" : "18px",
                fontFamily: "Outfit",
                fontWeight: "300",
                lineHeight: isTab ? "20px" : "24.2px",
                textAlign: "justify",
                color: "#000000",
                paddingRight: "25px",
              }}
            >
              <li>
                28+ years in academic building, experience as a District
                Resource Person at Azim Premji Foundation and facilitator for
                Government Teacher Training.
              </li>
              <li style={{ marginTop: "10px" }}>
                Expertise in course development, student mentorship, career
                counseling
              </li>
            </ul>
          </Grid>
          <Grid
            xs={isTab ? 5.8 : 2.8}
            display="flex"
            justifyContent="flex-start"
            flexDirection="column"
            boxShadow="0px 5px 21px -3px #0000001A;"
            padding="12px 16px"
            borderRadius="10px"
            borderBottom="5px solid #1377C0"
            marginBottom={isTab ? "10px" : "0px"}
            bgcolor="#fff"
          >
            <img
              src="./images/team_img_4.jpeg"
              style={{
                width: "100%",
                height: "202px",
                objectFit: "cover",
                margin: "0px auto",
                borderRadius: "10px",
              }}
            />
            <h2
              style={{
                fontSize: isTab ? "18px" : "25px",
                fontFamily: "Outfit",
                fontWeight: "700",
                lineHeight: isTab ? "22px" : "31.5px",
                marginTop: "10px",
              }}
            >
              Kapil Gupta
            </h2>
            <p
              style={{
                fontSize: isTab ? "16px" : "20px",
                fontFamily: "Outfit",
                fontWeight: "400",
                lineHeight: isTab ? "18px" : "20.16px",
                textAlign: "justify",
                color: "#1377C0",
              }}
            >
              CAO
            </p>
            <ul
              style={{
                fontSize: isTab ? "14px" : "18px",
                fontFamily: "Outfit",
                fontWeight: "300",
                lineHeight: isTab ? "20px" : "24.2px",
                textAlign: "justify",
                color: "#000000",
                paddingRight: "25px",
              }}
            >
              <li>
                Ex COO & HOD of Physics at Bansal Classes Kota, with over 20
                years of experience in competitive exam training.
              </li>
              <li style={{ marginTop: "10px" }}>
                Focused on outsourcing the methodology to enhance access to
                quality education nationwide.
              </li>
            </ul>
          </Grid>
        </Grid>
      </Grid>

      {/* View More Button */}
    </div>
  );
};
export default OurTeam;
