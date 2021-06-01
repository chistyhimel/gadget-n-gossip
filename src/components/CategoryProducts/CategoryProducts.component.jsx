import React from "react";
import { Col, Row } from "react-grid-system";
import { Container } from "../../constants/container";
import { categoryProductsData } from "../../data/category-products-data";
import ProductCardSecondary from "../ProductCardSecondary/ProductCardSecondary.component";
import SeeMoreButton from "../SeeMoreButton/SeeMoreButton.component";
import { CategoryProductsWrap } from "./CategroyProducts.style";

function CategoryProducts() {
  return (
    <>
      <CategoryProductsWrap>
        <Container md>
          <Row>
            {categoryProductsData.map((category, idx) => (
              <Col md={4} key={idx}>
                <h1>{category.title}</h1>
                {category.products.map((product, idx) => (
                  <ProductCardSecondary key={idx} product={product} />
                ))}
              </Col>
            ))}
          </Row>
          <SeeMoreButton />
        </Container>
      </CategoryProductsWrap>
    </>
  );
}

export default CategoryProducts;
