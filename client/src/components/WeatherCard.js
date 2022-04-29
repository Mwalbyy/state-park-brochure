import React from "react";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../weather.css";

export default function WeatherCard(props) {
  return (
      <Card
        className="Wcontainer"
        style={{
          width: "12rem",
          display: "flex",
        }}
      >
        <Card.Body className="" style={{}}>
          <Card.Title>{props.weather.dt}</Card.Title>
          <Card.Text>{props.weather.temp} Degrees F</Card.Text>
          <img
            src={`http://openweathermap.org/img/w/${props.weather.picture}.png`}
            alt="icon"
          ></img>
          <Card.Text>{props.weather.description}</Card.Text>
          <Card.Text>Humidity {props.weather.humidity}%</Card.Text>
        </Card.Body>
      </Card>
  );
}
