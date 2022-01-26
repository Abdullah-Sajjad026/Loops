import React from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';

const ServicesSection = () => {
    return (
        <section className="services-section" id='services-section'>
            <div className="container">
                <h2 className='section-title'>Services we provide</h2>

                <div className="services-section__content">

                    <ServiceCard title="Android Development" imgUrl="android" />
                    <ServiceCard title="IOS Development" imgUrl="apple" />
                    <ServiceCard title="Third Party Marketing" imgUrl="digital-marketing" />
                    <ServiceCard title="Quality Assurance" imgUrl="testing" />
                    <ServiceCard title="Game Development" imgUrl="game" />

                </div>

            </div>
        </section>
    );
};

export default ServicesSection;
