import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from "../assets/img/nav-icon4.svg";
import telephone from "../assets/img/telephone.svg";
import envelope from "../assets/img/envelope.svg";



export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <div className="contact-details">
            <div className="social-icon">
              <a ><img src={telephone} alt="Icon" /></a> <span style={{ verticalAlign: 'middle' }}>+91 9597547838</span>
            </div>
            <div className="social-icon">
              <div>
                <a ><img src={envelope} alt="Icon" /></a> <span style={{ verticalAlign: 'middle' }}>harivip147@gmail.com</span>
              </div>              
            </div>
            </div>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/hari-haran-9b8931317/"><img src={navIcon1} alt="Icon" /></a>
              {/* <a href="#"><img src={navIcon2} alt="Icon" /></a> */}
              <a href="https://www.instagram.com/harii_.haran/"><img src={navIcon3} alt="Icon" /></a>
              {/* <a href="#"><img src={navIcon3} alt="Icon" /></a> */}
              <a href="https://github.com/reenahariproject"><img src={navIcon4} alt="Icon" /></a>
            </div>
            <p>Copyright 2025. All Rights Reserved @Hari Haran</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}