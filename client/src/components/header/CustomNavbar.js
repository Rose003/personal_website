import React, { useEffect, useState } from 'react';
import { Navbar, Nav, Form, FormControl, Button, Badge, Dropdown, DropdownButton } from 'react-bootstrap';
import { Search as SearchIcon, ShoppingCart as ShoppingCartIcon } from '@mui/icons-material';
import Avatar from '@mui/material/Avatar';
import './navbar.css'; // Optional custom styles
import { NavLink, useNavigate } from 'react-router-dom';

const CustomNavbar = () => {
  const navigate = useNavigate();

  const handleDropdownSelect = (intent) => {
    navigate('/login', { state: { userIntent: intent } }); // Pass user intent
  };

  const [navbarOpacity, setNavbarOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newOpacity = Math.max(0.7, 1 - scrollY / 300);
      setNavbarOpacity(newOpacity);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Navbar
      className='main-navbar'
      style={{ opacity: navbarOpacity, transition: 'opacity 0.4s', backgroundColor: '#131921' }}
      expand="lg"
      sticky="top"
    >
      <Navbar.Brand as={NavLink} to="/">
        <img src="./elimulogo.png" alt="Elimu" className="logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Form className="search d-flex me-auto">
          <FormControl
            type="search"
            placeholder="Search for items"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-light" className="search-btn">
            <SearchIcon />
          </Button>
        </Form>

        <Nav className="ml-auto">
          {/* Dropdown for Sell | Buy */}
          <DropdownButton id="dropdown-menu" title="Sell | Buy" variant="outline-light" className="me-3">
            <Dropdown.Item onClick={() => handleDropdownSelect('sell')}>Sell</Dropdown.Item>
            <Dropdown.Item onClick={() => handleDropdownSelect('buy')}>Buy</Dropdown.Item>
          </DropdownButton>

          <Nav.Link as={NavLink} to="/FAQs" className="nav-link">FAQs</Nav.Link>
          <Nav.Link className="cart-section">
            <Badge pill variant="secondary">4</Badge>
            <ShoppingCartIcon />
          </Nav.Link>
          <Avatar className="nav-avatar" />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;
