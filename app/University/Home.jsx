import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import Navbar from "/app/University/Navbar";
import { Container, Row, Col, Button } from "react-bootstrap";

const Home = () => {
    return (
      <>
        <div className="home-container">
          <Navbar />
          <div className="home-background-container">
            <div className="home-text-section">
              <Container>
                <div className="relative h-full w-full bg-slate-950"></div>
                <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)]"></div>
                <div style={{ textAlign: "left" }}>
                  {" "}
                  <h1 className="primary-heading">Dashboard</h1>
                  <p></p>
                </div>
                <Row>
                  <Col>
                    <Button variant="secondary" size="lg">
                      <p></p>
                      <p></p>
                      Total Students
                      <p></p>
                      <p></p>
                    </Button>
                  </Col>
                  <Col>
                    <Button variant="secondary" size="lg">
                      <p></p>
                      <p></p>
                      Active Jobs
                      <p></p>
                      <p></p>
                    </Button>
                  </Col>
                  <Col>
                    <Button variant="secondary" size="lg">
                      <p></p>
                      <p></p>
                      Current Charities
                      <p></p>
                      <p></p>
                    </Button>
                  </Col>
                </Row>
                <p></p>
                <ListGroup items={thisweekitems} heading="This Week"></ListGroup>
              </Container>
            </div>
          </div>
        </div>
      </>
    );
  };
  
  export default Home;
  