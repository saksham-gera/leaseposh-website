import "./LoginComponent.css";
import axios from 'axios';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
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
                window.location.reload();
                toast.success("You've Been Logged In");
            } else {
                toast.error("There Is An Error Logging In, Please Check Your Credentials Carefully");
            }

        } catch (error) {
            console.error('login failed', error.response);
            toast.error("There Is An Error Logging In, Please Check Your Credentials Carefully");
        }
    };

    return (
        <div className="flex flex-col justify-center items-center w-full">
            <div className="font-bold text-[2rem] text-white">Hey! Welcome Back</div>
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