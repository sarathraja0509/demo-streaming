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
        <Nav className="mr-auto">
          {/* <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown> */}
        </Nav>
        <Form inline>
          {/* <Nav.Link href="#link">Link</Nav.Link> */}
          {/* <FormControl type="text" placeholder="Search" className="mr-sm-2" /> */}
          <Button variant="primary" className="mr-sm-2">
            Log In
          </Button>
          <Button variant="dark">Start free trail</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
    //     <div>
    //       <div
    //         style={{
    //           backgroundColor: "#0080FF",
    //           height: "80px",
    //           margin: "2em",
    //           marginBottom: "0em",
    //         }}
    //       >
    //         <div
    //           style={{
    //             marginLeft: "3em",
    //             marginTop: "2em",
    //             backgroundColor: "",
    //             fontSize: "35px",
    //             fontFamily: "sans-serif",
    //             fontVariant: "raleway",
    //             color: "#FFFDEF",
    //             fontWeight: "bold",
    //             padding: "20px",
    //           }}
    //         >
    //           DEMO Streaming
    //           <span
    //             style={{
    //               marginLeft: "40em",
    //               fontSize: "18px",
    //               fontFamily: "sans-serif",
    //               fontVariant: "raleway",
    //               color: "#FFFDEF",
    //               fontWeight: "normal",
    //               backgroundColor: "",
    //             }}
    //           >
    //             Log in
    //           </span>
    //           <span
    //             style={{
    //               backgroundColor: "#414141",
    //               marginLeft: "2em",
    //               fontSize: "20px",
    //               fontWeight: "normal",
    //               padding: "10px",
    //             }}
    //           >
    //             Start your free trials
    //           </span>
    //         </div>
    //       </div>
    //     </div>
    //   );
  );
};

export default Header;
