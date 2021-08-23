import styled from "styled-components";



export const LandingPageSection = styled.section`
  height: 75vh;
  width: 75%;
`;
export const LandingPageIntro = styled.section`
  height: 90vh;
  width: 75%;
`;

export const LandingPageCategoryCards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 50px;
`;

export const LandingPageProductCards = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 50px;
`;
