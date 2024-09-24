import axios from 'axios';
import { Container, Row, Col, Card, Form, Button, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';
import './marketplace.css';
import Footer from '../home/Footer';
import { UserLocationContext } from '../../context/UserLocation';
import React, { useState, useEffect, useContext } from 'react';  // Add useContext here


const MarketPlace = () => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [error, setError] = useState('');
    const [priceRange, setPriceRange] = useState({ min: 0, max: 50000 });
    const [category, setCategory] = useState('');
    const [subcategory, setSubcategory] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const [manualPriceRange, setManualPriceRange] = useState({ min: 0, max: 50000 });


    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:3001/sell');
                setProducts(response.data.products);
                setFilteredProducts(response.data.products);
            } catch (error) {
                setError('Failed to load products. Please try again later.');
            }
        };

        fetchProducts();
    }, []);

    const applyFilters = () => {
        const filtered = products.filter(product => {
            const matchesCategory = category === '' || product.category === category;
            const matchesSubcategory = subcategory === '' || product.subcategory === subcategory; // Add subcategory filter
            const matchesPrice = product.price >= priceRange.min && product.price <= priceRange.max;
            const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                product.description.toLowerCase().includes(searchTerm.toLowerCase());
            return matchesCategory && matchesSubcategory && matchesPrice && matchesSearch; // Include subcategory in filtering
        });
        setFilteredProducts(filtered);
    };

    const resetFilters = () => {
        setCategory('');
        setSubcategory('');
        setSearchTerm('');
        setPriceRange({ min: 0, max: 50000 });
        setManualPriceRange({ min: 0, max: 50000 });
        setFilteredProducts(products); // Reset to show all products
    };


    const groupByCategory = (products) => {
        return products.reduce((grouped, product) => {
            const category = product.category || 'Other';
            if (!grouped[category]) {
                grouped[category] = [];
            }
            grouped[category].push(product);
            return grouped;
        }, {});
    };

    const handleManualPriceChange = (e) => {
        const { name, value } = e.target;
        setManualPriceRange({ ...manualPriceRange, [name]: Number(value) });
        setPriceRange({ ...priceRange, [name]: Number(value) });
    };

    const applyManualPriceRange = () => {
        setPriceRange(manualPriceRange);
    };

    const groupedProducts = groupByCategory(filteredProducts);

    const getUniqueCategories = () => {
        const categories = products.map(product => product.category || 'Other');
        return [...new Set(categories)];
    };

    const getSubcategories = (category) => {
        const subcategories = products
            .filter(product => product.category === category)
            .map(product => product.subcategory);
        return [...new Set(subcategories)];
    };


    return (
        <>
            <Container fluid className='marketplace'>
                {/* Full-width Carousel with higher resolution images and better styling */}
                <Carousel className="mb-4" style={{ width: '100%' }} interval={3000} controls={false} indicators={true} pause={false}>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://images.pexels.com/photos/2831794/pexels-photo-2831794.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920"
                            alt="First slide"
                            style={{ height: '600px', objectFit: 'cover' }} // Ensuring the image covers the carousel area
                        />
                        <Carousel.Caption>
                            <h3>Discover the Best Deals!</h3>
                            <p>Get the latest second-hand products at unbeatable prices.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://images.unsplash.com/photo-1607473129014-0afb7ed09c3a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Ym9va3N8ZW58MHx8MHx8fDA%3D"
                            alt="Second slide"
                            style={{ height: '600px', objectFit: 'cover' }} // Ensuring the image covers the carousel area
                        />
                        <Carousel.Caption>
                            <h3>Wide Range of Products</h3>
                            <p>From textbooks to storybooks, find everything you need.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://plus.unsplash.com/premium_photo-1661963944318-4058b4b9bbc6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fEJvb2tzJTIwa2VueWF8ZW58MHx8MHx8fDA%3D"
                            alt="Third slide"
                            style={{ height: '600px', objectFit: 'cover' }} // Ensuring the image covers the carousel area
                        />
                        <Carousel.Caption>
                            <h3>Post and Sell Quickly</h3>
                            <p>Have unused books or school items? List them for free!</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>

                {/* <h1 className="text-center mb-4">Marketplace</h1> */}

                {/* Filters Section */}
                <Row >
                    {/* Filters Section */}
                    <Col md={3} className='filters p-4'>
                        <div className='f-h4'>
                            <h4>Filters</h4>
                        </div>

                        {/* Search */}
                        <Form.Group controlId="searchTerm">
                            <Form.Label>Search</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Search products..."
                                value={searchTerm}
                                onChange={e => setSearchTerm(e.target.value)} />
                        </Form.Group>

                        {/* Category Filter */}
                        <Form.Group controlId="categoryFilter">
                            <Form.Label>Category</Form.Label>
                            <Form.Control
                                as="select"
                                value={category}
                                onChange={e => {
                                    setCategory(e.target.value);
                                    setSubcategory(''); // Reset subcategory on category change
                                }}
                            >
                                <option value="">All Categories</option>
                                {getUniqueCategories().map(cat => (
                                    <option key={cat} value={cat}>{cat}</option>
                                ))}
                            </Form.Control>
                        </Form.Group>

                        {/* Subcategory Filter */}
                        <Form.Group controlId="subcategoryFilter">
                            <Form.Label>Subcategory</Form.Label>
                            <Form.Control
                                as="select"
                                value={subcategory}
                                onChange={e => setSubcategory(e.target.value)}
                                disabled={!category} // Disable if no category is selected
                            >
                                <option value="">All Subcategories</option>
                                {getSubcategories(category).map(subcat => (
                                    <option key={subcat} value={subcat}>{subcat}</option>
                                ))}
                            </Form.Control>
                        </Form.Group>

                        {/* Price Filter */}
                        <Form.Group controlId="priceRangeSlider">
                            <Form.Label>Price Range</Form.Label>
                            <InputRange
                                maxValue={50000}
                                minValue={0}
                                value={priceRange}
                                onChange={value => setPriceRange(value)} />
                        </Form.Group>

                        {/* Manual Price Range Inputs */}
                        <Form.Group controlId="manualPriceRange">
                            <Form.Label>Set Price Range Manually</Form.Label>
                            <div className="d-flex justify-content-between">
                                <Form.Control
                                    type="number"
                                    name="min"
                                    placeholder="Min"
                                    value={manualPriceRange.min}
                                    onChange={handleManualPriceChange}
                                    className="mr-2" />
                                <Form.Control
                                    type="number"
                                    name="max"
                                    placeholder="Max"
                                    value={manualPriceRange.max}
                                    onChange={handleManualPriceChange}
                                    className="ml-2" />
                            </div>
                            <Button variant="secondary" onClick={applyManualPriceRange} className="mt-2">
                                Apply Price Range
                            </Button>
                        </Form.Group>
                        <Row>
                            <Col md={6}>
                                {/* Apply Filters Button */}
                                <Button variant="outline-primary" onClick={applyFilters} className="mt-3">
                                    Apply Filters
                                </Button></Col>
                            <Col md={6}>

                                {/* Reset Filters Button */}
                                <Button variant="outline-primary" onClick={resetFilters} className="mt-3">
                                    Reset Filters</Button>
                            </Col>

                        </Row>

                    </Col>

                    {/* Products Listing */}
                    <Col md={9}>
                        {error && <h2 className="text-center text-danger">{error}</h2>}
                        {Object.keys(groupedProducts).length > 0 ? (
                            Object.keys(groupedProducts).map((categoryKey) => (
                                <div key={categoryKey}>
                                    <h2 className="category-heading">{categoryKey}</h2>
                                    <Row>
                                        {groupedProducts[categoryKey].map((product) => (
                                            <Col key={product._id} md={3} className="mb-4">
                                                <Link to={`/product/${product._id}`}>
                                                    <Card className="product-card">
                                                        {product.image && <Card.Img variant="top" src={`http://localhost:3001/${product.image}`} crossorigin="anonymous" />}
                                                        <Card.Body className='text-center fw-bold fs-5'>
                                                            <Card.Title className='card-title'>{product.name}</Card.Title>
                                                            <Card.Text className='card-text'>Price: {product.price}</Card.Text>

                                                        </Card.Body>
                                                    </Card>
                                                </Link>
                                            </Col>
                                        ))}
                                    </Row>
                                </div>
                            ))
                        ) : (
                            <h2 className="text-center">No products available</h2>
                        )}
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    );
};

export default MarketPlace;
