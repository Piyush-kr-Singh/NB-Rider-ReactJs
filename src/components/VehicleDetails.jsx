import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import pulsar200 from '../photos/pul200rs.webp';
import pulsar125 from '../photos/pul125.webp';
import royal from '../photos/royal.jpeg';
import Footer from './Footer';


const VehicleDetails = () => {

  return (
    <>

      <Carousel showArrows={true} infiniteLoop={true} autoPlay={true} interval={3000} showThumbs={false}>

        <div>
          <img src={pulsar125} alt="Bajaj Pulsar 125" style={{ height: '100vh' }} />
        </div>
        <div>
          <img src={pulsar200} alt="Bajaj Pulsar 200RS" style={{ height: '100vh' }} />
        </div>
        <div>
          <img src={royal} alt="Royal Enfield" style={{ height: '100vh' }} />
        </div>
      </Carousel>

      <h1 className='my-5' align='center' style={{ fontFamily: 'times new roman', fontWeight: '700' }}> Bajaj Pulsar 200RS</h1 >

      <div className='container' style={{ fontFamily: 'fantasy', fontWeight: '500', border: '2px solid black' }}>
        <div className='mt-3 d-flex justify-content-between'>
          <div>
            SHOWROOM PRICE :
          </div>
          <div>₹ 1,71,000</div>
        </div>

        <div className='d-flex justify-content-between'>
          <div>
            ON ROAD PRICE :
          </div>
          <div>₹ 1,99,000</div>
        </div>

        <div className='d-flex justify-content-between'>
          <div>
            ENGINE CONFIGURATION :
          </div>
          <div>PETROL ENGINE</div>
        </div>

        <div className='d-flex justify-content-between'>
          <div>
            MILEAGE :
          </div>
          <div>16.2 KM/L</div>
        </div>

        <div className='d-flex justify-content-between'>
          <div>
            ENGINE CAPACITY :
          </div>
          <div>350CC</div>
        </div>

        <div className='d-flex justify-content-between'>
          <div>
            ENGINE CONFIGURATION :
          </div>
          <div className='mb-4'>PETROL ENGINE</div>
        </div>

      </div>

      <Footer />
    </>
  )
}

export default VehicleDetails
