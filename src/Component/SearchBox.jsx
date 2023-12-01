import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

const SearchBox = () => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchValue = (e) => {
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${searchValue},uk&APPID=${process.env.REACT_APP_API_KEY}`);
        const data = await response.json();
        console.log(data)
       
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
  );
};

export default SearchBox;
