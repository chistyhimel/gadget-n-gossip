import React, { useState } from "react";
import { Col, Row } from "react-grid-system";
import {
  DropdownItemsWrap,
  DropDownCategoryWrap,
  DropdownWrap,
} from "./CategoryDropdown.style";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";

function DropdownItems({ category }) {
  const [openDropdown, setOpenDropdown] = useState(false);
  console.log(category);
  return (
    <>
      <DropdownWrap>
        <DropDownCategoryWrap onClick={() => setOpenDropdown(!openDropdown)}>
          <img src={category.img} alt="" />
          <p>{category.titile}</p>
          {openDropdown ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
        </DropDownCategoryWrap>

        <DropdownItemsWrap>
          {openDropdown
            ? category.products.map((product, idx) => (
                <p key={idx}>{product}</p>
              ))
            : ""}
        </DropdownItemsWrap>
      </DropdownWrap>
    </>
  );
}

export default DropdownItems;
