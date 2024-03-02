import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom' 
import ForgetPasswordForm from './components/ForgetPasswordForm'
import ResetPasswordForm from './components/ResetPasswordForm'
import ResetSuccess from './components/ResetSuccess'
import LoginForm from './components/LoginForm'
import SignupForm from './components/SignupForm'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' Component={LoginForm} />
          <Route path='/signup' Component={SignupForm} />
          <Route path='/forgot-password' Component={ForgetPasswordForm} />
          <Route path='/reset-password/:token' Component={ResetPasswordForm} />
          <Route path='/reset-success' Component={ResetSuccess} />
        </Routes>
      </Router>
    </>
  )
}

export default App
