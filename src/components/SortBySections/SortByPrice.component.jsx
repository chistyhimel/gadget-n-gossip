import React, { useState } from "react";
import { SortBySectionWrap } from "./SortBySections.style";
import ReactSlider from "react-slider";

function SortByPrice() {
  const [priceRange, setPriceRange] = useState([100, 50000]);
  return (
    <>
      <SortBySectionWrap>
        <h2>Filter by Price</h2>

        <ReactSlider
          className="horizontal-slider"
          thumbClassName="example-thumb"
          trackClassName="example-track"
          defaultValue={[0, 1000]}
          min={100}
          max={1000}
          ariaLabel={["Lower thumb", "Upper thumb"]}
          ariaValuetext={(state) => `Thumb value ${state.valueNow}`}
          onChange={(value) => setPriceRange(value)}
          renderThumb={(props, state) => <div {...props} />}
          pearling
          minDistance={50}
        />
        <p>
          Price: ৳ {priceRange[0]} — ৳ {priceRange[1]}
        </p>
      </SortBySectionWrap>
    </>
  );
}

export default SortByPrice;
