import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'


function Secondpage() {
    const [full, setFull] = useState("");
    const [short, setShort] = useState("");
    const { id } = useParams();
    const newURL = window.location.protocol + "//" + window.location.host + window.location.search;

    const getUrlByID = (id) => {
        axios.get(`https://my-short-url-api.onrender.com/shortened/${id}`)
            .then(res => {
                setFull(res.data.full)
                setShort(newURL + "/" + res.data.short)
            })
            .catch((error) => {
                console.log(error)
            })
    };

    useEffect(() => {
        getUrlByID(id);
    });


    const copyUrl = () => {
        navigator.clipboard.writeText(short);
    }
    return (
        <div className='container'>
            <center className='mt-3 mb-3'><h1>Short URL</h1></center>
            <div className='row justify-content-center'>
                <div className='col-6'>
                    <div className='card'>
                        <div className='card-body'>
                            <h3 className='mt-3 mb-3'>Your shortened URL</h3>
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder="Enter the link here" value={short} readOnly />
                                <button className="btn btn-primary" type="button" onClick={copyUrl}>Copy URL</button>
                            </div>
                            <p className='mt-3'>
                                Long URL: <a href={full} target="_blank" rel="noreferrer">{full}</a>
                                <br />
                                Create other : <Link to="/" >Shortened URL.</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Secondpage
