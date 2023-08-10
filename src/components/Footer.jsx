import React from 'react';
import { FaInstagram, FaDiscord, FaGithub, FaFacebook, FaYoutube } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {

    const handleInstagramClick = () => {
        window.location.href = "https://www.instagram.com/__singh_piyush__/";
    };
    const handleDiscordClick = () => {
        window.location.href = "https://discord.com/invite/89AnW3y5";
    };
    const handleYoutubeClick = () => {
        window.location.href = "https://www.linkedin.com/in/piyush-kumar-singh-902036248";
    };
    const handleFacebookClick = () => {
        window.location.href = "https://m.facebook.com/profile.php?id=100019846488651";
    };
    const handleGithubClick = () => {
        window.location.href = "https://github.com/Piyush-kr-Singh";
    };

    return (
        <>
            <footer className='mt-5'>
                <hr />
                {/* <div className='d-flex justify-content-center'>
                    <h2 className='mb-3' style={{ fontWeight:'700' }}>NB Rider</h2>
                </div> */}

                <div className='d-flex justify-content-center mt-4'>
                    <FaInstagram className='insta mx-1' onClick={handleInstagramClick} />
                    <FaDiscord className='discord mx-1' onClick={handleDiscordClick} />
                    <FaYoutube className='youtube mx-1' onClick={handleYoutubeClick} />
                    <FaFacebook className='fb mx-1' onClick={handleFacebookClick} />
                    <FaGithub className='github mx-1' onClick={handleGithubClick} />
                </div>

                <div className='d-flex justify-content-center mt-3'>
                    <p style={{fontWeight:'600'}}>&copy; 2023 CryptoSite. All rights reserved.</p>
                </div>

            </footer>
        </>
    );
}

export default Footer;
