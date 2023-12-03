import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const ShowWeather = ({ data }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
          {data.weather.map((item) => (
            <div key={item.id}>{item.description}</div>
          ))}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default ShowWeather;
