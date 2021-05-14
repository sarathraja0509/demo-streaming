import React from "react";
import {
  Button,
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
const Header = () => {
  return (
    <Navbar bg="primary" expand="lg">
      <Navbar.Brand
        href="#home"
        style={{ "font-size": "1.5em", "font-weight": "500" }}
      >
        <div style={{ color: "white", paddingLeft: "1em" }}>Demo Streaming</div>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto"></Nav>
        <Form inline>
          <Button variant="primary" className="mr-sm-2">
            Log In
          </Button>
          <Button variant="dark">Start free trail</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
