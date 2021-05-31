import React from "react";
import { Container } from "../../constants/container";
import { SocialMediaSectionWrap } from "./SocialMediaSection.style";
import { FaFacebook, FaYoutube, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Col, Row } from "react-grid-system";

function SocialMediaSection() {
  return (
    <>
      <SocialMediaSectionWrap>
        <Container md>
          <Row>
            <Col md={8}>
              <h2>Connected here for offers</h2>
            </Col>
            <Col md={4}>
              {" "}
              <div className="social__icons__wrap">
                <FaFacebook />
                <FaYoutube />
                <FaInstagram />
                <FaLinkedin />
              </div>
            </Col>
          </Row>
        </Container>
      </SocialMediaSectionWrap>
    </>
  );
}

export default SocialMediaSection;
