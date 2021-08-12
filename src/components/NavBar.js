import React from "react";
import "./navBar.css";
import "./CartWidget";

import { Nav, Navbar, NavDropdown, Container } from "react-bootstrap";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <div className="navBar">
      <Navbar bg="light" expand="lg">
        <Container>
          {/* <a className="links">listado de categorías clickeables</a> */}
          <Navbar.Brand href="#home">
            <h1>BlueCat.MoviesStore</h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  ArticuloUno
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  ArticuloDos
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  ArticuloTres
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Link Separado
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
          <CartWidget />
        </Container>
      </Navbar>
    </div>
  );
};
export default NavBar;
