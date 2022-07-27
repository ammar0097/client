import React from "react";
import MainText from "../components/MainText";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Home.css";
import Image from "../components/Image";
import ButtonCv from "../components/ButtonCv";

const Home = () => {
  return (
    <div className="Home ">
      <Row>
        <Col>
          <MainText xs={12}  />
        </Col>
        <Col>
          <Row xs= {0} md="auto">
            <Image />
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Home;
