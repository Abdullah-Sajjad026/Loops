import React from 'react';

const ServiceCard = (props) => {
    return (
        <a href="#" className="service-card__link-wrapper">
            <article className="service-card">

                <img src={`./images/${props.imgUrl}Icon.svg`} alt={props.title} className="service-card__image" />
                <h4 className="service-card__title">{props.title}</h4>

            </article>
        </a>
    );
};

export default ServiceCard;
