import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const AboutComponent = () => {
  return (
    <Container className="p-5" style={{ width: "100vw", height: "90vh", backgroundColor: "#FAF0E6" }} fluid>
      <Row>
        <Col>
          <Container className="d-flex flex-column align-items-center gap-3">
            <h2>About</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga
              praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, optio reprehenderit? Voluptatem vero aperiam facere repellendus eos placeat, tenetur
              mollitia quaerat optio officia omnis illum voluptatum iste pariatur ratione quibusdam!
            </p>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutComponent;
