import React from "react";
import { InputWrap, SearchBarContainer } from "./SearchBar.style";
import searchIcon from "../../assets/icons/search.png";

function SearchBar() {
  return (
    <>
      <SearchBarContainer>
        <InputWrap>
          <img src={searchIcon} alt="search-icon" className="search__icon" />
          <input type="text" name="search" />
          <button>
            <div />
            <div />
            <div />
          </button>
        </InputWrap>
      </SearchBarContainer>
    </>
  );
}

export default SearchBar;
