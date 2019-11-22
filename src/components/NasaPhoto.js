import React, { useState, useEffect } from "react";
import axios from "axios";

function NasaPhoto(props) {
    const [nasaPhoto, setNasaPhoto] = useState("");
    

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


