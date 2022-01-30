import React from 'react';

const ServicesPage = () => {
    return <main>

        <div className="page-title-container bg-light">
            <div className="row">
                <div className="col-sm-6 mb-sm-0 mb-5 d-flex align-items-center">
                    <h1 className="page-title">Our Services</h1>
                </div>
                <div className="col-sm-6 mt-sm-0 mt-3 d-flex  align-items-center justify-content-center">
                    <img src="./images/Company-pana.svg" className='page-title-img' alt="Page Title Image" />
                </div>
            </div>
        </div>
        <section>
            <div className="container">
                <article>
                    <h2 className="section-title">Services we provide</h2>
                    <p className='huge mt-5'>We help companies transform their organization into progressive growth for their future.
                        <br /> LOOPS designs, builds and creates the fundamental tools for success.</p>
                </article>
            </div>
        </section>
        <div className="services-container">

            <ServiceCard
                name='Android Development'
                desc='Android Apps Development is one of core production of LOOPS. Our expert developers are working on wide range of android apps. Do you want to get a android app for your business or for publishing purpose, you are on right place. We will develop apps for you. For more info, please contact us'
                imgUrl='android'
            />
            <ServiceCard
                name='Third-Party Marketing'
                desc='Are you mobile app or website developer and want to reach more users? You are just a few clicks away from your goal. LOOPS also provide third party marketing services for android apps, iOS apps on multiple stores like Google Play, Samsung App Store, Amazon App Store, Huawei App Gallery and other android base app stores and also marketing on Apple App Store. We have multiple plans and wide range of ideas for marketing your apps. Grow your business with proper markeeitng and contact us for marketing of apps and our apps markeeitng team will made best marketing strategies according to your requirements.'
                imgUrl='digital-marketing'
            />
            <ServiceCard
                name='Quality Assurance'
                desc='To maintain quality of any product, testing is essential for quality assurance. If you are working on any product related to mobile apps or games and you are getting issues in quality assurance, just contact us and our quality assurance team will make sure to let you get best quality and bug free project.'
                imgUrl='testing'
            />
            <ServiceCard
                name='IOS App Development'
                desc='LOOPS has expert iOS developers as well. We provide services for iOS development and solutions as well. Just tell us your idea and we made it real for you. Contact us for further info'
                imgUrl='apple'
            />
            <ServiceCard
                name='Android Game Development'
                desc='We are also working on android game development. We also develop android games for our customers. Our android game developers are developing best quality games for our customers.'
                imgUrl='game'
            />


        </div>

    </main>;
};

const ServiceCard = ({ name, desc, imgUrl }) => {
    return (
        <article className='service-page-card d-block' id={name}>
            <div className="row container mx-auto">
                <div className="col-md-8 order-md-0 order-1 d-flex align-items-center py-4 py-md-0 pe-5">
                    <div className="service-info">
                        <h3 className="service-title mb-4">{name}</h3>
                        <p className="service-desc fw-light huge">{desc}</p>
                    </div>
                </div>
                <div className="col-md-4 order-md-1 order-0 d-flex align-items-center py-5 py-md-0 justify-content-md-center">
                    <img src={`./images/${imgUrl}Icon.svg`} className='service-img' alt={`${name} Icon`} />
                </div>
            </div>
        </article>
    )
}
export default ServicesPage;
