import React, { useState } from 'react';
import "./login.css"
// import { login } from '../../redux/authSlice';
// import { useDispatch } from "react-redux"
import Navbar from '../Navbar/Navbar';


function Login() {
    // const dispatch = useDispatch()

    const [formdata, setFormdata] = useState({
        email: "",
        password: ""
    })

    const handleChange = (e) => {
        setFormdata({ ...formdata, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formdata)
    };

    return (
        <div>
            <Navbar />
            <div className="login-container">
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Email:</label>
                        <input type="email" name="email" value={formdata.email} onChange={handleChange} placeholder="Email" />
                    </div>
                    <div className="form-group">
                        <label>Password:</label>
                        <input type="password" name="password" value={formdata.password} onChange={handleChange} placeholder="Password" />
                    </div>
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>

    );
}

export default Login;