import React from 'react';
import PropTypes from 'prop-types';
import { StyledGalleryItem } from './ImageGalleryItem.styled';

ImageGalleryItem.propTypes = {
  onClick: PropTypes.func,
  smallImg: PropTypes.string,
  largeImg: PropTypes.string,
  alt: PropTypes.string,
};

function ImageGalleryItem({ smallImg, largeImg, alt, onClick }) {
  return (
    <StyledGalleryItem onClick={() => onClick(largeImg, alt)}>
      <img src={smallImg} alt={alt} loading="lazy" />
    </StyledGalleryItem>
  );
}

export default ImageGalleryItem;
