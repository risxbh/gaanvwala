import React, { useState, useEffect } from "react";
import learningProgramCopyStyles from "./learningProgramCopy.style";
import {
  ButtonBase,
  CardContent,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import { Button } from "react-bootstrap";
interface LearningProgramCopyType {
  medium: string;
}

const LearningProgramCopy = ({ medium }: LearningProgramCopyType) => {
  const classes = learningProgramCopyStyles;
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
    <Paper
      sx={(theme) => ({
        margin: "auto",
        maxWidth: 600,
        width: "100%",
        height: "100%",
        // flexGrow: 2,
        background: "#F5FBFF",
        boxShadow: "0px 9px 15px 0px #0000000F;",
      })}
    >
      <Grid display="flex" spacing={2} flexDirection="column">
        <Button
          style={{
            width: isMobile ? "1  50px" : "180px",
            height: isMobile ? "36px" : "50px",
            background: "#1377C0",
            borderBottomLeftRadius: "8px",
            borderBottomRightRadius: "8px",
            borderTopLeftRadius: "0px",
            borderTopRightRadius: "0px",
            color: "#fff",
            // marginTop: '20px',
            margin: "0px auto 10px",
            fontWeight: "700",
            fontFamily: "Outfit",
          }}
        >
          Classes 6-10
        </Button>
        <div>
          <Grid item display="flex" flexDirection="row" alignItems="center">
            <ButtonBase sx={{ width: "50%", height: isMobile ? 100 : 128 }}>
              <img style={classes.img} src="./images/LearningProgram.png" />
            </ButtonBase>
            <Grid item xs={12} sm container>
              <Grid item container direction="column" spacing={2}>
                <Grid item xs>
                  <CardContent>
                    <Typography
                      style={{
                        fontFamily: "Outfit",
                        fontStyle: "normal",
                        fontWeight: "500",
                        fontSize: isMobile ? "20px" : "25px",
                        lineHeight: "26px",
                        textAlign: "center",
                        color: "#1377C0",
                      }}
                    >
                      {medium}
                    </Typography>

                    <Typography
                      style={{
                        fontFamily: "Outfit",
                        fontStyle: "normal",
                        fontWeight: "300",
                        fontSize: isMobile ? "16px" : "20px",
                        color: "#000000",
                        lineHeight: "26px",
                        textAlign: "center",
                        margin: "10px 0px",
                      }}
                    >
                      Customized learning program
                    </Typography>

                    <Button
                      variant="contained"
                      color="primary"
                      style={{
                        width: isTab ? "auto" : "100%",
                        height: isTab ? "40px" : "50px",

                        borderRadius: "8px",
                        color: "#464646",
                        fontWeight: "300",
                        // marginTop: '20px',
                        fontSize: isTab ? "16px" : "20px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        margin: isTab ? "auto" : "0px",
                        fontFamily: "Outfit",
                        textWrap: "nowrap",
                      }}
                    >
                      Explore More
                      <span
                        style={{ fontSize: "30px", padding: "0px 0px 0px 0px" }}
                      >
                        →
                      </span>
                    </Button>
                  </CardContent>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </Grid>
    </Paper>
  );
};

export default LearningProgramCopy;
