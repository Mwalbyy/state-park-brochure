import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import { LinkContainer } from "react-router-bootstrap";
import Auth from "../utils/auth";

export default function Navigation({ currentPage, handlePageChange }) {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
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
              <LinkContainer to="/singlepost">
                <Nav.Link
                  className={
                    currentPage === "SinglePost"
                      ? "nav-link active navText"
                      : "nav-link navText"
                  }
                >
                  SinglePost
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
              {Auth.loggedIn() ? (
                <>
                  <LoggedIn currentPage={currentPage} />
                  <LinkContainer to="/">
                    <button
                      className="btn btn-lg btn-light m-2"
                      onClick={logout}
                    >
                      Logout
                    </button>
                  </LinkContainer>
                </>
              ) : (
                <>
                  <LoginComp currentPage={currentPage} />
                  <SignUpComp currentPage={currentPage} />
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

// Components for the login in navbar
function LoggedIn({ currentPage }) {
  return (
    <LinkContainer to={`/profile/${Auth.getProfile().data.username}`}>
      <Nav.Link
        className={
          currentPage === "Profile"
            ? "nav-link active navText"
            : "nav-link navText"
        }
      >
        {Auth.getProfile().data.username}'s profile
        <i className="fa-solid fa-user fa-2xl"></i>
      </Nav.Link>
    </LinkContainer>
  );
}

function LoginComp({ currentPage }) {
  return (
    <LinkContainer to="/login">
      <Nav.Link
        className={
          currentPage === "Login"
            ? "nav-link active navText"
            : "nav-link navText"
        }
      >
        Login
      </Nav.Link>
    </LinkContainer>
  );
}

function SignUpComp({ currentPage }) {
  return (
    <LinkContainer to="/signup">
      <Nav.Link
        className={
          currentPage === "Signup"
            ? "nav-link active navText"
            : "nav-link navText"
        }
      >
        Signup
      </Nav.Link>
    </LinkContainer>
  );
}
