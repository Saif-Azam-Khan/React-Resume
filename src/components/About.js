import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";

import "./About.css";

function About() {
  return (
    <div>
      <Row>
        <Col>
          <Card.Body>
            <h4>I am a motivated and result-driven engineer seeking a better
              opportunity where my skills can be applied and where I can grow
              professionally.
              
            </h4>
          </Card.Body>
        </Col>
      </Row>
      <br></br>
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Education</Card.Title>
              <br></br>
              <Card.Subtitle className="mb-2 text-muted">
                Bachelor of Engineering
              </Card.Subtitle>
              <Card.Text>RGPV University [2016-20] -71%</Card.Text>

              <Card.Subtitle className="mb-2 text-muted">
                Higher Secondary
              </Card.Subtitle>
              <Card.Text>
                Red Rose school affiliated to CBSE [2016] -62%
              </Card.Text>
              <Card.Subtitle className="mb-2 text-muted">
                High School
              </Card.Subtitle>
              <Card.Text>
                Bal Bhavan school affiliated to CBSE [2014] -64%
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Hobbies</Card.Title>
              <ListGroup variant="flush">
                <ListGroup.Item>Watching movies</ListGroup.Item>
                <ListGroup.Item>Playing video games</ListGroup.Item>
                <ListGroup.Item>Shooting</ListGroup.Item>
                <ListGroup.Item>Trekking</ListGroup.Item>
                <ListGroup.Item>Coding</ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default About;
