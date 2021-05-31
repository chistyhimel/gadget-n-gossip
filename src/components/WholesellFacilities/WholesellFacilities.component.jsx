import React from "react";
import { Col, Row } from "react-grid-system";
import { Container } from "../../constants/container";
import {
  WholesellFacilitiesCol,
  WholesellFacilitiesWrap,
} from "./WholesellFacilities.style";
import img from "../../assets/images/wholesell-facilities.png";
import { ButtonPrimary } from "../../constants/buttons";

function WholesellFacilities() {
  return (
    <>
      <WholesellFacilitiesWrap>
        <Container md>
          <h1 className="hr">Wholesell Facilities</h1>

          <Row nogutter>
            <WholesellFacilitiesCol md={5.5}>
              <div className="left__section">
                <h1>
                  We also sell goods at <br /> whole sell rate.
                </h1>
                <ButtonPrimary outlined>Contact Us</ButtonPrimary>
              </div>
            </WholesellFacilitiesCol>
            <WholesellFacilitiesCol md={6.5}>
              <div className="right__section"></div>
              <img src={img} alt="" />
            </WholesellFacilitiesCol>
          </Row>
        </Container>
      </WholesellFacilitiesWrap>
    </>
  );
}

export default WholesellFacilities;
