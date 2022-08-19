import React from "react";
import Card from "react-bootstrap/Card";
import crypto from "../components/crypto.JPG";
import portfolio from "../components/portfolio.png";
import "./Projects.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { AiOutlineGithub } from "react-icons/ai";
import { GrView } from "react-icons/gr";

const Projects = () => {
  return (
    <div className="Projects">
      <Row className="cards">
        <Col sm={12} style={{ width: "18rem" }}>
          <Card style={{ alignItems: "center" }}>
            <Card.Img variant="top" src={crypto} />
            <Card.Body>
              <Card.Title>CryptooTracker</Card.Title>
              <Card.Text>
                CryptooTracker text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <AiOutlineGithub size={40} />
              <GrView size={40} />
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} style={{ width: "18rem" }}>
          <Card>
            <Card.Img variant="top" src={portfolio} />
            <Card.Body>
              <Card.Title>Portfolio</Card.Title>
              <Card.Text>
                portfolio text to build on the card title and make up the bulk
                of the card's content.
              </Card.Text>
              <AiOutlineGithub size={40} />
              <GrView size={40} />
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} style={{ width: "18rem" }}>
          <Card>
            <Card.Img variant="top" src={crypto} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of.
              </Card.Text>
              <AiOutlineGithub size={40} />
              <GrView size={40} />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Projects;
