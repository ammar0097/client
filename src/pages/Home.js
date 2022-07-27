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
        <Col xsm={12} lg={6}>
          <MainText />
        </Col>
        <Col xsm={0} lg={6}>
          <Row className={"d-none d-lg-block"}>
            <Image />
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Home;
