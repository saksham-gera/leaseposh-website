import "./LoginComponent.css";
import axios from 'axios';
import React, { useState } from 'react';

export default function LoginComponent({ func }) {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleLogin = async (e) => {
        try {
            e.preventDefault();
            const response = await axios.post('https://leaseposh-server.vercel.app/login', formData);

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
            <h1 >Hey! Welcome Back</h1>
            <form onSubmit={handleLogin} className="needs-validation">
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
                <input type="password" name="password" className="form-control" placeholder="Password" value={formData.password}
                    onChange={handleChange} required></input>
                <button type="submit" className="btn btn-primary">
                    Login
                </button>
            </form>
            <div className="switch" onClick={() => { func(false) }}>
                Didn't Registered Yet? Signup Now
            </div>
        </div>
    );
}