import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, CardHeader, CardImg, CardText, CardBody, CardTitle, Row, Col } from "reactstrap";
import styled from "styled-components";

function NasaPhoto() {
    const [nasaData, setNasaData] = useState({});
  
    //console.log(nasaData.explanation)
    useEffect(() => {
        axios.get("https://api.nasa.gov/planetary/apod?api_key=jbyxg3UbUNaxnAMo7PgiCr3zYAzonYx7KlAQzEfy")
            .then(response => {setNasaData(response.data)
                //console.log(response.data)
            })
            .catch(err => console.log("Image not found", err));
    }, {});

    return (
        <Row>
        <Col sm="6">
            <Card body inverse style={{borderColor:"slateblue"}}>
                <CardBody>
                    <CardHeader tag="h2">{nasaData.title}</CardHeader>
                    <CardTitle tag="h5">Today's Date: {nasaData.date}</CardTitle>
                </CardBody>
                <CardImg src={nasaData.url} alt="Nasa photo of the day"/>
                <CardBody>
                    <CardText className="copyright">&copy; {nasaData.copyright}</CardText>
                    <CardTitle tag="h2">Fun Facts</CardTitle>
                    <CardText>{nasaData.explanation}</CardText>
                </CardBody>
            </Card>
        </Col>
        </Row>
    )
}

export default NasaPhoto;


