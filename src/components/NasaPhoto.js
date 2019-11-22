import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from 'styled-components';


function NasaPhoto() {
    const [nasaPhoto, setNasaPhoto] = useState("");
    const [nasaTitle, setNasaTitle] = useState("");
    const [nasaDate, setNasaDate] = useState("");
    const [nasaExplanation, setNasaExplanation] = useState("");
    const [nasaCopyrightInfo, setNasaCopyrightInfo] = useState("");

    useEffect(() => {
        axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
            .then(response => {setNasaPhoto(response.data.url);
            setNasaTitle(response.data.title);
            setNasaDate(response.data.date);
            setNasaExplanation(response.data.explanation);
            setNasaCopyrightInfo(response.data.copyright);
            })
            .catch(err => console.log("Image not found", err));
    }, []);

    return (
        
        <div className="container">
            <h1>{ nasaTitle }</h1>
            <h4>Today's Date: { nasaDate }</h4>
            <img src={ nasaPhoto } alt="Nasa photo of the day"/>
            <h6>&copy; { nasaCopyrightInfo }</h6>
            <h3>Fun Facts</h3>
            <p> { nasaExplanation }</p>
        </div>
        
    )
}

export default NasaPhoto;


