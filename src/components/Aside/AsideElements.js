import styled from 'styled-components';
import { Link as LinkScroll } from 'react-scroll';

import { FaTimes, FaPhoneAlt } from 'react-icons/fa';

export const CircleLayer = styled.div`
  width: 0;
  height: 0;
  position: fixed;
  top: 35px;
  right: 42px;
  border-radius: 50%;
  visibility: hidden;
  background: #ffca00;
  opacity: 1;
  z-index: 998;
  transition: top 0.6s, right 0.6s, width 0.6s, height 0.6s,
    visibility 0.6s cubic-bezier(0.755, 0.05, 0.855, 0.06);

  visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
  top: ${({ isOpen }) => (isOpen ? '-400px' : '35px')};
  right: ${({ isOpen }) => (isOpen ? '-400px' : '42px')};
  width: ${({ isOpen }) => (isOpen ? '1500px' : '0px')};
  height: ${({ isOpen }) => (isOpen ? '1500px' : '0px')};
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
  transition: all 0.4s ease-in-out;
  transition-delay: ${({ isOpen }) => (isOpen ? '.2s' : '0s')};
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
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, 40px);
  text-align: center;
`;

export const PhoneIcon = styled(FaPhoneAlt)`
  color: #fff;
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
