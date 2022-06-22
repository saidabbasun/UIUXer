import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../../Stayls/Home/Header.scss'
import Logo from '../../assets/images/logo.png'
function Header() {
  return (
    <Navbar fixed='top' className='Wrap'  collapseOnSelect expand="lg" bg="white" variant="white">
      <Container fluid >
        <Navbar.Brand href="#home">
            <img src={Logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          
          </Nav>
          <Nav>
            <Nav.Link  className='navLink' href="#home">Home</Nav.Link>
            <Nav.Link  className='navLink' eventKey={2} href="#about">
            About Me
            </Nav.Link>
            <Nav.Link  className='navLink' eventKey={3} href="#pages">
            Pages
            </Nav.Link>
            <Nav.Link  className='navLink' eventKey={4} href="#contact">
            Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;