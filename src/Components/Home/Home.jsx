// eslint-disable-next-line no-unused-vars
import React from 'react';
import "./Home.css"
import Header from '../Header/Header';
import Form from '../Form/Form';
import Result from '../Result/Result';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div className='home'>
            <Header></Header>
            <Form></Form>
            <Result></Result>
            <Footer></Footer>
        </div>
    );
};

export default Home;