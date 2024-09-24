import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './productDetails.css';
import Footer from '../home/Footer';
// import { UserLocationContext } from '../../context/UserLocation';
const ProductDetails = () => {
    const { id } = useParams(); // Get the product ID from the URL
    const [product, setProduct] = useState(null);
    const [error, setError] = useState('');

    // Access username and location from context
    // const { username, location } = useContext(UserLocationContext);

    useEffect(() => {
        const fetchProductDetails = async () => {
            try {
                // Fetch product details using product ID
                const response = await axios.get(`http://localhost:3001/products/product/${id}`);
                const fetchedProduct = response.data;
                setProduct(fetchedProduct);
            } catch (error) {
                setError('Failed to load product details. Please try again later.');
            }
        };

        fetchProductDetails();
    }, [id]);

    if (error) {
        return <h2 className="text-center text-danger">{error}</h2>;
    }

    if (!product) {
        return <h2 className="text-center">Loading product details...</h2>;
    }

    return (
        <>
            <Container className="product-details mt-5">
                <Row>
                    <Col md={6}>
                        <Card className='product-image'>
                            <Card.Img variant="top" src={`http://localhost:3001/${product.image}`} crossOrigin="anonymous" />
                        </Card>
                    </Col>
                    <Col md={6}>
                        <h1>{product.name}</h1>
                        <p>{product.description}</p>
                        <h4>Price: {product.price}</h4>
                        <h4>Condition: {product.condition}</h4>
                        <h4>Usage Duration: {product.usageDuration}</h4>
                        <Button variant="primary">Contact Seller</Button>
                    </Col>
                </Row>

                {/* Seller Information */}
                <Row className="mt-4">
                    <Col>
                        <h2>Seller Information</h2>
                        <p><strong>Username:</strong> </p>
                        <p><strong>Location:</strong> </p>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    );
};

export default ProductDetails;
