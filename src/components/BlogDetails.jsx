import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Footer from './Footer';
import Loading from './Loading';
import Notify from './Notify';

const BlogDetails = () => {
    const { id } = useParams();
    const [selectedDetail, setSelectedDetail] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        axios.get('/blogData.json').then((response) => {
            const vehicleDetails = response.data.blogs;
            const detail = vehicleDetails.find(detail => detail.id === parseInt(id));
            setSelectedDetail(detail);
            setLoading(false);
        });
    }, [id]);

    if (loading) {
        return <Loading />; // You can create a Loading component to show while data is loading.
    }

    return (
        <>
        <div className='container mb-5' style={{ marginTop: '15vh' }}>
            {selectedDetail ? (
                <div className="card text-center">
                    <div className="card-header">
                        <h4 style={{ fontWeight: '700' }}>{selectedDetail.title}</h4>
                        <p>Published on {selectedDetail.date} {selectedDetail.time}</p>
                    </div>
                    <div className='d-flex justify-content-center'>
                        <img src={selectedDetail.url} className='mx-auto' alt="" style={{ width: '98%', height: 'auto', maxHeight: '100vh' }} />
                    </div>
                    <div className="card-body">
                        <div className='mb-3 d-flex justify-content-between align-items-center'>
                            <div>
                                <img src={selectedDetail.thumbnail} width={20} height={20} alt=""  style={{borderRadius : '50%'}}/> By {selectedDetail.owner}
                            </div>
                        </div>
                        <p className="card-text">{selectedDetail.about}</p>
                    </div>
                </div>
            ) : (
                <p>No details available.</p>
            )}
            
        </div>
        <Notify />
        <Footer />
        </>
    )
}

export default BlogDetails;
