import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Button,
  Typography,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import founderStyles from "./productsServices.style";
import LearningProgram from "../../components/header/learningProgram/LearningProgram";

const class9To10 = [
  {
    name: "NEET",
    bg: "#F1FAFF",
  },
  {
    name: "IIT JEE",
    bg: "#FFF9EE",
  },
  {
    name: "NDA",
    bg: "#E8FFF6",
  },
  {
    name: "CUET",
    bg: "#FFEEEE",
  },
];

const class11To12 = [
  {
    name: "NEET",
    bg: "#F8F8FF",
  },
  {
    name: "IIT JEE",
    bg: "#F4F4F4",
  },
  {
    name: "NDA",
    bg: "#F4FCFF",
  },
  {
    name: "CUET",
    bg: "#FFF9EE",
  },
];

const allClass = [
  {
    name: "School Preparation",
    bg: "#F8F8FF",
  },
];

const services = [
  {
    title: "Academic Planning and Monitoring",
    subText:
      "We take care of the complete academic structure and execution for your school, ensuring seamless coordination and monitoring throughout the academic year. Our services include:",
    points: [
      "Teaching Schedule: A well-structured schedule to guide teaching throughout the year.",
      "Lecture Plans: Detailed plans for every lesson to ensure effective teaching strategies.",
      "Test Paper Schedule: A comprehensive testing plan to prepare students for competitive and board exams.",
    ],
  },
  {
    title: "Comprehensive Study Material",
    subText:
      "Our study materials are designed by India's top academic experts, focused on NCERT-based content with a competitive exam approach. We offer:",
    points: [
      "Level-based learning customized to students' interests and potential.",
      "Study materials covering Physics, Chemistry, Maths, Biology, Social Studies, Logical Reasoning, and various language subjects.",
    ],
  },
  {
    title: "Review Tests & Mock Test Series",
    subText:
      "Regular testing is essential to track student progress and fine-tune teaching strategies. Our offering includes:",
    points: [
      "Review Tests: Periodic assessments designed to gauge students' understanding.",
      "Mock Test Series: Comprehensive test series that simulate real exam conditions, covering both competitive and subjective exams.",
    ],
  },
  {
    title: "Teacher Training & Empanelment",
    subText:
      "We provide comprehensive training for teachers, ensuring they are equipped with the latest instructional techniques and strategies. Our services include:",
    points: [
      "Empanelment of Faculty: HR support for hiring qualified teachers as per the school’s requirements.",
      "Subject-Specific Training: We offer training in Physics, Chemistry, Mathematics, and Biology for school-appointed teachers.",
    ],
  },
  {
    title: "Review Tests & Mock Test Series",
    subText:
      "Regular testing is essential to track student progress and fine-tune teaching strategies. Our offering includes:",
    points: [
      "Review Tests: Periodic assessments designed to gauge students' understanding. ",
      "Mock Test Series: Comprehensive test series that simulate real exam conditions, covering both competitive and subjective exams.",
    ],
  },
  {
    title: "Teacher Training & Empanelment",
    subText:
      "We provide comprehensive training for teachers, ensuring they are equipped with the latest instructional techniques and strategies. Our services include:",
    points: [
      "Empanelment of Faculty: HR support for hiring qualified teachers as per the school’s requirements.",
      "Subject-Specific Training: We offer training in Physics, Chemistry, Mathematics, and Biology for school-appointed teachers.",
    ],
  },
];
const products = [{ item: 1 }, { item: 2 }, { item: 3 }, { item: 4 }];

function ProductServicesPage() {
  const classes = founderStyles;
  const [isMobile, setIsMobile] = useState(false);
  const [isTab, setIsTab] = useState(false);
  const [currentTab, setCurrentTab] = useState(0);

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
    <Box>
      <Box style={{ position: "relative" }}>
        <img
          style={{ width: "100% ", height: 250, background: "#0F1B31" }}
          src="./images/bannerImg.png"
        />
        <Box
          style={{
            position: "absolute",
            textAlign: "center",
            width: "100%",
            height: "100%",
            top: "0px",
            left: "0px",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
          }}
        >
          <Typography
            style={{
              fontFamily: "Outfit",
              fontWeight: "700",
              fontSize: isTab ? "24px" : "60px",
              lineHeight: isTab ? "36px" : "62.6px",
              color: "white",
            }}
          >
            PRODUCT & SERVICES
          </Typography>
          <Typography
            style={{
              fontFamily: "Outfit",
              fontWeight: "400",
              fontSize: isTab ? "20px" : "30px",
              lineHeight: "37.8px",
              color: "#fff",
              marginTop: "10px",
            }}
          >
            HOME{" "}
            <span
              style={{
                fontSize: "30px",
                padding: "0px 0px 6px 6px",
                fontWeight: "bolder",
              }}
            >
              →
            </span>{" "}
            PRODUCT & SERVICES
          </Typography>
          {/* <Typography style={{fontSize: '15px', color: '#fff'}}>Home→ MISSION & VISION</Typography> */}
        </Box>
      </Box>
      <Grid
        container
        display="flex"
        justifyContent="space-between"
        flexDirection="column"
        spacing={2}
        pl={isTab ? "30px" : "70px"}
        pr={isTab ? "20px" : "70px"}
        py={isTab ? "20px" : "40px"}
        mt={isMobile ? 2 : 6}
      >
        <div
          style={{
            background: "#fff",
            border: "1px solid #1377C0",
            boxShadow: "0px 5px 30px 0px #4C58681A",
            width: "fit-content",
            borderRadius: "10px",
            display: "flex",
          }}
        >
          <Typography
            style={{
              fontSize: isMobile ? "14px" : "20px",
              background: currentTab == 0 ? "#1377C0" : "#fff",
              borderRadius: "10px",
              color: currentTab == 0 ? "#fff" : "#1377C0",
              fontWeight: "700",
              lineHeight: "50.4px",
              fontFamily: "Outfit",
              padding: isMobile ? "0px 20px" : "0px 40px 0px 40px",
              cursor: "pointer",
            }}
            onClick={() => setCurrentTab(0)}
          >
            GW Academic Strengths
          </Typography>
          <Typography
            style={{
              fontSize: isMobile ? "14px" : "20px",
              background: currentTab == 1 ? "#1377C0" : "#fff",
              borderRadius: "10px",
              color: currentTab == 1 ? "#fff" : "#1377C0",
              fontWeight: "700",
              lineHeight: "50.4px",
              fontFamily: "Outfit",
              padding: isMobile ? "0px 20px" : "0px 40px 0px 40px",
              cursor: "pointer",
            }}
            onClick={() => setCurrentTab(1)}
          >
            Services
          </Typography>
        </div>
        {currentTab == 0 && (
          <>
            <Typography
              style={{
                fontSize: isMobile ? "30px" : "40px",
                color: "#1377C0",
                fontWeight: "700",
                lineHeight: isMobile ? "36px" : "50.4px",
                fontFamily: "Outfit",
              }}
              mt={4}
            >
              Empowering Students with Tailored Learning & Career Guidance
              Solutions
            </Typography>
            <Typography
              style={{
                fontSize: isMobile ? "14px" : "20px",
                color: "#0F1B31",
                fontWeight: "300",
                lineHeight: isMobile ? "20px" : "28px",
                fontFamily: "Outfit",
              }}
              mt={1}
            >
              At GW Tech, we provide innovative educational tools designed to
              meet the unique needs of students. Our products are tailored to
              empower students to make informed career decisions and achieve
              academic excellence. Below is a comprehensive overview of our key
              offerings:
            </Typography>
            <Grid mt={4}>
              {products.map((item, index) => (
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={12}
                  lg={12}
                  mx={isTab ? 0 : 0}
                  my={isTab ? 0 : 5}
                  flexWrap={isTab ? "wrap" : "nowrap"}
                >
                  <Card
                    sx={{
                      ...classes.borderBox,
                      padding: isTab ? "16px" : "30px 30px",
                      flexWrap: isMobile ? "wrap" : "nowrap",
                      borderRadius: "10px",
                      flexDirection: isMobile
                        ? "column"
                        : index % 2
                        ? "row-reverse"
                        : "row",
                    }}
                  >
                    <Box
                      sx={{
                        ...classes.box1,
                        width: isTab ? "100%" : "auto",
                        position: "relative",
                      }}
                    >
                      <img
                        src="./images/products_img.png"
                        style={{
                          width: isMobile ? "100%" : isTab ? "100%" : "429px",
                          height: isTab ? "100%" : "100%",
                          minHeight: isTab ? "250px" : "330px",
                          objectFit: "cover",
                          margin: "0px",
                          borderRadius: "10px",
                          maxWidth: "429px",
                        }}
                      />
                    </Box>
                    <Box
                      sx={{ display: "flex", flexDirection: "column" }}
                      ml={isTab ? 0 : 4}
                    >
                      <CardContent sx={{ fontSize: "25px" }}>
                        <Typography
                          style={{
                            fontSize: isMobile ? "20px" : "30px",
                            color: "#1377C0",
                            fontWeight: "400",
                            lineHeight: isMobile ? "30px" : "50.4px",
                            fontFamily: "Outfit",
                            textTransform: "uppercase",
                          }}
                        >
                          Career Analysis & Report Generation
                        </Typography>
                        <Typography
                          style={{
                            fontSize: isMobile ? "30px" : "40px",
                            color: "#0F1B31",
                            fontWeight: "700",
                            lineHeight: isMobile ? "40px" : "50.4px",
                            fontFamily: "Outfit",
                          }}
                          mb={isMobile ? 1 : 3}
                        >
                          Understand Your Path to Success
                        </Typography>

                        <p
                          style={{
                            fontSize: isTab ? "14px" : "20px",
                            fontFamily: "Outfit",
                            fontWeight: "300",
                            lineHeight: isTab ? "20px" : "25.2px",
                            textAlign: "justify",
                            color: "#000",
                            marginBottom: isMobile ? "10px" : "20px",
                          }}
                        >
                          Our Career Analysis tool is an MCQ-based test that
                          generates a detailed 45-page report, helping students
                          to self-analyze and make informed career decisions.
                          The report is based on a thorough analysis of a
                          student’s:
                        </p>
                        <ul
                          style={{
                            fontSize: isTab ? "14px" : "20px",
                            fontFamily: "Outfit",
                            fontWeight: "300",
                            lineHeight: isTab ? "20px" : "25.2px",
                            textAlign: "justify",
                            color: "#000",
                            listStyleType: "none",
                            paddingLeft: "0px",
                          }}
                        >
                          <li>
                            <span style={{ fontSize: "24px" }}>●</span>{" "}
                            Psychology
                          </li>
                          <li>
                            <span style={{ fontSize: "24px" }}>●</span> Academic
                            Expectations
                          </li>
                          <li>
                            <span style={{ fontSize: "24px" }}>●</span> Skills &
                            Interests
                          </li>
                        </ul>
                        <Button
                          variant="contained"
                          color="primary"
                          style={{
                            width: isTab ? "auto" : "fit-content",
                            height: isTab ? "40px" : "50px",
                            background: "#fff",
                            borderRadius: "8px",
                            color: "#1377C0",
                            fontWeight: "600",
                            // marginTop: '20px',
                            fontSize: isTab ? "12px" : "20px",
                            display: "flex",
                            alignItems: "center",
                            boxShadow: "none",
                            padding: "0px",
                          }}
                        >
                          VIEW MORE
                          <span
                            style={{
                              fontSize: "40px",
                              padding: "0px 0px 6px 6px",
                            }}
                          >
                            →
                          </span>
                        </Button>
                      </CardContent>
                    </Box>
                  </Card>
                </Grid>
              ))}
            </Grid>
            <LearningProgram />
            <Grid container spacing={2} p={isMobile ? 1 : 0}>
              {class9To10.map((item, index) => (
                <Grid item md={3} sm={6} xs={12}>
                  <div
                    style={{
                      padding: "25px",
                      background: item.bg,
                      boxShadow: "0px 9px 15px 0px #0000000F",
                      position: "relative",
                    }}
                  >
                    <Typography
                      style={{
                        fontSize: "30px",
                        color: "#1377C0",
                        fontWeight: "500",
                        lineHeight: "26px",
                        fontFamily: "Outfit",
                      }}
                      mb={2}
                    >
                      {item.name}
                    </Typography>
                    <Typography
                      style={{
                        fontSize: "20px",
                        color: "#1E1E1E",
                        fontWeight: "400",
                        lineHeight: "25.2px",
                        fontFamily: "Outfit",
                      }}
                    >
                      Including Pre-Foundation
                    </Typography>
                    <Grid container spacing={1} width="80%" mt={1} mb={6}>
                      <Grid item xs={6}>
                        <div
                          style={{
                            background: "#fff",
                            border: "1px solid #1377C066",
                            borderRadius: "30px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            padding: "6px",
                          }}
                        >
                          <p
                            style={{
                              marginBottom: "0px",
                              color: "#494949",
                              fontFamily: "Outfit",
                            }}
                          >
                            Class 9
                          </p>
                        </div>
                      </Grid>
                      <Grid item xs={6}>
                        <div
                          style={{
                            background: "#fff",
                            border: "1px solid #1377C066",
                            borderRadius: "30px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            padding: "6px",
                          }}
                        >
                          <p
                            style={{
                              marginBottom: "0px",
                              color: "#494949",
                              fontFamily: "Outfit",
                            }}
                          >
                            Class 10
                          </p>
                        </div>
                      </Grid>
                      <Grid item xs={6}>
                        <div
                          style={{
                            background: "#fff",
                            border: "1px solid #1377C066",
                            borderRadius: "30px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            padding: "6px",
                          }}
                        >
                          <p
                            style={{
                              marginBottom: "0px",
                              color: "#494949",
                              fontFamily: "Outfit",
                            }}
                          >
                            Class 11
                          </p>
                        </div>
                      </Grid>
                      <Grid item xs={6}>
                        <div
                          style={{
                            background: "#fff",
                            border: "1px solid #1377C066",
                            borderRadius: "30px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            padding: "6px",
                          }}
                        >
                          <p
                            style={{
                              marginBottom: "0px",
                              color: "#494949",
                              fontFamily: "Outfit",
                            }}
                          >
                            Class 12
                          </p>
                        </div>
                      </Grid>
                    </Grid>
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
                        justifyContent: "flex-start",
                        margin: isTab ? "0px" : "0px",
                        fontFamily: "Outfit",
                        textWrap: "nowrap",
                        background: "transparent",
                        boxShadow: "none",
                        textTransform: "none",
                        paddingLeft: "0px",
                      }}
                    >
                      Explore More
                      <span style={{ fontSize: "30px" }}>→</span>
                    </Button>

                    <img
                      style={{
                        width: "100px",
                        position: "absolute",
                        bottom: "20px",
                        right: "10px",
                      }}
                      src={`./images/courses_${index + 1}.png`}
                    />
                  </div>
                </Grid>
              ))}
            </Grid>
            <Grid
              container
              spacing={2}
              p={isMobile ? 1 : 0}
              mt={isMobile ? 2 : 4}
            >
              {class11To12.map((item, index) => (
                <Grid item md={3} sm={6} xs={12}>
                  <div
                    style={{
                      padding: "25px",
                      background: item.bg,
                      boxShadow: "0px 9px 15px 0px #0000000F",
                      position: "relative",
                      minHeight: "315px",
                    }}
                  >
                    <Typography
                      style={{
                        fontSize: "30px",
                        color: "#1377C0",
                        fontWeight: "500",
                        lineHeight: "26px",
                        fontFamily: "Outfit",
                      }}
                      mb={2}
                    >
                      {item.name}
                    </Typography>
                    <Typography
                      style={{
                        fontSize: "20px",
                        color: "#1E1E1E",
                        fontWeight: "400",
                        lineHeight: "25.2px",
                        fontFamily: "Outfit",
                      }}
                    >
                      Foundation
                    </Typography>
                    <Grid container spacing={1} width="80%" mt={1} mb={10}>
                      <Grid item xs={6}>
                        <div
                          style={{
                            background: "#fff",
                            border: "1px solid #1377C066",
                            borderRadius: "30px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            padding: "6px",
                          }}
                        >
                          <p
                            style={{
                              marginBottom: "0px",
                              color: "#494949",
                              fontFamily: "Outfit",
                            }}
                          >
                            Class 11
                          </p>
                        </div>
                      </Grid>
                      <Grid item xs={6}>
                        <div
                          style={{
                            background: "#fff",
                            border: "1px solid #1377C066",
                            borderRadius: "30px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            padding: "6px",
                          }}
                        >
                          <p
                            style={{
                              marginBottom: "0px",
                              color: "#494949",
                              fontFamily: "Outfit",
                            }}
                          >
                            Class 12
                          </p>
                        </div>
                      </Grid>
                    </Grid>
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
                        justifyContent: "flex-start",
                        margin: isTab ? "0px" : "0px",
                        fontFamily: "Outfit",
                        textWrap: "nowrap",
                        background: "transparent",
                        boxShadow: "none",
                        textTransform: "none",
                        paddingLeft: "0px",
                        marginTop: "auto",
                      }}
                    >
                      Explore More
                      <span style={{ fontSize: "30px" }}>→</span>
                    </Button>

                    <img
                      style={{
                        width: "100px",
                        position: "absolute",
                        bottom: "20px",
                        right: "10px",
                      }}
                      src={`./images/courses_${index + 1}.png`}
                    />
                  </div>
                </Grid>
              ))}
            </Grid>
            <Grid
              container
              spacing={2}
              p={isMobile ? 1 : 0}
              mt={isMobile ? 2 : 4}
            >
              {allClass.map((item, index) => (
                <Grid item md={3} sm={6} xs={12}>
                  <div
                    style={{
                      padding: "25px",
                      background: item.bg,
                      boxShadow: "0px 9px 15px 0px #0000000F",
                      position: "relative",
                      minHeight: "315px",
                    }}
                  >
                    <Typography
                      style={{
                        fontSize: "30px",
                        color: "#1377C0",
                        fontWeight: "500",
                        lineHeight: "26px",
                        fontFamily: "Outfit",
                      }}
                      mb={2}
                    >
                      {item.name}
                    </Typography>
                    <Typography
                      style={{
                        fontSize: "20px",
                        color: "#1E1E1E",
                        fontWeight: "400",
                        lineHeight: "25.2px",
                        fontFamily: "Outfit",
                      }}
                    >
                      Foundation
                    </Typography>
                    <Grid container spacing={1} width="80%" mt={1} mb={2}>
                      <Grid item xs={6}>
                        <div
                          style={{
                            background: "#fff",
                            border: "1px solid #1377C066",
                            borderRadius: "30px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            padding: "6px",
                          }}
                        >
                          <p
                            style={{
                              marginBottom: "0px",
                              color: "#494949",
                              fontFamily: "Outfit",
                            }}
                          >
                            Class 6
                          </p>
                        </div>
                      </Grid>
                      <Grid item xs={6}>
                        <div
                          style={{
                            background: "#fff",
                            border: "1px solid #1377C066",
                            borderRadius: "30px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            padding: "6px",
                          }}
                        >
                          <p
                            style={{
                              marginBottom: "0px",
                              color: "#494949",
                              fontFamily: "Outfit",
                            }}
                          >
                            Class 7
                          </p>
                        </div>
                      </Grid>
                      <Grid item xs={6}>
                        <div
                          style={{
                            background: "#fff",
                            border: "1px solid #1377C066",
                            borderRadius: "30px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            padding: "6px",
                          }}
                        >
                          <p
                            style={{
                              marginBottom: "0px",
                              color: "#494949",
                              fontFamily: "Outfit",
                            }}
                          >
                            Class 8
                          </p>
                        </div>
                      </Grid>
                      <Grid item xs={6}>
                        <div
                          style={{
                            background: "#fff",
                            border: "1px solid #1377C066",
                            borderRadius: "30px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            padding: "6px",
                          }}
                        >
                          <p
                            style={{
                              marginBottom: "0px",
                              color: "#494949",
                              fontFamily: "Outfit",
                            }}
                          >
                            Class 9
                          </p>
                        </div>
                      </Grid>
                      <Grid item xs={6}>
                        <div
                          style={{
                            background: "#fff",
                            border: "1px solid #1377C066",
                            borderRadius: "30px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            padding: "6px",
                          }}
                        >
                          <p
                            style={{
                              marginBottom: "0px",
                              color: "#494949",
                              fontFamily: "Outfit",
                            }}
                          >
                            Class 10
                          </p>
                        </div>
                      </Grid>
                      <Grid item xs={6}>
                        <div
                          style={{
                            background: "#fff",
                            border: "1px solid #1377C066",
                            borderRadius: "30px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            padding: "6px",
                          }}
                        >
                          <p
                            style={{
                              marginBottom: "0px",
                              color: "#494949",
                              fontFamily: "Outfit",
                            }}
                          >
                            More..
                          </p>
                        </div>
                      </Grid>
                    </Grid>
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
                        justifyContent: "flex-start",
                        margin: isTab ? "0px" : "0px",
                        fontFamily: "Outfit",
                        textWrap: "nowrap",
                        background: "transparent",
                        boxShadow: "none",
                        textTransform: "none",
                        paddingLeft: "0px",
                        marginTop: "auto",
                      }}
                    >
                      Explore More
                      <span style={{ fontSize: "30px" }}>→</span>
                    </Button>

                    <img
                      style={{
                        width: "100px",
                        position: "absolute",
                        bottom: "20px",
                        right: "10px",
                      }}
                      src={`./images/courses_5.png`}
                    />
                  </div>
                </Grid>
              ))}
            </Grid>
          </>
        )}
        {currentTab == 1 && (
          <>
            <Typography
              style={{
                fontSize: isMobile ? "30px" : "40px",
                color: "#1377C0",
                fontWeight: "700",
                lineHeight: isMobile ? "36px" : "50.4px",
                fontFamily: "Outfit",
              }}
              mt={4}
            >
              GAANV WALA Academic Excellence Program (AEP)
            </Typography>
            <Typography
              style={{
                fontSize: isMobile ? "14px" : "20px",
                color: "#0F1B31",
                fontWeight: "300",
                lineHeight: isMobile ? "20px" : "28px",
                fontFamily: "Outfit",
              }}
              mt={1}
            >
              Our Academic Excellence Program (AEP) is designed to collaborate
              with schools to elevate the academic experience for students from
              Class 6 to 12. This School Integrated Program (SIP) takes full
              responsibility for academic planning and management, providing
              schools with relief from academic stress and offering students
              comprehensive preparation for competitive exams like NEET, JEE,
              NDA, CUET, CA, and more. Below are the key services we offer:
            </Typography>
            <Grid mt={4}>
              {services.map((item, index) => (
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={12}
                  lg={12}
                  mx={isTab ? 0 : 0}
                  my={isTab ? 0 : 5}
                  flexWrap={isTab ? "wrap" : "nowrap"}
                >
                  <Card
                    sx={{
                      ...classes.borderBox,
                      padding: isTab ? "16px" : "30px 30px",
                      flexWrap: isMobile ? "wrap" : "nowrap",
                      borderRadius: "10px",
                      flexDirection: isMobile
                        ? "column"
                        : index % 2
                        ? "row-reverse"
                        : "row",
                    }}
                  >
                    <Box
                      sx={{
                        ...classes.box1,
                        width: isTab ? "100%" : "auto",
                        position: "relative",
                      }}
                    >
                      <img
                        src={`./images/services_${index + 1}.png`}
                        style={{
                          width: isMobile ? "100%" : isTab ? "100%" : "429px",
                          height: isTab ? "100%" : "100%",
                          minHeight: isTab ? "250px" : "330px",
                          objectFit: "cover",
                          margin: "0px",
                          borderRadius: "10px",
                          maxWidth: "429px",
                        }}
                      />
                    </Box>
                    <Box
                      sx={{ display: "flex", flexDirection: "column" }}
                      ml={isTab ? 0 : 4}
                    >
                      <CardContent sx={{ fontSize: "25px" }}>
                        <Typography
                          style={{
                            fontSize: isMobile ? "30px" : "40px",
                            color: "#0F1B31",
                            fontWeight: "700",
                            lineHeight: isMobile ? "40px" : "50.4px",
                            fontFamily: "Outfit",
                          }}
                          mb={isMobile ? 1 : 3}
                        >
                          {item.title}
                        </Typography>

                        <p
                          style={{
                            fontSize: isTab ? "14px" : "20px",
                            fontFamily: "Outfit",
                            fontWeight: "300",
                            lineHeight: isTab ? "20px" : "25.2px",
                            textAlign: "justify",
                            color: "#000",
                            marginBottom: isMobile ? "10px" : "20px",
                          }}
                        >
                          {item.subText}
                        </p>
                        <ul
                          style={{
                            fontSize: isTab ? "14px" : "20px",
                            fontFamily: "Outfit",
                            fontWeight: "300",
                            lineHeight: isTab ? "20px" : "25.2px",
                            textAlign: "justify",
                            color: "#000",
                            listStyleType: "none",
                            paddingLeft: "0px",
                          }}
                        >
                          {item.points.map((point) => (
                            <li
                              style={{
                                display: "flex",
                                alignItems: "flex-start",
                                gap: "6px",
                              }}
                            >
                              <p style={{ fontSize: "24px" }}>●</p> {point}
                            </li>
                          ))}
                        </ul>
                        <Button
                          variant="contained"
                          color="primary"
                          style={{
                            width: isTab ? "auto" : "fit-content",
                            height: isTab ? "40px" : "50px",
                            background: "#fff",
                            borderRadius: "8px",
                            color: "#1377C0",
                            fontWeight: "600",
                            // marginTop: '20px',
                            fontSize: isTab ? "12px" : "20px",
                            display: "flex",
                            alignItems: "center",
                            boxShadow: "none",
                            padding: "0px",
                          }}
                        >
                          VIEW MORE
                          <span
                            style={{
                              fontSize: "40px",
                              padding: "0px 0px 6px 6px",
                            }}
                          >
                            →
                          </span>
                        </Button>
                      </CardContent>
                    </Box>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </>
        )}
      </Grid>
    </Box>
  );
}

export default ProductServicesPage;
