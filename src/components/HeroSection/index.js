import { motion } from 'framer-motion';

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

import {
  titleAnimation,
  titleTransition,
  titleAnimation2,
  titleTransition2,
  textAnimation,
  textTransition,
} from '../animations/index';

const HeroSection = () => {
  return (
    <HeroContainer id='home'>
      <HeroBg>
        <HeroPictureBg src={Background} alt='Widok na góry' />
      </HeroBg>
      <HeroContent>
        <HeroH1>
          <motion.div
            initial='hidden'
            animate='visible'
            variants={titleAnimation}
            transition={titleTransition}>
            <span style={{ zIndex: 10 }}>Odpocznij w </span>
          </motion.div>

          <motion.div
            initial='hidden'
            animate='visible'
            variants={titleAnimation2}
            transition={titleTransition2}>
            <span>Bieszczadach</span>
          </motion.div>
        </HeroH1>

        <HeroTextWrap
          initial='hidden'
          animate='visible'
          variants={textAnimation}
          transition={textTransition}>
          <HeroP>
            Miodowa Polana to miejsce, w którym doświadczych bliskiego kontaktu
            z naturą. Obiekt znajduje się w strefie uzdrowiskowej oraz spokojnej
            i cichej okolicy.
          </HeroP>
          <HeroBtnWrap>
            <ButtonAnchor
              href='https://www.booking.com/hotel/pl/miodowa-polana.pl.html'
              primary={1}
              dark={1}
              big='true'>
              Zarezerwuj teraz
            </ButtonAnchor>
          </HeroBtnWrap>
        </HeroTextWrap>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
