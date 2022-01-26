import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import AboutSection from './components/AboutSection/AboutSection';
import ServicesSection from './components/ServicesSection/ServicesSection';
import TestimonialsSection from './components/TestimonialsSection/TestimonialsSection';
import ContactSection from './components/ContactSection/ContactSection';
import Footer from './components/Footer/Footer';

const App = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <AboutSection />
            <ServicesSection />
            <TestimonialsSection />
            <ContactSection />
            <Footer />
        </>
    );
};

export default App;
