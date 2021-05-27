import styled from "styled-components";

export const Container = styled.div`
  width: ${(props) =>
    props.lg ? "90vw" : props.md ? "80vw" : props.sm && "65vw"};
  margin: 0 auto;
  @media (max-width: 1024px) {
    width: 90vw;
  }
`;
