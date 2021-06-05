import React from "react";
import { SortBySectionWrap } from "./SortBySections.style";

function SortByBrand() {
  return (
    <>
      <SortBySectionWrap>
        <h2>Filter by Brands</h2>
        <main className="short__by__brands">
          {new Array(6).fill("").map((val, idx) => (
            <div className="brand__wrap" key={idx}>
              <div className="brand__logo"></div>
              <small>Brand Name</small>
            </div>
          ))}
        </main>
      </SortBySectionWrap>
    </>
  );
}

export default SortByBrand;
