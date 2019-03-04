import React, { Component } from "react";
import { Row, Col, Button, Popover, OverlayTrigger } from "react-bootstrap";

const popover = (
  <Popover id="popover-basic" title="VAT notice">
    Our tax is 20% and it's calculated based on VAT rate in United Kingdom.
  </Popover>
);

class TaxSum extends Component {
  render() {
    // console.log("props from TaxSum", this.props);

    return (
      <Row className="show-grid">
        <Col sm={6}>
          <OverlayTrigger trigger="hover" placement="top" overlay={popover}>
            <Button variant="dark">VAT charge</Button>
          </OverlayTrigger>
        </Col>
        <Col sm={6}>
          £{(this.props.totalPrice * this.props.vatRate).toFixed(2)}
        </Col>
      </Row>
    );
  }
}

export default TaxSum;
