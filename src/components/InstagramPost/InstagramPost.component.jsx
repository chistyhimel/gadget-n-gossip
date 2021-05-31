import React from "react";
import img from "../../assets/images/Insta.png";
import { Container } from "../../constants/container";
function InstagramPost() {
  return (
    <>
      <Container lg>
        <Container md>
          <h1 className="hr">Instagram</h1>
        </Container>
        <img
          src={img}
          alt=""
          style={{ width: "100%", margin: " 30px 0 80px 0" }}
        />
      </Container>
    </>
  );
}

export default InstagramPost;
