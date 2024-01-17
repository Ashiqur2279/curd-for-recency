// eslint-disable-next-line no-unused-vars
import React from 'react';
import "./Header.css"

const Header = () => {
    return (
        <div className='header'>
            <h1 className='logo'> Recency Soft</h1>
            <ul>
                <li>Login</li>
                <li>Log Out</li>
            </ul>
        </div>
    );
};

export default Header;