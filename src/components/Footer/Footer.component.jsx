import React from "react";
import { Col, Row } from "react-grid-system";
import { Container } from "../../constants/container";
import { FooterContainer } from "./Footer.style";

function Footer() {
  return (
    <>
      <Container sm>
        <FooterContainer>
          <Row>
            <Col sm={6} md={3}>
              <p>Address</p>
              <li>
                Store & Office Jl. Setrasari Kulon III, No. 10-12, Sukarasa,
                Sukasari, Bandung, Jawa Barat, Indonesia 40152
              </li>
              <p>Office Hour</p>
              <li>Monday - Sunday</li>
              <li>10.00 - 18.00</li>
            </Col>
            <Col sm={6} md={3}>
              h
            </Col>
            <Col sm={6} md={3}>
              <li>Warranty & Complaints</li>
              <li>Order & Shipping</li>
              <li>Tracking Order</li>
              <li>About Us</li>
              <li>Repair</li>
              <li>Terms</li>
              <li>FAQ</li>
            </Col>
            <Col sm={6} md={3}>
              <li>Mengenal Arti Cukup</li>
              <li>Tell Your Difference</li>
              <li>Waykambas</li>
              <li>Rebrand</li>
              <li>Gallery</li>
              <li>Singo</li>
              <li>Rakai</li>
            </Col>
          </Row>
        </FooterContainer>
      </Container>
    </>
  );
}

export default Footer;
