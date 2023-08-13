import React from 'react'
// import { Link } from 'react-router-dom';
import './Reviews.css';
import Footer from './Footer';
import { useState, useEffect } from 'react';
import TwoWheelers from './TwoWheelers';
import FourWheeler from './FourWheeler';
import axios from 'axios';

const Reviews = () => {
    const [preference, setPreference] = useState(null);

    const [vehicles, setVehicles] = useState([]);

    const handleClick = (selectedPreference) => {
        setPreference(selectedPreference);

    };


    useEffect(() => {
        axios.get('/data.json').then((response) => {
            setVehicles(response.data.vehicles);
        });
    }, []);


    return (
        <>
            <div className='home'>
                <header className='mb-5'>
                    <div className="heros" >
                        <div className="containers">
                            <h1 style={{ fontWeight: '600', fontSize: '5vw' }}>Real <span>stories</span>, Real <span>experiences</span>, Real <span>reviews</span> </h1>
                            <p style={{ fontFamily: 'serif', fontSize: '2vw' }}>Reviews that inspire us to do better every day</p>
                            {/* <Link to='/' className="btns">Get Started</Link> */}
                        </div>
                    </div>
                </header>
            </div>

            <section className='mb-5'>
                <h1 align='center' style={{ fontFamily: 'serif', fontWeight: '600', fontSize: '5vw' }}>Select your Prefernce</h1>
                <div className='mt-4 d-flex justify-content-center'>
                    {/* <button className='bot mx-4' onClick={() => handleClick('twoWheeler')}>Two Wheeler</button>
                    <button className='bot mx-4' onClick={() => handleClick('fourWheeler')}>Four Wheeler</button> */}

                    {vehicles.map((vehicle, index) => (
                        <button key={index} onClick={() => handleClick(vehicle.vehicle)} className='bot mx-4' >
                            {vehicle.vehicle}
                        </button>
                    ))}
                </div>
            </section>

            {preference === 'Two-Wheelers' && <TwoWheelers />}
            {preference === 'Four-Wheelers' && <FourWheeler />}

            <Footer />
        </>
    )
}

export default Reviews
