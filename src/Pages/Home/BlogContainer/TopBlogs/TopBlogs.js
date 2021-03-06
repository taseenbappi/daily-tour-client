import React from 'react';

const TopBlogs = () => {
    return (
        <div className="list-group  text-start" >
            <a href="/#" className="list-group-item list-group-item-action active" aria-current="true">
                <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">Indonesia</h5>
                    <small>3 days ago</small>
                </div>
                <p className="mb-1">Some placeholder content in a paragraph...</p>

            </a>
            <a href="/#" className="list-group-item list-group-item-action">
                <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">Thailand</h5>
                    <small className="text-muted">3 days ago</small>
                </div>
                <p className="mb-1">Some placeholder content in a paragraph...</p>

            </a>
            <a href="/#" className="list-group-item list-group-item-action">
                <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">Ghoa</h5>
                    <small className="text-muted">3 days ago</small>
                </div>
                <p className="mb-1">Some placeholder content in a paragraph...</p>

            </a>
        </div>
    );
};

export default TopBlogs;