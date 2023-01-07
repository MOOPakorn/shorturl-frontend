import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';

function UrlList() {
    const [urllist, setUrllist] = useState([]);


    useEffect(() => {
        Getdata();
    });

    const Getdata = () => {
        axios.get('https://my-short-url-api.onrender.com/url-list')
            .then(res => {
                setUrllist(res.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }
    return (
        <div className='container'>
            <center className='mt-3 mb-3'><h1>Short URL</h1></center>
            <div className='row justify-content-center'>
                <div className='col-8'>
                    <div className='card'>
                        <div className='card-body'>
                            <h3 className='mt-3 mb-3'>URL List</h3>
                            <table className='table'>
                                <thead>
                                    <tr>
                                        <th>Full Url</th>
                                        <th>Short Url</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {urllist.map((data, index) => (
                                        <tr key={data.id}>
                                            <td>{data.full}</td>
                                            <td>{data.short}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <Link to='/'><p> Go Back to Short URL</p></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default UrlList
