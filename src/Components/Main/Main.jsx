// eslint-disable-next-line no-unused-vars
import React from 'react';
import "./Main.css";
import Form from '../Form/Form';
import Result from '../Result/Result';

const Main = () => {
    return (
        <div className='main_container'>
            <h1>Stay Connected With Us...!</h1>
            <div className='main'>
                <div className="main_form">
                <Form></Form>
                </div>
                <div className="main_result">
                <Result></Result>
                </div>
            </div>
        </div>
    );
};

export default Main;