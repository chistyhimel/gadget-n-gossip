import React, { useState } from "react";
import Dropdown from "react-dropdown";
import { SortBySectionWrap } from "./SortBySections.style";

function SortByColor() {
  const [selectedColor, setSelectedColor] = useState("Any Color");
  const options = ["red", "green", "blue", "purple"];
  return (
    <>
      <SortBySectionWrap>
        <h2>Filter by Color</h2>
        <Dropdown
          options={options}
          onChange={() => setSelectedColor(selectedColor)}
          value={selectedColor}
          placeholder="Select an option"
        />
      </SortBySectionWrap>
    </>
  );
}

export default SortByColor;
