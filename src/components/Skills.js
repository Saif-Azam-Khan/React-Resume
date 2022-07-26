import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import "./Skills.css"

function Skills() {
  const myStyle={
    backgroundImage: 
"url('https://cdn-icons-png.flaticon.com/512/732/732212.png')",
    // height:'100vh',
    // marginTop:'-70px',
    // fontSize:'50px',
    
    backgroundRepeat: 'no-repeat',
};
  return (
    <div>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Technical Skills</Accordion.Header>
          <Accordion.Body>
            <Tab.Container
              id="list-group-tabs-example"
              defaultActiveKey="#link1"
            >
              <Row>
                <Col sm={3}>
                  <ListGroup>
                    <ListGroup.Item action href="#link1">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
                        width="25px"
                        alt="img"
                      ></img>
                       React.js
                    </ListGroup.Item>
                    <ListGroup.Item action href="#link2">
                      <img
                        src="https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png"
                        width="25px"
                        alt="img"
                      ></img>
                      Redux
                    </ListGroup.Item>
                    <ListGroup.Item action href="#link3">
                      <img
                        src="https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/267_Python-512.png"
                        width="25px"
                        alt="img"
                      ></img>
                       Python
                    </ListGroup.Item>
                    <ListGroup.Item action href="#link4">
                      <img
                        src="https://www.svgrepo.com/show/303360/nodejs-logo.svg"
                        width="25px"
                        alt="img"
                      ></img>
                      Node.js
                    </ListGroup.Item>
                    <ListGroup.Item action href="#link5">
                      <img
                        src="https://cdn.iconscout.com/icon/free/png-256/javascript-2752148-2284965.png"
                        width="23px"
                        alt="img"
                      ></img>
                      JavaScript
                    </ListGroup.Item>
                    <ListGroup.Item action href="#link6">
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/732/732212.png"
                        width="25px"
                        alt="img"
                      ></img>
                      HTML,
                      <img
                        src="https://www.kindpng.com/picc/m/464-4640184_css3-png-download-css-icon-transparent-png.png"
                        width="25px"
                        alt="img"
                      ></img>
                      CSS
                    </ListGroup.Item>
                    <ListGroup.Item action href="#link7">
                      <img
                        src="https://www.desuvit.com/wp-content/uploads/2021/03/mongodb-icon.png"
                        width="25px"
                        alt="img"
                      ></img>
                       MongoDB
                    </ListGroup.Item>
                  </ListGroup>
                </Col>
                <Col sm={9}>
                  <Tab.Content>
                    <Tab.Pane eventKey="#link1"  className="content1">
                      <Card body  style={myStyle}>
                      {/* <Card.Img variant="" src="https://cdn-icons-png.flaticon.com/512/732/732212.png" /> */}
                        <h4>React.js</h4>
                        <br></br>
                        <p>
                          React is a free and open-source front-end JavaScript
                          library for building user interfaces based on UI
                          components. It is maintained by Meta and a community
                          of individual developers and companies.
                        </p>
                        <p>
                          Most of my projects that I make are based on React, As
                          it is my primary technology
                        </p>
                      </Card>
                    </Tab.Pane>
                    <Tab.Pane eventKey="#link2">
                      <Card body>
                        <h4>Redux</h4>
                        <br></br>
                        <p>
                          Redux is a predictable state container for JavaScript
                          apps. It helps you write applications that behave
                          consistently, run in different environments (client,
                          server, and native), and are easy to test. On top of
                          that, it provides a great developer experience, such
                          as live code editing combined with a time traveling
                          debugger.
                        </p>
                      </Card>
                    </Tab.Pane>
                    <Tab.Pane eventKey="#link3">
                      <Card body>
                        <h4>Python</h4>
                        <br></br>
                        <p>
                          Python is a high-level, interpreted, general-purpose
                          programming language. Its design philosophy emphasizes
                          code readability with the use of significant
                          indentation. Python is dynamically-typed and
                          garbage-collected.
                        </p>
                        <p>
                          I have been testing my skills on hackkerrenck and so
                          far I have 5 stars for Python.
                        </p>
                      </Card>
                    </Tab.Pane>
                    <Tab.Pane eventKey="#link4">
                      <Card body>
                        <h4>Node.js</h4>
                        <br></br>
                        <p>
                          Node.js is an open-source, cross-platform, back-end
                          JavaScript runtime environment that runs on the V8
                          engine and executes JavaScript code outside a web
                          browser, which was designed to build scalable network
                          applications.
                        </p>
                      </Card>
                    </Tab.Pane>
                    <Tab.Pane eventKey="#link5">
                      <Card body>
                        <h4>JavaScript</h4>
                        <br></br>
                        <p>
                          JavaScript, often abbreviated JS, is a programming
                          language that is one of the core technologies of the
                          World Wide Web, alongside HTML and CSS. As of 2022,
                          98% of websites use JavaScript on the client side for
                          web page behavior, often incorporating third-party
                          libraries.
                        </p>
                      </Card>
                    </Tab.Pane>
                    <Tab.Pane eventKey="#link6">
                      <Card body>
                        <h4> HTML, CSS</h4>
                        <br></br>
                        <p>
                          The HyperText Markup Language or HTML is the standard
                          markup language for documents designed to be displayed
                          in a web browser. It can be assisted by technologies
                          such as Cascading Style Sheets and scripting languages
                          such as JavaScript.
                        </p>
                        <p>
                          Cascading Style Sheets is a style sheet language used
                          for describing the presentation of a document written
                          in a markup language such as HTML or XML. CSS is a
                          cornerstone technology of the World Wide Web,
                          alongside HTML and JavaScript.
                        </p>
                      </Card>
                    </Tab.Pane>
                    <Tab.Pane eventKey="#link7">
                      <Card body>
                        <h4>MongoDB</h4>
                        <br></br>
                        <p>
                          MongoDB is a source-available cross-platform
                          document-oriented database program. Classified as a
                          NoSQL database program, MongoDB uses JSON-like
                          documents with optional schemas. MongoDB is developed
                          by MongoDB Inc. and licensed under the Server Side
                          Public License which is deemed non-free by several
                          distributions.
                        </p>
                      </Card>
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Skills</Accordion.Header>
          <Accordion.Body>
            <ListGroup as="ol" numbered>
              <ListGroup.Item as="li">
                Excellent communication skills
              </ListGroup.Item>
              <ListGroup.Item as="li">Urge to learn new things</ListGroup.Item>
              <ListGroup.Item as="li">Dedicated to work</ListGroup.Item>
              <ListGroup.Item as="li">Well organized</ListGroup.Item>
              <ListGroup.Item as="li">Result driven</ListGroup.Item>
              <ListGroup.Item as="li">Loyal</ListGroup.Item>
            </ListGroup>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Silent Skills</Accordion.Header>
          <Accordion.Body>
            <ListGroup as="ol" numbered>
              <ListGroup.Item as="li">
                Comfortable working in night shifts
              </ListGroup.Item>
              <ListGroup.Item as="li">A team player</ListGroup.Item>
              <ListGroup.Item as="li">
                Have good knowledge of electronic components
              </ListGroup.Item>
              <ListGroup.Item as="li">Good in sports</ListGroup.Item>
            </ListGroup>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default Skills;
