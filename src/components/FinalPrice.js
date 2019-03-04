import React from "react";
import { Row, Col } from "react-bootstrap";

const FinalPrice = props => {
  // console.log("Props from FinalPrice", props);
  const totalPrice = parseFloat(props.totalPrice);
  const vat = parseFloat(props.totalPrice * props.vatRate);
  const discount = parseFloat(props.discountRate * props.totalPrice);

  return (
    <Row className="show-grid">
      <Col sm={6}>
        <h4>Final price:</h4>
      </Col>
      <Col sm={6}>
        <h3>£{(totalPrice + vat - discount).toFixed(2)}</h3>
      </Col>
    </Row>
  );
};

export default FinalPrice;
