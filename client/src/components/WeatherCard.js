import React from "react";
import {Card} from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css";
import '../weather.css'

export default function WeatherCard (props) {
    <div>
    <Card
        img="http://openweathermap.org/img/w/04d.png"
        />
        </div>
    const center = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        
      };

    return (
        
        <Card 
        className="wrapper"
        style={{ width: '12rem' }}
        
        >
  <Card.Body>
    <Card.Title>{props.weather.temp} Degrees F</Card.Title>
        <img src={props.weather.picture}/>
    <Card.Text>{props.weather.description}</Card.Text>
    <Card.Text>{props.weather.humidity}% humidity</Card.Text>
    
  </Card.Body>
</Card>

    )
}