import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiCss3,
  DiPhp
} from "react-icons/di";
import{
  BsGithub,
  BsBootstrapFill
}from "react-icons/bs"
import {
  SiHtml5,
  SiMysql
} from "react-icons/si";

const Techstack = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiHtml5 />
        <h2>Html</h2>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 />
        <h2>CSS</h2>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <h2>JavaScript</h2>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <BsBootstrapFill />
        <h2>Bootstrap</h2>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <h2>Node Js</h2>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <h2>React Js</h2>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <BsGithub />
      <h2>Github</h2>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPhp />
        <h2>Php</h2>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
        <h2>MySql</h2>
      </Col>
      
    </Row>
  );
}

export default Techstack;
