import React, { useState } from 'react'
import axios from 'axios';
import shortid from 'shortid';
import { useNavigate, Link } from 'react-router-dom';


function Firstpage() {
    const [url, setUrl] = useState("");
    const navigate = useNavigate();

    const SubmitForm = (e) => {
        e.preventDefault();

        const urlObject = {
            id: shortid.generate(),
            full: url,
            short: shortid.generate()
        }
        axios.post("https://my-short-url-api.onrender.com/add-url", urlObject)
            .then(res => navigate(`/shortened/${res.data.id}`));
    }
    return (
        <div className='container'>
            <center className='mt-3 mb-3'><h1>Short URL</h1></center>
            <div className='row justify-content-center'>
                <div className='col-md-6'>
                    <div className='card'>
                        <div className='card-body'>
                            <h3 className='mt-3 mb-3'>Paste the URL to be shortened</h3>
                            <form onSubmit={SubmitForm}>
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder="Enter the link here" value={url} onChange={(e) => setUrl(e.target.value)} />
                                    <button className="btn btn-primary" type="submit">Shorten URL</button>
                                </div>
                            </form>
                            <p>Hi!! this is my Short URL EIEI<br />For create a shortened link making it easy to remember</p>
                            <Link to='/url-list'>Click here to see URL list</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Firstpage
