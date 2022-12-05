import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import app from '../firebase/firebase.init';

const auth = getAuth(app);
const RegisterReactBootstrap = () => {

    const [passwordError, setPasswordError] = useState('');
    const [succes, setSucces] = useState(false);

    const handleOnSubmit = event => {
        event.preventDefault()
        setSucces(false);

        const form = event.target;
        const email = form.formBasicEmail.value;
        const password = form.formBasicPassword.value;
        console.log(email, password);
        // if(!/(?=.*[A-Z].*[A-Z])/.test(password)) {
        //     setPasswordError('Please provide at least two upperdase');
        //     return;
        // }
        // if(password.length < 6){
        //     setPasswordError('Please should be at least 6 characters.');
        //     return;
        // }
        // if(!/(?=.*[!@#$&*])/.test(password)){
        //     setPasswordError('Please add at least one special character');
        //     return;
        // }
        setPasswordError('')
        createUserWithEmailAndPassword(auth, email, password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            setSucces(true);
            form.reset();
        })
        .catch(error => {
            console.error('error', error);
            setPasswordError(error.message);
        })
    }
    return (
        <div className='w-50 mx-auto'>
            <h3 className='text-primary'>Please Register</h3>
                    <Form onSubmit={handleOnSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" required/>
               
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" required />
            </Form.Group>
            <p className='text-danger'>{passwordError}</p>
            {
                succes && <p className='text-success'>Create account succesfully</p>
            }
            <Button variant="primary" type="submit">
               Register
            </Button>
            <p><small>Already have an account? Please <Link to='/login'>Login</Link></small></p>
            </Form>
        </div>
    );
};

export default RegisterReactBootstrap;