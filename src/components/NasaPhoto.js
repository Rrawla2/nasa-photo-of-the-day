import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, CardHeader, CardImg, CardText, CardBody, CardTitle, Row, Col } from "reactstrap";

function NasaPhoto() {
    const [nasaData, setNasaData] = useState({});
    // const [nasaPhoto, setNasaPhoto] = useState("");
    // const [nasaTitle, setNasaTitle] = useState("");
    // const [nasaDate, setNasaDate] = useState("");
    // const [nasaExplanation, setNasaExplanation] = useState("");
    // const [nasaCopyrightInfo, setNasaCopyrightInfo] = useState("");

    useEffect(() => {
        axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
            .then(response => {setNasaData(response.data)
            // setNasaPhoto(response.data.url);
            // setNasaTitle(response.data.title);
            // setNasaDate(response.data.date);
            // setNasaExplanation(response.data.explanation);
            // setNasaCopyrightInfo(response.data.copyright);
            })
            .catch(err => console.log("Image not found", err));
    }, []);

    return (
        <Row>
        <Col sm="6">
            <Card>
                <CardBody>
                    <CardHeader tag="h1">{nasaData.title}</CardHeader>
                    <CardTitle tag="h4">Today's Date: {nasaData.date}</CardTitle>
                </CardBody>
                <CardImg src={nasaData.url} alt="Nasa photo of the day"/>
                <CardBody>
                    <CardText>&copy; {nasaData.copyright}</CardText>
                    <CardTitle tag="h2">Fun Facts</CardTitle>
                    <CardText> {nasaData.explanation}</CardText>
                </CardBody>
            </Card>
        </Col>
        </Row>
    )
}

export default NasaPhoto;


