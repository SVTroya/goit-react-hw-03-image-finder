import styled from 'styled-components';
import { FaMagnifyingGlass } from 'react-icons/fa6';

export const StyledHeader = styled.header`
  background-color: var(--color-background);
  box-shadow: 0 2px 1px 0 rgba(0, 0, 0, 0.20),
  0 1px 3px 0 rgba(0, 0, 0, 0.12),
  0 1px 1px 0 rgba(0, 0, 0, 0.14);
  width: 100%;
`;

export const StyledSearchForm = styled.form`

  padding: 20px 20px;

  @media only screen and (min-width: 768px) {
    padding: 20px 32px;
  }

  display: flex;
  height: 80px;
  align-items: center;
  justify-content: center;

  label {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    border: 0;
    padding: 0;
    white-space: nowrap;
    clip-path: inset(100%);
    clip: rect(0 0 0 0);
    overflow: hidden;
  }

  input {
    background-color: var(--color-search-bckg);
    display: flex;
    max-width: 350px;
    margin: 20px 0;
    padding: 20px 10px;
    width: 100%;
    height: 45px;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    border: 1px solid var(--color-border);
    outline: transparent;
    color: var(--color-text-dark);
    font-size: 20px;
  }

  input::placeholder {
    color: var(--color-accent);
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 45px;
    width: 45px;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    box-shadow: none;
    border: 1px solid var(--color-border);
    border-left: none;
    outline: transparent;
    cursor: pointer;
    color: var(--color-text-dark);
    transition: color var(--animation-duration) var(--timing-function);
  }

  button:hover {
    color: var(--color-accent);
  }
`;

export const SearchIcon = styled(FaMagnifyingGlass)`
  width: 20px;
  height: 20px;
`;
