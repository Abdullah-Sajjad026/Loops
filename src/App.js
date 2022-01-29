import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import ContactSection from './components/ContactSection/ContactSection';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage/HomePage'
import ProjectsPage from './pages/ProjectsPage/ProjectsPage'
import AboutPage from './pages/AboutPage/AboutPage'

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Navbar />

                <Switch>
                    <Route path="/" component={HomePage} exact />
                    <Route path="/about" component={AboutPage} exact />
                    <Route path="/projects" component={ProjectsPage} exact />
                    {/* <Route path="/services" component={ServicesPage} exact /> */}
                    <Route path="/contact" component={ContactSection} exact />
                </Switch>

                <Footer />
            </BrowserRouter>
        </>


    );
};

export default App;
