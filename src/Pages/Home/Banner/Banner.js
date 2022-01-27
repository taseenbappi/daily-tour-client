import React from 'react';
import img1 from "../../../images/carousel/img-1.jpg";
import img2 from "../../../images/carousel/img-2.jpg";
import img3 from "../../../images/carousel/img-3.jpg";
import './Banner.css';

const Banner = () => {
    return (
        <div id="banner" className="carousel slide carousel-fade container-fluid p-0 " data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={img1} className="d-block w-100 img-fluid " alt="..." />
                </div>
                <div className="carousel-item">
                    <img src={img2} className="d-block w-100 img-fluid" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src={img3} className="d-block w-100 img-fluid" alt="..." />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#banner" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#banner" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default Banner;