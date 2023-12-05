// ShowWeather.jsx
import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const WeatherResult = ({ data }) => {
  if (!data || !data.weather || data.weather.length === 0) {
    
    return (
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>No weather data available</Card.Title>
        </Card.Body>
      </Card>
    );
  }

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={`https://openweathermap.org/img/wn/${data.weather.icon}@2x.png`} />
      <Card.Body>
        <Card.Title>Weather Details</Card.Title>
        <Card.Text>
          {data.weather.map((item) => (
            <div key={item.id}>
              {item.description}
            </div>
          ))}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default WeatherResult;
