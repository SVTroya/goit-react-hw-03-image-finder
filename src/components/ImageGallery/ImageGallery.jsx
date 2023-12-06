import React from 'react';
import PropTypes from 'prop-types';
import { StyledGalleryList } from './ImageGallery.styled';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    webformatURL: PropTypes.string,
    largeImageURL: PropTypes.string,
    tags: PropTypes.string,
  })),
  onClick: PropTypes.func,
};

function ImageGallery({ images, onClick }) {
  return (
    <StyledGalleryList>
      {images.map(({ id, smallImage, largeImage, tags }) => (
        <ImageGalleryItem key={id} smallImg={smallImage} largeImg={largeImage} alt={tags} onClick={onClick} />
      ))}
    </StyledGalleryList>
  );
}

export default ImageGallery;
