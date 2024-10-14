import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import ourServicesStyles from "./services.styles";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

function Services() {
  const classes = ourServicesStyles;
  return (
    <Box>
      <Grid container>
        <Grid item xs={12} sm={12} md={4} lg={4} xl={4} sx={classes.textBox}>
          <Typography variant="h4" sx={classes.box1}>
            Our Services & Products
          </Typography>
          <Typography variant="h2">Explore Top <br/>  Categories </Typography>
          <Button variant="contained">
            View More <ArrowForwardIcon />
          </Button>
        </Grid>
        <Grid item xs={12} sm={12} md={8} lg={8} xl={8} sx={classes.wholeBox}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
              <Card sx={classes.borderBox}>
                <CardContent sx={classes.cardBox}>
                  <img src="/image 21.png" style={classes.image}/>
                  <Typography  variant="h5">Academics</Typography>
                  <p>
                    Our academic programme is structured to satisfy board
                    examination criteria and is geared toward competitive
                    learning, making it extremely advantageous for every
                    student.
                  </p>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
              <Card sx={classes.borderBox}>
                <CardContent sx={classes.cardBox}>
                  <img src="/image 22.png" style={classes.image}/>
                  <Typography variant="h5">Academics</Typography>
                  <p style={classes.para}>
                  We have mentors from reputed institutions like IITs and NITs along with great work experience in the industry in the different work domains. 
                  </p>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
              <Card sx={classes.borderBox}>
                <CardContent sx={classes.cardBox}>
                  <img src="/image 23.png" style={classes.image} />
                  <Typography  variant="h5">Academics</Typography>
                  <p>
                  We will also support schools to gain reach and visibility in nearby areas along with content creation and design
                  </p>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Services;
