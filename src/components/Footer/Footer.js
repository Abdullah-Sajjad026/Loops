import React from 'react';

const Footer = () => {
    return <footer class="footer">

        <div class="container">


            <div class="row mb-5">
                <div class="col-md-4 mb-4 mb-md-0">
                    <div class="site-logo">
                        <a href="#">Loops Tech</a>
                    </div>
                </div>
                <div class="col-md-8 text-md-end">
                    <ul class="list-unstyled social-icons">
                        <li><a href="#" class="fb"><span class="icon-facebook"><ion-icon name="logo-facebook"></ion-icon></span></a></li>
                        <li><a href="#" class="tw"><span class="icon-twitter"><ion-icon name="logo-twitter"></ion-icon></span></a></li>
                        <li><a href="#" class="in"><span class="icon-instagram"><ion-icon name="logo-instagram"></ion-icon></span></a></li>
                        {/* <li><a href="#" class="be"><span class="icon-behance"></span></a></li>
                        <li><a href="#" class="dr"><span class="icon-dribbble"></span></a></li>
                        <li><a href="#" class="yt"><span class="icon-play"></span></a></li> */}
                    </ul>
                </div>
            </div>

            <div class="row mb-5">

                <div class="col-md-6 text-md-center mx-md-auto">
                    <ul class="nav-links list-unstyled">
                        <li><a href="#">Home</a></li>
                        <li><a href="#about-section">About</a></li>
                        <li><a href="#">Projects</a></li>
                        <li><a href="#services-section">Services</a></li>
                    </ul>
                </div>
            </div>
            <div class="row">
                <div class="col ">
                    <div class="copyright">
                        <p><small>Copyright 2022. All Rights Reserved.</small></p>
                    </div>
                </div>
            </div>

        </div>
    </footer>
};

export default Footer;
