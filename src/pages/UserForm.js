
import React, { useEffect, useState } from "react";
import { Form, Button, Alert } from 'react-bootstrap'
 
function UserForm() {

  const [ len ] = useState(6)
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ emailError, setEmailError ] = useState('')
  const [ passwordError, setPasswordError ] = useState('')

  const handleSubmit = event => {
    event.preventDefault()

    var emailValid = false;
    if (email.length === 0) {
        setEmailError("Email is required")
    
    } else if (email.length < len) {
        setEmailError("Email should be minimum 6 characters")
    
    } else if (email.indexOf(' ') >= 0) {
        setEmailError('Email cannot contain spaces')
    
    } else {
        setEmailError('')
        emailValid = true
    }

    var passwordValid = false;
    if (password.length === 0) {
        setPasswordError("Password is required")
    
    } else if(password.length < len) {
        setPasswordError("Password should be minimum 6 characters")
    
    } else if (password.indexOf(' ') >= 0) {
        setPasswordError('Email cannot contain spaces')
    
    } else {
        setPasswordError('')
        passwordValid = true
    }
    if (passwordValid && emailValid) {
        alert('Email: ' + email + '\nPassword: ' + password)
        setEmail('')
        setPassword('')
    }

  }

  return (
    <>
        <Form onSubmit={ handleSubmit }>
            <Form.Group controlId="formBasicEmail"> 
                <Form.Label> Email address </Form.Label>
                <Form.Control type="email" placeholder="Enter email" 
                    onChange={ e => setEmail(e.target.value) }
                    value = { email }  /> 

                <Form.Text className="text-muted">
                    We'll never share your email to anyone else
                </Form.Text>
            </Form.Group> 
            { emailError.length > 0 && <Alert variant="danger"> { emailError } </Alert> } 

            <Form.Group controlId="formBasicPassword"> 
                <Form.Label> Password </Form.Label>
                <Form.Control type="password" placeholder="Enter password" 
                    onChange={ e => setPassword(e.target.value) }
                    value = { password }  />  
            </Form.Group> 
            { password.length > 0 && <Alert variant="danger"> { passwordError } </Alert> }

            <Button variant="primary" type="submit"> Submit </Button>

        </Form>

        Email Entered: { email }
        Password Entered: { password }
    </>
  )
}

export default UserForm;