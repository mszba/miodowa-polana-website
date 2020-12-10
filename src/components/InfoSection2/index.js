import { ButtonAnchor } from '../ButtonElements';

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

import { InfoRow } from './InfoSection2Elements';

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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                  corrupti iusto adipisci error temporibus odit iure maiores,
                  quidem illo repellat praesentium ratione quasi a veritatis
                  aspernatur ipsam natus voluptates necessitatibus?
                </Subtitle>
                <BtnWrap>
                  <ButtonAnchor primary={0} dark={0} big={1}>
                    Zobacz więcej
                  </ButtonAnchor>
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
