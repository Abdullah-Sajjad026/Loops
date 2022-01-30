import React from 'react';
import { HashLink } from 'react-router-hash-link';

const ServiceCard = (props) => {
    return (

        <HashLink smooth to={`/services/#${props.title}`} className="service-card__link-wrapper">
            <article className="service-card">

                <img src={`./images/${props.imgUrl}Icon.svg`} alt={props.title} className="service-card__image" />
                <h4 className="service-card__title">{props.title}</h4>

            </article>
        </HashLink>
    );
};

export default ServiceCard;
