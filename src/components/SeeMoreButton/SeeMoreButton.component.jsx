import React from "react";
import { Col, Row } from "react-grid-system";
import { ButtonPrimary } from "../../constants/buttons";
import { SeeMoreButtonCol, SeeMoreButtonWrap } from "./SeeMoreButton.style";

function SeeMoreButton() {
  return (
    <>
      <SeeMoreButtonWrap>
        <Row>
          <SeeMoreButtonCol xs={3} sm={4} md={5}>
            <div className="underline" />
          </SeeMoreButtonCol>
          <SeeMoreButtonCol xs={6} sm={4} md={2}>
            <ButtonPrimary outlined>See More</ButtonPrimary>
          </SeeMoreButtonCol>
          <SeeMoreButtonCol xs={3} sm={4} md={5}>
            <div className="underline" />
          </SeeMoreButtonCol>
        </Row>
      </SeeMoreButtonWrap>
    </>
  );
}

export default SeeMoreButton;
