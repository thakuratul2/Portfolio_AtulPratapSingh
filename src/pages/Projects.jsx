import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import pg from "../assets/projects/pg.png"
import project from "../assets/projects/projects.png";
import admin from "../assets/projects/admin.png";
import lift from "../assets/projects/lift.png";
import kickstart from "../assets/projects/kickstart.png";

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kickstart}
              isBlog={false}
              title="Own Portfolio Website"
              description="Created my own portfolio website by using react js with bootstrap and custom css.
              📖 Multi-Page Layout

              🎨 Styled with React-Bootstrap and CSS with easy to customize colors

               📱 Fully Responsive."
              ghLink="https://github.com/thakuratul2/Portfolio_AtulPratapSingh"
            />
          </Col>

          

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={admin}
              isBlog={false}
              title="MIET BR APP ADMIN"
              description="This Admin panel website utilizes to built with Php and MySql, allowing for easy CRUD operations on user profiles, notices and admin panel. The user interface is designed for efficient student management and includes a complete process. The admin panel, accessible for CRUD on users and add teachers, includes a chart for statistics display."
              ghLink="https://github.com/thakuratul2/MIETAPP_ADMIN"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lift}
              isBlog={false}
              title="Early Brain Magic Website"
              description="This solution providing website built with Html, Css, Javascript. It displayed on a user-friendly interface designed using Bootstrap and styled-components for a seamless experience."
              ghLink="https://github.com/thakuratul2/BUYBusiness-Internship-"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pg}
              isBlog={false}
              title="Gurukul Website"
              description="Project Krypto is a Web 3 project that utilizes an Ethereum smart contract created using Solidity. It allows users to interact with their Metamask wallet and send Ethereum."
              ghLink="https://github.com/thakuratul2/Gurukul-BR-SOFTSOL-"
              demoLink="https://thakuratul2.github.io/Gurukul-BR-SOFTSOL-/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project}
              isBlog={false}
              title="Solidity Kickstart"
              description="Solidity Kickstart is a Web 3 project that utilizes an Ethereum smart contract created using Solidity. It includes all the functionality of a kickstart platform, enabling users to interact with their Metamask wallet, transfer Ethereum and participate in kickstart campaigns."
              ghLink="https://github.com/19sajib/Solidity-Kickstart"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Projects