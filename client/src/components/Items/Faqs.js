import React from 'react';
import { Accordion, Container, Button, Col, Row } from 'react-bootstrap';
import { FaQuestionCircle, FaLock, FaShippingFast, FaDonate } from 'react-icons/fa';
import 'animate.css'; // Import animate.css for easy animations
import './FAQs.css';  // Assuming custom styles are added here
import Footer from '../home/Footer';

const Faqs = () => {
    // Scroll function to navigate to the div when clicked
    const scrollToDiv = (divId) => {
        const element = document.getElementById(divId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <div className="faq-page">
                {/* Background Section */}
                <div className="faq-header text-center text-white py-5 animate__animated animate__fadeIn">
                    <h1>Frequently Asked Questions</h1>
                    <p>Your queries answered in one place</p>
                </div>

                <Container className="mt-5">
                    <Row>
                        <Col md={6} className="p-3 animate__animated animate__fadeInLeft">
                            <img 
                                src="https://media.istockphoto.com/id/1393262269/vector/organization-search-and-collection-of-information-managers-work-with-organized-archives.jpg?s=612x612&w=0&k=20&c=NqRbL9MICRBRpYPbd2GfFsI5gD6t8GHkt_mH-RV3s8I=" 
                                alt="FAQ Illustration"
                                className="img-fluid rounded shadow"
                            />

                            <div id="faq1-content" className="mt-5">
                                <h3 className="text-primary">How do I list an item for sale?</h3>
                                <p>To list an item for sale on our marketplace, follow these steps:</p>
                                <ol>
                                    <li>Log in to your account.</li>
                                    <li>Click on “Sell” or “List an Item.”</li>
                                    <li>Provide details about the item (title, description, price, condition, etc.).</li>
                                    <li>Upload clear images of the item.</li>
                                    <li>Submit the listing.</li>
                                </ol>
                            </div>
                        </Col>
                        <Col md={6} className="p-3 animate__animated animate__fadeInRight">
                            {/* Accordion Section */}
                            <Accordion className="custom-accordion" defaultActiveKey="0">
                                {/* FAQ 1 */}
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header onClick={() => scrollToDiv('faq1-content')}>
                                        <FaQuestionCircle className="me-2" /> How do I list an item for sale?
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        {/* Empty body since it scrolls to another section */}
                                    </Accordion.Body>
                                </Accordion.Item>

                                {/* FAQ 2 */}
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header onClick={() => scrollToDiv('faq2-content')}>
                                        <FaDonate className="me-2" /> How can I donate books or school supplies?
                                    </Accordion.Header>
                                    <Accordion.Body />
                                </Accordion.Item>

                                {/* FAQ 3 */}
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>
                                        <FaLock className="me-2" /> What payment methods are accepted?
                                    </Accordion.Header>
                                    <Accordion.Body className="animate__animated animate__fadeInUp">
                                        We accept various payment methods, including credit/debit cards, PayPal, and bank transfers. Choose your preferred option during checkout.
                                    </Accordion.Body>
                                </Accordion.Item>

                                {/* FAQ 4 */}
                                <Accordion.Item eventKey="3">
                                    <Accordion.Header>
                                        <FaShippingFast className="me-2" /> How does shipping work?
                                    </Accordion.Header>
                                    <Accordion.Body className="animate__animated animate__fadeInUp">
                                        For purchased items:
                                        <ul>
                                            <li>Sellers choose their preferred shipping method (standard, expedited, etc.).</li>
                                            <li>Buyers pay for shipping during checkout.</li>
                                            <li>Sellers provide tracking information once shipped.</li>
                                        </ul>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>

                            <div id="faq2-content" className="mt-5">
                                <h3 className="text-primary">How can I donate books or school supplies?</h3>
                                <p>We appreciate your generosity! To donate:</p>
                                <ol>
                                    <li>Go to the “Donate” section on our website.</li>
                                    <li>Select the type of items you’d like to donate (books, school supplies, etc.).</li>
                                    <li>Follow the instructions to arrange pickup or drop-off.</li>
                                </ol>
                            </div>
                        </Col>
                    </Row>

                    {/* Call to Action Section */}
                    <div className="text-center mt-3 animate__animated animate__zoomIn">
                        <h3>Need further assistance?</h3>
                        <Button variant="primary" className="mt-2 mb-2" href="/contact">
                            Contact Customer Support
                        </Button>
                    </div>
                </Container>
            </div>

            <Footer />
        </>
    );
};

export default Faqs;
