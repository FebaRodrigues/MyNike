// src/components/Header.jsx

import { Navbar, Container, Nav } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="w-100 sticky-top">
      <Container fluid className="w-100 px-4">
        <Navbar.Brand href="#home" className="fs-3">
          <i className="bi bi-shop"></i> ShopEasy
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className="px-3">Home</Nav.Link>
            <Nav.Link href="#products" className="px-3">Products</Nav.Link>
            <Nav.Link href="#about" className="px-3">About</Nav.Link>
            <Nav.Link href="#contact" className="px-3">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;