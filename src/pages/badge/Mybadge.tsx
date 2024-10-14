import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import mybadgeStyles from "./mybadge.style";

function Mybadge() {
  const classes = mybadgeStyles;
  return (
    <Box>
      <Grid container>
        <Grid item xs={3} sm={3} md={3} lg={3} xl={3} sx={classes.box1}>
          <Typography variant="h2" fontWeight={"bold"}>
            4500+
          </Typography>
          
          <br />
          <Typography variant="h4" fontWeight={"bold"}>
            Total <br />
            Students
          </Typography>
        </Grid>
        <Grid item xs={3} sm={3} md={3} lg={3} xl={3} sx={classes.box1}>
          <Typography variant="h2" fontWeight={"bold"}>
            120+
          </Typography>
         
          <br />
          <Typography variant="h4" fontWeight={"bold"}>
            Countries <br />
            covered
          </Typography>
        </Grid>
        <Grid item xs={3} sm={3} md={3} lg={3} xl={3} sx={classes.box1}>
          <Typography variant="h2" fontWeight={"bold"}>
            200+
          </Typography>
         
          <br />
          <Typography variant="h4" fontWeight={"bold"}>
            Seasoned <br />
            Analysts
          </Typography>
        </Grid>
        <Grid item xs={3} sm={3} md={3} lg={3} xl={3} sx={classes.box1}>
          <Typography variant="h2" fontWeight={"bold"}>
            24 X 7
          </Typography>
          <br />
          <Typography variant="h4" fontWeight={"bold"}>
            Support
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Mybadge;
