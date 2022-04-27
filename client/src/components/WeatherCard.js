import React from "react";
import {Card} from "react-bootstrap"
export default function WeatherCard (props) {
    return (
        <Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>Daily Forecast</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">{props.weather.temp} Degrees F</Card.Subtitle>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    
  </Card.Body>
</Card>

    //     <div>
    //         <p>{props.weather.temp}</p>
    //         <p>{props.weather.description}</p>
    //         <p>{props.weather.humidity}</p>
    //         <p></p>
    //         <p></p>
    //     </div>
    )
}