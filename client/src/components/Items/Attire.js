import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Alert, Form } from 'react-bootstrap';
import Footer from '../home/Footer';
import './attire.css'; // Import the CSS file

// Static data for uniform vendors with location coordinates
const vendors = [
    {
        id: 1,
        name: "School Uniforms Co.",
        location: "Nairobi, Kenyatta Avenue",
        coordinates: { lat: -1.286389, lng: 36.817223 },
        items: ["School Blazers", "Shirts", "Trousers", "Skirts"],
        contact: "info@schooluniformsco.com",
        phone: "+254 701 234 567",
    },
    {
        id: 2,
        name: "Uniform Depot",
        location: "Nairobi, Ngara",
        coordinates: { lat: -1.285205, lng: 36.842331 },
        items: ["School Dresses", "Sweaters", "Shorts"],
        contact: "support@uniformdepot.com",
        phone: "+254 798 765 432",
    },
    {
        id: 3,
        name: "Classic Attire",
        location: "Nairobi, Westlands",
        coordinates: { lat: -1.263374, lng: 36.795008 },
        items: ["Sporting Kits", "Custom Uniforms"],
        contact: "sales@classicattire.com",
        phone: "+254 712 345 678",
    },
    {
        id: 4,
        name: "Local Fundis",
        location: "Kisumu, Kenyatta Road",
        coordinates: { lat: -0.091703, lng: 34.765502 },
        items: ["Tailored School Uniforms"],
        contact: "contact@localfundis.com",
        phone: "+254 700 123 456",
    },
    {
        id: 5,
        name: "Uniforms Plus",
        location: "Mombasa, Moi Avenue",
        coordinates: { lat: -4.043477, lng: 39.668207 },
        items: ["Casual Wear", "School T-Shirts"],
        contact: "info@uniformsplus.com",
        phone: "+254 733 123 456",
    },
    {
        id: 6,
        name: "Elite Uniforms",
        location: "Nairobi, Parklands",
        coordinates: { lat: -1.261376, lng: 36.836710 },
        items: ["Formal School Uniforms"],
        contact: "sales@eliteuniforms.com",
        phone: "+254 724 234 567",
    },
    {
        id: 7,
        name: "Westlands Uniforms",
        location: "Nairobi, Westlands",
        coordinates: { lat: -1.266600, lng: 36.800000 },
        items: ["Custom Designs", "Sport Uniforms"],
        contact: "contact@westlandsuniforms.com",
        phone: "+254 780 123 456",
    },
    {
        id: 8,
        name: "Kisumu School Wear",
        location: "Kisumu, Oginga Odinga Road",
        coordinates: { lat: -0.091693, lng: 34.763970 },
        items: ["School Shoes", "Uniforms"],
        contact: "info@kisumuschoolwear.com",
        phone: "+254 711 987 654",
    },
    {
        id: 9,
        name: "Uniform Hub",
        location: "Nairobi, Eastleigh",
        coordinates: { lat: -1.283056, lng: 36.848889 },
        items: ["Bags", "Accessories", "Uniforms"],
        contact: "support@uniformhub.com",
        phone: "+254 733 987 654",
    },
    {
        id: 10,
        name: "Coastline Uniforms",
        location: "Mombasa, Digo Road",
        coordinates: { lat: -4.043476, lng: 39.658048 },
        items: ["Lightweight Uniforms"],
        contact: "sales@coastlineuniforms.com",
        phone: "+254 777 654 321",
    },
];


const Attire = () => {
    const [userLocation, setUserLocation] = useState(null);
    const [error, setError] = useState(null);
    const [filteredVendors, setFilteredVendors] = useState(vendors);
    const [searchLocation, setSearchLocation] = useState('');

    useEffect(() => {
        // Get user's location
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    setUserLocation({ lat: latitude, lng: longitude });
                    filterVendors(latitude, longitude);
                },
                (err) => {
                    setError('Unable to retrieve your location.');
                }
            );
        } else {
            setError('Geolocation is not supported by this browser.');
        }
    }, []);

    const filterVendors = (lat, lng) => {
        const nearbyVendors = vendors.filter(vendor => {
            const distance = calculateDistance(lat, lng, vendor.coordinates.lat, vendor.coordinates.lng);
            return distance <= 50; // filter vendors within 50 km radius
        });
        setFilteredVendors(nearbyVendors);
    };

    const calculateDistance = (lat1, lng1, lat2, lng2) => {
        const R = 6371; // Radius of the Earth in km
        const dLat = (lat2 - lat1) * (Math.PI / 180);
        const dLng = (lng2 - lng1) * (Math.PI / 180);
        const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                  Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) *
                  Math.sin(dLng / 2) * Math.sin(dLng / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        return R * c; // Distance in km
    };

    const handleSearch = (e) => {
        e.preventDefault();
        // Filter vendors based on search location
        const lowerCaseSearch = searchLocation.toLowerCase();
        const searchedVendors = vendors.filter(vendor => 
            vendor.location.toLowerCase().includes(lowerCaseSearch)
        );
        setFilteredVendors(searchedVendors);
    };

    return (
        <>
            <Container fluid>
                <Row style={{ margin: 0 }}>
                    {/* Left Column */}
                    <Col md={9} style={{ padding: 0 }}>
                        <Row style={{ margin: 0 }}>
                            {/* Top Row with Three Images */}
                            <Col md={4} style={{ padding: 0 }}>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIKznta0Mm7Xh6cxqrcDIlOoFm4oaVDVKaDQ&s" alt="" style={{ width: '100%', height: '300px' }} />
                            </Col>
                            <Col md={4} style={{ padding: 0 }}>
                                <img src="https://media.istockphoto.com/id/1358759605/photo/school-uniform-for-girl-on-white-background.jpg?s=612x612&w=0&k=20&c=Dho30qn7lxVVq5Ufb2WykIUX_h1HtvAYkKiCXIOLuGQ=" alt="" style={{ width: '100%', height: '300px' }} />
                            </Col>
                            <Col md={4} style={{ padding: 0 }}>
                                <img src="https://media.istockphoto.com/id/1357402570/photo/stylish-school-uniform-for-boy-and-backpack-on-white-background-top-view.webp?a=1&b=1&s=612x612&w=0&k=20&c=ukrLmgTJBEUDVOp1xJh3qCMlNS65xZzRsJyJgts48QQ=" alt="" style={{ width: '100%', height: '300px' }} />
                            </Col>
                        </Row>
                        <Row style={{ margin: 0 }}>
                            {/* Bottom Row with Two Images */}
                            <Col md={6} style={{ padding: 0 }}>
                                <img src="https://everyoneschild.net/wp-content/uploads/2023/04/PHOTO-2023-04-02-09-30-37-2-1024x768.jpg" alt="" style={{ width: '100%', height: '300px' }} />
                            </Col>
                            <Col md={6} style={{ padding: 0 }}>
                                <img src="https://media.istockphoto.com/id/1433111675/photo/shirt-jumper-and-pants-hanging-on-beige-wall-school-uniform.jpg?s=612x612&w=0&k=20&c=2a_eFaqWbPQzUFwl1NUqYoLqFYOfKaBIWEy0Mdykjj8=" alt="" style={{ width: '100%', height: '300px' }} />
                            </Col>
                        </Row>
                    </Col>

                    {/* Right Column */}
                    <Col md={3} style={{ padding: 0 }}>
                        <img src="https://wandasfashion.co.ke/wp-content/uploads/2021/03/School-Uniforms-removebg-preview.jpg" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </Col>
                </Row>
            </Container>

            <Container className='uniform'>
                <h1 className="text-center mb-4 mt-5"><strong>Uniform Vendors</strong></h1>
                <p className=" mb-4">
                Discover a selection of trusted vendors providing high-quality school uniforms, ensuring comfort, style, and affordability for students across Kenya. Our platform connects you with reliable vendors offering a wide variety of options, from tailored blazers to everyday wear, with uniforms suited for every level of schooling. Each vendor is carefully chosen for their commitment to quality and customer satisfaction, providing parents and students with convenient access to uniforms across different regions. Whether you're looking for standard pieces or custom options, our vendors are here to help you find the best solutions for your school needs.
                </p>

                {error && <Alert variant="danger" className="text-center">{error}</Alert>}

                {/* Search Form */}
                <Form onSubmit={handleSearch} className="mb-4">
                    <Form.Group controlId="searchLocation">
                        <Form.Label>Search by Location</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Enter location" 
                            value={searchLocation} 
                            onChange={(e) => setSearchLocation(e.target.value)} 
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit">Search</Button>
                </Form>

                <Row>
                    {filteredVendors.length > 0 ? (
                        filteredVendors.map((vendor) => (
                            <Col md={4} key={vendor.id} className="mb-4">
                                <Card className="shadow">
                                    <Card.Body>
                                        <Card.Title>{vendor.name}</Card.Title>
                                        <Card.Text>
                                            <strong>Location:</strong> {vendor.location}<br />
                                            <strong>Items Made:</strong> {vendor.items.join(', ')}<br />
                                            <strong>Contact:</strong> {vendor.contact}<br />
                                            <strong>Phone:</strong> {vendor.phone}
                                        </Card.Text>
                                        <Button variant="primary" href={`mailto:${vendor.contact}`}>Contact Vendor</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))
                    ) : (
                        <Col className="text-center">
                            <p>No vendors found.</p>
                        </Col>
                    )}
                </Row>

                <h2 className="text-center mt-5"><strong>Why Choose Us</strong></h2>
                <p className="mb-4">
                Our platform is committed to bridging the gap between parents and students and the finest uniform vendors available. We recognize that quality school uniforms are essential for fostering both comfort and confidence in students as they navigate their educational journey. That's why we offer a carefully curated selection of reputable vendors known for their exceptional craftsmanship and service. Each vendor is chosen based on their dedication to delivering durable, stylish, and affordable uniforms that meet the diverse needs of students. We aim to provide an intuitive and accessible shopping experience, allowing families to explore a wide range of options tailored to their preferences and budgets. By empowering parents and students with the right tools and information, we aim to create a supportive community where educational success is celebrated.
                </p>
            </Container>
            <Footer />
        </>
    );
};

export default Attire;
