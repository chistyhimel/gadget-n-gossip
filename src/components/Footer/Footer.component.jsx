import React from "react";
import { Col, Row } from "react-grid-system";
import { Container } from "../../constants/container";
import { FooterContainer } from "./Footer.style";
import logoWhite from "../../assets/icons/logo-white.png";

function Footer() {
  return (
    <>
      <FooterContainer>
        <Container sm>
          <Row>
            <Col xs={6} md={3}>
              <img src={logoWhite} alt="Gadget & Gossip" />
              <p>Address</p>
              <li>
                Store & Office Jl. Setrasari Kulon III, No. 10-12, Sukarasa,
                Sukasari, Bandung, Jawa Barat, Indonesia 40152
              </li>
              <p>Office Hour</p>
              <li>Monday - Sunday</li>
              <li>10.00 - 18.00</li>
            </Col>
            <Col xs={6} md={3}>
              <p>Get in touch</p>
              <span className="underline" />
              <li>
                <div>Phone</div> <div>022-20277564</div>
              </li>
              <li>
                <div>Service Center</div> <div>0811-233-8899</div>
              </li>
              <li>
                <div>Customer Service</div> <div>0811-235-9988</div>
              </li>
            </Col>
            <Col xs={6} md={3}>
              <p>Useful Link</p>
              <span className="underline" />
              <li>Warranty & Complaints</li>
              <li>Order & Shipping</li>
              <li>Tracking Order</li>
              <li>About Us</li>
              <li>Repair</li>
              <li>Terms</li>
              <li>FAQ</li>
            </Col>
            <Col xs={6} md={3}>
              <p>Campaign</p>
              <span className="underline" />
              <li>Mengenal Arti Cukup</li>
              <li>Tell Your Difference</li>
              <li>Waykambas</li>
              <li>Rebrand</li>
              <li>Gallery</li>
              <li>Singo</li>
              <li>Rakai</li>
            </Col>
          </Row>
        </Container>
      </FooterContainer>
    </>
  );
}

export default Footer;
