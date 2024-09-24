import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import React from 'react';
// import { useNavigate } from 'react-router-dom';
import 'animate.css/animate.min.css'; // Import Animate.css
import Footer from './Footer';
import { Container, Card, Row, Col, Button, Carousel } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import "./home.css";

const Main = () => {
    return (
        <>
            {/* Hero Section */}
            <div className="hero-section text-white text-center">
                <Container>
                    <h1 className="display-4 animate__animated animate__fadeIn text-dark">Welcome to Our Platform</h1>
                    <p className="lead animate__animated animate__fadeIn animate__delay-1s">Discover the Future of Education Thrift Shopping: Your go-to destination for thrift shopping—where parents, university students, and everyone in between finds amazing deals! Connect with us to uncover treasures for schooling and education, catering to all ages. Experience shopping with ease and efficiency, and make sustainable choices that benefit both your wallet and the environment!</p>
                    <NavLink to="/marketplace">
                        <Button variant="light" className="hero-button btn-lg mt-3">Explore Now</Button>
                    </NavLink>
                </Container>
            </div>

            <div className='services mt-5'>
                <Container>
                    <h2 className="text-center mb-4 animate__animated animate__fadeInDown"><strong>Our Services</strong></h2>
                    <Row className='available'>
                        <Col md={3} sm={6} >
                            <Card className="now shadow-lg transition-transform transform hover:scale-105 animate__animated animate__fadeInLeft">
                                <Card.Img variant="top" src="https://images.pexels.com/photos/2067569/pexels-photo-2067569.jpeg?auto=compress&cs=tinysrgb&w=600" alt="MarketPlace" className="card-img-top" />
                                <Card.Body>
                                    <NavLink to="/login">
                                        <Button className="service-button btn-primary w-full">MarketPlace</Button>
                                    </NavLink>
                                    <div className="s-content mt-3">
                                        <Card.Text className='text-white'>
                                            Buy more and spend less on a variety of items available.
                                        </Card.Text>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>

                        {/* School Supplies Card */}
                        <Col md={3} sm={6} className="mb-4">
                            <Card className="now shadow-lg transition-transform transform hover:scale-105 animate__animated animate__fadeInLeft animate__delay-1s">
                                <Card.Img variant="top" src="https://images.pexels.com/photos/3731255/pexels-photo-3731255.jpeg?auto=compress&cs=tinysrgb&w=600" alt="School Supplies" className="card-img-top" />
                                <Card.Body>
                                    <NavLink to="/school-supplies">
                                        <Button className="service-button btn-primary w-full">School Supplies</Button>
                                    </NavLink>
                                    <div className="s-content mt-3">
                                        <Card.Text className='text-white'>
                                            Get all the essential supplies for students in diverse institutions.
                                        </Card.Text>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>

                        {/* School Attire Card */}
                        <Col md={3} sm={6} className="mb-4">
                            <Card className="now shadow-lg transition-transform transform hover:scale-105 animate__animated animate__fadeInLeft animate__delay-2s">
                                <Card.Img variant="top" src="https://images.pexels.com/photos/6617132/pexels-photo-6617132.jpeg?auto=compress&cs=tinysrgb&w=600" className="card-img-top" />
                                <Card.Body>
                                    <NavLink to="/school-attire">
                                        <Button className="service-button btn-primary w-full">School Attire</Button>
                                    </NavLink>
                                    <div className="s-content mt-3">
                                        <Card.Text className='text-white'>
                                            Get quality school attire for all age groups.
                                        </Card.Text>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>

                        {/* Services Card */}
                        <Col md={3} sm={6} className="mb-4">
                            <Card className="now shadow-lg transition-transform transform hover:scale-105 animate__animated animate__fadeInLeft animate__delay-3s">
                                <Card.Img variant="top" src="https://images.pexels.com/photos/935943/pexels-photo-935943.jpeg?auto=compress&cs=tinysrgb&w=600" className="card-img-top" />
                                <Card.Body>
                                    <NavLink to="/services">
                                        <Button className="service-button btn-primary w-full">Donations</Button>
                                    </NavLink>
                                    <div className="s-content mt-3">
                                        <Card.Text className='text-white'>
                                            Learn more about the variety of services we offer.
                                        </Card.Text>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* Mission  */}
            <div className='mission mt-5'>
                <Container fluid>
                    <h2 className="text-center mb-4 animate__animated animate__fadeInDown"><strong>Our Mission</strong></h2>
                    <Row className="aim">
                        <Col md={8} >
                            <Card className="goal shadow-lg transition-transform transform hover:scale-105 animate__animated animate__fadeInUp mb-4">
                                <Card.Body>
                                    <Card.Title><b>Inclusivity</b></Card.Title>
                                    <Card.Text>
                                        At the heart of our platform is a deep commitment to inclusivity. We believe that technology should break down barriers, not create them. Our goal is to create a space that is accessible and beneficial to all members of the community—regardless of age, background, or financial status. Whether you're a parent seeking affordable school supplies, a university student searching for books, or anyone looking for a good deal, this platform is designed to cater to your unique needs.

                                        We are also mindful of making our services user-friendly for everyone. That's why we focus on an intuitive interface, clear navigation, and affordable solutions to ensure that no one is left behind in the digital marketplace. By emphasizing community-driven support, we foster an environment where everyone has the opportunity to buy, sell, and connect in meaningful ways.
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                            <Card className="goal shadow-lg transition-transform transform hover:scale-105 animate__animated animate__fadeInUp animate__delay-1s mb-4">
                                <Card.Body>
                                    <Card.Title><b>Empowerment</b></Card.Title>
                                    <Card.Text>
                                        Our platform is designed with empowerment at its core, offering buyers, sellers, and students the tools and opportunities to succeed. Sellers can easily list products, reach a wider audience, and grow their businesses, fostering entrepreneurship and financial independence. Buyers benefit from choice, convenience, and affordability, finding quality second-hand items and educational materials with ease. For students, we provide access to affordable textbooks, novels, and school supplies, helping them excel academically without financial strain. By equipping everyone with the resources they need, we create a community where economic and academic success is within reach for all.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card className="goal shadow-lg transition-transform transform hover:scale-105 animate__animated animate__fadeInUp animate__delay-2s mb-4">
                                <Card.Body>
                                    <Card.Title><b>Community</b></Card.Title>
                                    <Card.Text>
                                        Our platform is dedicated to building a genuine sense of community, where everyone plays a role in each other's success. It’s not just about transactions—it’s about creating meaningful connections. By fostering interactions between buyers, sellers, and students, we encourage collaboration and mutual growth. Sellers offer more than just products; they share insights, experiences, and mentorship. Buyers gain more than just deals; they become part of a shared journey toward sustainability and responsible consumerism. Students, in turn, find a supportive network that extends beyond academics, embracing the spirit of collective learning and growth. Together, we are creating a space where relationships flourish and everyone is invested in the progress of one another.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <img src="https://images.unsplash.com/photo-1610500796385-3ffc1ae2f046?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D" alt="" width="100%" /><br />
                            <img src="https://images.unsplash.com/photo-1620969910995-4bbe4eaa32c1?q=80&w=1896&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""  width="100%" />
                        </Col>
                    </Row>

                </Container>
            </div>

            {/* Testimonials section  */}
            <Container fluid className=' testimonials mt-5 py-5'>
                <h2 className="text-center mb-4 animate__animated animate__fadeInDown"><strong>Testimonials</strong></h2>
                <div className='bg-light'>
                    <Carousel className='car-item'>
                        <Carousel.Item>
                            <Row className="justify-content-center align-items-center">
                                <Col md={4}>
                                    <img
                                        className="d-block w-100 testimonial-img"
                                        src="https://media.istockphoto.com/id/1562574477/photo/nairobi-father-helping-young-girl-with-homework.jpg?s=2048x2048&w=is&k=20&c=1lOXQdZO079Wik5trVDwiWbElx2rZlDN1bJg5FT6h-k="
                                        alt="First slide"
                                    />
                                </Col>
                                <Col md={8}>
                                    <Card className="c-testimonials border-0">
                                        <Card.Body>
                                            <blockquote className="blockquote">
                                                <p className="mt-2">""This platform has significantly decreased expenses on purchasing new school books each year. Highly recommended! The selection of used and gently loved textbooks is extensive, allowing me to find exactly what I need at a fraction of the cost. The ability to easily search for specific titles and filter by condition and price has transformed my shopping experience."</p>
                                                <footer className="blockquote-footer">Mark Kamu, <cite title="Source Title">Satisfied Customer</cite></footer>
                                            </blockquote>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Carousel.Item>

                        <Carousel.Item>
                            <Row className="justify-content-center align-items-center">
                                <Col md={4}>
                                    <img
                                        className="d-block w-100 testimonial-img"
                                        src="https://images.unsplash.com/photo-1632215861513-130b66fe97f4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YWZyaWNhJTIwc2Nob29sJTIwY2hpbGRyZW58ZW58MHx8MHx8fDA%3D"
                                        alt="Second slide"
                                    />
                                </Col>
                                <Col md={8}>
                                    <Card className="c-testimonials  border-0">
                                        <Card.Body>
                                            <blockquote className="blockquote">
                                                <p className="mt-2">"Through the platform, I've been able to acquire the necessary curriculum books at a cheaper price. I'm now able to study harder! The vast selection of affordable educational materials has made a significant difference in my academic journey. Not only did I find the essential textbooks I needed, but I also discovered supplementary materials that enriched my learning experience. The convenience of browsing through various sellers, comparing prices, and reading reviews helped me make informed decisions without breaking the bank."</p>
                                                <footer className="blockquote-footer">Jane Smith, <cite title="Source Title">Student</cite></footer>
                                            </blockquote>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Carousel.Item>

                        <Carousel.Item>
                            <Row className="justify-content-center align-items-center">
                                <Col md={4}>
                                    <img
                                        className="d-block w-100 testimonial-img"
                                        src="https://images.pexels.com/photos/1139311/pexels-photo-1139311.jpeg?auto=compress&cs=tinysrgb&w=600"
                                        alt="Third slide"
                                    />
                                </Col>
                                <Col md={8}>
                                    <Card className="c-testimonials border-0">
                                        <Card.Body>
                                            <blockquote className="blockquote">
                                                <p className="mt-2">"Easy to use and incredibly helpful. This was my go-to platform for all things university-related. From finding second-hand textbooks to affordable dorm essentials, the platform offered everything I needed in one place. The advanced filtering options made it easy to quickly find what I was looking for, saving me time and money. I also appreciated the seamless communication with sellers and the quick response times."</p>
                                                <footer className="blockquote-footer">Emily Johnson, <cite title="Source Title">Graduate</cite></footer>
                                            </blockquote>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Carousel.Item>

                        <Carousel.Item>
                            <Row className="justify-content-center align-items-center">
                                <Col md={4}>
                                    <img
                                        className="d-block w-100 testimonial-img"
                                        src="https://images.pexels.com/photos/11559681/pexels-photo-11559681.jpeg?auto=compress&cs=tinysrgb&w=600"
                                        alt="Fourth slide"

                                    />
                                </Col>
                                <Col md={8}>
                                    <Card className="c-testimonials border-0">
                                        <Card.Body>
                                            <blockquote className="blockquote">
                                                <p className="mt-2">""The convenience and variety on this platform is unmatched. I was able to purchase diverse books for my son in one place.It’s truly a one-stop shop for parents looking for affordable, quality materials. The efficiency in delivery and the ability to connect with sellers directly also gave me confidence in my purchases. I couldn't be more satisfied.""</p>
                                                <footer className="blockquote-footer">Evans Murithi, <cite title="Source Title">Frequent User</cite></footer>
                                            </blockquote>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Carousel.Item>
                    </Carousel>
                </div>

            </Container>

            {/* Footer Section */}
            <Footer />
        </>
    );
};

export default Main;
