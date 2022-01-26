import React from 'react';

const Navbar = () => {
    return (


        <nav class="navbar navbar-expand-lg navbar-light p-4">
            <div class="container">
                <a class="navbar-brand" href="#">Loops Tech</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mt-3 mt-lg-0 mb-lg-0">
                        <li class="nav-item px-2">
                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item px-2">
                            <a class="nav-link" href="#about-section">About Us</a>
                        </li>
                        <li class="nav-item px-2">
                            <a class="nav-link" href="#">Projects</a>
                        </li>
                        <li class="nav-item px-2">
                            <a class="nav-link" href="#services-section">Services</a>
                        </li>
                        <li className="nav-item">
                            <a href="#contact-section" className="nav-cta">Contact Us</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
