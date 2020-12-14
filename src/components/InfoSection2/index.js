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
} from '../InfoSection/InfoSectionElements';

import { InfoRow, OfferList, OfferElement } from './InfoSection2Elements';

import { HexagonContainer } from '../InfoSection/InfoSectionElements';

import '../InfoSection/Hexagon.css';

const InfoSection2 = () => {
  return (
    <>
      <InfoContainer id='offer' lightBg={true}>
        <InfoWrapper>
          <InfoRow className='flex-container'>
            <Column1>
              <TextWrapper>
                <TopLine>Oferta</TopLine>
                <Heading lightText={false}>Oferta miodowej polany</Heading>
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
              </TextWrapper>
            </Column1>
            <Column2>
              <HexagonContainer>
                <HexagonWrap className='hexagon-wrapper'>
                  <Hexagon
                    className='hexagon-element-wrap'
                    style={{ background: '#240D00' }}
                  />
                  <Hexagon
                    className='hexagon-element-wrap'
                    style={{ background: '#FFCA00' }}
                  />
                </HexagonWrap>
                <HexagonWrap className='hexagon-wrapper wrapper2'>
                  <Hexagon
                    className='hexagon-element-wrap'
                    style={{ background: '#FFCA00' }}
                  />
                  <Hexagon
                    className='hexagon-element-wrap'
                    style={{ background: '#240D00' }}
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

export default InfoSection2;
