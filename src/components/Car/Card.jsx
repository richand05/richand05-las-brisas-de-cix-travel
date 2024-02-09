import React, { useState } from 'react';
import './Card.css';
import { ArrowsCollapse, GeoAltFill } from 'react-bootstrap-icons';

const Card = ({ index, title, district, province, time, distance, icon, image, location }) => {
    const [imageLoaded, setImageLoaded] = useState(false);

    const handleImageLoad = () => {
        setImageLoaded(true);
    };

    return (
        <div className="card">
            <div className="img-container">
                {!imageLoaded && <div className="loader">
                    <div class="spinner-border text-primary" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                </div>}
                <div className="card-number">{index}</div>
                <img src={image} alt="" onLoad={handleImageLoad} />
            </div>
            <div className="overlay">
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <ul>
                        <li>Distrito: {district}</li>
                        <li>Provincia: {province}</li>
                        <li>{icon}<span>{time}</span></li>
                        <li><ArrowsCollapse /><span>{distance} Km.</span></li>
                    </ul>
                    <div className="button-container d-flex">
                        <a href={location} className="btn btn-primary "><GeoAltFill /></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;
