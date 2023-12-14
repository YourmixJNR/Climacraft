// Main.jsx
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Header from "./Layouts/Header";
import "./Main.css";
import WeatherResult from "../Component/WeatherResult";

const Main = () => {
  const [searchValue, setSearchValue] = useState("");
  const [data, setData] = useState(null);

  const handleSearchValue = (e) => {
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${searchValue},&APPID=${process.env.REACT_APP_API_KEY}`
        );
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.log("Error fetching...", error);
      }
    };

    if (searchValue.trim() !== "") {
      fetchWeather();
    }
  }, [searchValue]);

  return (
    <div>
      <Header />

      <Container className="p-3 mb-4 bg-body-tertiary rounded-3 custom">
        <div className="container-fluid py-5">
          <h1 className="display-5 fw-bold mb-4">Weather Now ☁️</h1>
          <p className="col-md-8 fs-4 mb-5">
            Check the current weather conditions for any location worldwide.
            Enter a city name below!
          </p>
          <hr />
          <br />
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">🌍</InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="Please enter location"
              aria-label="Location"
              aria-describedby="basic-addon1"
              value={searchValue}
              onChange={(e) => handleSearchValue(e)}
            />
          </InputGroup>
        </div>

        <div className="p-3">
          <WeatherResult data={data} />
        </div>
      </Container>
    </div>
  );
};

export default Main;
