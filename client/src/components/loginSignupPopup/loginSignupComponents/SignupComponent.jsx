import "./SignupComponent.css";
import axios from 'axios';

import React, { useState } from 'react';

export default function SignupComponent({ func }) {

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSignup = async (e) => {
        try {
            e.preventDefault();
            const response = await axios.post('http://localhost:4000/signup', formData);

            if (response.status == 200) {
                const { token } = response.data;
                localStorage.setItem('token', token);
            }
            window.location.reload();

        } catch (error) {
            console.error('login failed', error.response);
        }
    };

    return (
        <div>
            <h1>Hey! Welcome</h1>
            <form onSubmit={handleSignup} className="needs-validation">
                <input
                    type="text"
                    id="username"
                    name="username"
                    className="form-control"
                    placeholder="Username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                />
                <input type="email" name="email" className="form-control" placeholder="Email Address" value={formData.email}
                    onChange={handleChange} required></input>
                <input type="password" name="password" className="form-control" placeholder="Password" value={formData.password}
                    onChange={handleChange} required></input>
                <button type="submit" className="btn btn-primary">
                    Sign Up
                </button>
            </form>
            <div className="switch" onClick={() => func(true)}>
                Already A User? Login Now
            </div>
        </div>
    );
}