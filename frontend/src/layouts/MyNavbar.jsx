import React from 'react'
import { Form, FormControl, Nav, Navbar, NavDropdown, Button, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import "../css/main.css";
import { removeUserSession } from "../utils/Common";

function MyNavbar() {
  return (
    <Navbar bg="light" className="my-navbar d-flex justify-content-end border-bottom">
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Navbar.Brand href="#home" className="mx-5">POS-KITA</Navbar.Brand>
            <Nav.Link className="mx-5">
              <Link style={{ textDecoration: "none", color: "rgba(0,0,0,.55)" }} to={'/pos'}>
                POS
              </Link>
            </Nav.Link>
            <NavDropdown title="Menu" id="menu" className="mx-5">
              <NavDropdown.Item href="#">Sales Order</NavDropdown.Item>
              <NavDropdown.Item href="#">Receipt</NavDropdown.Item>
              <NavDropdown.Item href="#">Others.....</NavDropdown.Item>
              {/* <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item> */}
            </NavDropdown>
            <Nav.Link href="#" className="mx-5">About</Nav.Link>
          </Nav>
          <Button style={{ border: "none" }} className="justify-content-end mx-5" variant="outline-danger" onClick={ removeUserSession }>Logout</Button>
        </Navbar.Collapse>
    </Navbar>
  )
}

export default MyNavbar