import styled from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';

export const ButtonAnchor = styled.a`
  padding: ${({ big }) => (big ? '10px 27px' : '8px 15px')};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  background: ${({ primary }) => (primary ? '#ffca00' : '#240D00')};
  white-space: space nowrap;
  color: ${({ dark }) => (dark ? '#240D00' : '#fff')};
  font-size: ${({ fontBig }) => (fontBig ? '15px' : '13px')};
  outline: none;
  border: none;
  cursor: pointer;
  font-weight: 600;
  text-transform: uppercase;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? '#fff' : '#ffca00')};
  }
`;

export const ButtonRouter = styled(LinkRouter)`
  padding: ${({ big }) => (big ? '10px 27px' : '8px 15px')};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  background: ${({ primary }) => (primary ? '#ffca00' : '#240D00')};
  white-space: space nowrap;
  color: ${({ dark }) => (dark ? '#240D00' : '#fff')};
  font-size: ${({ fontBig }) => (fontBig ? '15px' : '13px')};
  outline: none;
  border: none;
  cursor: pointer;
  font-weight: 600;
  text-decoration: none;
  text-transform: uppercase;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? '#fff' : '#ffca00')};
  }
`;
