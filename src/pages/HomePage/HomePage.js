import React from 'react';

import Hero from '../../components/Hero/Hero';
import AboutSection from '../../components/AboutSection/AboutSection';
import ServicesSection from '../../components/ServicesSection/ServicesSection';
import TestimonialsSection from '../../components/TestimonialsSection/TestimonialsSection';
import ContactSection from '../../components/ContactSection/ContactSection';

const HomePage = () => {
    return <div>
        <Hero />
        <AboutSection />
        <ServicesSection />
        <TestimonialsSection />
        <ContactSection />
    </div>;
};

export default HomePage;
