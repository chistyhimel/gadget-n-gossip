import styled from "styled-components";
import ImageGallery from "react-image-gallery";

export const ProductDetailsMainWrap = styled.div`
  background: linear-gradient(
    to left,
    #ffff 60%,
    ${({ theme }) => theme.colors.primary.light} 40%
  );
  margin-bottom: 80px;

  #myPortal {
    position: absolute;
    z-index: 1;
  }
`;

export const CategoryImgWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  /* background-color: red; */
  height: 100%;
  width: 100%;
  border: 1px solid #ffff;
  cursor: pointer;

  img {
    width: 40%;
  }
`;

export const ImageGalleryWrap = styled.div`
  width: 80%;
  padding-bottom: 50px;
  /* background-color: red; */
`;

// ProductInfo Component >>>>>>>>>>>

export const ProdutInfoWrap = styled.div`
  color: ${({ theme }) => theme.colors.textColor};
  h1 {
    font-family: ${({ theme }) => theme.fonts.tertiary};
    font-size: 36px;
  }

  .buttons__wrap {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
