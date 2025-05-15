import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
// import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
// import newLogo from '../assets/img/newlogo.png';


export const Training = () => {

  return (
    <section className="project" id="training">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Training/Course <br></br>Certifications</h2><br></br>
                <div className="text-center">
                {/* <img src={newLogo} alt="Company Logo" style={{ width: '150px' }} /> */}
                </div>
                <p>I've Completed a Four Month hands-on course in Spring Boot And React- Talent Turbo ,Kanyakumari<br></br>
                Nov 2024 - Feb 2025<br></br>
                <br></br><br></br>
                Full Stack Development- Tap Academy, Bangalore<br></br>
                Nov 2023 - Jun 2024<br></br>
                
                <br></br><br></br>
                Manual Testing- Tap Academy, Bangalore<br></br>
                Nov 2023 - Jun 2024<br></br>
                
                </p>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}