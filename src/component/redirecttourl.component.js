import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';

function RediracttoUrl() {
    const { id } = useParams();

    const RedirecttoUrl = (id) => {
        axios.get(`http://localhost:4000/${id}`)
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
