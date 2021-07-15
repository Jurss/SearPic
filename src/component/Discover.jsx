import React, { useState } from 'react';
import axios from 'axios';
import './discover.css';

const Discover = () => {
    const clientId = "GcWAxrmZevZukPhphJOTcN-Dvz0U_yYaxaa48dP0BIc";
    const [results, setResult] = useState([]);

    function handleSubmit(){
        const url = "https://api.unsplash.com/photos/random/?client_id="+ clientId +"&count=30";
        axios.get(url).then((response) => {
            setResult(response.data);
        });
    };

    return (
        <div>
            <div className="button">
                    <button className="buttonLoad" onClick={handleSubmit}>Show Me a random photos</button>
            </div>
            <div className="result">
                {results.map((result) => (
                    <div key={result.id} className="card">
                        <img className="image" src={result.urls.regular} alt=""></img>
                        <p className="username">Photo by {result.user.name}</p>
                    </div>
                ))} 
            </div>
            <div className="button">
                {results.length !== 0 &&
                    <button className="buttonLoad" onClick={handleSubmit}>Still again</button>
                }
            </div>
        </div>
    )
};

export default Discover;
