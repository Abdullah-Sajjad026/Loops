import React from 'react';

const QuoteCard = (props) => {
    return (
        <article className="quote-card">
            <p>{props.qText}</p>
            <div className="quote-card__author">
                <div className="quote-card__author-name">{props.qAuthor}</div>
                <div className="quote-card__author-position">{props.qAuthorP}</div>
            </div>
        </article>
    );
};

export default QuoteCard;
