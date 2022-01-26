import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className='container-fluid py-5 footer'>
            <div className="row container mx-auto d-flex justify-content-center align-items-center text-start">
                <div className="col-12 col-sm-12 col-md-6 col-lg-5">
                    {/* <img src={logo} alt="" className='img-fluid pb-3' /> */}
                    <p className='footer-company-details'>Daily Tour is tourism blogs website for everyone</p>
                    <p className='text-light'>©Daily Tour 2022. All rights reserved</p>
                </div>

                <div className="col-12 col-sm-12 col-md-6 col-lg-2">
                    <ul className='footer-company-list'>
                        <p className='fw-bolder text-light'>Company</p>
                        <li>About</li>
                        <li>Testimonials</li>
                        <li>Blogs</li>
                        <li>Apps</li>
                    </ul>
                </div>

                <div className="col-12 col-sm-12 col-md-6 col-lg-2">
                    <ul className='footer-company-list'>
                        <p className='fw-bolder text-light'>Region</p>
                        <li>Indonesia</li>
                        <li>Singapore</li>
                        <li>Hongkong</li>
                        <li>Canada</li>
                    </ul>
                </div>

                <div className="col-12 col-sm-12 col-md-6 col-lg-3">
                    <ul className='footer-company-list'>
                        <p className='fw-bolder text-light'>Help</p>
                        <li>Help center</li>
                        <li>Contact support</li>
                        <li>Instructions</li>
                        <li>How it works</li>
                    </ul>
                </div>

            </div>


        </div >
    );
};

export default Footer;