import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import headerNavbarStyles from "./headerNavbar.style";
import { useNavigate } from "react-router-dom";
import { Grid, Typography, Box } from "@mui/material";
import phone from "../../../../public/images/phone.svg";
import msg from "../../../../public/images/msg.svg";
import social from "../../../../public/images/social.svg";
const HeaderNavbar = () => {
  const classes = headerNavbarStyles;
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);
  const [isTab, setIsTab] = useState(false);
  const [notTab, setNotTab] = useState(false);

  useEffect(() => {
    // Function to update screen width
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Change 768 to the desired breakpoint
      setIsTab(window.innerWidth < 1080);
      setNotTab(window.innerWidth < 1200 && window.innerWidth > 1080);
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
      <Box
        sx={{
          background: "#1377C0",
          padding: "8px 40px",
          display: {
            xs: "none", // Hide for extra-small and small screens
            md: "none", // Hide for medium screens
            lg: "flex", // Show for large screens and above
          },
        }}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box
          display="flex"
          gap="10px"
          alignItems="center"
          sx={{
            display: {
              xs: "none", // Hide for extra-small and small screens
              md: "none", // Hide for medium screens
              lg: "flex", // Show for large screens and above
            },
          }}
        >
          <Box display="flex" gap="10px" alignItems="center">
            <img
              src="./images/phone.svg"
              style={{ width: "20px", height: "20px" }}
            />
            <Typography color="white" fontSize="18px">
              +918949059403
            </Typography>
          </Box>
          <hr
            style={{
              border: "none",
              borderLeft: "2px solid white",
              height: "18px",
              margin: "0px 30px",
            }}
          />
          <Box display="flex" gap="10px" alignItems="center">
            <img
              src="./images/msg.svg"
              style={{ width: "20px", height: "20px" }}
            />
            <Typography color="white" fontSize="18px">
              gw.official@gaanvwala.com
            </Typography>
          </Box>
        </Box>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <img src="./images/insta.svg" style={{ height: "20px" }} />
          <img src="./images/twitter.svg" style={{ height: "20px" }} />
          <img src="./images/facebook.svg" style={{ height: "20px" }} />
        </div>
      </Box>
      <Navbar
        expand="lg"
        className="bg-body-tertiary"
        style={{
          background: "#FFFFFF",
          boxShadow: "0px 4px 24px rgba(0, 0, 0, 0.07)",
          padding: "10px 20px",
        }}
      >
        <Container fluid>
          <Navbar.Brand
            href="#"
            style={{ marginLeft: isTab ? "0px" : notTab ? "0px" : "40px" }}
          >
            <img
              style={{
                width: isTab ? "160px" : "257px",
                height: isTab ? "auto" : "43px",
              }}
              src="./images/logo.png"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse
            id="navbarScroll"
            style={{ justifyContent: "flex-end", gap: "50px" }}
          >
            <Nav
              className="my-2 my-lg-0"
              style={{
                marginLeft: "0px",
                fontFamily: "Outfit",
                fontStyle: "normal",
                fontWeight: "700",
                fontSize: isTab ? "15px" : notTab ? "15px" : "18px",
                lineHeight: "25px",
                color: "#000000",
              }}
              navbarScroll
            >
              <Nav.Link
                style={{
                  color: "#000000",
                  fontWeight: "400",
                  fontFamily: "Outfit",
                }}
                href="/"
              >
                Home
              </Nav.Link>
              <NavDropdown
                title="About Us"
                id="navbarScrollingDropdown"
                color="#000"
              >
                <NavDropdown.Item
                  style={{
                    color: "#000000 !important",
                    fontWeight: "400",
                  }}
                >
                  About Us
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() => navigate("/founders")}
                  style={{
                    color: "#000000",
                    fontWeight: "400",
                    fontFamily: "Outfit",
                  }}
                >
                  Founder Message
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item
                  onClick={() => navigate("/mission-vision")}
                  style={{
                    color: "#000000",
                    fontWeight: "400",
                    fontFamily: "Outfit",
                  }}
                >
                  Mission & Vision
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link
                onClick={() => navigate("experts")}
                style={{
                  color: "#000000",
                  fontWeight: "400",
                  fontFamily: "Outfit",
                }}
              >
                Experts
              </Nav.Link>
              <Nav.Link
                onClick={() => navigate("/product-services")}
                style={{
                  color: "#000000",
                  fontWeight: "400",
                  fontFamily: "Outfit",
                }}
              >
                Product & Services
              </Nav.Link>
              <Nav.Link
                onClick={() => navigate("/gallery")}
                style={{
                  color: "#000000",
                  fontWeight: "400",
                  fontFamily: "Outfit",
                }}
              >
                Gallery
              </Nav.Link>
              <Nav.Link
                onClick={() => navigate("/contact")}
                style={{
                  color: "#000000",
                  fontWeight: "400",
                  fontFamily: "Outfit",
                }}
              >
                Contact
              </Nav.Link>
            </Nav>
            <Button
              style={{
                marginRight: notTab ? "0px" : "40px",
                background: "#1377C0",
                padding: "10px 14px",
                fontFamily: "Outfit",
              }}
              onClick={() => navigate("/become-partner")}
            >
              Become a Partner
            </Button>{" "}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
export default HeaderNavbar;
