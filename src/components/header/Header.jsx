import React from 'react'
import './header.css'
import { Navbar,Container,Nav} from 'react-bootstrap'
import logo from '../../assets/logo.png'

const Header = () => {
  return (
    <>
    <section id='header'>
    <Navbar expand="lg" className="">
      <Container>
        <Navbar.Brand href="#home"><img src={logo} alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#header">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#service">Service</Nav.Link>
            <Nav.Link href="#feature">Features</Nav.Link>
            <Nav.Link href="#protfolio">Portfolio</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <Nav.Link href="#team">Team</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </section>
    </>
  )
}

export default Header








