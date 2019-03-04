import React from "react";
import { Row, Col } from "react-bootstrap";

const SubTotal = props => {
  return (
    <Row className="show-grid">
      <Col sm={6}>
        <h4>Subtotal:</h4>
      </Col>
      <Col sm={6}>
        <h5>£{props.totalPrice}</h5>
      </Col>
    </Row>
  );
};

export default SubTotal;
