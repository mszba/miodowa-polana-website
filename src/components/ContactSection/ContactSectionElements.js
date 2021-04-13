import styled from 'styled-components';
import { motion } from 'framer-motion';

import { FaFacebook } from 'react-icons/fa';

export const ContactContainer = styled.div`
  height: 860px;
  width: 100%;
  background: #240d00;
`;

export const ContactWrapper = styled.div`
  height: 860px;
  width: 100%;
  max-width: 1200px;
  margin-right: auto;
  margin-left: auto;
  padding: 55px 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;

  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
    align-items: flex-start;
  }
`;

export const MapWrap = styled(motion.div)`
  width: 800px;
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 400px;
  }
`;

export const MapContainer = styled.iframe`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TextWrap = styled.div`
  /* width: 40%; */
  padding-left: 3vw;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 768px) {
    padding-left: 0;
    margin-bottom: 2vh;
  }
`;
export const Heading = styled(motion.div)`
  margin-bottom: 24px;
  line-height: 1.1;
  font-size: 48px;
  font-weight: 600;
  text-transform: uppercase;
  color: #f7f8fa;

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;
export const AddressWrap = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 24px;
`;
export const AddressTitle = styled.div`
  margin-bottom: 12px;
  font-size: 18px;
  color: #f7f8fa;
`;
export const AddressText = styled.div`
  margin-bottom: 12px;
  font-size: 16px;
  color: #f7f8fa;
`;

export const AddressPhoneLink = styled.a`
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  text-decoration: none;
  color: #f7f8fa;
`;

export const SocialsWrap = styled(motion.div)`
  display: flex;
  flex-direction: column;
`;

export const SocialsText = styled.p`
  margin-bottom: 6px;
  color: #f7f8fa;
  font-size: 15px;
`;

export const FacebookIcon = styled(FaFacebook)`
  font-size: 32px;
  color: #ffca00;
  transition: 0.4s ease;
  cursor: pointer;

  &:hover {
    color: #f7f8fa;
    transform: scale(1.15);
  }
`;

export const SocialLink = styled.a``;
