import React from "react";
import { Container } from "../../constants/container";
import img from "../../assets/images/ad-img.png";

function AdSection() {
  return (
    <>
      <Container lg>
        <img src={img} alt="" style={{ width: "100%" }} />
      </Container>
    </>
  );
}

export default AdSection;
