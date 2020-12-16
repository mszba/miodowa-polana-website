import { useEffect } from 'react';

import { ButtonRouter } from '../ButtonElements';

import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
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
  AttractionsList,
  AttractionsElement,
} from './InfoSectionElements';

import './Hexagon.css';

import { motion } from 'framer-motion';
import {
  titleAnimation,
  titleAnimation2,
  infoTextTransition,
  hexagonAnimation,
} from '../animations/index';

const InfoSection = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      const attractionsContainer = document.getElementById('attractions');
      console.log(scrollY, attractionsContainer.offsetTop - 160);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <InfoContainer id='attractions' lightBg={false}>
        <InfoWrapper>
          <InfoRow>
            <Column1>
              <TextWrapper>
                <TopLine
                  initial='hidden'
                  animate='visible'
                  variants={titleAnimation}
                  transition={infoTextTransition}>
                  Atrakcje
                </TopLine>

                <Heading
                  lightText={true}
                  initial='hidden'
                  animate='visible'
                  variants={titleAnimation2}
                  transition={infoTextTransition}>
                  Przeżyjesz tutaj niesamowitą przygodę
                </Heading>

                <motion.div
                  initial='hidden'
                  animate='visible'
                  variants={titleAnimation2}
                  transition={infoTextTransition}>
                  <Subtitle darkText={false}>
                    W naszej okolicy znajduje się wiele ciekakawych atrakcji dla
                    chcących odpocząć, dzieci jak i również aktywnych fizycznie.
                    Każdy znajdzie coś dla siebie:
                  </Subtitle>
                  <AttractionsList>
                    <AttractionsElement>
                      piesze i rowerowe szlaki turystyczne
                    </AttractionsElement>
                    <AttractionsElement>kąpieliska i baseny</AttractionsElement>
                    <AttractionsElement>
                      wypożyczalnie sprzętu wodnego
                    </AttractionsElement>
                    <AttractionsElement>stadniny koni</AttractionsElement>
                    <AttractionsElement>
                      stoki narciarskie oraz wiele innych
                    </AttractionsElement>
                  </AttractionsList>
                  <BtnWrap>
                    <ButtonRouter
                      to='/attractions'
                      primary={1}
                      dark={1}
                      big={1}>
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
                    style={{ background: '#FFCA00' }}
                    initial='hidden'
                    animate='visible'
                    variants={hexagonAnimation}
                    transition={{
                      duration: 0.8,
                      delay: 0.4,
                    }}
                  />

                  <Hexagon
                    className='hexagon-element-wrap'
                    style={{ background: '#F7F8FA' }}
                    initial='hidden'
                    animate='visible'
                    variants={hexagonAnimation}
                    transition={{
                      duration: 0.8,
                      delay: 0.7,
                    }}
                  />
                </HexagonWrap>
                <HexagonWrap className='hexagon-wrapper wrapper2'>
                  <Hexagon
                    className='hexagon-element-wrap'
                    style={{ background: '#F7F8FA' }}
                    initial='hidden'
                    animate='visible'
                    variants={hexagonAnimation}
                    transition={{
                      duration: 0.8,
                      delay: 0.3,
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
                      delay: 0.6,
                    }}
                  />
                </HexagonWrap>
              </HexagonContainer>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
