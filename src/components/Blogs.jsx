import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Blogs.css';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import Notify from './Notify';

const Blogs = () => {

    const [preference, setPreference] = useState(null);
    const [blogs, setBlogs] = useState([]);

    const handleClick = (selectedDetail) => {
        setPreference(selectedDetail);
    };

    useEffect(() => {
        axios.get('/blogData.json').then((response) => {
            setBlogs(response.data.blogs);
        });
    }, []);

    return (
        <>
            <div className='home'>
                <header className='mb-5'>
                    <div className="heross" >
                        <div className="containers">
                            <h1 style={{ fontWeight: '600', fontSize: '55px' }}> <span>Blogging</span>  is a conversation, not a code. </h1>
                            <p style={{ fontFamily: 'serif', fontSize: '25px' }}>Blogging is not just about publishing. It's about sharing, connecting, and learning.</p>
                            {/* <Link to='/' className="btns">Get Started</Link> */}
                        </div>
                    </div>
                </header>
            </div>

            <h1 className='my-4' align='center' style={{ fontFamily: 'fantasy' }}><u>Blogs by Our </u><span><u>Subscribers</u></span></h1>

            <div className='container'>
                <div className='row '>
                    {blogs.map((blog, index) => (
                        <div key={index} className='col-md-4 my-3'>
                            <div class="card text-center">
                                <img class="card-img-top" src={blog.url} alt="Card image cap" />
                                <div class="card-body">
                                    <h5 class="card-title" style={{ fontWeight: '700' }}>{blog.title}</h5>
                                    <p class="card-text">{blog.about.slice(0, 70)}{blog.about.length > 70 ? '...' : ''}</p>
                                    <Link to={`/blogdetails/${blog.id}`}><button className="btn btnss mt-3" onClick={() => handleClick(detail)}>View Article</button></Link>
                                </div>
                                <div class="card-footer text-muted">
                                    <div class="d-flex justify-content-between">
                                        <div>
                                            <p>{blog.date}</p>
                                            <p>{blog.time}</p>
                                        </div>
                                        <div >
                                            <img src={blog.thumbnail} width={30} height={30} alt="" style={{ borderRadius: '50%' }} />
                                            <p className='mx-2'> {blog.owner} </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Notify />
            <Footer />
        </>
    )
}

export default Blogs
