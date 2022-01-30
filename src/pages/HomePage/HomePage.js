import React from 'react';

import Hero from '../../components/Hero/Hero';
import AboutSection from '../../components/AboutSection/AboutSection';
import ServicesSection from '../../components/ServicesSection/ServicesSection';
import ContactSection from '../../components/ContactSection/ContactSection';

const HomePage = () => {
    return <div>
        <Hero />
        <AboutSection />
        <ServicesSection />
        <ContactSection />
    </div>;
};

export default HomePage;
