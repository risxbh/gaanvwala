import React, { useState, useEffect } from "react";
import styles from "./FormHome.style";
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
const FormHome = () => {
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
        padding: isTab ? "20px" : "0px 40px",
        width: "100%",

        borderRadius: "10px",
      }}
    >
      <Grid
        container
        spacing={2}
        style={{ padding: isTab ? "20px" : "0px 0px 0px 40px" }}
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid
          item
          xs={12}
          sm={5}
          display={isMobile ? "none" : "block"}
          margin="auto"
        >
          <img
            src="./images/indiaMap.png"
            style={{
              width: "100%",
              height: isTab ? "300px" : "593px",
              objectFit: "contain",
            }}
          />
        </Grid>
        <Grid
          container
          xs={12}
          sm={isMobile ? 12 : 5}
          display="flex"
         
          borderRadius="8px"
          padding="30px 20px"
          ml={isTab ? "12px" : "0px"}
          width={isMobile ? "100%" : "auto"}
          boxShadow="0px 6px 40px 0px #0000000F"
        >
        <div style={{display:'flex', justifyContent:'space-between', gap:"10px"}}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              justifyContent:"space-between",
              padding: '5px 20px 5px 10px',
              marginBottom: "15px",
              background:"#F3F7FB"
            }}
          >
            
            <input placeholder="Enter Your Name " style={{...classes.input, fontFamily:"Outfit", width:"90%"}} />
            <img src="./images/name.svg" style={{width:'20px'}}/>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              justifyContent:"space-between",
              padding: '5px 20px 5px 10px',
              marginBottom: "15px",
              background:"#F3F7FB"
            }}
          >
            
            <input placeholder="Enter Your Email " style={{...classes.input, fontFamily:"Outfit", width:"90%"}} />
            <img src="./images/email-grey.svg" style={{width:'20px'}}/>
          </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              justifyContent:"space-between",
              padding: '5px 20px 5px 10px',
              marginBottom: "15px",
              background:"#F3F7FB",
              alignItems:"flex-start"
            }}
          >
           
           <textarea placeholder="Message" style={{...classes.input, fontFamily:"Outfit", width:"90%", height:'241px'}} />
            <img src="./images/msg-grey.svg" style={{width:'20px', margin:"10px 0px"}}/>
          </div>
          <Button
          variant="contained"
          color="primary"
          style={{
            width: isTab ? "auto" : "100%",
            height: isTab ? "40px" : "50px",
            background: "#1377C0",
            borderRadius: "8px",
            color: "#fff",
            fontWeight: "500",
            // marginTop: '20px',
            fontSize: isTab ? "12px" : "14px",
            display: "flex",
            alignItems: "center",
            fontFamily:"Outfit"
          }}
        >
         SEND MESSAGE
          <span style={{ fontSize: "30px", padding: "0px 0px 6px 6px" }}>
            →
          </span>
        </Button>
        </Grid>
      </Grid>

      {/* View More Button */}
    </div>
  );
};
export default FormHome;
