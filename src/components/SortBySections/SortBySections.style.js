import styled from "styled-components";

export const SortBySectionWrap = styled.div`
  padding: 40px 0;
  border-top: 1px solid lightgray;
  color: ${({ theme }) => theme.colors.textColor};
  h2 {
    font-family: ${({ theme }) => theme.fonts.secondary};
    margin-bottom: 15px;
  }

  p {
    margin-top: 40px;
    font-family: ${({ theme }) => theme.fonts.secondary};
  }

  .example-thumb {
    background-color: ${({ theme }) => theme.colors.primary.deep};
    height: 20px;
    width: 3px;
    margin-top: -8px;
    cursor: pointer;
  }

  .example-track {
    background-color: #a5a5a5;
    height: 3px;
  }

  .example-track-1 {
    background-color: ${({ theme }) => theme.colors.primary.deep};
  }

  .short__by__brands {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 0.5rem;

    small {
      text-align: center;
      font-size: 10px;
      display: block;
      margin-top: 5px;
    }
    .brand__wrap {
      .brand__logo {
        width: auto;
        height: 30px;
        background-color: lightgray;
      }
    }
  }
`;
