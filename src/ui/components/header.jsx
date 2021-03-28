import { Navbar, Nav, NavDropdown, Button } from "react-bootstrap";
import logo from '../../assets/images/logo-2.webp'
import React from 'react'

const Header = () => {
    return (
        <div>
            <Navbar bg="white" expand="lg">
            <Navbar.Brand className = "mr-5 pr-5" href="#home"> <img width = "70%" src={logo} alt="" srcset=""/> </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse  id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                {/* <Nav.Link href="#link">Services</Nav.Link> */}
                
                <NavDropdown title="Serices" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#link">About us</Nav.Link>
                <Nav.Link href="#link">Contact us</Nav.Link>
                <Nav.Link href="#link">Terms & Conditions</Nav.Link>
                </Nav>
                
                <Button className  = "mx-2 btn btn-success" >Hire now</Button>
                <Button href = "/login" className  = "mx-2" variant="outline-success">Login</Button>

                
            </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Header
