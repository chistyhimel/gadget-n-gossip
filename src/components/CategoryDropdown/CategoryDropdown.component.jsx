import React from "react";
import { categoryData } from "../../data/category-data";
import DropdownItems from "./DropdownItems.component";

function CategoryDropdown() {
  return (
    <>
      {categoryData.map((category, idx) => (
        <DropdownItems key={idx} category={category} />
      ))}
    </>
  );
}

export default CategoryDropdown;
