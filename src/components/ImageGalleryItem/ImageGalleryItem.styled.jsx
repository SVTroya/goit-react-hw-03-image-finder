import styled from 'styled-components';

export const StyledGalleryItem = styled.li`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2),
  0 1px 1px 0 rgba(0, 0, 0, 0.14),
  0 2px 1px -1px rgba(0, 0, 0, 0.12);

  img {
    display: block;
    height: 100%;
    object-fit: cover;
  }

  img:hover {
    cursor: zoom-in;
  }
`;
