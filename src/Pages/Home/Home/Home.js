import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import BlogsContainer from '../BlogContainer/BlogsContainer';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <BlogsContainer></BlogsContainer>
            <Footer></Footer>
        </div>
    );
};

export default Home;