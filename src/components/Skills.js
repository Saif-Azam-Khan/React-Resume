import { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row"
import { skills, silentSkills, techStack } from "../utils/data";

import "./Skills.css";

function Skills() {
  const [techToShow, setTechToShow] = useState(0);

  const handleClick = (key) => {
    setTechToShow(key);
  };

  return (
    <div>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Technical Skills</Accordion.Header>
          <Accordion.Body>
              <Row>
                <Col sm={3}>
                  <ListGroup>
                    {techStack.map((item) => {
                      return (
                        <ListGroup.Item
                          key={item.id}
                          onClick={() => handleClick(item.id)}
                        >
                          <img src={item.icon} width="25px" alt="img"></img>
                          <br></br> {item.technology}
                        </ListGroup.Item>
                      );
                    })}
                  </ListGroup>
                </Col>
                <Col sm={9}>
                  {techStack
                    .filter((e) => e.id == techToShow)
                    .map((item) => {
                      return (
                        <Card body key={item.id}>
                          <h4>{item.technology}</h4>
                          <br></br>

                          {item.description
                            .split("\n")
                            .map((paragraph, index) => (
                              <p key={index}>{paragraph}</p>
                            ))}
                          {item.link ? (
                            <a href={item.link} src={item.link}>
                              {item.linkMessage}
                            </a>
                          ) : null}
                        </Card>
                      );
                    })}
                </Col>
              </Row>
            
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Skills</Accordion.Header>
          <Accordion.Body>
            <ListGroup as="ol" numbered>
              {skills.map((item) => {
                return <ListGroup.Item as="li" key={item.id}>{item}</ListGroup.Item>;
              })}
            </ListGroup>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Silent Skills</Accordion.Header>
          <Accordion.Body>
            <ListGroup as="ol" numbered>
              {silentSkills.map((item) => {
                return <ListGroup.Item as="li" key={item.id}>{item}</ListGroup.Item>;
              })}
            </ListGroup>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default Skills;
