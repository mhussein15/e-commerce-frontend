import styled from "styled-components";

export const ProductCardText = styled.p`
  font-family: "Zilla Slab", serif;
`;

export const ProductCard = styled.div`
  color: black;
  transition: transform 0.3s ease-out;
  &:hover {
    transform: translateZ(50px) translateX(-12px) translateY(-12px);
    box-shadow: 12px 12px 20px -12px rgba(0, 0, 0, 0.35);
  }
`;
