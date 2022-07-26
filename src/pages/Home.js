import React from "react";
import MainText from "../components/MainText";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import './Home.css'
import Image from "../components/Image";

const Home = () => {
  return (
    <div className="Home " >
      <Row>
        <Col>
          <MainText />
        </Col>
        <Col>
          <Image />
        </Col>
      </Row>
    </div>
  ); 
};

export default Home;
