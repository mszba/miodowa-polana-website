import styled from 'styled-components';

export const ButtonAnchor = styled.a`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? '#ffca00' : '#fff')};
  white-space: space nowrap;
  padding: ${({ big }) => (big ? '10px 27px' : '8px 15px')};
  color: ${({ dark }) => (dark ? '#240D00' : '#fff')};
  font-size: ${({ fontBig }) => (fontBig ? '15px' : '13px')};
  outline: none;
  border: none;
  cursor: pointer;
  font-weight: 600;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? '#fff' : '#ffca00')};
  }

  /* @media screen and (max-width: 768px) {
    padding: 8px 15px;
    font-size: 10px;
  } */
`;
