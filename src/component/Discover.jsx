import React, { useState, useEffect } from 'react';
import axios from 'axios';
import downloadImg from '../img/download.png';
import './discover.css';

const Discover = () => {
    const clientId = "GcWAxrmZevZukPhphJOTcN-Dvz0U_yYaxaa48dP0BIc";
    const [results, setResult] = useState([]);
    const [urlLink, setUrlLink] = useState('');
    const [filename, setFilename] = useState('');
    const [trackdownload, setTrackDownload] = useState('');
    const[downloadReady, setDownloadReady] = useState(false);

    useEffect(() => {
        download(urlLink, filename)
    },[downloadReady])


    function handleSubmit(){
        const url = "https://api.unsplash.com/photos/random/?client_id="+ clientId +"&count=30";
        axios.get(url).then((response) => {
            setResult(response.data);
        });
    };

    function download(link, filename,track) {
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
    return (
        <div>
            <div className="button">
                    <button className="buttonLoad" onClick={handleSubmit}>Show Me a random photos</button>
            </div>
            <div className="result">
                {results.map((result) => (
                    <div key={result.id} className="card">
                        <img className="image" src={result.urls.regular} alt={result.alt_description}  title={result.links.html}></img>
                        <button className="download" onClick={() => handleDownload(result.urls.full, result.id, result.links.download_location)} type="submit"><img src={downloadImg} alt="Download" /></button>
                        <p className="username"> Photo by <i>{result.user.name}</i> On <a href="https://unsplash.com/" target="blank">unsplash</a></p>
                    </div>
                ))} 
            </div>

                {results.length !== 0 &&
                    <div className="button">
                        <button className="buttonLoad" onClick={handleSubmit}>Still again</button>
                    </div>
                }
        </div>
    )
};

export default Discover;
