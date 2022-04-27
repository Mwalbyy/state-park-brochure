import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Navigation({ currentPage, handlePageChange }) {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        className="fixedPos"
      >
        <Container>
          <Navbar.Brand
          
            onClick={() => handlePageChange("Home")}
            className={
              currentPage === "Home"
                ? "nav-link active navText"
                : "nav-link navText"
            }
          >
            <div>National Park </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                href="#home"
                onClick={() => handlePageChange("Home")}
                className={
                  currentPage === "Home"
                    ? "nav-link active navText"
                    : "nav-link navText"
                }
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="#Posts"
                onClick={() => handlePageChange("Posts")}
                className={
                  currentPage === "Posts"
                    ? "nav-link active navText"
                    : "nav-link navText"
                }
              >
                Posts
              </Nav.Link>
              <Nav.Link
                href="#Weather"
                onClick={() => handlePageChange("Weather")}
                className={
                  currentPage === "Weather"
                    ? "nav-link active navText"
                    : "nav-link navText"
                }
              >
                Weather
              </Nav.Link>
              <Nav.Link
               
                onClick={() => handlePageChange("SinglePost")}
                className={
                  currentPage === "SinglePost"
                    ? "nav-link active navText"
                    : "nav-link navText"
                }
              >
                SinglePost
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link
                href="#Profile"
                onClick={() => handlePageChange("Profile")}
                className={
                  currentPage === "Profile"
                    ? "nav-link active navText"
                    : "nav-link navText"
                }
              >
                <i class="fa-solid fa-user fa-2xl"></i>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
