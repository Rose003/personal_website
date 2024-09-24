import React, { useState, useEffect } from 'react';
import { Container, Form, Button, Navbar, Nav, NavDropdown, Alert, Row, Col, Badge, Spinner } from 'react-bootstrap';
import { FaFileImage, FaTag, FaPhone, FaCalendarAlt, FaEnvelope, FaBell, FaCogs, FaUser, FaSignOutAlt } from 'react-icons/fa';
import axios from 'axios';
import './sell.css';
import Footer from '../home/Footer';

const counties = [
    { name: 'Nairobi', constituencies: ['Kasarani', 'Lang’ata', 'Westlands', 'Embakasi', 'Kamukunji'] },
    { name: 'Mombasa', constituencies: ['Mvita', 'Jomvu', 'Kisauni', 'Changamwe'] },
    { name: 'Kisumu', constituencies: ['Kisumu Central', 'Kisumu East', 'Kisumu West'] },
];

const categories = [
    'Books',
    'Uniforms',
    'Electronics',
    'Furniture',
    'Toys',
    'Stationery',
];

const subcategories = {
    'Books': ['Early Education', 'CBC', 'Middle-School', 'Junior Secondary', 'Senior Secondary', 'Novels', 'Others'],
    'Uniforms': ['Primary', 'Secondary', 'Sports', 'Others'],
    'Stationery': ['Early Education', 'CBC', 'Middle-School', 'Junior Secondary', 'Senior Secondary', 'Tertiary', 'Others'],
};

const novelGenres = ['Spiritual', 'Thriller', 'Horror', 'Romance', 'Adventure', 'Fantasy'];

const Sell = ({ addProduct }) => {
    const [productData, setProductData] = useState({
        name: '',
        category: '',
        subcategory: '',
        novelGenre: '',
        description: '',
        price: '',
        contact: '',
        condition: 'new',
        usageDuration: '',
        image: null,
        county: '',
        constituency: '',
        additionalLocationDetails: ''
    });

    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [constituencies, setConstituencies] = useState([]);

    useEffect(() => {
        if (success) {
            const timer = setTimeout(() => setSuccess(''), 5000);
            return () => clearTimeout(timer);
        }
    }, [success]);

    useEffect(() => {
        if (productData.county) {
            const selectedCounty = counties.find(c => c.name === productData.county);
            if (selectedCounty) {
                setConstituencies(selectedCounty.constituencies);
            }
        } else {
            setConstituencies([]);
        }
    }, [productData.county]);

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setProductData({
            ...productData,
            [name]: name === 'image' ? files[0] : value
        });
    };

    const validateForm = () => {
        const { price, contact } = productData;
        if (price <= 0) {
            setError('Price must be a positive number.');
            return false;
        }
        const phoneRegex = /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/g;
        if (!phoneRegex.test(contact)) {
            setError('Invalid contact format. Please enter a valid phone number.');
            return false;
        }
        setError('');
        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        setIsLoading(true);
        const formData = new FormData();
        Object.keys(productData).forEach(key => {
            formData.append(key, productData[key]);
        });

        try {
            const response = await axios.post('https://elimu-backend.onrender.com/sell', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            setSuccess('Product listed successfully!');
            setError('');

            addProduct({
                name: productData.name,
                category: productData.category,
                subcategory: productData.subcategory,
                novelGenre: productData.novelGenre,
                description: productData.description,
                price: productData.price,
                contact: productData.contact,
                condition: productData.condition,
                usageDuration: productData.usageDuration,
                image: response.data.imageUrl,
                county: productData.county,
                constituency: productData.constituency,
                additionalLocationDetails: productData.additionalLocationDetails
            });

            setProductData({
                name: '',
                category: '',
                subcategory: '',
                novelGenre: '',
                description: '',
                price: '',
                contact: '',
                condition: 'new',
                usageDuration: '',
                image: null,
                county: '',
                constituency: '',
                additionalLocationDetails: ''
            });
        } catch (error) {
            if (error.response) {
                setError('Server error: ' + error.response.data.message);
            } else {
                setError('Error submitting the form. Please try again.');
            }
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
         <Navbar bg="dark" variant="dark" expand="lg" className="mb-4">
                <Navbar.Brand href="#home">Marketplace</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#messages">
                            <FaEnvelope /> Messages <Badge bg="info">3</Badge>
                        </Nav.Link>
                        <Nav.Link href="#notifications">
                            <FaBell /> Notifications <Badge bg="danger">5</Badge>
                        </Nav.Link>
                        <Nav.Link href="#premium-services">Premium Services</Nav.Link>
                        <NavDropdown title={<><FaUser /> Account Info</>} id="basic-nav-dropdown">
                            <NavDropdown.Item href="#profile"><FaUser /> Profile</NavDropdown.Item>
                            <NavDropdown.Item href="#settings"><FaCogs /> Settings</NavDropdown.Item>
                            <NavDropdown.Item href="#logout"><FaSignOutAlt /> Logout</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <Container fluid className='main'>
                <Row>
                    <Col md={8} lg={6} className="mx-auto">
                        <div className="sell-form-container">
                            <h2 className="text-center mb-4">Sell Your Product</h2>
                            {success && <Alert variant="success">{success}</Alert>}
                            {error && <Alert variant="danger">{error}</Alert>}
                            <Form onSubmit={handleSubmit}>
                                {/* Product Name */}
                                <Form.Group controlId="formProductName">
                                    <Form.Label><FaTag /> Product Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="name"
                                        value={productData.name}
                                        onChange={handleChange}
                                        placeholder="Enter product name"
                                        required
                                    />
                                </Form.Group>

                                {/* Product Category */}
                                <Form.Group controlId="formProductCategory">
                                    <Form.Label><FaTag /> Category</Form.Label>
                                    <Form.Control
                                        as="select"
                                        name="category"
                                        value={productData.category}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="">Select Category</option>
                                        {categories.map(category => (
                                            <option key={category} value={category}>
                                                {category}
                                            </option>
                                        ))}
                                    </Form.Control>
                                </Form.Group>

                                {/* Product Subcategory */}
                                {productData.category && (
                                    <Form.Group controlId="formProductSubcategory">
                                        <Form.Label>Subcategory</Form.Label>
                                        <Form.Control
                                            as="select"
                                            name="subcategory"
                                            value={productData.subcategory}
                                            onChange={handleChange}
                                            required
                                        >
                                            <option value="">Select Subcategory</option>
                                            {subcategories[productData.category]?.map(sub => (
                                                <option key={sub} value={sub}>
                                                    {sub}
                                                </option>
                                            ))}
                                        </Form.Control>
                                    </Form.Group>
                                )}

                                {/* Novel Genre */}
                                {productData.subcategory === 'Novels' && (
                                    <Form.Group controlId="formNovelGenre">
                                        <Form.Label>Novel Genre</Form.Label>
                                        <Form.Control
                                            as="select"
                                            name="novelGenre"
                                            value={productData.novelGenre}
                                            onChange={handleChange}
                                            required
                                        >
                                            <option value="">Select Genre</option>
                                            {novelGenres.map(genre => (
                                                <option key={genre} value={genre}>
                                                    {genre}
                                                </option>
                                            ))}
                                        </Form.Control>
                                    </Form.Group>
                                )}

                                {/* Product Description */}
                                <Form.Group controlId="formProductDescription">
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        name="description"
                                        value={productData.description}
                                        onChange={handleChange}
                                        rows={3}
                                        placeholder="Describe your product"
                                        required
                                    />
                                </Form.Group>

                                {/* Product Price */}
                                <Form.Group controlId="formProductPrice">
                                    <Form.Label>Price (Ksh)</Form.Label>
                                    <Form.Control
                                        type="number"
                                        name="price"
                                        value={productData.price}
                                        onChange={handleChange}
                                        placeholder="Enter price"
                                        required
                                    />
                                </Form.Group>

                                {/* Contact Information */}
                                <Form.Group controlId="formProductContact">
                                    <Form.Label><FaPhone /> Contact Number</Form.Label>
                                    <Form.Control
                                        type="tel"
                                        name="contact"
                                        value={productData.contact}
                                        onChange={handleChange}
                                        placeholder="Enter your contact number"
                                        required
                                    />
                                </Form.Group>

                                {/* Product Condition */}
                                <Form.Group controlId="formProductCondition">
                                    <Form.Label>Condition</Form.Label>
                                    <Form.Control
                                        as="select"
                                        name="condition"
                                        value={productData.condition}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="new">New</option>
                                        <option value="used">Used</option>
                                    </Form.Control>
                                </Form.Group>

                                {/* Usage Duration */}
                                {productData.condition === 'used' && (
                                    <Form.Group controlId="formUsageDuration">
                                        <Form.Label><FaCalendarAlt /> Usage Duration (in months)</Form.Label>
                                        <Form.Control
                                            type="number"
                                            name="usageDuration"
                                            value={productData.usageDuration}
                                            onChange={handleChange}
                                            placeholder="Enter usage duration"
                                        />
                                    </Form.Group>
                                )}

                                {/* Product Image Upload */}
                                <Form.Group controlId="formProductImage">
                                    <Form.Label><FaFileImage /> Product Image</Form.Label>
                                    <Form.Control
                                        type="file"
                                        name="image"
                                        onChange={handleChange}
                                        accept="image/*" // Accept image files only
                                        required
                                    />
                                </Form.Group>

                                {/* County Selection */}
                                <Form.Group controlId="formProductCounty">
                                    <Form.Label>County</Form.Label>
                                    <Form.Control
                                        as="select"
                                        name="county"
                                        value={productData.county}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="">Select County</option>
                                        {counties.map(county => (
                                            <option key={county.name} value={county.name}>
                                                {county.name}
                                            </option>
                                        ))}
                                    </Form.Control>
                                </Form.Group>

                                {/* Constituency Selection */}
                                {constituencies.length > 0 && (
                                    <Form.Group controlId="formProductConstituency">
                                        <Form.Label>Constituency</Form.Label>
                                        <Form.Control
                                            as="select"
                                            name="constituency"
                                            value={productData.constituency}
                                            onChange={handleChange}
                                            required
                                        >
                                            <option value="">Select Constituency</option>
                                            {constituencies.map(constituency => (
                                                <option key={constituency} value={constituency}>
                                                    {constituency}
                                                </option>
                                            ))}
                                        </Form.Control>
                                    </Form.Group>
                                )}

                                {/* Additional Location Details */}
                                <Form.Group controlId="formAdditionalLocationDetails">
                                    <Form.Label>Additional Location Details</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="additionalLocationDetails"
                                        value={productData.additionalLocationDetails}
                                        onChange={handleChange}
                                        placeholder="Any additional location details"
                                    />
                                </Form.Group>

                                {/* Submit Button */}
                                <Button variant="primary" type="submit" disabled={isLoading}>
                                    {isLoading ? <Spinner animation="border" size="sm" /> : 'List Product'}
                                </Button>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    );
};

export default Sell;
