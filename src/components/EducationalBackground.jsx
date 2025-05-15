import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';


export const EducationalBackground = () => {

  return (
    <section className="project" id="education">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Educational Background</h2><br></br>
                <div className="text-center">
                </div>
                <p>BCA- Jamal Mohamed College in Trichy<br></br>
                2020 - 2023<br></br><br></br>
                HSC- Govt Higher Secondary School<br></br>
                2017 - 2019<br></br><br></br>
                SSC- Govt High Secondary School<br></br>
                2016 - 2017</p>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}