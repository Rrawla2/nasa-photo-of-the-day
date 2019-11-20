import React, { useState, useEffect } from "react";


function NasaPhoto(props) {
    const [nasaPhoto, setNasaPhoto] = useState("");
    const axios = require('axios').default;

    useEffect(() => {
        axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
            .then(response => setNasaPhoto(response.data.url))
            .catch(err => console.log("Image not found", err));
    }, []);
    return (
        <div>
            <img src={ nasaPhoto } alt="NASA photo of the day" />
        </div>
    )
}

export default NasaPhoto;


