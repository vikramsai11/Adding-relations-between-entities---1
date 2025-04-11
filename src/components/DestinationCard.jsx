import React from "react";

const DestinationCard = ({destination}) => {
    return(
        <div className="card">
            <img src={destination.image} alt={destination.name} className="card-image"/>
            <div className="card-content">
                <h2>{destination.name}</h2>
                <p className="location">{destination.location}</p>
                <p className="description">{destination.description}</p>
                <p className="price">{destination.price}</p>
            </div>
        </div>
    );
};

export default DestinationCard;