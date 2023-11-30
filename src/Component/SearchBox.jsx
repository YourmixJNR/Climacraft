import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

const SearchBox = () => {
  const [searchValue, setSearchValue] = useState("");
  
  const handleSearchValue = (e) => {
    setSearchValue(e.target.value)
  }

  return (
    <div>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
        <Form.Control
          type="text"
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
          value={searchValue}
          onChange={(e) => handleSearchValue(e)}
        />
      </InputGroup>
    </div>
  );
};

export default SearchBox;
