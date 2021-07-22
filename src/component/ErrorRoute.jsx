import React from 'react';
import { Link } from 'react-router-dom';
import './errorRoute.css';
import Error from '../img/404.svg';

const ErrorRoute = () => {
    return (
        <div>
            <Link to="/">
                <div className="page">
                    <p className="txt">Page Not Found ...</p>
                    <p className="txt2">Click To Go HomePage</p>
                    <img className="img" src={Error} alt="" /> 
                </div>
            </Link>
        </div>
    )
};

export default ErrorRoute;
