import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Header from "./Layouts/Header";
import "../App.css";
import ShowWeather from "./WeatherResult";

const Main = () => {
  const [searchValue, setSearchValue] = useState("");
  const [data, setData] = useState(null)

  const handleSearchValue = (e) => {
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          `http://api.openweathermap.org/data/2.5/weather?q=${searchValue},uk&APPID=${process.env.REACT_APP_API_KEY}`
        );
        const result = await response.json();
        setData(result)
        // console.log(data);
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
      <Container className="p-5 mb-4 bg-body-tertiary rounded-3 custom">
        <div className="container-fluid py-5">
          <h1 className="display-5 fw-bold">Custom Jumbotron</h1>
          <p className="col-md-8 fs-4">
            Using a series of utilities, you can create this Jumbotron, just
            like the one in.
          </p>
          <hr />

          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="Enter location"
              aria-label="Location"
              aria-describedby="basic-addon1"
              value={searchValue}
              onChange={(e) => handleSearchValue(e)}
            />
          </InputGroup>
        </div>
      </Container>
      <ShowWeather data={data} />
    </div>
  );
};

export default Main;
