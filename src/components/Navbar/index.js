import { useEffect, useState } from 'react';
import { animateScroll as scroll } from 'react-scroll';

import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavImg,
  MobileIconBars,
  NavMenu,
  NavItem,
  NavLink,
  NavPhoneWrap,
  PhoneIcon,
  NavPhoneLink,
} from './NavbarElements';
import { FaBars } from 'react-icons/fa';

import beeLogo from '../../images/beeLogo.svg';

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav);

    return () => {
      window.removeEventListener('scroll', changeNav);
    };
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <Nav scrollNav={scrollNav}>
      <NavbarContainer>
        <NavLogo to='/' onClick={toggleHome}>
          <NavImg src={beeLogo} alt='logo' />
        </NavLogo>
        <MobileIconBars onClick={toggle}>
          <FaBars />
        </MobileIconBars>
        <NavMenu>
          <NavItem>
            <NavLink
              to='attractions'
              smooth={true}
              duration={500}
              spy={true}
              exact='true'>
              Atrakcje
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              to='offer'
              smooth={true}
              duration={500}
              spy={true}
              exact='true'>
              Oferta
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              to='gallery'
              smooth={true}
              duration={500}
              spy={true}
              exact='true'>
              Galeria
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              to='testimonials'
              smooth={true}
              duration={500}
              spy={true}
              exact='true'>
              Opinie
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              to='contact'
              smooth={true}
              duration={500}
              spy={true}
              exact='true'>
              Kontakt
            </NavLink>
          </NavItem>
        </NavMenu>
        <NavPhoneWrap>
          <NavPhoneLink href='tel:604 208 541'>
            <PhoneIcon />
            &nbsp; 604 208 541
          </NavPhoneLink>
        </NavPhoneWrap>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
