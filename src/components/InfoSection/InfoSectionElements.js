import styled from 'styled-components';

export const InfoContainer = styled.div`
  color: #fff;
  background: ${({ lightBg }) => (lightBg ? '#f9f9f9' : '#240D00')};

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;

export const InfoWrapper = styled.div`
  height: 860px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  display: grid;
  justify-content: center;
  z-index: 1;
`;

export const InfoRow = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
`;

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  height: 450px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const HexagonContainer = styled.div`
  width: 400px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translate(0, -15%);

  @media screen and (max-width: 850px) {
    width: 300px;
  }
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
`;

export const TopLine = styled.p`
  margin-bottom: 16px;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  color: #ffca00;
`;
export const Heading = styled.h1`
  margin-bottom: 24px;
  line-height: 1.1;
  font-size: 48px;
  font-weight: 600;
  text-transform: uppercase;
  color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#240D00')};

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ darkText }) => (darkText ? '#240D00' : '#F7F8FA')};
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;
export const HexagonWrap = styled.div`
  height: 100%;
  max-width: 555px;
`;

export const Hexagon = styled.div`
  transform-origin: center;
  transition: transform 0.4s;
  &:hover {
    transform: rotate(-61deg);
  }
`;
