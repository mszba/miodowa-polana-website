import styled from 'styled-components';

export const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 800px;
  position: relative;
  z-index: 1;

  :before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(36, 13, 0, 0.3);
    z-index: 2;
  }
`;

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const HeroPictureBg = styled.img`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
`;

export const HeroContent = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: space-between;
  z-index: 3;
`;

export const HeroH1 = styled.h1`
  width: 50%;
  font-weight: 700;
  margin-left: 4vw;
  padding-right: 30px;
  color: #fff;
  font-size: 70px;
  text-align: left;
  text-transform: uppercase;

  @media screen and (max-width: 768px) {
    font-size: 44px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const HeroTextWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-left: 63vw;
  margin-top: 5vh;
  margin-bottom: -150px;

  @media screen and (max-width: 768px) {
    margin-left: 50vw;
  }

  @media screen and (max-width: 480px) {
    margin-left: 4vw;
  }
`;

export const HeroP = styled.p`
  margin-top: 24px;
  font-size: 24px;
  text-align: left;
  margin-bottom: 3vw;
  margin-right: 5vw;
  max-width: 600px;
  color: #fff;

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
  @media screen and (max-width: 480px) {
    margin-bottom: 8vw;
  }
`;

export const HeroBtnWrap = styled.div`
  display: flex;
  align-items: center;
`;
