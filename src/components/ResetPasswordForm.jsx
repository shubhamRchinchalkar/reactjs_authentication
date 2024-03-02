import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import axios from 'axios'
import '../css/reset.css'

const ResetPasswordForm = ({ match, history }) => {
    const [newPassword, setNewPassword] = useState('')
    const [isSuccess, setIsSuccess] = useState(false)
    const [error, setError] = useState(null)

    const handleResetPassword = async () => {
        const { token } = match.params
        try {
            const response = await axios.post(`https://user-authentication-zma9.onrender.com/api/reset-password/${token}`)
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
        <div className='container-main'>
        <Form className='reset-container'>
            <h3 className='heading-reset'>Reset Password</h3>
            <Form.Group controlId='formPassword'>
                <Form.Label className='label'>New Password</Form.Label><br />
                <Form.Control className='input' type='password' placeholder='Enter new password' value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />

                <div>
                    <Button className='button-confirm' variant='primary' onClick={handleResetPassword}>Confirm</Button>

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
            </Form.Group>
        </Form>
        </div>
    )
}

export default ResetPasswordForm