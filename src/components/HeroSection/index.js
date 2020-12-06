import {
  HeroContainer,
  HeroBg,
  HeroPictureBg,
  HeroContent,
  HeroH1,
  HeroTextWrap,
  HeroP,
  HeroBtnWrap,
} from './HeroElements';

import { ButtonAnchor } from '../ButtonElements';

import Background from '../../images/picture-1.jpg';

const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroBg>
        <HeroPictureBg src={Background} />
      </HeroBg>
      <HeroContent>
        <HeroH1>Przygoda boza w bieszczadach</HeroH1>
        <HeroTextWrap>
          <HeroP>
            Bieszczaduj cale te na wspaniałej miodowej polanie już dzisiaj tu
            tego, będzie dobrze cale te jak to się mówi
          </HeroP>
          <HeroBtnWrap>
            <ButtonAnchor primary={1} dark={1} big='true'>
              Zarezerwuj teraz
            </ButtonAnchor>
          </HeroBtnWrap>
        </HeroTextWrap>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
