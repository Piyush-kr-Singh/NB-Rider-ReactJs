import React, { useState, useEffect } from 'react';
import Footer from './Footer';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Loading from './Loading';

const VehicleDetails2 = () => {
    const { id } = useParams();
    const [selectedDetail, setSelectedDetail] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        axios.get('/data.json').then((response) => {
            const vehicleDetails = response.data.vehicles[1].details;
            const detail = vehicleDetails.find(detail => detail.id === parseInt(id));
            setSelectedDetail(detail);
            setLoading(false);
        });
    }, [id]);

    if (!selectedDetail) {
        return <div>Loading...</div>; // Display a loading message while data is being fetched
    }

    return (
        <>
            {loading && <Loading />}
            <Carousel showArrows={true} infiniteLoop={true} autoPlay={true} interval={3000} showThumbs={false}>

                <div>
                    <img src={selectedDetail.insights[0]['url1']} alt="Bajaj Pulsar 125" style={{ height: '100vh' }} />
                </div>
                <div>
                    <img src={selectedDetail.insights[0]['url2']} alt="Bajaj Pulsar 200RS" style={{ height: '100vh' }} />
                </div>
                <div>
                    <img src={selectedDetail.insights[0]['url3']} alt="Royal Enfield" style={{ height: '100vh' }} />
                </div>
            </Carousel>

            <h1 className='my-5' align='center' style={{ fontFamily: 'times new roman', fontWeight: '700' }}> {selectedDetail.name} </h1 >

            <div className='container' style={{ fontFamily: 'fantasy', fontWeight: '500', border: '2px solid black' }}>
                <div className='mt-3 d-flex justify-content-between'>
                    <div>
                        SHOWROOM PRICE :
                    </div>
                    <div>₹ {selectedDetail.insights[0]['showroom price']}</div>
                </div>

                <div className='d-flex justify-content-between'>
                    <div>
                        ON ROAD PRICE :
                    </div>
                    <div>₹ {selectedDetail.insights[0]['onroad price']}</div>
                </div>

                <div className='d-flex justify-content-between'>
                    <div>
                        ENGINE CONFIGURATION :
                    </div>
                    <div>{selectedDetail.insights[0]['engine configuration']}</div>
                </div>

                <div className='d-flex justify-content-between'>
                    <div>
                        MILEAGE :
                    </div>
                    <div>{selectedDetail.insights[0]['mileage']}</div>
                </div>

                <div className='d-flex justify-content-between'>
                    <div>
                        ENGINE CAPACITY :
                    </div>
                    <div>{selectedDetail.insights[0]['engine capacity']}</div>
                </div>

            </div>
            <Footer />
        </>
    );
}

export default VehicleDetails2;
