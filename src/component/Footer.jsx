import React, { useState } from 'react';
import './footer.css';
import logo from '../img/SearPic-logo.png';

const Footer = (display) => {
    return (
        <footer className={display.display}>
            {console.log(display)}
            <p className="name">SearPic</p>
            <p className="description">Search for a photo and download it with the unsplash API.</p>
            <p><i className="description">Website made with React.js</i></p>
            <a className="link" href="https://github.com/Jurss">My Github</a>
        </footer>
    )
};

export default Footer;
