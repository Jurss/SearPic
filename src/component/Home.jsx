import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './home.css';
import glass from '../img/transparent-bg-+-shadow-designify.png';
import leftArrow from '../img/left-arrow.png';
import rightArrow from '../img/right-arrow.png';
import downloadImg from '../img/download.png';



const Home = () => {

    const [image, setImage] = useState("");
    const clientId = "GcWAxrmZevZukPhphJOTcN-Dvz0U_yYaxaa48dP0BIc";
    const [result, setResult] = useState([]);
    const [urlLink, setUrlLink] = useState('');
    const [filename, setFilename] = useState('');
    const [trackdownload, setTrackDownload] = useState('');
    const[downloadReady, setDownloadReady] = useState(false);
    
    const handleChange = (event) => {
        setImage(event.target.value);
    };
    
    function handleSubmit(){
        const url = "https://api.unsplash.com/search/photos?page="+ inProgress +"&per_page=30&query=" + image + "&client_id=" + clientId;
        axios.get(url).then((response) => {
            setResult(response.data.results);
        });
    };

    const [inProgress, setinProgress] = useState(1);

    function nextPage(){
        setinProgress( inProgress + 1);

    }
    function prevPage(){
        if(inProgress > 1){
            setinProgress(inProgress - 1);
        }
    }

    function download(link, filename, track) {
        if(downloadReady === true){
            axios({
                url: link,
                method: 'GET',
                responseType: 'blob'
            }).then((response) => {
                        const url = window.URL
                            .createObjectURL(new Blob([response.data]));
                        const link = document.createElement('a');
                        link.href = url;
                        link.setAttribute('download', filename+'.jpg');
                        document.body.appendChild(link);
                        link.click();
                        document.body.removeChild(link);
            })
            setDownloadReady(false);
            trackDownload(track);
        }
    }

    function trackDownload(track){
        axios({
            url: track,
            method: 'GET'
        })
    }

    function handleDownload(link, id, track){
        setUrlLink(link);
        setFilename(id);
        setDownloadReady(true);
        setTrackDownload(track);
    }

    useEffect(() => {
        handleSubmit()
    },[inProgress])

    useEffect(() => {
        download(urlLink, filename)
    },[downloadReady])

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
                            {console.log(image)}
                            <img src={image.urls.regular}alt={image.alt_description} title={image.links.html}/>
                            <button className="download" onClick={() => handleDownload(image.urls.full, image.id, image.links.download_location)} type="submit"><img src={downloadImg} alt="Download" /></button>
                            <p className="username"> Photo by <u><i>{image.user.name}</i></u> On unsplash</p>
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
