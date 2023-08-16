import React, { useState } from 'react';
import './Notify.css';

const Notify = () => {
    const [isSignedUp, setIsSignedUp] = useState(false);
    const [email, setEmail] = useState('');

    const handleSignup = (event) => {
        event.preventDefault();

        if (email.trim() !== '') {
            setIsSignedUp(true);
            // setEmail(''); 
        }
    };

    const isButtonDisabled = email.trim() === '';

    return (
        <>
            {isSignedUp && email.trim() !== '' && (
                <div className="alert alert-success alert-dismissible fade show" role="alert">
                    <strong>You have Signed up successfully.</strong>
                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
    
                </div>
            )}
            <div className='d-flex justify-content-center align-items-center' style={{ height: '50vh', backgroundColor: 'black', color: 'white' }}>
                <div className='text-center'>
                    <h3 className='mt-5 mb-3'>Best Reviews and Blogs are waiting for you!!</h3>
                    <h6>Sign in to NB Rider to stay up to date.</h6>
                    <form className="my-4" onSubmit={handleSignup}>
                        <div className='d-flex justify-content-center'>
                            <div>
                                <input className="form-control me-2" type="email" placeholder="Enter Email" aria-label="Email" style={{ width: '110%' }} value={email} onChange={(e) => setEmail(e.target.value)} />
                                <button className={`mt-3 btnsss ${isButtonDisabled ? 'disabled-button' : ''}`} type="submit" disabled={isButtonDisabled}>Sign Up</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Notify;
