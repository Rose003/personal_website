import React from 'react';
import { Container, Row, Col, Carousel, Button } from 'react-bootstrap';
import './donations.css';
import Footer from '../home/Footer';

const DonationsPage = () => {
    return (
        <> <Container fluid className="donations-page">
            {/* Carousel with Text Overlay and Animation */}
            <Carousel className="donations-carousel">
                <Carousel.Item>
                    <div className="carousel-slide" style={{ backgroundImage: `url(https://images.pexels.com/photos/4587189/pexels-photo-4587189.jpeg?auto=compress&cs=tinysrgb&w=600)` ,height: '500px'}}>
                        <div className="carousel-content animated fadeInLeft">
                            <h2>Donate School Stationery</h2>
                            <p>Help us equip students with essential stationery like pens, pencils, and notebooks for their daily learning.</p>
                            <Button variant="primary" className="carousel-btn">Donate Now</Button>
                        </div>
                    </div>
                </Carousel.Item>

                <Carousel.Item>
                    <div className="carousel-slide" style={{ backgroundImage: `url(https://media.istockphoto.com/id/1485850685/photo/student-african-american-man-reading-research-textbook-in-university-library-sitting-on-floor.jpg?s=612x612&w=0&k=20&c=TEDDYZQR1eWIR21_lDxxPXUCi4gmiKNDuclQma2gySE=)`, height:'500px' }}>
                        <div className="carousel-content animated fadeInLeft">
                            <h2>Donate Books</h2>
                            <p>Your donation of textbooks and storybooks will nurture the love of reading and improve academic performance for children in need.</p>
                            <Button variant="primary" className="carousel-btn">Donate Now</Button>
                        </div>
                    </div>
                </Carousel.Item>

                <Carousel.Item>
                    <div className="carousel-slide" style={{ backgroundImage: `url(https://media.istockphoto.com/id/1226553599/photo/school-children-in-a-school-near-masai-mara-game-reserve-in-kenya.jpg?s=612x612&w=0&k=20&c=aXmP1wZ-naWLtMMyeuIaPI_G3vctZl1-yeSJV9r7crU=)`,height: '500px' }}>
                        <div className="carousel-content animated fadeInLeft">
                            <h2>Donate Uniforms</h2>
                            <p>Donating new or gently used uniforms ensures every student feels confident and ready for school, regardless of their background.</p>
                            <Button variant="primary" className="carousel-btn">Donate Now</Button>
                        </div>
                    </div>
                </Carousel.Item>
            </Carousel>
            {/* Why Donate Section */}
            <section className="why-donate">
                <Row className="text-center">
                    <Col lg={4} className="">
                        <img src="https://images.pexels.com/photos/5088021/pexels-photo-5088021.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Stationery" className="img-fluid donation-img" />
                        <h3><strong>School Stationery</strong></h3>
                        <p>Basic stationery items like pens, pencils, notebooks, and more are vital for students’ learning. Help us equip classrooms and students with the right tools for success.</p>
                    </Col>
                    <Col lg={4} className="">
                        <img src="https://images.pexels.com/photos/28541819/pexels-photo-28541819/free-photo-of-bookshelf-with-various-historical-and-political-books.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Books" className="img-fluid donation-img" />
                        <h3><strong>Books</strong></h3>
                        <p>Your book donations will support students by providing textbooks, storybooks, and reference materials. Every book makes a difference in nurturing a student’s love for learning.</p>
                    </Col>
                    <Col lg={4} className="">
                        <img src="https://images.pexels.com/photos/1096783/pexels-photo-1096783.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Uniforms" className="img-fluid donation-img" />
                        <h3><strong>Uniforms</strong></h3>
                        <p>Many students lack the necessary uniforms for school. A donation of new or gently used uniforms will ensure no student is left out due to inadequate attire.</p>
                    </Col>
                </Row>
                <Row className="how-to-donate">
                    <Col lg={6} className="my-3">
                        <img
                            src="https://media.istockphoto.com/id/1126894539/photo/african-children-during-math-class-kenya-east-africa.jpg?s=2048x2048&w=is&k=20&c=2iGVHAHv00JyeaDCAe1g-MKwI8TG3yPxQQu3rHiMPpk="
                            alt="Donate"
                            height="400px"
                            width="100%"
                            className=" rounded shadow-sm" />
                    </Col>
                    <Col lg={6} className="my-3">
                        <h2><strong>Why We Need Your Help</strong></h2>
                        <p>
                            The education system faces challenges that prevent equal access to resources. Many students lack access to the books, technology, and tools necessary for a comprehensive education. Our platform helps connect parents, students, and educators by offering affordable books and learning resources. However, to continue and expand this mission, we rely on donations.
                        </p>
                        <ul>
                            <li>Provide affordable and accessible educational materials to students of all ages.</li>
                            <li>Bridge the gap in digital literacy in underserved areas.</li>
                            <li>Create and sustain a tech-education platform for low-income communities.</li>
                            <li>Offer coding workshops, online resources, and career mentorship to young learners.</li>
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <Col lg={6}>
                        <h2><strong>How You Can Donate</strong></h2>
                        <p>We accept new and gently used school supplies, books, and uniforms. Here are a few ways to contribute:</p>
                        <ul>
                            <li>Donate in-kind at our collection points</li>
                            <li>Purchase supplies and drop them off at designated schools</li>
                            <li>Monetary donations to help purchase bulk supplies</li>
                        </ul>
                        <Button variant="primary" className="donate-btn text-center">Donate Now</Button>
                    </Col>
                    <Col lg={6}>
                        <img
                            src="https://images.pexels.com/photos/8948347/pexels-photo-8948347.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="Donate Supplies"
                            className="img-fluid rounded shadow-sm" />
                    </Col>
                </Row>
            </section>

            {/* Impact Section */}
            <section className="impact text-center mb-4">
                <h2><strong>Your Impact</strong></h2>
                <p>Your contributions directly impact the lives of students. Here are some success stories:</p>
                <Row>
                    <Col md={6}>
                        <div className="impact-story">
                            <img src="https://media.istockphoto.com/id/600688416/photo/african-little-girl-is-learning-english-language-orphanage-in-kenya.jpg?s=612x612&w=0&k=20&c=Ar10vMTxtLoxXQGYMnYFwFnVTiatNCmN6lpgI0mQVYI=" alt="Impact Story 1" className="img-fluid" />
                            <p>“Thanks to the donations, I have all the notebooks I need for my school year. I can focus on my studies without worrying about missing supplies.” - Jane, Student</p>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="impact-story">
                            <img src="https://media.istockphoto.com/id/599710812/photo/african-young-girl-is-learning-english-language-kenya.jpg?s=612x612&w=0&k=20&c=DAbowQ_2zqomZKGBQTu892kHrwQB3lI-ND5-MGjiTeI=" alt="Impact Story 2" className="img-fluid" />
                            <p>“I was able to pass my exams because of the donated textbooks. They helped me revise for my final exams, and now I’m going to high school!” - Peter, Student</p>
                        </div>
                    </Col>
                </Row>
            </section>
        </Container>
            <footer className="donations-footer">
                <p className='text-center'>For any inquiries about donations, please contact us at <a href="mailto:info@elimu.com">info@elimu.com</a>.</p>
                <Footer />
            </footer></>
    );
};

export default DonationsPage;
