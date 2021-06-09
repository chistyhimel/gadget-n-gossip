import React from "react";
import { ButtonPrimary } from "../../constants/buttons";
import QuantitySelector from "../QuantitySelector/QuantitySelector.component";
import { ProdutInfoWrap } from "./ProductDetailsMain.style";

function ProductInfo() {
  return (
    <>
      <ProdutInfoWrap>
        <h1>Smart Watch</h1>
        <del>Tk 1250.00</del>
        <p>Tk 1000.00</p>
        <h6>Choost Model</h6>
        <div className="color__wrap">
          <div />
          <div />
        </div>

        <div className="buttons__wrap">
          <QuantitySelector />
          <ButtonPrimary>Add to cart</ButtonPrimary>
          <ButtonPrimary outlined>Add to wishlist</ButtonPrimary>
        </div>
      </ProdutInfoWrap>
    </>
  );
}

export default ProductInfo;
