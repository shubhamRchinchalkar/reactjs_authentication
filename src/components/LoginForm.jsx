import React, { useState } from "react";
import { Form, Button, Row, Col } from 'react-bootstrap'
import { Link } from "react-router-dom";
import axios from 'axios'
import { useDispatch } from "react-redux";
import { setAuthToken } from "../redux/authSlice";
import '../css/login.css'
import login from '../assets/login.png'

const LoginForm = ({ history }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()

    const handleLogin = async () => {
        try {
            const response = await axios.post('https://user-authentication-zma9.onrender.com/api/login', { email, password })
            const token = response.data.token
            console.log(response.data)
            dispatch(setAuthToken(token))
            history.push('/dashboard')
        } catch (error) {
            console.error(error.response.data)
        }
    }

    return (
        <div className="container">
            <Form className="login-container">
                <h3>Login</h3>
                <Form.Group controlId="formEmail">
                    <Form.Label className="label">Email Address</Form.Label><br />
                    <Form.Control className="input" type="email" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} /><br /> <br />
                </Form.Group>

                <Form.Group controlId="formPassword">
                    <Form.Label className="label">Password</Form.Label><br />
                    <Form.Control className="input" type="password" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </Form.Group>

                <Button variant="primary" onClick={handleLogin} className="button">
                    Log In
                </Button>

                <div className="button-navigate">
                    <Col className="mt-3">
                        <Row>
                            <Link to='/forgot-password'>Forgot Password?</Link>
                        </Row>
                        <Row>
                            <Link to='/signup'>Sign Up</Link>
                        </Row>
                    </Col>
                </div>
            </Form>
            <img src={login} alt="login" className="image-login" />
        </div>
    )
}

export default LoginForm