import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'


export default function Navbar(Props) {
    return (
        <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand mr-5" to='/'>
                <img src="https://yt3.googleusercontent.com/OYYIYAYFUlvBQKjE7LQMAWXgQpIh4_EGTOV9pDIC0tS4vA3wURJkazZ8v6zLJS9hnmAZW7v6=s176-c-k-c0x00ffffff-no-rj" width="40" height="40" alt="" className='mr-2 logo' style={{borderRadius : '50%'}}/>
                Nb Rider
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to='/'>Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to='/about'>About</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to='/reviews'>Reviews</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to='/blogs'>Blogs</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to='/'>Contact</Link>
                    </li>
                </ul>
                {/* <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form> */}
            </div>
        </nav>
    );
}