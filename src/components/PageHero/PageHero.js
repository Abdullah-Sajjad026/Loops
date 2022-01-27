import React from 'react';

const PageHero = (props) => {
    return (
        <section className="page-hero bg-primary text-white">
            <div className="container d-lg-flex">
                <div className="col-lg-6 bg-primary page-col"><h2 className="section-title">{props.pageName}</h2></div>
                <div className="col-lg-6 bg-success breadcrumb-col">{props.pageName}</div>
            </div>

        </section>
    );
};

export default PageHero;
