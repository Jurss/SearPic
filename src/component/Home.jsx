import React, { useState } from 'react';
import axios from 'axios';
import './home.css';
import glass from '../img/transparent-bg-+-shadow-designify.png';
import leftArrow from '../img/left-arrow.png';
import rightArrow from '../img/right-arrow.png';


const Home = () => {

    const [image, setImage] = useState("");
    const clientId = "GcWAxrmZevZukPhphJOTcN-Dvz0U_yYaxaa48dP0BIc";
    const [result, setResult] = useState([]);
    
    const handleChange = (event) => {
        setImage(event.target.value);
    };

    console.log(result);
    
    function handleSubmit(){
        const url = "https://api.unsplash.com/search/photos?page="+ inProgress +"&per_page=30&query=" + image + "&client_id=" + clientId;
        axios.get(url).then((response) => {
            setResult(response.data.results);
        });
    };

    const [inProgress, setinProgress] = useState(1);

    function nextPage(){
        setinProgress(inProgress + 1);
        handleSubmit();
    }
    function prevPage(){
        if(inProgress > 1){
            setinProgress(inProgress - 1);
            handleSubmit();
        }

    }
    return(
            <div className="app"> 
                <div className="home">
                    <h1>More than<br />Catch a Picture</h1>
                    <p>Place where amazing photo from great photographer</p>
                </div>
                <div className="form">
                    <input className="inputForm" onChange={handleChange} type="text" name="image" placeholder="Search for images ..."/>
                    <button className="buttonForm" onClick={handleSubmit} type="submit"><img className="loupe" src={glass} alt="magnifying glass" /></button>
                </div>  
    
                <div className="result">
                    {result.map((image) => (
                        <div key={image.id} className="card">
                            <img src={image.urls.regular} />
                            <p className="username"> Photo by {image.user.name}</p>
                        </div>
                    ))}

                </div>
                    <div className="nextPrevButton">
                        {result.length !== 0 &&
                        <>
                                <button  onClick={prevPage} type="submit"><img className="arrow" src={leftArrow} alt="left Arrow" /></button>
                                <p className="page">{inProgress > 0 ? inProgress : '1'}</p>
                                <button onClick={nextPage} type="submit"><img className="arrow" src={rightArrow} alt="right Arrow" /></button>
                        </>
                        }
                    </div>
            </div>
    )
}


export default Home;
