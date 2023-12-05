import React from 'react';
import PropTypes from 'prop-types';
import { Backdrop, StyledCloseIcon, StyledModal } from './Modal.styled';

Modal.propTypes = {
src: PropTypes.string,
  alt: PropTypes.string,
  onClose: PropTypes.func,
};

function Modal({src, alt, onClose}) {
  return (
    <Backdrop onClick={(ev) => onClose(ev)} data-backdrop>
      <StyledModal>
        <button type="button" aria-label='Close Button'>
          <StyledCloseIcon />
        </button>
        <img src={src} alt={alt}/>
      </StyledModal>
    </Backdrop>
  );
}

export default Modal;
