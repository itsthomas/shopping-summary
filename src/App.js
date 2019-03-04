import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import data from "./data";

import ProductDetails from "./components/ProductDetails";
import TaxSum from "./components/TaxSum";
import SubTotal from "./components/SubTotal";
import FinalPrice from "./components/FinalPrice";
import PromoCode from "./components/PromoCode";
import "./App.css";

// console.log(data.products);

// Defining our array of products. Our array contains two or more objects
const products = data.products;

// Creating a new array of only newPrices
const priceArray = products.map(product => {
  return product.newPrice;
});

// Summing newPrices from our new array together
let totalPrice = priceArray.reduce((total, amount) => total + amount);
totalPrice = totalPrice.toFixed(2);
// console.log(totalPrice);

class StateHolder extends Component {
  state = {
    totalPrice: totalPrice,
    vatRate: 0.2,
    promoCode: "DISCOUNT",
    discountRate: null,
    promoCodeValid: ""
  };

  checkPromo = e => {
    e.preventDefault();
    // console.log(e.target.elements.discountCode.value);
    const discountCode = e.target.elements.discountCode.value.toUpperCase();

    if (discountCode === this.state.promoCode) {
      this.setState({ discountRate: 0.1, promoCodeValid: "valid" });
    } else {
      this.setState({ discountRate: null, promoCodeValid: "invalid" });
    }
  };

  render() {
    return (
      <Container className="purchase-card">
        <h1>Shopping Summary</h1>
        <ProductDetails products={products} />
        <SubTotal totalPrice={this.state.totalPrice} />
        <TaxSum
          totalPrice={this.state.totalPrice}
          vatRate={this.state.vatRate}
        />
        <FinalPrice
          totalPrice={totalPrice}
          vatRate={this.state.vatRate}
          discountRate={this.state.discountRate}
        />

        <Row className="show-grid">
          <Col
            sm={{ span: 6, offset: 6 }}
            className={`promo ${
              this.state.promoCodeValid === "valid" ? "valid" : ""
            } `}
          >
            Promo code is valid.
          </Col>

          <Col
            sm={{ span: 6, offset: 6 }}
            className={`promo ${
              this.state.promoCodeValid === "invalid" ? "invalid" : ""
            } `}
          >
            Promo code is invalid!
          </Col>
        </Row>

        <PromoCode onCheckPromoCode={this.checkPromo} />
      </Container>
    );
  }
}

export default StateHolder;
