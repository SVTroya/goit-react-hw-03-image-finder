import styled from 'styled-components';

export const StyledButton = styled.button`
  display: inline;
  border-radius: 4px;
  box-shadow: none;
  border: 1px solid var(--color-border);
  outline: transparent;
  cursor: pointer;
  fill: var(--color-text-dark);
  transition: background-color var(--animation-duration) var(--timing-function);
  font-size: 18px;
  padding: 8px 16px;
  margin: 15px auto 30px;

&:hover {
  background-color: var(--color-accent);
}
`;
