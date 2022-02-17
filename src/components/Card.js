import React from 'react';

function Card(props) {
    let badgeText;
    if (props.item.openSpots === 0) {
        badgeText = "SOLD OUT";
    } else if (props.item.location === "Online") {
        badgeText = "ONLINE";
    }

    
    console.log(props.image);
    return (

        <div className="card">
            {badgeText && <p className="badge"><strong>{badgeText}</strong></p>}
            <img className="card__image" src={`/images/${props.item.coverImg}`} alt="card" />
            <div className="rating">
                <img className="card__star" src="/images/Star 1.png" alt="star" />
                <span>{props.item.stats.rating} </span>
                <span className="gray">({props.item.stats.reviewCount}).</span>
                <span className="gray">{props.item.location}</span>
            </div>

            <p className="card__title">{props.item.title}</p>
            <span><strong>From ${props.item.price}</strong> / Person</span>

        </div>
    );
}

export default Card;