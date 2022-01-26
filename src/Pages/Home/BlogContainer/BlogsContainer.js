import React from 'react';
import TopBlogs from './TopBlogs/TopBlogs';
import './BlogsContainer.css';
import Blogs from './Blogs/Blogs';

const BlogsContainer = () => {
    return (
        <div className='container-fluid py-5'>

            <div className="row d-flex justify-content-center align-items-center ">
                <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                    <h3 className='py-3 top-rated-header text-start'>Top Rated Blogs</h3>
                    <TopBlogs></TopBlogs>
                </div>
                <div className="col-12 col-sm-12 col-md-8 col-lg-8">
                    <h3 className='py-3 top-rated-header'>Tour Blogs</h3>
                    <Blogs></Blogs>
                </div>
            </div>

        </div>
    );
};

export default BlogsContainer;