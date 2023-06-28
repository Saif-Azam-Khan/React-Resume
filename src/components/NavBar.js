import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
function NavBar({ showSection, setShow, show, handleThemeChange }) {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#about" onClick={() => showSection("about")}>
                About
              </Nav.Link>
              <Nav.Link href="#skills" onClick={() => showSection("skills")}>
                Skills
              </Nav.Link>
              <Nav.Link href="#experience" onClick={() => showSection("exp")}>
                Experience
              </Nav.Link>
              <Nav.Link onClick={() => setShow(!show)}>Contact Info</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Form.Check // prettier-ignore
            type="switch"
            id="custom-switch"
            label="Change theme"
            style={{ marginLeft: "auto" }}
            onClick={()=>handleThemeChange()}
          />
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
