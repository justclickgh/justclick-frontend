import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Button, Card } from "antd";
import './style/index.css'
import { CameraOutlined, HighlightOutlined, Html5Outlined, ProjectOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
const ServicesPart = () => {
  return (
    <div style={{ backgroundColor: "rgb(250, 250, 250)" }} className="mt-5">
      <Container >

        <div className="text-center my-5 pt-5">
          <h4>What We Provide</h4>
        </div>

        <Row>
          <Col className="mb-4" xs="12" sm="6">
            <Card>
              <div className="icon text-center  " >
                <CameraOutlined style={{ color: "green", fontSize: "5rem" }} />

              </div>
              <div className="header-part text-center mt-3">
                <h6> Photography </h6>
              </div>
              <div className="body-side mt-3">
                <p>Photographers preserve the important events and people in our lives. Ceremonies are all recorded because they matter.</p>
              </div>
              <div className="action-part text-center mt-3">
                <Link to="/services/photography">
                  <Button  shape="round" className="mt-3" style={{ width: "45%", borderColor: "green", color: "green" }} > Learn More</Button>
                </Link>
              </div>
            </Card>
          </Col>
          <Col className="mb-4" xs="12" sm="6">
            <Card>
              <div className="icon text-center  " >
                <Html5Outlined style={{ color: "red", fontSize: "5rem" }} />

              </div>
              <div className="header-part text-center mt-3">
                <h6> Web/Mobil Designer </h6>
              </div>
              <div className="body-side mt-3">
                <p>Both mobile website and the application is a vital tool which helps in establishing and escalating brand value for any business domain.</p>
              </div>
              <div className="action-part text-center mt-3">
              
                <Link to="/mobile-and-web-developement">
                  <Button shape="round" className="mt-3" style={{ width: "45%", borderColor: "green", color: "green" }} > Learn More</Button>
                </Link>
              </div>
            </Card>
          </Col>
          <Col className="mb-4" xs="12" sm="6">
            <Card>
              <div className="icon text-center  " >
                <ProjectOutlined style={{ color: "pink", fontSize: "5rem" }} />

              </div>
              <div className="header-part text-center mt-3">
                <h6> Event Planning </h6>
              </div>
              <div className="body-side mt-3">
                <p>An event planner alleviates much of the stress and pressure, allowing you to relax and look forward to your event. Event planners can save you money, cover all the details, and organize a better event.</p>
              </div>
              <div className="action-part text-center mt-3">
                <Link to="/services/event-planning" >
                  <Button shape="round" className="mt-3" style={{ width: "45%", borderColor: "green", color: "green" }} > Learn More</Button>
                </Link>
              </div>
            </Card>
          </Col>
          <Col className="mb-4" xs="12" sm="6">
            <Card>
              <div className="icon text-center  " >
                <HighlightOutlined style={{ color: "blue", fontSize: "5rem" }} />


              </div>
              <div className="header-part text-center mt-3">
                <h6> Graphic Designers </h6>
              </div>
              <div className="body-side mt-3">
                <p>Designers communicate a message through art. They do this through the strategic placement of images and text..</p>
              </div>
              <div className="action-part text-center mt-3">
                <Link to="/services/graphic-design" >
                  <Button shape="round" className="mt-3" style={{ width: "45%", borderColor: "green", color: "green" }} > Learn More</Button>
                </Link>
              </div>
            </Card>
          </Col>

        </Row>
      </Container>
    </div>
  );
};

export default ServicesPart;
