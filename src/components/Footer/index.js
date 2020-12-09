import { animateScroll as scroll } from 'react-scroll';

import {
  FooterContainer,
  FooterWrap,
  FooterLogoLink,
  FooterLogo,
  WebsiteRights,
} from './FooterElements';

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <>
      <FooterContainer>
        <FooterWrap>
          <FooterLogoLink to='/' onClick={toggleHome}>
            <FooterLogo></FooterLogo>
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
