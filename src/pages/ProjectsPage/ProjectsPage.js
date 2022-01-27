import React from 'react';
// import PageHero from '../../components/PageHero/PageHero';

const ProjectsPage = () => {
    return (
        <main className="projects-page">
            <div className="page-title-container bg-light">
                <div className="container">
                    <h2 className="section-title">Projects</h2>
                </div>
            </div>

            <div className="projects">
                <div className="projects-container">

                    <ProjectCard
                        category='Android App'
                        imgCode='gps-app'
                        projectName='Live GPS and Maps App'
                        projectDecsription='Live GPS Satellite View Maps & Travel Navigation with live GPS map directions will provide real time navigation and ultimate driving experience.'
                    />
                    <ProjectCard
                        category='Android App'
                        imgCode='editor-app'
                        projectName='Image Art: Photo Editor & Beauty Filters'
                        projectDecsription='Now photo editing is as easy as never before. A beautiful combination of editing tools, amazing filters, emojis, text editing, image crop, sketch effects and much more in Image Art.'
                    />
                    <ProjectCard
                        category='Android App'
                        imgCode='offline-maps-app'
                        projectName='Offline GPS Map, Route Finder & Offline Navigation'
                        projectDecsription='Find shortest routes and directions on offline map with Live GPS offline maps just by a few clicks.'
                    />
                    <ProjectCard
                        category='Android App'
                        imgCode='barcode-app'
                        projectName='Advanced QRcode Reader & Barcode Scanner'
                        projectDecsription='Free, easy and simple QR code reader and barcode scanner app will let you have easy QR code scanning and easy bar-code reading with your mobile phone.'
                    />
                    <ProjectCard
                        category='Android App'
                        imgCode='gps-world-satellite-app'
                        projectName='GPS World Satellite Maps & Travel Navigation                        '
                        projectDecsription='Use GPS Maps and Travel Easily On The Road.Travel on latest maps and move with comfort. Find easy & best routes, reach at destination location in short time.'
                    />

                </div>
            </div>
        </main>
    );
};
const ProjectCard = ({ category, imgCode, projectName, projectDecsription, }) => {
    return (
        <article className='project-card'>
            <div className="row">
                <div className="col-md-6 mb-5 mb-md-0 text-col d-flex flex-column justify-content-center">
                    <div className="project-info">
                        <p className="project-category text-secondary">{category}</p>
                        <img src={`./images/${imgCode}-icon.png`} alt={imgCode} className="project-icon " />
                        <h3 className="project-name">{projectName}</h3>
                        <p className="project-desc huge">{projectDecsription}</p>
                        <div className="btns">
                            <a href="#" className='d-block d-sm-inline'><img src="./images/google-play.jpg" alt="/" className='store-img rounded' /></a>
                            <a href="#"><img src="./images/huawei-gallery.jpg" alt="/" className='store-img mt-3 mt-sm-0 ms-sm-3 rounded' /></a>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 mt-5 mt-md-0 img-col text-center">
                    <img src={`./images/${imgCode}-mockup.png`} alt={imgCode} className="project-mockup" />
                </div>
            </div>
        </article>
    )
}
export default ProjectsPage;
