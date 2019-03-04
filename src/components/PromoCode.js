import React from "react";
import {
  Row,
  Col,
  Button,
  Collapse,
  InputGroup,
  FormControl
} from "react-bootstrap";

class PromoCode extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      open: false
    };
  }

  render() {
    // console.log("Props from PromoCode", this.props);

    const { open } = this.state;
    return (
      <Row className="show-grid">
        <Col md="auto">
          <Button
            className="btn-danger bottom-15"
            onClick={() => this.setState({ open: !open })}
            aria-controls="example-collapse-text"
            aria-expanded={open}
          >
            Apply promo code
          </Button>
          <Collapse in={this.state.open}>
            <div id="example-collapse-text">
              <p>Anim pariatur cliche reprehenderit, enim eiusmod high life</p>
              <form onSubmit={this.props.onCheckPromoCode}>
                <InputGroup className="mb-3">
                  <FormControl
                    name="discountCode"
                    placeholder="Insert your promo code here"
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                  />
                </InputGroup>
                <Button type="submit" className="apply-btn" variant="success">
                  Apply
                </Button>
              </form>
            </div>
          </Collapse>
        </Col>
      </Row>
    );
  }
}

export default PromoCode;
