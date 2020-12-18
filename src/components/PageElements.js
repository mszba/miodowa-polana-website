import styled from 'styled-components';
import { motion } from 'framer-motion';

import { MdKeyboardArrowLeft, MdArrowBack } from 'react-icons/md';

export const PageContainer = styled.div`
  color: #f7f8fa;
  background: ${({ lightBg }) => (lightBg ? '#f9f9f9' : '#240D00')};

  @media screen and (max-width: 768px) {
    padding: 70px 0;
  }
`;

export const PageWrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  max-width: 800px;
  margin-right: auto;
  margin-left: auto;
  padding: 2vw 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 1;
`;

export const TextWrapper = styled.div`
  margin-bottom: 2vw;
  margin-top: 5vw;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

export const PageContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const PageText = styled(motion.p)`
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ lightText }) => (lightText ? '#F7F8FA' : '#240D00')};
`;

export const PageList = styled(motion.ul)`
  margin: 18px 18px;
  color: ${({ lightText }) => (lightText ? '#F7F8FA' : '#240D00')};
`;
export const PageListTitle = styled.h2`
  margin-bottom: 20px;
  font-size: 24px;
  line-height: 24px;
  color: ${({ lightText }) => (lightText ? '#F7F8FA' : '#240D00')};
`;

export const PageListElement = styled.li`
  margin-bottom: 15px;
  font-size: 18px;
  line-height: 24px;
  color: inherit;
`;

export const BtnWrap = styled(motion.div)`
  margin: 4% 0;
  display: flex;
  justify-content: flex-start;
`;

export const ArrowBackward = styled(MdArrowBack)`
  margin-right: 8px;
  font-size: 20px;
`;

export const ArrowLeft = styled(MdKeyboardArrowLeft)`
  margin-right: 8px;
  font-size: 20px;
`;
