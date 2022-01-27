import React from 'react';
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (


        <nav class="navbar navbar-expand-lg navbar-light p-4">
            <div class="container">
                <p className='mb-0 navbar-brand'>Loops Tech</p>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mt-3 mt-lg-0 mb-lg-0">
                        <li class="nav-item px-2">
                            <Link to={`/`} className='nav-link'>Home</Link>
                        </li>
                        <li class="nav-item px-2">
                            <Link to={`/about`} className='nav-link'>About Us</Link>
                        </li>
                        <li class="nav-item px-2">
                            <Link to={`/projects`} className='nav-link'>Projects</Link>
                        </li>
                        <li class="nav-item px-2">
                            <Link to={`/services`} className='nav-link'>Services</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={`/contact`} className='nav-cta'>Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
