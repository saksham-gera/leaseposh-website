import "./SignupComponent.css";
import axios from 'axios';

import React, { useState } from 'react';
import { toast } from 'react-toastify';

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
        e.preventDefault();
        try {
            const response = await axios.post('https://leaseposh-server.vercel.app/signup', formData);

            if (response.status == 200) {
                const { token } = response.data;
                if (!token) {
                    toast.error("There Is An Error Signing Up, Please Check Your Credentials Carefully");
                    setFormData({ ...formData, password: "" });
                } else {
                    localStorage.setItem('token', token);
                    toast.success("You've Been Signed Up To Leaseposh");
                    window.location.reload();
                }
            } else {
                toast.error("There Is An Error Signing Up, Please Check Your Credentials Carefully");
            }

        } catch (error) {
            console.error('Sign Up failed', error.response);
            toast.error("There Is An Error Signing Up, Please Check Your Credentials Carefully");
        }
    };

    return (
        <div className="flex flex-col justify-center items-center w-full">
            <div className="font-bold text-[2rem] text-white">Hey! Welcome</div>
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