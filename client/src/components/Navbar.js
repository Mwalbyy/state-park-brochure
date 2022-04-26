import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import { LinkContainer } from "react-router-bootstrap";

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
            className={
              currentPage === "Home"
                ? "nav-link active navText"
                : "nav-link navText"
            }
          >
            <LinkContainer to="/">
            <div>National Park </div>
            </LinkContainer>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <LinkContainer to="/">
                <Nav.Link
                  className={
                    currentPage === "Home"
                      ? "nav-link active navText"
                      : "nav-link navText"
                  }
                >
                  Home
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/posts">
                
                <Nav.Link
                  className={
                    currentPage === "Posts"
                      ? "nav-link active navText"
                      : "nav-link navText"
                  }
                >
                  Posts
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/weather">
              <Nav.Link
                className={
                  currentPage === "Weather"
                    ? "nav-link active navText"
                    : "nav-link navText"
                }
              >
                Weather
              </Nav.Link>
              </LinkContainer>
            </Nav>
            <Nav>
              <LinkContainer to="/profile">
              <Nav.Link
                className={
                  currentPage === "Profile"
                    ? "nav-link active navText"
                    : "nav-link navText"
                }
              >
                <i className="fa-solid fa-user fa-2xl"></i>
              </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
