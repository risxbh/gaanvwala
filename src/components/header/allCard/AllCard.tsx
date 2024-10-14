import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import React from "react";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import EmailIcon from "@mui/icons-material/Email";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import PhoneEnabledRoundedIcon from "@mui/icons-material/PhoneEnabledRounded";
import CenterFocusStrongIcon from "@mui/icons-material/CenterFocusStrong";
import allCardStyles from "./allCard.style";

interface AgentsDataType {
  title: string;
  path: string;
  icon: any;
}

export const agentsData = [
  {
    title: "message",
    path: "/agents",
    icon: <EmailIcon />,
  },
  {
    title: "12",
    path: "/agents",
    icon: <Diversity3Icon />,
  },
  {
    title: "1234567898",
    path: "/agents",
    icon: <PhoneEnabledRoundedIcon />,
  },
];

function AllCard() {
    const classes = allCardStyles;
  return (
    <Card style={classes.cardBox} sx={{ marginTop: "20px", padding: "10px 5px", bgcolor: "#ECE9E6" }}>
      <CardContent component="main" sx={{ flexGrow: 1, p: 3 }}>
     
        <Grid container spacing={1}>
          <Grid xs={12} sm={6} md={4} lg={4} xl={4} style={{ padding: "20px" }}>
            <Card sx={{ minWidth: 300, padding: "5px" }}>
            <Box>
               <img style={classes.aboutImg}src="./images/ourMission.png"/>
               </Box>
               <Typography>Card Title</Typography>
            </Card>
          </Grid>
          <Grid xs={12} sm={6} md={4} lg={4} xl={4} style={{ padding: "20px" }}>
            <Card sx={{ minWidth: 300, padding: "5px" }}>
            <Box>
               <img style={classes.aboutImg}src="./images/ourMission.png"/>
               </Box>
               <Typography>Card Title</Typography>
            </Card>
          </Grid>
          <Grid xs={12} sm={6} md={4} lg={4} xl={4} style={{ padding: "20px" }}>
            <Card sx={{ minWidth: 300, padding: "5px" }}>
            <Box>
               <img style={classes.aboutImg}src="./images/ourMission.png"/>
               </Box>
               <Typography>Card Title</Typography>
            </Card>
          </Grid>  
        </Grid>
      </CardContent>
    </Card>
  );
}

export default AllCard;