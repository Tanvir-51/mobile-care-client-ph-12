import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

const Specialities = () => {
  return (
    <div>
      <h1 className="my-5  text-center">Additional Benifits</h1>
      <Container>
        <Row>
          <Col className="mb-3">
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title className="text-success fw-bold">
                  The best experiences
                </Card.Title>
                <hr />
                <Card.Text>
                  Get the most out of the devices you love with high‑quality
                  content and services. Also with attractive specifications.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title className="text-success fw-bold">
                  Exclusive Knowledge
                </Card.Title>
                <hr />
                <Card.Text>
                  We’ve done our research. Our scouts are always busy finding
                  out more about new mobiles, activities on offer nearby.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title className="text-success fw-bold">
                  Passionate Service
                </Card.Title>
                <hr />
                <Card.Text>
                  Our service team will cater to your special requests. We offer
                  expert and passionate advice for finding the right device.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title className="text-success fw-bold">
                  Best Price Guarantee
                </Card.Title>
                <hr />
                <Card.Text>
                  We offer the best devices at the best prices. If you find the
                  same devices cheaper elsewhere, we will refund the difference.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title className="text-success fw-bold">
                  Secure Booking
                </Card.Title>
                <hr />
                <Card.Text>
                  Our payment system is secure and your credit card and personal
                  information is encrypted.We work to guarantee your privacy.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title className="text-success fw-bold">
                  Best Resale prices
                </Card.Title>
                <hr />
                <Card.Text>
                  We provide a cost-effective model that you can sell it back to
                  us at a more efficient prices than any other shops.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Specialities;
