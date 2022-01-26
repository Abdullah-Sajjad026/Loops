import React from 'react';
import QuoteCard from '../QuoteCard/QuoteCard';

const TestimonialsSection = () => {
    return (
        <section className="testimonials-section" id='testimonials-section'>
            <div className="container">
                <h2 className="section-title">What our clients say about us</h2>
                <div className="testimonials-section__content">

                    <QuoteCard qText="“There’s a huge amount of trust we have in their ability to deliver good-quality and reliable code. When talking about value, they are in a league of their own.”" qAuthor="Daniel Miles" qAuthorP="Development Manager at Smartum" />

                    <QuoteCard qText="“There’s a huge amount of trust we have in their ability to deliver good-quality and reliable code. When talking about value, they are in a league of their own.”" qAuthor="Daniel Miles" qAuthorP="Development Manager at Smartum" />

                    <QuoteCard qText="“There’s a huge amount of trust we have in their ability to deliver good-quality and reliable code. When talking about value, they are in a league of their own.”" qAuthor="Daniel Miles" qAuthorP="Development Manager at Smartum" />

                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
