import styled from 'styled-components';
import { motion } from 'framer-motion';

export const PicturesWrapper = styled.div`
  margin-top: 1vw;
  padding-top: 10%;
  margin-left: 8%;

  @media screen and (max-width: 480px) {
    padding-top: 30%;
    padding-right: 10%;
    margin-left: 0;
  }
`;

export const PicutreElementWrap = styled(motion.div)``;

export const PictureElement = styled.img``;
