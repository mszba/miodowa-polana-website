import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIconBars,
  NavMenu,
  NavItem,
  NavLink,
  NavPhoneWrap,
  NavPhoneLink,
} from './NavbarElements';
import { FaBars } from 'react-icons/fa';

const Navbar = ({ toggle }) => {
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to='/'>
          <div
            style={{
              background: 'red',
              width: '70px',
              height: '50px',
            }}></div>
        </NavLogo>
        <MobileIconBars onClick={toggle}>
          <FaBars />
        </MobileIconBars>
        <NavMenu>
          <NavItem>
            <NavLink to='attractions'>Atrakcje</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to='offer'>Oferta</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to='gallery'>Galeria</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to='opinions'>Opinie</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to='contact'>Kontakt</NavLink>
          </NavItem>
        </NavMenu>
        <NavPhoneWrap>
          <NavPhoneLink href='tel:555428940'>555 428 940</NavPhoneLink>
        </NavPhoneWrap>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
