import React, { Component } from "react";
import { Row, Col, Button, Collapse } from "react-bootstrap";

class ProductDetails extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      open: false
    };
  }

  render() {
    // console.log(this.props);
    const product = this.props.products.map(item => {
      return (
        <Row key={item.id} className="prod-container">
          <Col md={6}>
            <img src={item.img} alt={item.description} />
          </Col>
          <Col md={6}>
            <h5>{item.name}</h5>
            <ul>
              <li>
                <strong>Style: </strong>
                {item.style}
              </li>
              <li>
                <strong>Desc: </strong>
                {item.description}
              </li>
              <li>
                <strong>Color: </strong>
                {item.color}
              </li>
              <li>
                <strong>Original price: </strong>
                <span className="old-price">£{item.oldPrice}</span>
              </li>
              <li>
                <strong>Our price: </strong>£{item.newPrice}
              </li>
              <li>
                <strong>Qty: </strong>
                {item.quantity}
              </li>
            </ul>
          </Col>
        </Row>
      );
    });

    const { open } = this.state;
    return (
      <>
        <Row className="show-grid">
          <Col md={12}>
            <Button
              className="bottom-25"
              onClick={() => this.setState({ open: !open })}
              aria-controls="example-collapse-text"
              aria-expanded={open}
            >
              See your order details
            </Button>
          </Col>
        </Row>
        <Collapse in={this.state.open}>
          <div>{product}</div>
        </Collapse>
      </>
    );
  }
}

export default ProductDetails;
