import { animateScroll as scroll } from 'react-scroll';

import {
  FooterContainer,
  FooterWrap,
  FooterLogoLink,
  FooterLogo,
  WebsiteRights,
} from './FooterElements';

import beeLogo from '../../images/beeLogo.svg';

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <>
      <FooterContainer>
        <FooterWrap>
          <FooterLogoLink to='/' onClick={toggleHome}>
            <FooterLogo src={beeLogo} alt='logo' />
          </FooterLogoLink>
          <WebsiteRights>
            Miodowa Polana Na Bercu &copy; {new Date().getFullYear()} All rights
            reserved
          </WebsiteRights>
        </FooterWrap>
      </FooterContainer>
    </>
  );
};

export default Footer;
