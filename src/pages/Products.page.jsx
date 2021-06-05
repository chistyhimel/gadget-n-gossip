import React, { useState } from "react";
import { Col, Row } from "react-grid-system";
import AllProducts from "../components/AllProducts/AllProducts.component";
import CategoryDropdown from "../components/CategoryDropdown/CategoryDropdown.component";
import { Container } from "../constants/container";

import "react-dropdown/style.css";
import SortByColor from "../components/SortBySections/SortByColor.component";
import SortByBrand from "../components/SortBySections/SortByBrand.component";
import SortByPrice from "../components/SortBySections/SortByPrice.component";

function Products() {
  return (
    <>
      <Container lg>
        <Row style={{ margin: "30px 0px" }}>
          <Col md={2}>
            <CategoryDropdown />
            <SortByPrice />
            <SortByColor />
            <SortByBrand />
          </Col>
          <Col md={10}>
            <AllProducts />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Products;
