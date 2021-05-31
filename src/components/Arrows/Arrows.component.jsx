import React from "react";
import leftArrow from "../../assets/icons/arrow-left.png";
import rightArrow from "../../assets/icons/arrow-right.png";
import { ArrowWrap } from "./Arrows.style";

function Arrows({ left, right, goto }) {
  return (
    <>
      <ArrowWrap>
        <button onClick={() => goto()}>
          <img
            src={left ? leftArrow : right ? rightArrow : ""}
            alt="left-arrow"
          />
        </button>
      </ArrowWrap>
    </>
  );
}

export default Arrows;
