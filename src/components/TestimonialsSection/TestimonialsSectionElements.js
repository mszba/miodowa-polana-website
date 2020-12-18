import styled from 'styled-components';
import { motion } from 'framer-motion';

import { FaQuoteLeft } from 'react-icons/fa';

export const TestimonialsContainer = styled.div`
  background: #f9f9f9;
  color: #fff;
`;

export const TestimonialsWrapper = styled.div`
  height: 860px;
  width: 100%;
  max-width: 1200px;
  margin-right: auto;
  margin-left: auto;
  padding: 55px 24px;
  display: grid;
  justify-content: center;
  z-index: 1;
`;

export const ElementsWrap = styled.div`
  @media screen and (max-width: 480px) {
    margin-top: 30px;
  }
`;

export const TextWrapper = styled.div`
  width: 100%;
  /* padding-left: 15px; */
  margin-top: 4vw;
  margin-bottom: 6vw;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media screen and (max-width: 480px) {
    margin-top: 2vw;
  }
`;
export const TopLine = styled(motion.p)`
  width: 100%;
  margin-bottom: 16px;
  font-size: 16px;
  text-align: center;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  color: #ffca00;
`;

export const Heading = styled(motion.h1)`
  width: 100%;
  margin-bottom: 24px;
  text-align: center;
  line-height: 1.1;
  font-size: 48px;
  font-weight: 600;
  text-transform: uppercase;
  color: #240d00;

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const TestimonialsElementsWrapper = styled(motion.div)`
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

export const TestimonialWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  /* margin-right: 5vw; */

  /* @media screen and (max-width: 480px) {
    margin-bottom: 5vh;
  } */
`;

export const QuoteIconWrap = styled.div`
  display: flex;
  align-items: flex-start;
  padding-right: 2vw;
`;

export const QuoteIcon = styled(FaQuoteLeft)`
  font-size: 2.5rem;
  color: #240d00;
`;

export const QuoteTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-top: 2vh;
  padding-right: 2vw;
`;

export const QuoteText = styled.p`
  /* height: 30%; */
  margin-bottom: 16px;
  font-size: 16px;
  line-height: 16px;
  color: #240d00;
`;

export const QuoteAuthor = styled.p`
  margin-bottom: 16px;
  padding-top: 4vh;
  font-size: 16px;
  line-height: 16px;
  color: #240d00;
  font-style: italic;
`;

export const QuotePictureWrap = styled.div`
  width: 80px;
  height: 70px;
  overflow: hidden;
  clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
`;

export const QuotePictureImg = styled.img`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
`;
