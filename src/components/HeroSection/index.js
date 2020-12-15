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

const HeroSection = () => {
  return (
    <HeroContainer id='home'>
      <HeroBg>
        <HeroPictureBg src={Background} alt='Widok na góry' />
      </HeroBg>
      <HeroContent>
        {/* <motion.div
          initial='hidden'
          animate='visible'
          variants={{
            hidden: {
              opacity: 0,
              marginLeft: '-50vw',
            },
            visible: {
              opacity: 1,
              marginLeft: '4vw',
              transition: {
                duration: 0.5,
                delay: 0.4,
              },
            },
          }}> */}
        <HeroH1>
          <span>Odpocznij w </span>
          <span>Bieszczadach</span>
        </HeroH1>
        {/* </motion.div> */}
        <HeroTextWrap>
          <HeroP>
            Miodowa Polana to miejsce , w którym doświadczych bliskiego kontaktu
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
