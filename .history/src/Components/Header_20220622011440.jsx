import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Logo from '../assets/images/logo.png'
function Header() {
  return (
    <Navbar  collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container fluid >
        <Navbar.Brand href="#home">
            <img src={Logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          
          </Nav>
          <Nav>
            <Nav.Link href="">Home</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
            About Me
            </Nav.Link>
            <Nav.Link eventKey={3} href="#memes">
            Pages
            </Nav.Link>
            <Nav.Link eventKey={4} href="#memes">
            Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;