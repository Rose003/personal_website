import React, { useState } from 'react';
import axios from 'axios';
import './sign.css';
import Footer from '../home/Footer';
import { NavLink, useNavigate } from 'react-router-dom';

const SignUp = () => {
    const [userdata, setData] = useState({
        username: "",
        email: "",
        mobile: "",
        password: "",
        cpassword: "",
    });

    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();

    const adddata = (e) => {
        const { name, value } = e.target;

        setData(() => {
            return {
                ...userdata,
                [name]: value
            };
        });
    };

    const sendData = async (e) => {
        e.preventDefault();
        const { username, email, mobile, password, cpassword } = userdata;

        // Client-side validation (optional but recommended)
        if (password !== cpassword) {
            setErrorMessage("Passwords do not match");
            return;
        }

        if (password.length < 14) {
            setErrorMessage("Password must be at least 14 characters");
            return;
        }

        try {
            const response = await axios.post('https://elimu-backend.onrender.com/api/auth/register', {
                username,
                email,
                mobile,
                password,
                cpassword
            });

            if (response.data.message === "User registered successfully") {
                // Redirect to login page after successful registration
                navigate('/login');
            } else {
                setErrorMessage(response.data.error);
            }
        } catch (error) {
            console.log("Registration Error: ", error);
            setErrorMessage("An error occurred during registration. Please try again.");
        }
    };

    return (
        <>
            <section>
                <div className="sign_container mt-5">
                    <div className="sign_form">
                        <form method="POST" onSubmit={sendData}>
                            <h1>Create an account</h1>

                            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

                            <div className="form_data">
                                <label htmlFor="username"><b>Name:</b></label>
                                <input
                                    type="text"
                                    name="username"
                                    onChange={adddata}
                                    value={userdata.username}  // Correct value binding
                                    id="username"
                                    placeholder="Enter Full names as shown In ID"
                                    required
                                />
                            </div>
                            <div className="form_data">
                                <label htmlFor="email"><b>Email:</b></label>
                                <input
                                    type="email"
                                    name="email"
                                    onChange={adddata}
                                    value={userdata.email}
                                    id="email"
                                    placeholder="Enter valid email address"
                                    required
                                />
                            </div>
                            <div className="form_data">
                                <label htmlFor="mobile"><b>Mobile Number:</b></label>
                                <input
                                    type="number"
                                    name="mobile"
                                    onChange={adddata}
                                    value={userdata.mobile}
                                    id="mobile"
                                    placeholder="Enter mobile number"
                                    required
                                />
                            </div>
                            <div className="form_data">
                                <label htmlFor="password"><b>Password:</b></label>
                                <input
                                    type="password"
                                    name="password"
                                    onChange={adddata}
                                    value={userdata.password}
                                    id="password"
                                    placeholder="At least 14 characters"
                                    required
                                />
                            </div>
                            <div className="form_data">
                                <label htmlFor="passwordg"><b>Password Again:</b></label>
                                <input
                                    type="password"
                                    name="cpassword"
                                    onChange={adddata}
                                    value={userdata.cpassword}
                                    id="passwordg"
                                    placeholder="Re-enter password"
                                    required
                                />
                            </div>
                            <button type="submit" className="signin_btn">Continue</button>

                            <div className="signin_info">
                                <p>Already have an account?</p>
                                <NavLink to="/login">Sign in</NavLink>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default SignUp;
