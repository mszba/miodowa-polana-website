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
} from '../InfoSection/InfoSectionElements';

const InfoSection2 = () => {
  return (
    <>
      <InfoContainer lightBg={true}>
        <InfoWrapper>
          <InfoRow imgStart={false}>
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
              <DivWrap>
                <Img />
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

export default InfoSection2;
