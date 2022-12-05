import { getAuth, sendEmailVerification, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import app from '../firebase/firebase.init';

const auth = getAuth(app);
const LoginBootstrap = () => {
    const [success, setSuccess] = useState(false);
    const handleSubmit = event =>{
        event.preventDefault();
        setSuccess(false);

        const form = event.target;
        const  email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signInWithEmailAndPassword(auth, email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            setSuccess(true);
            form.reset();
        })
        .catch(error =>{
            console.error('error', error)
        })
    }
    sendEmailVerification(auth.currentUser)
    .then(() =>{
        alert('varification successfull');
    })
    return (
        <div className='w-50 mx-auto'>
            <h3 className='text-success'>Please login !!!</h3>

            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput" className="form-label">Example label</label>
                    <input type="email" name='email' className="form-control" id="formGroupExampleInput" placeholder="Your email"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput2" className="form-label">Another label</label>
                    <input type="password" name='password' className="form-control" id="formGroupExampleInput2" placeholder="Your password"/>
                </div>
                {
                    success && <p>Successfully login to the account</p>
                }
                <button className="btn btn-primary" type="submit">Login</button>
                <p><small>New to this website? Please <Link to='/register'>Register</Link></small></p>
            </form>
        </div>
    );
};

export default LoginBootstrap;