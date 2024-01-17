// eslint-disable-next-line no-unused-vars
import React from 'react';
import "./Home.css"
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';

const Home = () => {
    return (
        <div className='home'>
            <Header></Header>
            <Main></Main>
            <Footer></Footer>
        </div>
    );
};

export default Home;