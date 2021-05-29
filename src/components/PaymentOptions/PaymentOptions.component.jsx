import React from "react";
import icon1 from "../../assets/payment-options-icons/1.png";
import icon2 from "../../assets/payment-options-icons/2.png";
import icon3 from "../../assets/payment-options-icons/3.png";
import icon4 from "../../assets/payment-options-icons/4.png";
import icon5 from "../../assets/payment-options-icons/5.png";
import icon6 from "../../assets/payment-options-icons/6.png";
import icon7 from "../../assets/payment-options-icons/7.png";
import icon8 from "../../assets/payment-options-icons/8.png";
import icon9 from "../../assets/payment-options-icons/9.png";
import icon10 from "../../assets/payment-options-icons/10.png";
import { Row } from "react-grid-system";
import { CustomCol, PaymentWrapper } from "./PaymentOptions.style";
import { Container } from "../../constants/container";

function PaymentOptions() {
  return (
    <>
      <PaymentWrapper>
        <Container sm>
          <Row>
            <CustomCol xs={4} md={2.4}>
              <img src={icon1} alt="" />
            </CustomCol>
            <CustomCol xs={4} md={2.4}>
              <img src={icon2} alt="" />
            </CustomCol>
            <CustomCol xs={4} md={2.4}>
              <img src={icon3} alt="" />
            </CustomCol>
            <CustomCol xs={4} md={2.4}>
              <img src={icon4} alt="" />
            </CustomCol>
            <CustomCol xs={4} md={2.4}>
              <img src={icon5} alt="" />
            </CustomCol>
            <CustomCol xs={4} md={2.4}>
              <img src={icon6} alt="" />
            </CustomCol>
            <CustomCol xs={4} md={2.4}>
              <img src={icon7} alt="" />
            </CustomCol>
            <CustomCol xs={4} md={2.4}>
              <img src={icon8} alt="" />
            </CustomCol>
            <CustomCol xs={4} md={2.4}>
              <img src={icon9} alt="" />
            </CustomCol>
            <CustomCol xs={4} md={2.4}>
              <img src={icon10} alt="" />
            </CustomCol>
          </Row>{" "}
        </Container>
      </PaymentWrapper>
    </>
  );
}

export default PaymentOptions;
