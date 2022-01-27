import React from 'react';
import { Link } from 'react-router-dom'


const Footer = () => {
    return <footer class="footer">

        <div class="container">


            <div class="row mb-5">
                <div class="col-md-4 mb-4 mb-md-0">
                    <div class="site-logo">
                        Loops Tech
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
                        <li><Link to={`/`}> Home </Link></li>
                        <li><Link to={`/about`}> About </Link></li>
                        <li><Link to={`/projects`}> Projects </Link></li>
                        <li><Link to={`/services`}> Services </Link></li>
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
