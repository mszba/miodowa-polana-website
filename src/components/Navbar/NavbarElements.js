import styled from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';
import { FaPhoneAlt } from 'react-icons/fa';

export const Nav = styled.nav`
  position: sticky;
  top: 0;
  height: 80px;
  margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  z-index: 21;
  background: ${({ scrollNav }) => (scrollNav ? '#240D00' : 'transparent')};
  transition: 0.8s all ease;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  height: 80px;
  width: 100%;
  max-width: 1100px;
  padding: 0 24px;
  display: flex;
  justify-content: space-between;
  z-index: 1;
`;

export const NavLogo = styled(LinkRouter)`
  margin-left: 24px;
  display: flex;
  align-items: center;
  justify-self: flex-start;
  font-size: 1.5rem;
  cursor: pointer;
`;

export const MobileIconBars = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    position: absolute;
    top: 0;
    right: 0;
    display: block;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    color: #fff;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  margin-right: -22px;
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLink = styled(LinkScroll)`
  height: 100%;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #fff;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid #ffca00;
  }
`;

export const PhoneIcon = styled(FaPhoneAlt)`
  color: #fff;
`;

export const NavPhoneWrap = styled.div`
  height: 80px;
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavPhoneLink = styled.a`
  height: 100%;
  display: flex;
  align-items: center;
  white-space: nowrap;
  color: #fff;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  text-decoration: none;
`;
