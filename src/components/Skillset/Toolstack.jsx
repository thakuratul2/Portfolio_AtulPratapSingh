import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiCanva,
  SiNetlify,
  SiFirebase
} from "react-icons/si";

const Toolstack = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <h2>Vs Code</h2>
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
        <h2>Firebase</h2>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNetlify />
        <h2>Netlify</h2>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCanva />
        <h2>Canva</h2>
      </Col>
      
    </Row>
  );
}

export default Toolstack;
