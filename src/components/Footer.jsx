// src/components/Footer.jsx

import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 w-100">
      <Container fluid className="w-100 px-4">
        <Row className="gy-4">
          <Col xs={12} md={4} className="footer-section">
            <h5 className="mb-3">ShopEasy</h5>
            <p className="mb-0">Your one-stop shop for all your needs. We provide quality products at the best prices.</p>
            <div className="social-links mt-3">
              <a href="#" className="text-light me-3"><i className="bi bi-facebook"></i></a>
              <a href="#" className="text-light me-3"><i className="bi bi-twitter"></i></a>
              <a href="#" className="text-light me-3"><i className="bi bi-instagram"></i></a>
              <a href="#" className="text-light"><i className="bi bi-linkedin"></i></a>
            </div>
          </Col>
          
          <Col xs={12} md={4} className="footer-section">
            <h5 className="mb-3">Quick Links</h5>
            <ul className="list-unstyled footer-links">
              <li className="mb-2">
                <a href="#" className="text-light text-decoration-none">
                  <i className="bi bi-chevron-right"></i> About Us
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-light text-decoration-none">
                  <i className="bi bi-chevron-right"></i> Contact
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-light text-decoration-none">
                  <i className="bi bi-chevron-right"></i> Privacy Policy
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-light text-decoration-none">
                  <i className="bi bi-chevron-right"></i> Terms of Service
                </a>
              </li>
            </ul>
          </Col>
          
          <Col xs={12} md={4} className="footer-section">
            <h5 className="mb-3">Contact Info</h5>
            <ul className="list-unstyled footer-contact">
              <li className="mb-2">
                <i className="bi bi-geo-alt-fill me-2"></i>
                123 Shop Street, City, Country
              </li>
              <li className="mb-2">
                <i className="bi bi-envelope-fill me-2"></i>
                info@shopeasy.com
              </li>
              <li className="mb-2">
                <i className="bi bi-telephone-fill me-2"></i>
                (555) 123-4567
              </li>
              <li className="mb-2">
                <i className="bi bi-clock-fill me-2"></i>
                Mon - Sat: 9:00 AM - 10:00 PM
              </li>
            </ul>
          </Col>
        </Row>
        
        <Row className="mt-4 pt-3 border-top">
          <Col className="text-center">
            <p className="mb-0">&copy; {new Date().getFullYear()} ShopEasy. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;