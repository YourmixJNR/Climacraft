import React from "react";
import { Container } from "react-bootstrap";
import Header from "./Layouts/Header";
import SearchBox from "./SearchBox";

const Main = () => {
  
  return (
    <div>
      <Header />
      <Container className="p-5 mb-4 bg-body-tertiary rounded-3">
        <div className="container-fluid py-5">
          <h1 className="display-5 fw-bold">Custom Jumbotron</h1>
          <p className="col-md-8 fs-4">
            Using a series of utilities, you can create this Jumbotron, just
            like the one in.
          </p>
          <hr />
          <SearchBox />
        </div>
      </Container>
    </div>
  );
};

export default Main;
