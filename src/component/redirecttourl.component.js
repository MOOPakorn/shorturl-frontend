import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';

function RediracttoUrl() {
    const { id } = useParams();

    const RedirecttoUrl = (id) => {
        axios.get(`https://my-short-url-api.onrender.com/${id}`)
            .then(res => {
                window.location.replace(res.data.full);
            })
            .catch((error) => {
                console.log(error)
            })
    };

    useEffect(() => {
        RedirecttoUrl(id)
    }, [id])
    return (
        <div>

        </div>
    )
}

export default RediracttoUrl
