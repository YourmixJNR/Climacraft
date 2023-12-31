import React from "react";
import Card from "react-bootstrap/Card";
import Spinner from 'react-bootstrap/Spinner';

const ShowWeather = ({ data }) => {
  if (!data || !data.weather || !data.main || data.weather.length === 0) {
    return <Spinner animation="grow" />;
  }

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
        style={{ maxWidth: "100%", height: "auto" }}
      />
      {data.weather.map((item) => (
        <Card.Body key={item.id}>
          <Card.Title>Weather Details of {data.name}</Card.Title>
          <Card.Text>The Temperature is {data.main.temp}°C</Card.Text>
          <Card.Text>Weather: {item.description}</Card.Text>
          <Card.Text>Humidity: {data.main.humidity}%</Card.Text>
          <Card.Text>Wind Speed: {data.wind.speed} m/s</Card.Text>
        </Card.Body>
      ))}
    </Card>
  );
};

export default ShowWeather;
