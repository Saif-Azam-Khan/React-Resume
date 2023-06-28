import { useState } from "react";
import "./Experience.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import { work_experience } from "../utils/data";

function Experience() {
  const [cardShow, setCardShow] = useState(0);
  const [animate, setAnimate] = useState("");

  const handleClick = () => {
    if (cardShow < work_experience.length - 1) {
      setAnimate("animate");
      setTimeout(() => {
        setAnimate("revanimate");
        setCardShow(cardShow + 1);
      }, 610);
    } else {
      setAnimate("animate");
      setTimeout(() => {
        setAnimate("revanimate");
        setCardShow(0);
      }, 610);
    }
  };
  return (
    <div>
      <h1>WORK EXPERIENCE</h1>
      <br></br>
      <Row>
        <Col>
          <ListGroup>
            {work_experience.map((item) => {
              return (
                <ListGroup.Item
                  as="li"
                  key={item.id}
                  active={cardShow == item.id}
                >
                  {item.company_name} as {item.position}
                </ListGroup.Item>
              );
            })}
          </ListGroup>
          <br></br>
          <Button onClick={handleClick}>
            {cardShow === work_experience.length - 1 ? "Prev" : "Next"}
          </Button>
        </Col>
        <Col>
          <div className={animate}>
            {work_experience
              .filter((item) => item.id == cardShow)
              .map((item) => {
                return (
                  <Card
                    key={item.id}
                    style={{
                      width: "40rem",
                      margin: "auto",
                      textAlign: "left",
                    }}
                  >
                    <Card.Body>
                      <Card.Title>{item.company_name}</Card.Title>
                      <h3>
                        {item.date_of_joining} - {item.end_date}
                      </h3>
                      <h5>{item.position}</h5>
                      <ul>
                        {item.responsibilities.map((e) => {
                          return <li key={e}>{e}</li>;
                        })}
                      </ul>
                      {item.environment !== undefined ? (
                        <p>Environment: {item.environment}</p>
                      ) : null}
                    </Card.Body>
                  </Card>
                );
              })}
          </div>
        </Col>
      </Row>
      <br></br>
    </div>
  );
}

export default Experience;
