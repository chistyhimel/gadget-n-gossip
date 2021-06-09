import React from "react";
import { QuantitySelectorWrap } from "./QuantitySelector.style";

function QuantitySelector() {
  return (
    <>
      <QuantitySelectorWrap>
        <button>-</button>
        <span>1</span>
        <button>+</button>
      </QuantitySelectorWrap>
    </>
  );
}

export default QuantitySelector;
