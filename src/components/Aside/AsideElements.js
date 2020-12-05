import styled from 'styled-components';
import { Link as LinkScroll } from 'react-scroll';

import { FaTimes } from 'react-icons/fa';

// const scaleUp = keyframes`
//   from {
//     width: 0;
//   height: 0;
//   }

//   to {
//     width: 100%;
//   height: 100%;
//   }
// `;

export const CircleLayer = styled.div`
  border-radius: 50%;
  width: 0;
  height: 0;
  position: fixed;
  top: 35px;
  right: 42px;
  background: #ffca00;
  opacity: 1;
  z-index: 998;
  transition: all 0.4s cubic-bezier(0.755, 0.05, 0.855, 0.06);

  width: ${({ isOpen }) => (isOpen ? '2000px' : '0')};
  height: ${({ isOpen }) => (isOpen ? '2000px' : '0')};
  top: ${({ isOpen }) => (isOpen ? '-560px' : '35px')};
  right: ${({ isOpen }) => (isOpen ? '-565px;' : '42px')};
`;

export const AsideContainer = styled.aside`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: grid;
  align-items: center;
  z-index: 999;
  background: transparent;
  transition: all 0.5s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
  visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
`;

export const CloseIcon = styled(FaTimes)`
  color: #fff;
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  font-size: 2rem;
  background: transparent;
  outline: none;
  cursor: pointer;
`;

export const AsideWrapper = styled.div`
  color: #fff;
`;

export const AsideMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
  }
`;

export const AsideMenuItem = styled.li`
  height: 100%;
  list-style: none;
`;

export const AsideLink = styled(LinkScroll)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  transition: 0.2s ease-in-out;
  color: #fff;
  cursor: pointer;

  &:hover {
    color: #240d00;
    transition: 0.2s ease-in-out;
  }
`;

export const AsidePhoneWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const AsidePhoneLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  color: #fff;

  &:hover {
    transition: all 0.2s ease-in-out;
    color: #240d00;
  }
`;
