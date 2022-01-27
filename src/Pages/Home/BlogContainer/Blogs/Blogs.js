import React from 'react';
import { Link } from 'react-router-dom';
import './Blogs.css';
import { MdArrowRightAlt } from "react-icons/md";

const Blogs = () => {
    return (
        <>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                <div className="col">
                    <div className=" text-start border-0 blog-card">
                        <img src="https://i.ibb.co/5KjdJ7t/beaches-in-thailand.jpg" className=" img-fluid p-2 " alt="..." />
                        <div className="card-body">
                            <h5 className="blog-title">Indonesia Tour</h5>
                            <p className="blog-text m-0">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <Link to="/home" className="text-decoration-none">more <MdArrowRightAlt></MdArrowRightAlt></Link>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className=" text-start border-0 blog-card">
                        <img src="https://i.ibb.co/5KjdJ7t/beaches-in-thailand.jpg" className=" img-fluid p-2 " alt="..." />
                        <div className="card-body">
                            <h5 className="blog-title">Indonesia Tour</h5>
                            <p className="blog-text m-0">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <Link to="/home" className="text-decoration-none">more <MdArrowRightAlt></MdArrowRightAlt></Link>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className=" text-start border-0 blog-card">
                        <img src="https://i.ibb.co/5KjdJ7t/beaches-in-thailand.jpg" className=" img-fluid p-2 " alt="..." />
                        <div className="card-body">
                            <h5 className="blog-title">Indonesia Tour</h5>
                            <p className="blog-text m-0">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <Link to="/home" className="text-decoration-none">more <MdArrowRightAlt></MdArrowRightAlt></Link>
                        </div>
                    </div>
                </div>

            </div>
            <nav aria-label="Page navigation example " className='py-3'>
                <ul className="pagination justify-content-center">
                    <li className="page-item disabled">
                        <a className="page-link" href="/#" tabindex="-1" aria-disabled="true">Previous</a>
                    </li>
                    <li className="page-item"><a className="page-link" href="/#">1</a></li>
                    <li className="page-item"><a className="page-link" href="/#">2</a></li>
                    <li className="page-item"><a className="page-link" href="/#">3</a></li>
                    <li className="page-item">
                        <a className="page-link" href="/#">Next</a>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default Blogs;