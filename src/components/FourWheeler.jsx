import React from 'react'
import './TwoWheelers.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const FourWheelers = () => {
    const [preference, setPreference] = useState(null);
    const [details, setDetails] = useState([]);

    const handleClick = (selectedPreference) => {
        setPreference(selectedPreference);
        window.scrollTo(0,0);
    };

    useEffect(() => {
        axios.get('/data.json').then((response) => {
            setDetails(response.data.vehicles[1].details);
        });
    }, []);


    return (
        <>
            <div className='container my-5'>
                <div className="row mb-5">
                    {details.map((detail, index) => (
                        <div key={index} className="col-md-4 my-3">
                            <div className="card">
                                <img className="card-img-top" src={detail.thumbnail} alt="Card image cap" />
                                <div className="card-body">
                                    <h4 align='center' className="card-title" style={{ fontWeight: '700' }}>{detail.name}</h4>
                                    <p align='center' className="card-text mb-3">Price : ₹{detail.insights[0]['showroom price']}</p>

                                    <div className="d-flex justify-content-center">
                                        <Link to='/vehicledetails' className="btn btnss" onClick={() => handleClick(detail.name)} preference={preference}>View Details</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default FourWheelers
