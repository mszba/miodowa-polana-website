import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { ButtonAnchor } from '../ButtonElements';
import { Heading, TopLine } from '../InfoSection/InfoSectionElements';
import {
  PageContainer,
  PageWrapper,
  TextWrapper,
  PageContent,
  PageText,
  PageList,
  PageListTitle,
  PageListElement,
  BtnWrap,
  ArrowBackward,
  ArrowLeft,
} from '../PageElements';

const Attractions = () => {
  const [hover, setHover] = useState(false);
  let history = useHistory();

  const onHover = () => setHover(!hover);

  const handleClick = () => {
    history.push('/');
  };
  return (
    <>
      <PageContainer lightBg={0}>
        <PageWrapper>
          <TextWrapper>
            <TopLine>Atrakcje</TopLine>
            <Heading style={{ textAlign: 'center' }} lightText={1}>
              Dowiedz się więcej co znajdziesz w okolicy
            </Heading>
          </TextWrapper>
          <PageContent>
            <PageText lightText={1}>
              Miodowa Polana położona jest w małej miejscowości Myczków, który
              oddalony jest o 3km od jeziora solińskiego w Polańczyku oraz 5km
              od zapory wodnej w Solinie. Są to świetne miejsca do spędzenia
              czasu zwłaszcza w okresie wakacyjnym. Dostępne są wyznaczone
              kąpieliska oraz plaże, możliwość wypożyczenia sprzętu wodnego, a
              także rejsy statkiem po jeziorze. Jednym z najczęściej
              odwiedzanych przez turystów obiektem jest zapora solińska, po
              której możliwy jest spacer oraz cieszenie się wspaniałymi
              widokami. Istnieje również opcja zwiedzenia jej wnętrza.
            </PageText>
            <PageList lightText={1}>
              <PageListTitle lightText={1}>
                Inne atrakcje w okolicy:
              </PageListTitle>
              <PageListElement>muzeum Bojkowskie - 1km</PageListElement>
              <PageListElement>
                stoki narciarskie (Weremień - 15km, Ustrzyki Dolne - 24km)
              </PageListElement>
              <PageListElement>
                loty widokowe szybowcem z Bezmiechowej - 24km
              </PageListElement>
              <PageListElement>
                przejazd zabytkową Kolejką Leśną ze stacji Majdan koło Cisnej -
                38km
              </PageListElement>
              <PageListElement>
                Bieszczadzkie Drezyny Rowerowe w Uhercach Mineralnych - 16km
              </PageListElement>
              <PageListElement>
                wiejskie zoo dla dzieci i stadnina koni w Berezce - 3km
              </PageListElement>
              <PageListElement>
                basen kryty oraz na zewnątrz w Lesku - 15km
              </PageListElement>
              <PageListElement>
                Muzeum Budownictwa Ludowego (skansen) w Sanoku - 30km
              </PageListElement>
              <PageListElement>
                wędrówki po Połoninach (Wetlina, Ustrzyki Górne) - 40km
              </PageListElement>
              <PageListElement>
                punkt widokowy na Korbani - 16km
              </PageListElement>
            </PageList>
            <BtnWrap>
              <ButtonAnchor
                primary={1}
                dark={1}
                onMouseEnter={onHover}
                onMouseLeave={onHover}
                onClick={handleClick}>
                {hover ? <ArrowBackward /> : <ArrowLeft />} Wróć
              </ButtonAnchor>
            </BtnWrap>
          </PageContent>
        </PageWrapper>
      </PageContainer>
    </>
  );
};

export default Attractions;
