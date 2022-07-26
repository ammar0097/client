import React from "react";
import MainText from "../components/MainText";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import './Home.css'

const Home = () => {
  return (
    <div className="Home">
      <Row>
        <Col>
          <MainText />
        </Col>
      </Row>
    </div>
  );
};

export default Home;
