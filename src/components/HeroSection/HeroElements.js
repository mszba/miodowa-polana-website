import styled from 'styled-components';

export const HeroContainer = styled.div`
  position: relative;
  height: 800px;
  padding: 0 30px;
  display: flex;
  justify-content: center;
  align-items: center;
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
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
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
  max-width: 2200px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: space-between;
  z-index: 3;
`;

export const HeroH1 = styled.h1`
  width: 50%;
  margin-left: 4vw;
  padding-right: 30px;
  font-weight: 700;
  text-align: left;
  font-size: 70px;
  text-transform: uppercase;
  color: #fff;

  @media screen and (max-width: 768px) {
    font-size: 44px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const HeroTextWrap = styled.div`
  margin-left: 63vw;
  margin-top: 5vh;
  margin-bottom: -150px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  overflow: hidden;

  @media screen and (max-width: 768px) {
    margin-left: 50vw;
  }

  @media screen and (max-width: 480px) {
    margin-left: 4vw;
  }
`;

export const HeroP = styled.p`
  max-width: 600px;
  margin-top: 24px;
  margin-bottom: 3vw;
  margin-right: 5vw;
  text-align: left;
  font-size: 24px;
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
