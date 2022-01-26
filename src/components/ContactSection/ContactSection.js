import React from 'react';

const ContactSection = () => {
    return <section className='contact-section' id='contact-section'>

        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6 mr-auto">
                    <div class="mb-5">
                        <h2 class="section-title text-white mb-4">Contact Info</h2>
                        <p class="text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus blanditiis, perferendis aliquam.</p>
                    </div>
                    <div class="row">
                        <div class="mb-4 mb-lg-0 col-md-6">
                            <h3 class="text-white mb-4">Rahim Yar Khan</h3>
                            <ul class="list-unstyled mb-5">
                                <li class="d-flex text-white mb-2">
                                    <span class="mr-3"><span class="icon-map"></span></span> Street#, RYK, Pakistan</li>
                                <li class="d-flex text-white mb-2"><span class="mr-3"><span class="icon-phone"></span></span> +92000-0000000</li>
                                <li class="d-flex text-white"><span class="mr-3"><span class="icon-envelope-o"></span></span> info@mywebsite.com </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="col-lg-6">
                    <div class="box">
                        <h3>Send us a message</h3>
                        <form class="mb-5" id="contactForm" name="contactForm">
                            <div class="row">

                                <div class="col-md-12 form-group mb-4">
                                    <label for="name" class="col-form-label">Name</label>
                                    <input type="text" class="form-control" name="name" id="name"></input>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12 form-group mb-4">
                                    <label for="email" class="col-form-label">Email</label>
                                    <input type="text" class="form-control" name="email" id="email"></input>
                                </div>
                            </div>

                            <div class="row mb-3">
                                <div class="col-md-12 form-group mb-4">
                                    <label for="message" class="col-form-label">Message</label>
                                    <textarea class="form-control" name="message" id="message" cols="30" rows="7"></textarea>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12">
                                    <input type="submit" value="Send Message" class="btn btn-block btn-primary"></input>
                                    <span class="submitting"></span>
                                </div>
                            </div>
                        </form>


                    </div>
                </div>
            </div>
        </div>
    </section>
};

export default ContactSection;
