import React from 'react';
import './home.css'; // Ensure you have this CSS file
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer>
            <div className="footer-content">
                <Container>
                    <Row>
                        <Col md={4}>
                            <div className="footer-column">
                                <ul className="footer-links">
                                    <li><a href="#privacy-policy"><i className="fas fa-user-shield"></i> Privacy Policy</a></li>
                                    <li><a href="#terms-of-service"><i className="fas fa-gavel"></i> Terms of Service</a></li>
                                    <li><a href="#contact-us"><i className="fas fa-envelope"></i> Contact Us</a></li>
                                </ul>
                            </div>
                        </Col>
                        
                        <Col md={4}>
                            <div className="footer-socials">
                                <p><strong>Connect With Us On Our Socials:</strong></p>
                                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-facebook-f"></i> Facebook
                                </a>
                                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-twitter"></i> Twitter
                                </a>
                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-instagram"></i> Instagram
                                </a>
                            </div>
                        </Col>

                        <Col md={4}>
                            <div className="footer-support">
                                <p><strong>Customer Support:</strong></p>
                                <p>Phone: <a href="tel:+1234567890"><i className="fas fa-phone-alt"></i> +254-740-601-039</a></p>
                                <p>Email: <a href="mailto:support@yourcompany.com"><i className="fas fa-envelope"></i> info@elimu.com</a></p>
                                <p>Hours: <i className="fas fa-clock"></i> Monday - Friday, 9am - 5pm</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <div className="footer-column text-center">
                    <p>&copy; {new Date().getFullYear()} Elimu Bora ndio ngao ya jamii.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
