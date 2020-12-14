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

const InfoSection = () => {
  return (
    <>
      <InfoContainer id='attractions' lightBg={false}>
        <InfoWrapper>
          <InfoRow>
            <Column1>
              <TextWrapper>
                <TopLine>Atrakcje</TopLine>
                <Heading lightText={true}>
                  Przeżyjesz tutaj niesamowitą przygodę
                </Heading>
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
                  <ButtonRouter to='/attractions' primary={1} dark={1} big={1}>
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
                    style={{ background: '#FFCA00' }}
                  />

                  <Hexagon
                    className='hexagon-element-wrap'
                    style={{ background: '#F7F8FA' }}
                  />
                </HexagonWrap>
                <HexagonWrap className='hexagon-wrapper wrapper2'>
                  <Hexagon
                    className='hexagon-element-wrap'
                    style={{ background: '#F7F8FA' }}
                  />

                  <Hexagon
                    className='hexagon-element-wrap'
                    style={{ background: '#FFCA00' }}
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
