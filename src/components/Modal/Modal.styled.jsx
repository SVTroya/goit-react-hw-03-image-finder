import styled from 'styled-components';
import { IoMdClose } from 'react-icons/io';

export const Backdrop = styled.div`
  position: fixed;
  display: flex;
  background: var(--color-modal-overlay);
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;

  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1),
  visibility 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const StyledModal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 0;

  border-radius: 4px;
  overflow: clip;
  background: #FFFFFF;
  box-shadow: 0 2px 1px 0 rgba(0, 0, 0, 0.20),
  0 1px 3px 0 rgba(0, 0, 0, 0.12),
  0 1px 1px 0 rgba(0, 0, 0, 0.14);

  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  button {
    position: absolute;
    display: flex;
    width: 30px;
    height: 30px;
    top: 12px;
    right: 12px;
    align-items: center;
    justify-content: center;
    padding: 0;
    border: none;
    color: #171717;
    background-color: transparent;
    transition: color 250ms ease-in-out;

    &:hover, &:focus {
      color: #006262;
    }
  }

  img {
    object-fit: cover;
    width: 1200px;
    height: 800px;
    max-width: unset;
  }
`;

export const StyledCloseIcon = styled(IoMdClose)`
  width: 24px;
  height: 24px;
  color: currentColor;
  pointer-events: none;
`;

