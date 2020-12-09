import { ButtonAnchor } from '../ButtonElements';

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
  DivWrap,
  Img,
} from './InfoSectionElements';

const InfoSection = () => {
  return (
    <>
      <InfoContainer id='attractions' lightBg={false}>
        <InfoWrapper>
          <InfoRow imgStart={true}>
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
                  <ButtonAnchor primary={1} dark={1} big={1}>
                    Zobacz więcej
                  </ButtonAnchor>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <DivWrap>
                <Img />
                <Img />
                <Img />
              </DivWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
