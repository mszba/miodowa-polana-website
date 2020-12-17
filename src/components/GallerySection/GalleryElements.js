import styled from 'styled-components';
import { motion } from 'framer-motion';

export const GalleryContainer = styled.div`
  background: #240d00;
  color: #fff;

  @media screen and (min-width: 1750px) {
    overflow: scroll;
  }
  /* @media screen and (max-width: 768px) {
    padding: 100px 0;
  } */
`;

export const GalleryWrapper = styled.div`
  height: 860px;
  width: 100%;
  max-width: 2200px;
  margin-right: auto;
  margin-left: auto;
  padding: 55px 65px;
  display: flex;
  flex-direction: column;
  z-index: 1;

  /* @media screen and (max-width: 1200px) {
    padding: 200px 65px;
  } */
  @media screen and (max-width: 480px) {
    padding: 50px 30px;
  }
`;

export const TextWrapper = styled.div`
  width: 100%;
  padding-left: 15px;
  margin-top: 4vw;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const TopLine = styled(motion.p)`
  margin-bottom: 16px;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  color: #ffca00;
`;

export const Heading = styled(motion.h1)`
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

export const PicturesWrapper = styled.div`
  height: 600px;
  margin-top: 1vw;
  padding-top: 15%;

  @media screen and (max-width: 480px) {
    padding-top: 30%;
    padding-right: 10%;
  }
`;

export const PicutreElementWrap = styled(motion.div)``;

export const PictureElement = styled.img``;

export const ButtonWrapper = styled(motion.div)`
  position: absolute;
  bottom: 8%;
  right: 10%;
  z-index: 20;

  @media screen and (max-width: 1200px) {
    bottom: 15%;
  }
  @media screen and (max-width: 768px) {
    bottom: 20%;
  }
  @media screen and (max-width: 480px) {
    bottom: 5%;
  }
`;
