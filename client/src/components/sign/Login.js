import React, { useState } from 'react';
import axios from 'axios';
import './login.css';
import Footer from '../home/Footer';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';

const Login = () => {
    const [logdata, setData] = useState({
        email: "",
        password: ""
    });
    const [error, setError] = useState("");  // State to handle error messages
    const navigate = useNavigate();
    const location = useLocation();

    // Extract user intent from location state
    const userIntent = location.state?.userIntent || null;

    const adddata = (e) => {
        const { name, value } = e.target;
        setData({
            ...logdata,
            [name]: value
        });
    };

    const handleLogin = async (e) => {
        e.preventDefault(); // Prevent default form submission
        try {
            const response = await axios.post('http://localhost:3001/api/auth/login', {
                email: logdata.email,
                password: logdata.password
            });
            
            if (response.data.message === 'Login successful') {
                if (userIntent === 'sell') {
                    navigate('/sell'); // Redirect to sell page
                } else {
                    navigate('/marketplace'); // Redirect to marketplace
                }
            } else {
                setError(response.data.error);
            }
        } catch (error) {
            setError("An error occurred during login. Please try again.");
            console.error("Login Error:", error.response ? error.response.data : error.message);
        }
    };

    return (
        <>
            <div className='sign_container'>
                <div className='sign_header'>
                    <img src="./elimulogo.png" alt="elimu logo" />
                </div>

                <div className='login_form'>
                    <h1>Log-In</h1>
                    {error && <div className="error-message">{error}</div>}
                    <div className='form_data'>
                        <label htmlFor="email"><b>Email</b>:</label><br />
                        <input type="text"
                            onChange={adddata}
                            value={logdata.email}
                            name="email" id="email" /><br /><br />

                        <label htmlFor="password"><b>Password:</b></label><br />
                        <input type="password"
                            onChange={adddata}
                            value={logdata.password}
                            name="password" id="password" /><br /><br />

                        <button className='log-button' type="button" onClick={handleLogin}>Log In</button>
                    </div>
                </div>

                <div className='new-user'>
                    <h4>New User?</h4>
                    <NavLink to='/register'><button className='register' type='Submit'>Register to Create an Account</button></NavLink>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Login;
