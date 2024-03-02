import React, { useState } from "react";
import { Form, Button } from 'react-bootstrap'
import axios from 'axios';
import '../css/forgotpassword.css'

const ForgetPasswordForm = ({ history }) => {
    const [email, setEmail] = useState(' ')
    const [isSuccess, setIsSuccess] = useState(false)
    const [error, setError] = useState(null)

    const handleForgetPassword = async () => {
        try {
            const response = await axios.post('https://user-authentication-zma9.onrender.com/api/reset-password', { email })
            setTimeout(() => {
                setIsSuccess(true);
            }, 1000);
            console.log(response.data)
            history.push('/reset-success')
        } catch (error) {
            setTimeout(() => {
                setError('Error: Oops! Something went wrong..');
            }, 1000);
            console.error(error.response.data)
        }
    }

    return (
        <div className="container-forgot">
            <Form className="form-forgot">
                <h3 className="heading-forgot">Forgot Password?</h3>
                <Form.Group controlId="formEmail">
                    <Form.Label className="label">Email</Form.Label>
                    <Form.Control className="input" type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </Form.Group>

                <div>
                    <Button className="button-forgot" variant="primary" onClick={handleForgetPassword}>Forget Password</Button>

                    {isSuccess && (
                        <div style={{ color: 'green', marginTop: '10px' }}>
                            Success! The API request was successful.
                        </div>
                    )}
                    {error && (
                        <div style={{ color: 'red', marginTop: '10px' }}>
                            {error}
                        </div>
                    )}
                </div>
            </Form>
            {/* <img className="image-password" src={password} /> */}
        </div>
    )
}

export default ForgetPasswordForm