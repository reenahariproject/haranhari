import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Accomplishments = () => {

  return (
    <section className="project" id="Accomplishments">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Technical Certification</h2><br></br>
                  <p> <strong>Certificate for Web Designing – 30 Hours</strong><br/>
                    Organized by Jamal Mohamed College (Autonomous), Tiruchirappalli<br/>
                            <em>26th July to 31st July 2021</em>
                                 <br/><br/>

                      <strong>Certificate for PC Hardware and Troubleshooting – 30 Hours</strong><br />
                    Organized by Jamal Mohamed College (Autonomous), Tiruchirappalli<br />
                            <em>18th July to 23rd July 2022</em>
                  </p>
                
              </div>}
              
            </TrackVisibility>
            <br></br><br></br><br></br>
            
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col size={12}>
          <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Interests</h2>
                <li>Workouts 💪</li>
                <li>Volley Ball 🏐</li>
                <li>Photography 📸</li>
                <li>Web Designing 💻</li>
                <br></br><br></br><br></br><br></br>
              </div>}
              
            </TrackVisibility>
            
            
          </Col>
        </Row>
      </Container>
      
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}