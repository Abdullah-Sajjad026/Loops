import React from 'react';
import { Link } from 'react-router-dom';

const AboutPage = () => {
    return <main>
        <div className="page-title-container bg-light">

            <div className="row">
                <div className="col-sm-6 mb-sm-0 mb-5 d-flex align-items-center">
                    <h1 className="page-title">About Us</h1>
                </div>
                <div className="col-sm-6 mt-sm-0 mt-3 d-flex  align-items-center justify-content-center">
                    <img src={`${process.env.PUBLIC_URL}/images/Company-pana.svg`} className='page-title-img' alt="Page Title Image" />
                </div>
            </div>
        </div>
        <section>
            <div className="container">
                <article>
                    <h2 className="section-title">Who are we and what do we do?</h2>
                    <p className='mt-5'>Welcome to Loops, your number one source for all things Programming Solutions. We're dedicated to providing you the best of software development services, with a focus on dependability. customer service, and [store characteristic].We're working to turn our ideo into a digital solution. We hope you enjoy our products as much as we enjoy offering them to you.</p>
                </article>
                <article className='mt-5 location-box'>
                    <h2 className='section-title'>Location</h2>
                    <h3 className="mt-4">Rahim Yar Khan</h3>
                    <ul className="list-unstyled mb-5">
                        <li className='mb-2'>Street#, RYK, Pakistan</li>
                        <li className='mb-2'>+92345-5070090</li>
                        <li>saadameen@loops-tech.com</li>
                    </ul>
                    <Link to={'/contact'} className='btn btn--block'>Contact Us</Link>
                </article>
            </div>
        </section>


    </main>;
};

export default AboutPage;
