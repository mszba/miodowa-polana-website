import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { ButtonAnchor } from '../ButtonElements';
import { Heading, TopLine } from '../InfoSection/InfoSectionElements';
import { NavPhoneLink, PhoneIcon } from '../Navbar/NavbarElements';
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

import {
  PageContentElement,
  PageContentText,
  PageContentMainOffers,
  PageContentOffersWrap,
  PageContentOfferElement,
  ParkingIcon,
  WifiIcon,
  FamilyIcon,
} from './OfferElements';

const Offer = () => {
  const [hover, setHover] = useState(false);
  let history = useHistory();

  const onHover = () => setHover(!hover);

  const handleClick = () => {
    history.push('/');
  };
  return (
    <>
      <PageContainer lightBg={1}>
        <PageWrapper>
          <TextWrapper style={{ marginBottom: 0 }}>
            <TopLine>Oferta</TopLine>
            <Heading style={{ textAlign: 'center' }} lightText={0}>
              Dowiedz się więcej o ofercie naszego obiektu
            </Heading>
          </TextWrapper>
          <PageContent>
            <PageContentMainOffers>
              <PageContentOffersWrap>
                <PageContentOfferElement>
                  <FamilyIcon /> pokoje rodzinne
                </PageContentOfferElement>
                <PageContentOfferElement>
                  <ParkingIcon /> bezpłatny parking
                </PageContentOfferElement>
                <PageContentOfferElement>
                  <WifiIcon /> bezpłatne WiFi
                </PageContentOfferElement>
              </PageContentOffersWrap>
            </PageContentMainOffers>
            <PageText lightText={0}>
              W naszym obiekcie znajduje się siedem pokoi do państwa dyspozycji
              (1,2,3,4 - osobowe), każdy pokój dysponuje prywatną łazienką,
              telewizorem i bezprzewodowym internetem. Część pokoi posiada
              balkony z widokiem na las, góry (Połoniny) oraz Polańczyk. Dla
              państwa chcących samemu przygotowywać posiłki znajduje się
              ogólnodostępna kuchnia z pełnym wyposażeniem oraz miejscem do
              przechowywania. Dostępny jest duży i bezpieczny parking. Osoby
              ceniące sobie przyrodę odnajdą w pobliżu pensjonatu szlaki piesze
              oraz rowerowe. Możliwość grzybobrania w pobliskim lesie, który
              znajduje się ok. 20m od obiektu. Oferujemy możliwość grillowania
              lub ogniska, boisko do gry w siatkówkę, tenisa oraz miejsce dla
              dzieci. Dodatkowo możliwość prania i prasowania.
            </PageText>
            <PageList lightText={0}>
              <PageListTitle lightText={0}>Inne udogodnienia</PageListTitle>
              <PageListElement>sklep - 800m</PageListElement>
              <PageListElement>Kościół Rzymskokatolicki - 1km</PageListElement>
              <PageListElement>apteki - 2km</PageListElement>
              <PageListElement>restauracje oraz bary - 2km</PageListElement>
              <PageListElement>przystanki autobusowe - 2km</PageListElement>
              <PageListElement>
                port lotniczy Jasionka (Rzeszów) - 100km
              </PageListElement>
            </PageList>
            <PageContentElement>
              <PageListTitle style={{ paddingLeft: '20px' }} lightText={0}>
                Ceny
              </PageListTitle>
              <PageContentText>
                Ceny zależą od rodzaju pokoju oraz długości i terminu pobytu.
                Zaczynają się od 35zł do 60zł.
              </PageContentText>
            </PageContentElement>

            <PageContentElement>
              <PageContentText
                style={{
                  textAlign: 'center',
                  fontSize: '14px',
                  fontWeight: 'bold',
                }}>
                Więcej informacji pod numerem telefonu.
              </PageContentText>
              <NavPhoneLink
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  color: ' #240d00',
                  fontWeight: 'bold',
                }}
                href='tel:604 208 541'>
                <PhoneIcon style={{ color: '#240d00' }} />
                &nbsp; 604 208 541
              </NavPhoneLink>
            </PageContentElement>

            <BtnWrap>
              <ButtonAnchor
                primary={0}
                dark={0}
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

export default Offer;
