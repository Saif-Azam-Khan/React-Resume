import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavBar({ showSection }) {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
             
                onClick={() => showSection("about")}
              >
                About
              </Nav.Link>
              <Nav.Link  onClick={() => showSection("skills")}>
                Skills
              </Nav.Link>
              <Nav.Link href="#exp" onClick={() => showSection("exp")}>
                Experience
              </Nav.Link>
              <Nav.Link href="#link" onClick={() => showSection("contactInfo")}>
                Contact Info
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
