import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

import { ButtonRouter } from '../ButtonElements';

import {
  InfoContainer,
  InfoWrapper,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  HexagonWrap,
  Hexagon,
  HexagonContainer,
} from '../InfoSection/InfoSectionElements';

import { InfoRow, OfferList, OfferElement } from './InfoSection2Elements';

import {
  titleAnimation,
  titleAnimation2,
  infoTextTransition,
  hexagonAnimation,
} from '../animations/index';

import '../InfoSection/Hexagon.css';

const InfoSection2 = () => {
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const offerContainer = document.getElementById('offer');

      if (scrollY >= offerContainer.offsetTop - 500) {
        setShouldAnimate(true);
        console.log(scrollY, offerContainer.offsetTop);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
      <InfoContainer id='offer' lightBg={true}>
        <InfoWrapper>
          {shouldAnimate ? (
            <InfoRow className='flex-container'>
              <Column1>
                <TextWrapper>
                  <TopLine
                    initial='hidden'
                    animate='visible'
                    variants={titleAnimation}
                    transition={infoTextTransition}>
                    Oferta
                  </TopLine>

                  <Heading
                    lightText={false}
                    initial='hidden'
                    animate='visible'
                    variants={titleAnimation2}
                    transition={infoTextTransition}>
                    Oferta miodowej polany
                  </Heading>

                  <motion.div
                    initial='hidden'
                    animate='visible'
                    variants={titleAnimation2}
                    transition={infoTextTransition}>
                    <Subtitle darkText={true}>
                      Na terenie naszego obiektu znajduje się wiele udogodnień,
                      które umilą pańswu pobyt w naszym pensjonacie:
                    </Subtitle>
                    <OfferList>
                      <OfferElement>pokoje z łazienkami</OfferElement>
                      <OfferElement>ogólnodostępna kuchnia</OfferElement>
                      <OfferElement>duży parking</OfferElement>
                      <OfferElement>darmowy internet</OfferElement>
                      <OfferElement>miejsce na ognisko/grilla</OfferElement>
                      <OfferElement>
                        miejsce do gry w siatkówkę lub tenisa
                      </OfferElement>
                      <OfferElement>
                        piaskownica z zabawkami dla dzieci
                      </OfferElement>
                    </OfferList>
                    <BtnWrap>
                      <ButtonRouter to='/offer' primary={0} dark={0} big={1}>
                        Zobacz więcej
                      </ButtonRouter>
                    </BtnWrap>
                  </motion.div>
                </TextWrapper>
              </Column1>
              <Column2>
                <HexagonContainer>
                  <HexagonWrap className='hexagon-wrapper'>
                    <Hexagon
                      className='hexagon-element-wrap'
                      style={{ background: '#240D00' }}
                      initial='hidden'
                      animate='visible'
                      variants={hexagonAnimation}
                      transition={{
                        duration: 0.8,
                        delay: 0.7,
                      }}
                    />
                    <Hexagon
                      className='hexagon-element-wrap'
                      style={{ background: '#FFCA00' }}
                      initial='hidden'
                      animate='visible'
                      variants={hexagonAnimation}
                      transition={{
                        duration: 0.8,
                        delay: 0.4,
                      }}
                    />
                  </HexagonWrap>
                  <HexagonWrap className='hexagon-wrapper wrapper2'>
                    <Hexagon
                      className='hexagon-element-wrap'
                      style={{ background: '#FFCA00' }}
                      initial='hidden'
                      animate='visible'
                      variants={hexagonAnimation}
                      transition={{
                        duration: 0.8,
                        delay: 0.6,
                      }}
                    />
                    <Hexagon
                      className='hexagon-element-wrap'
                      style={{ background: '#240D00' }}
                      initial='hidden'
                      animate='visible'
                      variants={hexagonAnimation}
                      transition={{
                        duration: 0.8,
                        delay: 0.3,
                      }}
                    />
                  </HexagonWrap>
                </HexagonContainer>
              </Column2>
            </InfoRow>
          ) : null}
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection2;
