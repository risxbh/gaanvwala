import React from "react";
import testimonialStyles from "./testimonial.style";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import StarRateIcon from "@mui/icons-material/StarRate";
import WaterDropIcon from "@mui/icons-material/WaterDrop";

function Testimonial() {
  const classes = testimonialStyles;
  return (
    <Box sx={{margin:'40px'}}>
      <Grid container>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Box sx={classes.box1}>
            <Typography variant="h4" color="#1377c0" p={1}>
              OUR STUDENTS TESTIMONIALS
            </Typography>
            <Typography variant="h3" sx={{ fontWeight: "bold" }} ml={1}>
              Students Says About Us!
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Grid container>
            <Grid item xs={12} sm={12} md={4} lg={4} xl={4} sx={classes.box2}>
              <Card sx={classes.box3}>
                <CardContent>
                  <Box
                    sx={classes.box4}
                  >
                    <StarRateIcon />
                    <StarRateIcon />
                    <StarRateIcon />
                  </Box>
                  Hello, my name is Tanu and I am a GW student. I'll state that
                  Gaanvwala is the best because of its unique study material and
                  effective teaching methods. After joining GW, I saw the true
                  value of basic concepts and the actual means of education. My
                  parents are no longer concerned about any issues pertaining to
                  my career or studies because the GW team is here to help me at
                  every point throughout my academic career. I am now doing well
                  in my studies with the support of GW.
                </CardContent>
                <Box
                  sx={classes.box5}
                >
                  <CardMedia
                    component="img"
                    sx={{ width: 120 }}
                    image="/Ashvi.jpg"
                    alt="Live from space album cover"
                  />
                  <Typography variant="h5" p={1}>
                    Tannu
                    <p style={{ margin: "0" ,color:'#1377c0'}}>Student</p>
                  </Typography>
                  <img src="/Mask group.png" style={{ padding: "10px" }} />
                </Box>
              </Card>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4} xl={4} sx={classes.box2}>
              <Card sx={classes.box3}>
                <CardContent>
                  <Box
                    sx={classes.box4}
                  >
                    <StarRateIcon />
                    <StarRateIcon />
                    <StarRateIcon />
                  </Box>
                  Hello, I'm Anjali, a student at GW. The beginning of the
                  journey with GW was very Unique. As a student in a small town,
                  I had no access to any learning resources during the COVID-19
                  lockdowns. But when the Gaanv Wala team contacted me, they
                  asked me about my study. I just said, There is not a single
                  source through which I can study, in response. Once that, they
                  began teaching us within a few days, and after that, I studied
                  GW classes and study material. I experienced a different
                </CardContent>
                <Box
                  sx={classes.box5}
                >
                  <CardMedia
                    component="img"
                    sx={{ width: 120 }}
                    image="/Tanu-7aa10c77.jpg"
                    alt="Live from space album cover"
                  />
                  <Typography variant="h5" p={1}>
                    Anjali
                    <p style={{ margin: "0" , color:'#1377c0'}}>Student</p>
                  </Typography>
                  <img src="/Mask group.png" style={{ padding: "10px" }} />
                </Box>
              </Card>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4} xl={4} sx={classes.box2}>
              <Card sx={classes.box3}>
                <CardContent>
                  <Box
                    sx={classes.box4}
                  >
                    <StarRateIcon />
                    <StarRateIcon />
                    <StarRateIcon />
                  </Box>
                  Hello, my name is Soumya and I am a student at GW Schools. It
                  is a good time to recall my past as a typical high school
                  student who never topped the class on tests, but after
                  studying at GW, there was not a single test in which I did not
                  come out on top. It was the only result of care and study
                  material provided by G.W. Ajay sir always motivated me to be a
                  successful person at every stage of life, and Manish Sir's
                  unique way of teaching SST developed my interest in learning.
                </CardContent>
                <Box
                  sx={classes.box5}
                >
                  <CardMedia
                    component="img"
                    sx={{ width: 120 }}
                    image="/Tanu-7aa10c77.jpg"
                    alt="Live from space album cover"
                  />
                  <Typography variant="h5" p={1}>
                    Soumya
                    <p style={{ margin: "0" ,color:'#1377c0'}}>Student</p>
                  </Typography>
                  <img src="/Mask group.png" style={{ padding: "10px" }} />
                </Box>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Testimonial;
