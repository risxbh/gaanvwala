import React, { useState, useEffect } from "react";
import { Grid,Typography,Button,Box, CardActionArea, CardMedia, CardContent } from '@mui/material';
import { Card } from 'react-bootstrap';
import missionVisionStyles from './missionVision.style';
const MissionVision =()=> {
 const classes = missionVisionStyles;
 const [isMobile, setIsMobile] = useState(false);
 const [isTab, setIsTab] = useState(false)

 useEffect(() => {
   // Function to update screen width
   const handleResize = () => {
     setIsMobile(window.innerWidth < 768); // Change 768 to the desired breakpoint
     setIsTab(window.innerWidth <1080)
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
    <div>
      <Grid container spacing={2}>
      <Grid item xs={12} sm={12} >
      <Box style={{position: 'relative'}}>
         <img style={{    width: '100% ', height: 250, 
           background: '#0F1B31'}}src="./images/bannerImg.png"/>
           <Box style={{position: 'absolute', textAlign: 'center', width:"100%", height:'100%', top:'0px', left:'0px', flexDirection:'column', alignItems:'center', justifyContent:'center', display:"flex" }}>
          
          <Typography style={{
              fontFamily: "Outfit",
              fontWeight: "700",
              fontSize: isTab ? "24px" : "60px",
              lineHeight: isTab ? "36px" : "62.6px",
              color:"white"
            }}>
           Mission & Vision
          </Typography>
          <Typography style={{
              fontFamily: "Outfit",
              fontWeight: "400",
              fontSize: isTab ? "20px" : "30px",
              lineHeight: "37.8px",
              color: "#fff",
              marginTop:"10px"
                 
            }}>
            HOME <span style={{fontSize:"30px", padding:"0px 0px 6px 6px", fontWeight:"bolder"}}>→</span> Mission & Vision
          </Typography>
           {/* <Typography style={{fontSize: '15px', color: '#fff'}}>Home→ MISSION & VISION</Typography> */}
           </Box>
        </Box>
        </Grid>
        </Grid>
      <Grid container spacing={6} alignItems="center" px={isTab?4:10} py={isTab?7:14}>
        <Grid item xs={12} sm={6}>
      <Card style={{  boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
      <CardActionArea style={{padding: 40,}}>
      <Box style={classes.CardImg}>
        <img style={classes.aboutImg}src="./images/ourMission.png"/>
        </Box>
        <CardContent>
          <Typography style={{
              fontFamily: "Outfit",
              fontWeight: "700",
              fontSize: isTab ? "24px" : "40px",
              lineHeight: isTab ? "36px" : "50.4px",
            }}>
            Our Mission
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary', fontFamily:'Outfit', fontSize:'18px',lineHeight:'32px' }}>
          To revolutionize education in tier-2 and tier-3 cities by delivering high-quality, affordable schooling that empowers students with the knowledge and skills they need to excel academically and professionally, ensuring every youth has access to transformative career guidance and opportunities.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
      <Card style={{  boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
      <CardActionArea style={{padding: 40,}}>
      <Box style={classes.CardImg}>
        <img style={classes.aboutImg}src="./images/ourVision.png"/>
        </Box>
        <CardContent>
          <Typography style={{
              fontFamily: "Outfit",
              fontWeight: "700",
              fontSize: isTab ? "24px" : "40px",
              lineHeight: isTab ? "36px" : "50.4px",
            }}>
            Our Vision
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary', fontFamily:'Outfit', fontSize:'18px',lineHeight:'32px' }}>
          To revolutionize education in tier-2 and tier-3 cities by delivering high-quality, affordable schooling that empowers students with the knowledge and skills they need to excel academically and professionally, ensuring every youth has access to transformative career guidance and opportunities.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
        </Grid>
      </Grid>
    </div>
  )
}
export default MissionVision;
