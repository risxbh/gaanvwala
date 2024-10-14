import React from "react";
import ourTeamStyles from "./ourTeam.styles";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

function OurTeam() {
  const classes = ourTeamStyles;
  return (
    <Box sx={classes.mainBox} >
      <Typography variant="h3" sx={classes.box1}>
        Our Team
      </Typography>
      <Grid container>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={12}
          sx={classes.frstBox}
        >
          <Typography variant="h1">
            Meet Our Inspiring <br /> Dedicated team
          </Typography>
          <Button variant="contained" size="large" fullWidth sx={{ marginRight: "20px" }}>
            View more <ArrowForwardIcon/>
          </Button>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} sx={classes.secondBox}>
          <Grid container>
            <Grid item xs={12} sm={12} md={3} lg={3} xl={3} >
              <Card sx={classes.box2}>
                <CardMedia
                  sx={classes.box3}
                  image="/hutesh.jpg"
                  title="green iguana"
                />
                <CardContent>
                  <Typography variant="h4">
                    Hutesh Kumar
                  </Typography>
                  <Typography variant="h5" sx={{   color: "#1377c0"}}>
                    Co-Founder
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
              <Card sx={classes.box4}>
                <CardMedia
                  sx={classes.box3}
                  image="/founder1.jpeg"
                  title="green iguana"
                />
                <CardContent>
                  <Typography  variant="h4"  sx={{fontSize:'bold'}}>
                    Ajay Saini
                  </Typography>
                  <Typography variant="h5" sx={{  color: "#1377c0" }}>
                    Co-Founder
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
              <Card sx={classes.box4}>
                <CardMedia
                  sx={classes.box3}
                  image="/mukut2.png"
                  title="green iguana"
                />
                <CardContent>
                  <Typography  variant="h4"  sx={{fontSize:'bold'}}>
                    MB Sharma
                  </Typography>
                  <Typography variant="h5" sx={{ color: "#1377c0" }}>
                   CAO
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
              <Card sx={classes.box4}>
                <CardMedia
                  sx={classes.box3}
                  image="/founder1.jpeg"
                  title="green iguana"
                />
                <CardContent>
                  <Typography  sx={{fontSize:'bold'}} variant="h4" >
                    Kapil Gupta
                  </Typography>
                  <Typography variant="h5" sx={{ color: "#1377c0"  }}>
                    CAO
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default OurTeam;
