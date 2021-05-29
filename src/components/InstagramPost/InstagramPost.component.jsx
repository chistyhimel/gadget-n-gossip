import React from "react";
import img from "../../assets/images/Insta.png";
import { Container } from "../../constants/container";
function InstagramPost() {
  return (
    <>
      <Container lg>
        <img src={img} alt="" style={{ width: "100%", margin: "80px 0" }} />
      </Container>
    </>
  );
}

export default InstagramPost;
