import React from 'react';

const ContactSection = () => {
    return <section className='contact-section' id='contact-section'>
        <div class="custom-shape-divider-top-1643260333">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path>
                <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path>
                <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
            </svg>
        </div>

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

        <div class="custom-shape-divider-bottom-1643260595">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill"></path>
            </svg>
        </div>
    </section>
};

export default ContactSection;
