import { createUserWithEmailAndPassword, getAuth, sendEmailVerification, updateProfile } from 'firebase/auth';
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
        const name = form.formBasicName.value;
        const email = form.formBasicEmail.value;
        const password = form.formBasicPassword.value;
        console.log(name, email, password);

        //validate password
        if(!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setPasswordError('Please provide at least two uppercase');
            return;
        }
        if(password.length < 6){
            setPasswordError('Please should be at least 6 characters.');
            return;
        }
        if(!/(?=.*[!@#$&*])/.test(password)){
            setPasswordError('Please add at least one special character');
            return;
        }
        //error reset
        setPasswordError('');

        createUserWithEmailAndPassword(auth, email, password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            setSucces(true);
            form.reset();
            verifyEmail();
            updateUserName(name);
        })
        .catch(error => {
            console.error('error', error);
            setPasswordError(error.message);
        })
    }

    const verifyEmail = () =>{
        sendEmailVerification(auth.currentUser)
        .then(() =>{
            alert('varification successfull');
        })
    }

    const updateUserName = (name) =>{
        updateProfile(auth.currentUser, {
            displayName: name
        })
        .then(() =>{
            console.log('profile updated');
        })
        .catch(error => console.error(error));
    }

    return (
        <div className='w-50 mx-auto'>
            <h3 className='text-primary'>Please Register</h3>
                    <Form onSubmit={handleOnSubmit}>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Your Name</Form.Label>
                <Form.Control type="text" placeholder="Enter name" required/>
               
            </Form.Group>

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