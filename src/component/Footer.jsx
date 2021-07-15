import React from 'react';
import './footer.css';

const Footer = (display) => {
    return (
        <footer className={display.display}>
            {console.log(display)}
            <p className="name">SearPic</p>
            <p className="description">Search for a photo and download it with the unsplash API.</p>
            <p><i className="description">Website made with React.js</i></p>
            <a className="link" href="https://github.com/Jurss" target="blank">My Github</a>
        </footer>
    )
};

export default Footer;
