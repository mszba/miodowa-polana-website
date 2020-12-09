import styled from 'styled-components';
// import { Link } from 'react-router-dom';

export const FooterContainer = styled.footer`
  background-color: #240d00;
`;

export const FooterWrap = styled.div`
  padding: 38px 24px;
  margin: 0 auto;
  max-width: 1100px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const FooterLogoLink = styled.a`
  margin-bottom: 16px;
  margin-right: 4vw;
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: bold;
  color: #fff;
  cursor: pointer;
`;

export const FooterLogo = styled.div`
  width: 80px;
  height: 80px;
  background: red;
`;

export const WebsiteRights = styled.small`
  margin-bottom: 16px;
  text-align: center;
  color: #fff;
`;
