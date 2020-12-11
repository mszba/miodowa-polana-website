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
                  Na miodowej odpoczniesz tu tego
                </Heading>
                <Subtitle darkText={false}>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos,
                  explicabo eius ducimus reprehenderit molestias sapiente porro
                  enim earum voluptate quia magnam quas, totam dolorum illum
                  voluptatibus unde corporis asperiores ea!
                </Subtitle>
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
