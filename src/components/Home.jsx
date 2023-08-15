import React from 'react';
import './Home.css';
// import { BiCheck } from 'react-icons/bi'
import { Link } from 'react-router-dom';
import bg05 from '../photos/bg05.webp';
import bg06 from '../photos/bg06.avif';
import bg07 from '../photos/bg07.webp';
import HomeSection from './HomeSection';

const Home = () => {
  return (
    <>
      <div className='home'>
        <header>
          <div className="hero" >
            <div className="containers">
              <h1 style={{ fontFamily: 'fantasy' }}>Ride to your own tune with <span style={{ fontFamily: 'Times new Roman',fontWeight : '700' }}>NB Rider</span> <br /> </h1>
              <p style={{ fontFamily: 'serif', fontSize: '25px' }}>Discover a world of two-wheelers and four-wheel wonders!</p>
              <Link to='/reviews' className="btns">Get Started</Link>
            </div>
          </div>
        </header>

        <section className=" container">
          <h1 className='mt-5 mb-3' align='center' style={{ fontWeight: '700', fontSize: '49px' }}>Explore Some of the Vehicles with <span>NB Rider</span></h1>

          <p className='mb-4' align='center' style={{ fontFamily: "times new roman", fontSize: '20px', color: 'rgba(0,0,0,0.5)' }}>Unleash the power of expert insights! & Join the ride </p>

          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <img className="card-img-top" src={bg05} alt="Card image cap" />
                <div className="card-body">
                  <h4 align='center' className="card-title" style={{ fontWeight: '700' }}>Mahindra Thar</h4>
                  <p className="card-text" style={{ fontSize: '18px' }}>Enjoy the experience with Mahindra Thar 4X4.</p>
                  <div className="d-flex justify-content-center">
                    <a href="https://youtu.be/K1DvZH7rLT4" target='blank'><button className='btns'>See Video</button></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <img className="card-img-top" src={bg06} alt="Card image cap" />
                  <h4 className="card-title my-3" align='center' style={{ fontWeight: '700' }}>Toyota</h4>
                  <p className="card-text" style={{ fontSize: '18px' }}>Best Vehicle in this price segement offered by Toyota. One of the finest vehicle by Japanese company.</p>
                  <div className="d-flex justify-content-center">
                    <a href="https://youtu.be/5peDBVVZ1hc" target='blank'><button className='btns'>See Video</button></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <img className="card-img-top" src={bg07} alt="Card image cap" />
                  <h4 align='center' className="card-title" style={{ fontWeight: '700' }}>Mahindra Scorpio</h4>
                  <p className="card-text" style={{ fontSize: '18px' }}>Enjoy the experience with Mahindra Scorpio. One of the best Indian off-roading SUV.</p>
                  <div className="d-flex justify-content-center">
                    <a href="https://youtu.be/YYO_UKhQsIU" target='blank'><button className='btns'>See Video</button></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='container'>
          <h1 className='mt-5 mb-3' align='center' style={{ fontWeight: '700', fontSize: '50px' }}>All-In-One <span>Platform</span></h1>

          <p className='mb-4' align='center' style={{ fontFamily: "times new roman", fontSize: '20px', color: 'rgba(0,0,0,0.5)' }}>Unleash the power of expert insights! & Join the ride with <span>NB Rider</span> </p>

          <div className="row my-3">
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title" style={{ fontWeight: '700' }}>✅Seamless Experience</h4>
                  <p className="card-text" style={{ fontSize: '18px' }}>Experience the convenience of viewing your abouts and reviews effortlessly with NB Rider's user-friendly interface and advanced features.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title" style={{ fontWeight: '700' }}>✅Collaborate with Ease</h5>
                  <p className="card-text" style={{ fontSize: '18px' }}>Boost productivity by collaborating with friends, colleagues, or family members in real-time.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title" style={{ fontWeight: '700' }}>✅Intelligent Organization</h5>
                  <p className="card-text" style={{ fontSize: '18px' }}>Quickly find your own wished Vehicle based on Company name, model name or with any keyword.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title" style={{ fontWeight: '700' }}>✅Multi-Media Integration</h4>
                  <p className="card-text" style={{ fontSize: '18px' }}>Enhance your experience in our website with multimedia elements like images, videos, texts.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title" style={{ fontWeight: '700' }}>✅Powerful Search Functionality</h5>
                  <p className="card-text" style={{ fontSize: '18px' }}>NB Rider's powerful search feature enables you to locate specific information within seconds.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title" style={{ fontWeight: '700' }}>✅Customizable Templates</h5>
                  <p className="card-text" style={{ fontSize: '18px' }}>Personalize your visit experience with customizable templates and with easy access in all devices.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <HomeSection/>


      </div>
    </>
  )
}

export default Home
