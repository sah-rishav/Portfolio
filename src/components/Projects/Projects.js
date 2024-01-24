import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import movie from "../../Assets/Projects/movie.jpg";
import airlines from "../../Assets/Projects/airlines.jpg";
import Insta from "../../Assets/Projects/Insta.jpg";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>   
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Insta}
              isBlog={false}
              title="Imstagram Clone"
              description="Used MERN stack to build a website inspired by Instagram with full functionality and responsive."
              ghLink="https://github.com/sah-rishav/Socialmedia"
              
            />
          </Col>  
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={movie}
              isBlog={false}
              title="Movie Recommendation System"
              description="Used the movie dataset from Kaggle and trained a collaborative filtering model. I was able to achieve an accuracy of 94% ."
              ghLink="https://github.com/sah-rishav/Movie-Recommendation-System-Using-Machine-Learning"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={airlines}
              isBlog={false}
              title="Airline Fair Predection using Machine Learning"
              description="Using 'Random forest Algorithm' to predict Airlines Fair with accuracy of 92%."
              ghLink="https://github.com/sah-rishav/Airline-Fair-Predection-using-Machine-Learning"
              />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
