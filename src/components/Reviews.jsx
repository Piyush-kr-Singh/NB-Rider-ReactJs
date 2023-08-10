import React from 'react'
import { Link } from 'react-router-dom';
import './Reviews.css';
import Footer from './Footer';

const Reviews = () => {
    return (
        <>
            <div className='home'>
                <header className='mb-5'>
                    <div className="heros" >
                        <div className="containers">
                            <h1 style={{ fontWeight :'600', fontSize:'5vw'}}>Real <span>stories</span>, Real <span>experiences</span>, Real <span>reviews</span> </h1>
                            <p style={{ fontFamily: 'serif', fontSize: '2vw' }}>Reviews that inspire us to do better every day</p>
                            {/* <Link to='/' className="btns">Get Started</Link> */}
                        </div>
                    </div>
                </header>
            </div>

            <section>
                <h1 align='center' style={{fontFamily:'serif', fontWeight:'600', fontSize:'5vw'}}>Select your Prefernce</h1>
                <div className='mt-4 d-flex justify-content-center'>
                    <button className='bot mx-4'>Two Wheeler</button>
                    <button className='bot mx-4'>Four Wheeler</button>
                </div>
            </section>

            <Footer/>
        </>
    )
}

export default Reviews
