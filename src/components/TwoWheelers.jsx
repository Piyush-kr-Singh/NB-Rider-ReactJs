import React from 'react'
import pulsar200 from '../photos/pul200rs.webp';
import pulsar125 from '../photos/pul125.webp';
import pul125ss from '../photos/p125s-seat.jpg';
import royal from '../photos/royal.jpeg';
import splendor from '../photos/splendor.jpg';
import tvs from '../photos/tvs.jpg';
import './TwoWheelers.css';
import { Link } from 'react-router-dom';

const TwoWheelers = () => {

    const handleClick = () => {
        window.scrollTo(0, 0);
        
    };


    return (
        <>
            <div className='container mt-5'>
                <h1 align='center' className='container mb-5' style={{ fontSize: '3vw', fontWeight: '700' }}>Welcome to the <span>Two-Wheelers </span>Gallery</h1>


                <div class="row mb-5">
                    <div class="col-md-4">
                        <div class="card">
                            <img class="card-img-top" src={pulsar200} alt="Card image cap" />
                            <div class="card-body">
                                <h5 align='center' class="card-title" style={{ fontWeight: '700' }}>Bajaj Pulsar 200RS</h5>

                                <p align='center' class="card-text mb-3">Price : ₹1,71,000</p>

                                <div class="d-flex justify-content-center">
                                    <Link to="/vehicledetails" class="btn btnss" onClick={() => handleClick()}>View Details</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card">
                            <img class="card-img-top" src={pul125ss} alt="Card image cap" />
                            <div class="card-body">
                                <h5 align='center' class="card-title" style={{ fontWeight: '700' }}>Bajaj Pulsar 125</h5>

                                <p align='center' class="card-text mb-3">Price : ₹</p>

                                <div class="d-flex justify-content-center">
                                    <a href="#" class="btn btnss">View Details</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card">
                            <img class="card-img-top" src={pulsar125} alt="Card image cap" />
                            <div class="card-body">
                                <h5 align='center' class="card-title" style={{ fontWeight: '700' }}>Bajaj Pulsar 125</h5>

                                <p align='center' class="card-text mb-3">Price : ₹</p>

                                <div class="d-flex justify-content-center">
                                    <a href="#" class="btn btnss">View Details</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4">
                        <div class="card">
                            <img class="card-img-top" src={royal} alt="Card image cap" />
                            <div class="card-body">
                                <h5 align='center' class="card-title" style={{ fontWeight: '700' }}>Royal Enfield Classic 350</h5>

                                <p align='center' class="card-text mb-3">Price : ₹</p>

                                <div class="d-flex justify-content-center">
                                    <a href="#" class="btn btnss">View Details</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card">
                            <img class="card-img-top" src={tvs} alt="Card image cap" />
                            <div class="card-body">
                                <h5 align='center' class="card-title" style={{ fontWeight: '700' }}>TVS Raider 125</h5>

                                <p align='center' class="card-text mb-3">Price : ₹</p>

                                <div class="d-flex justify-content-center">
                                    <a href="#" class="btn btnss">View Details</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card">
                            <img class="card-img-top" src={splendor} alt="Card image cap" />
                            <div class="card-body">
                                <h5 align='center' class="card-title" style={{ fontWeight: '700' }}>Hero Splendor</h5>

                                <p align='center' class="card-text mb-3">Price : ₹</p>

                                <div class="d-flex justify-content-center">
                                    <a href="#" class="btn btnss">View Details</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TwoWheelers
