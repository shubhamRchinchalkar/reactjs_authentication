import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import axios from 'axios'
import '../css/signup.css'
import signup from '../assets/signup.png'

const SignupForm = ({ history }) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const handleSignup = async () => {
        try {
            const response = await axios.post('https://user-authentication-zma9.onrender.com/api/signup', { name, email, password, confirmPassword })
            console.log(response.data)
            history.push('/login')
        } catch (error) {
            console.error(error.response.data)
        }
    }

    return (
        <div className='container'>
            <img src={signup} alt='signup' className='image-signup' />
            <Form className='form-container'>
                <h3>Signup</h3>
                <Form.Group controlId='formName'>
                    <Form.Label className='label'>Name</Form.Label><br />
                    <Form.Control className='input' type='text' placeholder='Enter your name' value={name} onChange={(e) => setName(e.target.value)} />
                </Form.Group><br />

                <Form.Group controlId='formEmail'>
                    <Form.Label className='label'>Email</Form.Label><br />
                    <Form.Control className='input' type='email' placeholder='Enter email' value={email} onChange={(e) => setEmail(e.target.value)} />
                </Form.Group><br />

                <Form.Group controlId='formPassword'>
                    <Form.Label className='label'>Password</Form.Label><br />
                    <Form.Control className='input' type='password' placeholder='Enter password' value={password} onChange={(e) => setPassword(e.target.value)} />
                </Form.Group><br />

                <Form.Group controlId='formConfirmPassword'>
                    <Form.Label className='label'>Confirm Password</Form.Label><br />
                    <Form.Control className='input' type='password' placeholder='Confirm Password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                </Form.Group><br />

                <Button variant='primary' onClick={handleSignup} className='button'>
                    Sign up
                </Button>
            </Form>
        </div>
    )
}

export default SignupForm