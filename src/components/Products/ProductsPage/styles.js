import styled from "styled-components";

export const ProductWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 50px;

  
  width: 75%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 15px;
}
`;

export const ProductTitle = styled.h1`
  font-family: "Zilla Slab", serif;
`;
