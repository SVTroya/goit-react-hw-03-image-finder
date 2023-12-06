import { Component } from 'react';
import PropTypes from 'prop-types';
import { Backdrop, StyledCloseIcon, StyledModal } from './Modal.styled';

export class Modal extends Component {

  static propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    onClose: PropTypes.func,
  };

  componentDidMount() {
    document.addEventListener('keydown', this.handleEscPress);
    document.body.style.overflow = 'hidden';
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleEscPress);
    document.body.style.overflow = 'visible';
  }

  handleBackdropClick = (ev) => {
    if (ev.target === ev.currentTarget) {
      this.props.onClose();
    }
  };

  handleEscPress = (ev) => {
    if (ev.key === 'Escape') {
      this.props.onClose();
    }
  };

  render() {
    const { children, onClose } = this.props;
    return (
      <Backdrop onClick={this.handleBackdropClick} data-backdrop>
        <StyledModal>
          <button type='button' aria-label='Close Button' onClick={onClose}>
            <StyledCloseIcon />
          </button>
          {children}
        </StyledModal>
      </Backdrop>
    );
  }
}
