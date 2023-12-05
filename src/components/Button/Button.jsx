import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton } from './Button.styled';

Button.propTypes = {
  onClickHandler: PropTypes.func,
};

function Button({ onClickHandler }) {
  return (
    <StyledButton onClick={onClickHandler}>
      Load More
    </StyledButton>
  );
}

export default Button;
