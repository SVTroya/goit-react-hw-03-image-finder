import styled from 'styled-components';

export const StyledGalleryList = styled.ul`
  margin: 12px auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  grid-auto-rows: minmax(230px, auto);
  grid-gap: 12px;
  justify-content: center;

  width: 100%;

  min-width: 320px;
  max-width: 375px;
  padding: 0 20px;

  @media only screen and (min-width: 768px) {
    max-width: 768px;
    padding: 0 32px;
  }

  @media only screen and (min-width: 1158px) {
    max-width: 1440px;
  }
`;
